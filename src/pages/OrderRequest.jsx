import React, { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/common/SectionHeader';
import RoseMotif from '../components/common/RoseMotif';
import { PRODUCTS_CATALOG } from '../data/products';
import { useB2BCart } from '../context/B2BCartContext';

/**
 * =============================================================================
 * B2B BULK ORDER REQUEST ENDPOINT CONFIGURATION & SPAM PROTECTION
 * =============================================================================
 * Target: Google Sheets Web App Lead Tracker ("Bulk Order Requests" tab)
 * Environment Variable: VITE_SHEETS_ORDER_ENDPOINT
 *
 * HOW TO REPLACE / CONFIGURE:
 * 1. Open your .env file in the project root:
 *    VITE_SHEETS_ORDER_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 * 2. Or edit the fallback URL string directly below.
 *
 * SPAM PROTECTION: Includes an invisible honeypot field (`faxNumber`).
 * If filled by automated spam bots, submission is silently blocked without error.
 * =============================================================================
 */
export const BULK_ORDER_FORM_ENDPOINT = import.meta.env.VITE_SHEETS_ORDER_ENDPOINT || "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

// Unique product categories derived from PRODUCTS_CATALOG
const CATEGORIES = [
  { id: "biscuits", name: "Biscuits & Crackers" },
  { id: "cookies", name: "Hyderabadi Cookies" },
  { id: "wafers", name: "Wafers & Wafer Rolls" },
  { id: "rusk", name: "Tea Rusk & Fruit Rusk" },
  { id: "papad", name: "Hyderabadi Biryani Papad & Snacks" },
  { id: "corn-popcorn", name: "Corn & Popcorn" },
  { id: "new", name: "Upcoming Duet Series (Teaser)" }
];

export default function OrderRequest() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { cartItems, clearCart } = useB2BCart();

  // Initialize from B2B Cart Context if user pre-selected items on home page
  const [items, setItems] = useState(() => {
    if (cartItems && cartItems.length > 0) {
      return cartItems.map((ci, idx) => ({
        id: idx + 1,
        category: ci.category || 'biscuits',
        productId: ci.productId,
        variant: ci.variant,
        cases: ci.cases || 5
      }));
    }
    return [
      { id: 1, category: "biscuits", productId: "marie-delite", variant: "300g Family Pack", cases: 10 }
    ];
  });

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setItems(
        cartItems.map((ci, idx) => ({
          id: idx + 1,
          category: ci.category || 'biscuits',
          productId: ci.productId,
          variant: ci.variant,
          cases: ci.cases || 5
        }))
      );
    }
  }, [cartItems]);


  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  // Helper to add a new blank product line item
  const addLineItem = () => {
    const newItemId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    setItems([
      ...items,
      { id: newItemId, category: "biscuits", productId: "marie-delite", variant: "300g Family Pack", cases: 5 }
    ]);
  };

  // Helper to remove a product line item
  const removeLineItem = (id) => {
    if (items.length <= 1) return; // Keep at least 1 line
    setItems(items.filter((item) => item.id !== id));
  };

  // Helper to update a specific line item field
  const updateLineItem = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== id) return item;

        const updated = { ...item, [field]: value };

        // If category changed, reset productId and variant to first matching product in category
        if (field === 'category') {
          const catProducts = PRODUCTS_CATALOG.filter((p) => p.category === value);
          if (catProducts.length > 0) {
            updated.productId = catProducts[0].id;
            updated.variant = catProducts[0].variants ? catProducts[0].variants[0].weight : "Standard Pack";
          }
        }

        // If productId changed, set variant to first variant of selected product
        if (field === 'productId') {
          const product = PRODUCTS_CATALOG.find((p) => p.id === value);
          if (product && product.variants && product.variants.length > 0) {
            updated.variant = product.variants[0].weight;
          }
        }

        return updated;
      })
    );
  };

  // Total estimated cases summary
  const totalCases = useMemo(() => {
    return items.reduce((acc, item) => acc + (Number(item.cases) || 0), 0);
  }, [items]);

  const onSubmitOrderRequest = async (formData) => {
    // ANTI-SPAM HONEYPOT CHECK: If invisible honeypot field is filled, silently discard (bot detected)
    if (formData.faxNumber && formData.faxNumber.trim() !== "") {
      console.warn("Spam bot submission blocked via Honeypot field.");
      setFormSubmitted(true);
      reset();
      return;
    }

    // Build human-readable line item bill rows
    const itemRows = items.map((item, idx) => {
      const prod = PRODUCTS_CATALOG.find(p => p.id === item.productId);
      const productName = prod ? prod.name : item.productId;
      return `Line ${idx + 1}: ${productName} [${item.variant}] x ${item.cases} Cases`;
    });

    const billSummaryText = `
=====================================================
VEERAMANI BISCUIT INDUSTRIES PVT. LTD. (ROSE®)
B2B WHOLESALE BULK ORDER QUOTE REQUEST
=====================================================

--- CUSTOMER & FIRM DETAILS ---
Firm / Business Name: ${formData.firmName}
Contact Person: ${formData.contactName}
Phone Number: ${formData.phone}
Work Email: ${formData.email}
GST Number: ${formData.gstNumber || 'Not Provided'}
Delivery City / District: ${formData.deliveryDistrict}
Godown Address: ${formData.address}

-----------------------------------------------------
--- ORDERED PRODUCT LINES ---
${itemRows.map(row => `  • ${row}`).join('\n')}

-----------------------------------------------------
TOTAL ORDER VOLUME: ${totalCases} CASES / CARTONS
SPECIAL INSTRUCTIONS: ${formData.specialInstructions || 'None'}
=====================================================
    `.trim();

    const formattedPayload = {
      formType: "bulk_order_request",
      _subject: `ROSE® Bulk Order Request — ${formData.firmName} (${totalCases} Cases)`,
      firmDetails: formData,
      orderItems: items.map(item => {
        const prod = PRODUCTS_CATALOG.find(p => p.id === item.productId);
        return {
          category: item.category,
          productName: prod ? prod.name : item.productId,
          variant: item.variant,
          casesRequested: item.cases
        };
      }),
      totalCasesRequested: totalCases,
      "Firm Name": formData.firmName,
      "Contact Person": formData.contactName,
      "Phone": formData.phone,
      "Email": formData.email,
      "GST Number": formData.gstNumber || "Not Provided",
      "Delivery City / District": formData.deliveryDistrict,
      "Delivery Address": formData.address,
      "Itemized Order List": itemRows.join(" | "),
      "Total Volume": `${totalCases} Cases`,
      "Special Instructions": formData.specialInstructions || "None",
      "OFFICIAL B2B ORDER INVOICE": billSummaryText
    };

    if (BULK_ORDER_FORM_ENDPOINT) {
      try {
        const isGoogleScript = BULK_ORDER_FORM_ENDPOINT.includes("script.google.com");
        await fetch(BULK_ORDER_FORM_ENDPOINT, {
          method: "POST",
          mode: isGoogleScript ? "no-cors" : "cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(formattedPayload)
        });
      } catch (err) {
        console.error("Bulk Order Submission Error:", err);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    console.log("Submitted B2B Bulk Order Request:", formattedPayload);
    setFormSubmitted(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Place a B2B Bulk Order Request &amp; Quote | ROSE Biscuits (VBIL)</title>
        <meta name="description" content="Submit a B2B bulk order request for ROSE Biscuits, cookies, rusks, and wafers. Volume-based trade pricing and credit terms confirmed within 24-48 hours." />
      </Helmet>

      {/* --- HERO BANNER --- */}
      <section className="bg-gradient-to-b from-maroon-950 via-maroon-900 to-espresso-900 text-cream-100 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-12 -translate-y-12 text-gold-400">
          <RoseMotif size={360} strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider">
              Wholesale &amp; Trade Re-Ordering
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream-100">
              Place a B2B Bulk Order Request
            </h1>

            <p className="text-cream-200 text-base sm:text-lg font-sans leading-relaxed">
              For authorized stockists, retail chains, institutional buyers, and exporters. Select your product SKUs in cases/cartons — pricing and delivery timelines will be confirmed by our regional trade desk.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gold-400 font-semibold">
              <span className="bg-maroon-800/80 px-3 py-1 rounded-lg border border-gold-500/30">
                ✓ No Upfront Online Payment Required
              </span>
              <span className="bg-maroon-800/80 px-3 py-1 rounded-lg border border-gold-500/30">
                ✓ Negotiated Credit &amp; Volume Pricing
              </span>
              <span className="bg-maroon-800/80 px-3 py-1 rounded-lg border border-gold-500/30">
                ✓ Direct Factory Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN FORM SECTION --- */}
      <section className="py-16 bg-cream-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader
            badge="Trade Order Request"
            title="Bulk Order &amp; Quotation Request Form"
            subtitle="Fill in your firm details and add required product lines in cases/cartons. Our sales desk will verify inventory and confirm dispatch timelines."
          />

          <div className="bg-cream-100 border border-cream-300 rounded-3xl p-6 sm:p-10 shadow-warm relative">

            {formSubmitted ? (
              <div className="text-center py-12 space-y-6 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-maroon-800 text-cream-100 flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-3xl font-bold text-espresso-900">
                  Bulk Order Request Submitted!
                </h3>
                <div className="bg-cream-50 border border-cream-300 p-6 rounded-2xl text-left space-y-3 text-xs text-espresso-800">
                  <div className="font-bold text-maroon-900 text-sm border-b border-cream-200 pb-2">
                    Next-Step Confirmation:
                  </div>
                  <p className="leading-relaxed">
                    Your order request has been sent to our sales team. We'll confirm pricing, stock availability, and delivery timeline within <strong>24–48 hours</strong>.
                  </p>
                  <p className="text-espresso-600 italic">
                    Note: B2B trade orders are processed under standard company credit terms or direct bank transfer upon invoice confirmation. No online payment gateway transaction is required at this stage.
                  </p>
                </div>
                <button
                  onClick={() => { setFormSubmitted(false); setItems([{ id: 1, category: "biscuits", productId: "marie-delite", variant: "300g Family Pack", cases: 10 }]); }}
                  className="px-6 py-3 rounded-xl bg-gold-500 text-espresso-900 font-bold text-xs hover:bg-gold-400 transition-colors shadow-sm"
                >
                  Submit Another Bulk Order Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitOrderRequest)} className="space-y-8">
                {/* Anti-Spam Honeypot Field (Hidden from real users, populated by spam bots) */}
                <input 
                  type="text" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  aria-hidden="true" 
                  className="sr-only opacity-0 absolute -z-10 pointer-events-none" 
                  {...register("faxNumber")} 
                />

                {/* --- STEP 1: FIRM & SHIPPING DETAILS --- */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-cream-300 pb-3">
                    <span className="w-6 h-6 rounded-full bg-maroon-800 text-cream-100 text-xs font-bold flex items-center justify-center">1</span>
                    <h3 className="font-serif text-lg font-bold text-espresso-900">
                      Firm &amp; Shipping Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Firm Name */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        Company / Firm Name <span className="text-maroon-800">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sri Balaji FMCG Traders"
                        {...register("firmName", { required: "Please enter your business or firm name." })}
                        className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                          errors.firmName ? 'border-red-500' : 'border-cream-300'
                        }`}
                      />
                      {errors.firmName && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.firmName.message}</p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        Contact Person Name <span className="text-maroon-800">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sri K. Ramesh Rao"
                        {...register("contactName", { required: "Please enter contact person name." })}
                        className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                          errors.contactName ? 'border-red-500' : 'border-cream-300'
                        }`}
                      />
                      {errors.contactName && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.contactName.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        Mobile / Phone Number <span className="text-maroon-800">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98490 12345"
                        {...register("phone", { required: "Please enter contact phone number." })}
                        className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                          errors.phone ? 'border-red-500' : 'border-cream-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        Work Email Address <span className="text-maroon-800">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. orders@balajitraders.com"
                        {...register("email", { 
                          required: "Please enter your work email.",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email format." }
                        })}
                        className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                          errors.email ? 'border-red-500' : 'border-cream-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.email.message}</p>
                      )}
                    </div>

                    {/* GST Number (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        GST Number <span className="text-espresso-400 font-normal">(Optional for Quoting)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 36AAAAA0000A1Z5"
                        {...register("gstNumber")}
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800"
                      />
                    </div>

                    {/* Delivery District / Town */}
                    <div>
                      <label className="block text-xs font-bold text-espresso-900 mb-2">
                        Target Delivery District / City <span className="text-maroon-800">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad / Warangal / Vijayawada"
                        {...register("deliveryDistrict", { required: "Please specify target delivery district." })}
                        className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                          errors.deliveryDistrict ? 'border-red-500' : 'border-cream-300'
                        }`}
                      />
                      {errors.deliveryDistrict && (
                        <p className="text-[11px] text-red-600 mt-1.5">{errors.deliveryDistrict.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Full Godown / Delivery Address <span className="text-maroon-800">*</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Enter street address, godown door number, landmark, and pin code..."
                      {...register("address", { required: "Please enter delivery address." })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-50 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                        errors.address ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.address.message}</p>
                    )}
                  </div>
                </div>

                {/* --- STEP 2: REPEATABLE PRODUCT LINE ITEMS --- */}
                <div className="space-y-4 pt-4 border-t border-cream-300">
                  <div className="flex items-center justify-between border-b border-cream-300 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-maroon-800 text-cream-100 text-xs font-bold flex items-center justify-center">2</span>
                      <h3 className="font-serif text-lg font-bold text-espresso-900">
                        Product Order Lines (Cases / Cartons)
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-maroon-900 bg-maroon-800/10 px-3 py-1 rounded-full border border-maroon-800/20">
                      Total Requested: {totalCases} Cases
                    </span>
                  </div>

                  <div className="space-y-4">
                    {items.map((item, index) => {
                      // Filter products for this line's selected category
                      const matchingProducts = PRODUCTS_CATALOG.filter(p => p.category === item.category);
                      // Currently selected product definition
                      const currentProduct = PRODUCTS_CATALOG.find(p => p.id === item.productId) || matchingProducts[0];

                      return (
                        <div 
                          key={item.id} 
                          className="bg-cream-50 border border-cream-300 rounded-2xl p-4 sm:p-5 relative transition-all"
                        >
                          <div className="flex items-center justify-between mb-3 text-xs font-bold text-espresso-700">
                            <span>Line Item #{index + 1}</span>
                            {items.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeLineItem(item.id)}
                                className="text-red-600 hover:text-red-800 text-xs font-bold transition-colors"
                              >
                                ✕ Remove Line
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                            {/* Category Dropdown */}
                            <div className="sm:col-span-3">
                              <label className="block text-[11px] font-bold text-espresso-800 mb-1">
                                Product Category
                              </label>
                              <select
                                value={item.category}
                                onChange={(e) => updateLineItem(item.id, 'category', e.target.value)}
                                className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                              >
                                {CATEGORIES.map((cat) => (
                                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                              </select>
                            </div>

                            {/* SKU Product Selection */}
                            <div className="sm:col-span-4">
                              <label className="block text-[11px] font-bold text-espresso-800 mb-1">
                                Select SKU Product
                              </label>
                              <select
                                value={item.productId}
                                onChange={(e) => updateLineItem(item.id, 'productId', e.target.value)}
                                className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                              >
                                {matchingProducts.map((prod) => (
                                  <option key={prod.id} value={prod.id}>{prod.name}</option>
                                ))}
                              </select>
                            </div>

                            {/* Variant Packing */}
                            <div className="sm:col-span-3">
                              <label className="block text-[11px] font-bold text-espresso-800 mb-1">
                                Pack Size Variant
                              </label>
                              <select
                                value={item.variant}
                                onChange={(e) => updateLineItem(item.id, 'variant', e.target.value)}
                                className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                              >
                                {currentProduct && currentProduct.variants ? (
                                  currentProduct.variants.map((v) => (
                                    <option key={v.weight} value={v.weight}>{v.weight} ({v.mrp})</option>
                                  ))
                                ) : (
                                  <option value="Standard Pack">Standard Pack</option>
                                )}
                              </select>
                            </div>

                            {/* Quantity in Cases */}
                            <div className="sm:col-span-2">
                              <label className="block text-[11px] font-bold text-espresso-800 mb-1">
                                Qty (Cases)
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="1000"
                                value={item.cases}
                                onChange={(e) => updateLineItem(item.id, 'cases', Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-full px-3 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs font-bold text-espresso-900 text-center focus:outline-none focus:border-maroon-800"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Add Product Line Button */}
                  <button
                    type="button"
                    onClick={addLineItem}
                    className="w-full py-3 rounded-xl bg-cream-50 border-2 border-dashed border-maroon-800/30 text-maroon-800 font-bold text-xs hover:bg-cream-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>+ Add Another Product Line</span>
                  </button>
                </div>

                {/* Additional Special Instructions */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-espresso-900 mb-2">
                    Special Packaging / Transport / Credit Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify preferred transport carrier, target dispatch date, or custom branding request..."
                    {...register("specialInstructions")}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-maroon-800 text-cream-100 font-bold text-sm hover:bg-maroon-900 transition-colors shadow-warm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Bulk Order Request...</span>
                  ) : (
                    <>
                      <span>Submit Bulk Order Quote Request ({totalCases} Cases)</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </section>
    </>
  );
}

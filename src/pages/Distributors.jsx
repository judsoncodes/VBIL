import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/common/SectionHeader';
import RoseMotif from '../components/common/RoseMotif';
import HeritageBadge from '../components/common/HeritageBadge';
import { DISTRIBUTORS_DATA, STATES_LIST } from '../data/distributors';

/**
 * =============================================================================
 * B2B DISTRIBUTOR APPLICATION ENDPOINT CONFIGURATION & SPAM PROTECTION
 * =============================================================================
 * Target: Google Sheets Web App Lead Tracker ("Distributor Applications" tab)
 * Environment Variable: VITE_SHEETS_DISTRIBUTOR_ENDPOINT
 *
 * HOW TO REPLACE / CONFIGURE:
 * 1. Open your .env file in the project root:
 *    VITE_SHEETS_DISTRIBUTOR_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 * 2. Or edit the fallback URL string directly below.
 *
 * SPAM PROTECTION: Includes an invisible honeypot field (`faxNumber`).
 * If filled by automated spam bots, submission is silently blocked without error.
 * =============================================================================
 */
export const DISTRIBUTOR_FORM_ENDPOINT = import.meta.env.VITE_SHEETS_DISTRIBUTOR_ENDPOINT || "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export default function Distributors() {
  const [selectedState, setSelectedState] = useState('All States');
  const [searchQuery, setSearchQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  // Filtered distributor list
  const filteredDistributors = useMemo(() => {
    return DISTRIBUTORS_DATA.filter((dist) => {
      const matchesState = selectedState === 'All States' || dist.state === selectedState;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        dist.firmName.toLowerCase().includes(q) ||
        dist.city.toLowerCase().includes(q) ||
        dist.territory.toLowerCase().includes(q) ||
        dist.contactPerson.toLowerCase().includes(q);

      return matchesState && matchesSearch;
    });
  }, [selectedState, searchQuery]);

  const onSubmitTradeInquiry = async (data) => {
    // ANTI-SPAM HONEYPOT CHECK: If invisible honeypot field is filled, silently discard (bot detected)
    if (data.faxNumber && data.faxNumber.trim() !== "") {
      console.warn("Spam bot submission blocked via Honeypot field.");
      setFormSubmitted(true);
      reset();
      return;
    }

    const payload = {
      formType: "distributor_application",
      _subject: "ROSE Biscuits - New B2B Distributor Application",
      ...data
    };

    if (DISTRIBUTOR_FORM_ENDPOINT) {
      try {
        const isGoogleScript = DISTRIBUTOR_FORM_ENDPOINT.includes("script.google.com");
        await fetch(DISTRIBUTOR_FORM_ENDPOINT, {
          method: "POST",
          mode: isGoogleScript ? "no-cors" : "cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.error("Distributor Application Submission Error:", err);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    setFormSubmitted(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Find Regional Stockists & Distributor Partnership | ROSE Biscuits (VBIL)</title>
        <meta name="description" content="Find authorized regional stockists of ROSE Biscuits or apply to become an authorized FMCG distributor for Veeramani Biscuit Industries Pvt. Ltd. across South India." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-maroon-950 via-maroon-900 to-espresso-900 text-cream-100 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-12 -translate-y-12 text-gold-400">
          <RoseMotif size={360} strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider">
              B2B Trade &amp; Distribution Network
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream-100">
              Partner with South India's Fastest-Growing Biscuit Brand.
            </h1>

            <p className="text-cream-200 text-base sm:text-lg font-sans leading-relaxed">
              Find authorized regional stockists or join our retail distribution network across Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Karnataka, and Kerala.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gold-400 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span>20+ Global Export Gateways</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>35+ Years Oven Craftsmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>Hygienic Baking &amp; Quality Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: REGIONAL DISTRIBUTOR LOOKUP ENGINE --- */}
      <section className="py-16 bg-cream-50 relative border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeader 
            badge="Stockist Finder"
            title="Find Your Nearest Regional Stockist"
            subtitle="Search by state or city to connect with authorized wholesale distributors carrying ROSE biscuits, cookies, wafers, and papad."
          />

          {/* Controls Bar */}
          <div className="bg-cream-100 p-6 rounded-2xl border border-cream-300 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* State Filter Buttons / Dropdown */}
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              {STATES_LIST.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedState === state
                      ? 'bg-maroon-800 text-cream-100 shadow-sm'
                      : 'bg-cream-50 text-espresso-800 border border-cream-300 hover:bg-cream-200'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            {/* Instant Search Input */}
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                placeholder="Search city, district, or firm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs text-espresso-800 placeholder-espresso-400 focus:outline-none focus:border-maroon-800"
              />
              <svg 
                className="w-4 h-4 text-espresso-400 absolute left-3 top-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 text-xs text-espresso-600">
            <div>
              Showing <span className="font-bold text-maroon-900">{filteredDistributors.length}</span> authorized stockist(s) for <span className="font-bold text-maroon-900">{selectedState}</span>
            </div>
            {(selectedState !== 'All States' || searchQuery) && (
              <button
                onClick={() => { setSelectedState('All States'); setSearchQuery(''); }}
                className="text-maroon-800 hover:underline font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Distributor Cards Grid */}
          {filteredDistributors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDistributors.map((dist) => (
                <div 
                  key={dist.id} 
                  className="bg-cream-100 border border-cream-300 rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-maroon-800 bg-maroon-800/10 border border-maroon-800/20 px-2.5 py-1 rounded-md">
                        {dist.type}
                      </span>
                      <span className="text-xs font-bold text-espresso-600">{dist.city}</span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-espresso-900 leading-snug">
                        {dist.firmName}
                      </h3>
                      <p className="text-xs font-bold text-gold-600 mt-0.5">{dist.contactPerson}</p>
                    </div>

                    <div className="text-xs space-y-1.5 text-espresso-700 font-sans border-t border-b border-cream-200 py-3">
                      <div>
                        <span className="font-bold text-espresso-900 block">Territory Coverage:</span>
                        <span className="text-espresso-600">{dist.territory}</span>
                      </div>
                      <div className="pt-1">
                        <span className="font-bold text-espresso-900 block">Address:</span>
                        <span className="text-espresso-600">{dist.address}</span>
                      </div>
                    </div>

                    {/* Product Lines Handled */}
                    <div className="flex flex-wrap gap-1.5">
                      {dist.categoriesHandled.map((cat) => (
                        <span 
                          key={cat} 
                          className="text-[10px] font-semibold bg-cream-200 text-espresso-800 px-2 py-0.5 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Action */}
                  <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${dist.phone.replace(/\s+/g, '')}`}
                      className="px-3.5 py-2 rounded-xl bg-maroon-800 text-cream-100 font-bold text-xs hover:bg-maroon-900 transition-colors shadow-sm inline-flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.1 1.1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {dist.phone}</span>
                    </a>

                    <a
                      href={`mailto:${dist.email}?subject=Trade Inquiry via ROSE Website`}
                      className="p-2 rounded-xl text-maroon-800 hover:bg-maroon-800/10 transition-colors"
                      title="Send Email"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream-100 rounded-2xl p-12 text-center border border-cream-300 max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-maroon-800/10 text-maroon-800 flex items-center justify-center mx-auto text-xl font-bold">
                ?
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso-900">
                No Stockist Listed for this Specific Search
              </h3>
              <p className="text-xs text-espresso-600 leading-relaxed font-sans">
                We are rapidly expanding our distributor network across South India. If your area is unrepresented, apply directly below to become our authorized distributor for your district.
              </p>
              <a 
                href="#b2b-form"
                className="inline-block px-5 py-2.5 rounded-xl bg-maroon-800 text-cream-100 font-bold text-xs hover:bg-maroon-900 transition-colors shadow-sm"
              >
                Apply for New Distributorship Below ↓
              </a>
            </div>
          )}

        </div>
      </section>

      {/* --- SECTION 2: DEDICATED B2B DISTRIBUTOR APPLICATION FUNNEL --- */}
      <section id="b2b-form" className="py-20 bg-cream-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="B2B Trade Portal"
            title="Apply for Authorized Distributorship"
            subtitle="Are you an experienced FMCG stockist or wholesale distributor? Join the ROSE brand family and partner directly with our Turkayamjal manufacturing facility."
          />

          <div className="bg-cream-50 border border-cream-300 rounded-3xl p-8 sm:p-12 shadow-warm relative">

            {formSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-maroon-800 text-cream-100 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-espresso-900">
                  Distributor Application Received!
                </h3>
                <p className="text-sm text-espresso-700 max-w-md mx-auto leading-relaxed">
                  Thank you for your business interest in ROSE® Biscuits. Our Sales Director &amp; Regional Trade Manager will review your trade profile and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 text-espresso-900 font-bold text-xs hover:bg-gold-400 transition-colors shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmitTradeInquiry)} className="space-y-6">
                {/* Anti-Spam Honeypot Field (Hidden from real users, populated by spam bots) */}
                <input 
                  type="text" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  aria-hidden="true" 
                  className="sr-only opacity-0 absolute -z-10 pointer-events-none" 
                  {...register("faxNumber")} 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Business / Firm Name */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Firm / Business Name <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sri Venkateswara Agencies"
                      {...register("firmName", { 
                        required: "Please enter your business or firm name so we know your trade entity." 
                      })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-100 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                        errors.firmName ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.firmName && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.firmName.message}</p>
                    )}
                  </div>

                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Contact Person Name <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sri R. Venkat Rao"
                      {...register("contactName", { 
                        required: "Please tell us your name so our regional trade manager knows who to address." 
                      })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-100 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                        errors.contactName ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.contactName && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.contactName.message}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Work Email Address <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. trade@venkateswaraagencies.com"
                      {...register("email", { 
                        required: "Enter your work email address so we can send trade margin sheets and product catalogs.",
                        pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address format." }
                      })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-100 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                        errors.email ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Mobile Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Mobile / Phone Number <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98490 12345"
                      {...register("phone", { 
                        required: "Please share your mobile number so our sales director can call you back directly." 
                      })}
                      className={`w-full px-4 py-3 rounded-xl bg-cream-100 border text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800 ${
                        errors.phone ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1.5">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Target State */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Target State <span className="text-maroon-800">*</span>
                    </label>
                    <select
                      {...register("state", { required: "Please select the target state for distribution." })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                    >
                      <option value="Telangana">Telangana</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Other Export Market">Other / Export Market</option>
                    </select>
                  </div>

                  {/* Target District / City */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Target District / City <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nizamabad / Nalgonda"
                      {...register("district", { required: "Please specify your target city or district territory." })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                    />
                  </div>

                  {/* Years in FMCG Distribution */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Years in FMCG Trade
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                    >
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years (Established Stockist)</option>
                      <option value="New Business Venture">New Business Venture</option>
                    </select>
                  </div>

                  {/* Warehouse Storage Capacity */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-900 mb-2">
                      Godown / Warehouse Capacity
                    </label>
                    <select
                      {...register("storageCapacity")}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:border-maroon-800"
                    >
                      <option value="500 - 1,000 sq ft">500 - 1,000 sq ft</option>
                      <option value="1,000 - 2,500 sq ft">1,000 - 2,500 sq ft</option>
                      <option value="2,500+ sq ft">2,500+ sq ft (Super Stockist Hub)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Trade Notes */}
                <div>
                  <label className="block text-xs font-bold text-espresso-900 mb-2">
                    Current Brands Handled &amp; Additional Trade Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share brief details about your retail reach, transport vehicles, or current brand distribution portfolio..."
                    {...register("notes")}
                    className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-maroon-800"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-maroon-800 text-cream-100 font-bold text-sm hover:bg-maroon-900 transition-colors shadow-warm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Trade Distributorship Application</span>
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

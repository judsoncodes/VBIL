import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS_CATALOG } from '../../data/products';
import ImagePlaceholder from '../common/ImagePlaceholder';
import SectionHeader from '../common/SectionHeader';
import { useB2BCart } from '../../context/B2BCartContext';

// Helper to determine exact units per case indicator for B2B wholesale
const getCasePackingIndicator = (product, selectedVariant) => {
  const weightStr = selectedVariant?.weight || '';
  if (weightStr.includes('Family Pack') || weightStr.includes('400g') || weightStr.includes('300g')) {
    return '1 Case = 24 Packs';
  } else if (weightStr.includes('Tin')) {
    return '1 Case = 12 Metal Tins';
  } else if (weightStr.includes('Jar')) {
    return '1 Case = 24 Jars';
  } else if (weightStr.includes('Box') || weightStr.includes('250g') || weightStr.includes('200g')) {
    return '1 Case = 36 Boxes';
  } else if (weightStr.includes('100g') || weightStr.includes('120g') || weightStr.includes('150g')) {
    return '1 Case = 48 Packs';
  } else if (weightStr.includes('Pocket') || weightStr.includes('5') || weightStr.includes('10')) {
    return '1 Case = 120 Packs';
  }
  return '1 Case = 48 Units';
};

const SHOWCASE_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'biscuits', name: 'Tea Biscuits' },
  { id: 'cookies', name: 'Hyderabadi Cookies' },
  { id: 'wafers', name: 'Wafer Rolls & Wafers' },
  { id: 'rusk', name: 'Crisp Rusk' },
  { id: 'papad', name: 'Papad & Snacks' }
];

export default function ScrollableFoodShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);
  const { addToCart, cartItems, updateCases } = useB2BCart();

  // Selected variant state per product ID: { [productId]: variantIndex }
  const [selectedVariants, setSelectedVariants] = useState({});
  // Selected cases state per product ID: { [productId]: casesCount }
  const [selectedCases, setSelectedCases] = useState({});

  // Filter showcase products
  const displayProducts = PRODUCTS_CATALOG.filter(p => {
    if (p.category === 'new') return false; // Exclude teaser items without variants
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleVariantSelect = (productId, variantIdx) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: variantIdx }));
  };

  const handleCasesChange = (productId, delta) => {
    setSelectedCases(prev => {
      const current = prev[productId] || 5;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  return (
    <section id="b2b-food-showcase" className="py-20 bg-cream-100 relative overflow-hidden">
      {/* Decorative Top/Bottom Subtle Gradient Borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeader
            badge="Interactive Food Carousel"
            title="Explore ROSE® Product Catalog &amp; Bulk Quote Desk"
            subtitle="Swipe through our bakery items, toggle pack sizes, view case packaging specs, and add cases directly to your B2B inquiry quote."
            align="left"
          />

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-xl bg-cream-50 border border-maroon-800/15 text-espresso-800 hover:bg-maroon-800 hover:text-gold-400 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-xl bg-cream-50 border border-maroon-800/15 text-espresso-800 hover:bg-maroon-800 hover:text-gold-400 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {SHOWCASE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-maroon-800 text-gold-400 border-gold-500/40 shadow-sm scale-105'
                  : 'bg-cream-50 text-espresso-800 border-maroon-800/10 hover:bg-cream-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          <AnimatePresence mode="popLayout">
            {displayProducts.map((product) => {
              const variantIdx = selectedVariants[product.id] || 0;
              const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
              const activeVariant = hasVariants ? product.variants[variantIdx] : null;
              const casesCount = selectedCases[product.id] || 5;

              // Check if item is already added to cart
              const inCartItem = cartItems.find(
                item => item.productId === product.id && item.variant === activeVariant?.weight
              );

              const packingText = getCasePackingIndicator(product, activeVariant);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="snap-start flex-shrink-0 w-[290px] sm:w-[320px] bg-cream-50 border border-maroon-800/15 rounded-2xl p-4 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
                >
                  {/* Top Image Box with Food Backdrop */}
                  <div className="relative mb-3 rounded-xl overflow-hidden bg-cream-200 aspect-[4/3]">
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-maroon-800 text-gold-400 border border-gold-500/30 shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    <ImagePlaceholder
                      aspectRatio="4:3"
                      title={product.name}
                      category={product.categoryName}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-espresso-400 uppercase tracking-wide">
                        {product.categoryName}
                      </span>

                      <h3 className="font-serif font-bold text-base text-espresso-900 line-clamp-1 mt-0.5">
                        {product.name}
                      </h3>

                      <p className="text-xs text-espresso-600 line-clamp-2 mt-1 font-sans leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Pack Size Variants */}
                    {hasVariants && (
                      <div className="mt-3">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-espresso-500 mb-1">
                          Select Pack Weight:
                        </label>
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                          {product.variants.map((v, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleVariantSelect(product.id, idx)}
                              className={`text-[11px] font-bold px-2 py-1 rounded-lg border transition-all whitespace-nowrap ${
                                variantIdx === idx
                                  ? 'bg-gold-500 text-espresso-950 border-gold-600 shadow-xs'
                                  : 'bg-cream-100 text-espresso-700 border-cream-300 hover:bg-cream-200'
                              }`}
                            >
                              {v.weight}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* DIRECTIVE #2: Visual "1 Case = X Units" Indicator */}
                    <div className="mt-3 py-2 px-3 bg-amber-100/60 border border-amber-500/30 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-maroon-900 text-[11px]">
                        <span className="text-sm">📦</span>
                        <span>{packingText}</span>
                      </div>
                      <span className="font-bold text-espresso-800 text-xs">
                        {activeVariant?.mrp}
                      </span>
                    </div>

                    {/* B2B Case Quantity & Add to Quote Action */}
                    <div className="mt-4 pt-3 border-t border-cream-200 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-espresso-700">Inquiry Volume:</span>
                        
                        {/* Case Counter Stepper */}
                        <div className="flex items-center border border-cream-300 rounded-lg overflow-hidden bg-cream-100">
                          <button
                            type="button"
                            onClick={() => handleCasesChange(product.id, -5)}
                            className="px-2.5 py-1 text-espresso-800 font-bold hover:bg-cream-300 text-xs"
                          >
                            -5
                          </button>
                          <span className="px-3 py-1 font-extrabold text-maroon-900 bg-cream-50 text-xs border-x border-cream-300">
                            {inCartItem ? inCartItem.cases : casesCount} Cases
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCasesChange(product.id, 5)}
                            className="px-2.5 py-1 text-espresso-800 font-bold hover:bg-cream-300 text-xs"
                          >
                            +5
                          </button>
                        </div>
                      </div>

                      {/* Add / Update Cart Button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (activeVariant) {
                            addToCart(product, activeVariant.weight, casesCount);
                          }
                        }}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                          inCartItem
                            ? 'bg-emerald-800 text-cream-100 hover:bg-emerald-900 border border-emerald-600'
                            : 'bg-maroon-800 text-gold-400 hover:bg-maroon-900 border border-gold-500/30'
                        }`}
                      >
                        {inCartItem ? (
                          <>
                            <span>✓ {inCartItem.cases} Cases in Quote List</span>
                            <span className="text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded text-gold-400">+ Add More</span>
                          </>
                        ) : (
                          <>
                            <span>+ Add {casesCount} Cases to Bulk Quote</span>
                            <span>→</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

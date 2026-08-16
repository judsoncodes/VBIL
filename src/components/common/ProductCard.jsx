import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

/**
 * Data-driven ProductCard component supporting optional price/weight variants.
 * Gracefully handles products with no pricing (e.g., upcoming "Duet" series) with a "Coming Soon" badge.
 */
export default function ProductCard({ product }) {
  const { id, name, categoryName, badge, description, variants, image } = product;

  const hasVariants = Array.isArray(variants) && variants.length > 0;
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const selectedVariant = hasVariants ? variants[selectedVariantIndex] : null;

  return (
    <div className="group bg-cream-50 rounded-2xl border border-maroon-800/10 p-4 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between h-full relative">
      {/* Product Image Box with strict 4:5 aspect ratio */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        {badge && (
          <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm ${
            badge === "COMING SOON" 
              ? "bg-rosePink-500 text-maroon-900 border border-maroon-800/20" 
              : badge === "Bestseller" || badge === "Heritage Signature"
              ? "bg-maroon-800 text-gold-400"
              : "bg-gold-500 text-espresso-900"
          }`}>
            {badge}
          </span>
        )}

        <ImagePlaceholder 
          aspectRatio="4:5"
          title={name}
          category={categoryName}
          src={image}
          alt={name}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-espresso-400 font-semibold mb-1">
            <span>{categoryName}</span>
            {hasVariants && (
              <span className="text-gold-600 bg-gold-100 px-1.5 py-0.5 rounded text-[10px]">
                {variants.length} Pack Sizes
              </span>
            )}
          </div>

          <h3 className="font-serif font-bold text-lg text-espresso-800 group-hover:text-maroon-800 transition-colors line-clamp-1">
            {name}
          </h3>

          <p className="text-xs text-espresso-600 mt-1.5 line-clamp-2 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* Dynamic Variants OR Coming Soon Teaser */}
        <div className="mt-4 pt-3 border-t border-cream-200">
          {hasVariants ? (
            <div>
              {/* Weight Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {variants.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`text-[11px] font-semibold px-2 py-1 rounded transition-all whitespace-nowrap ${
                      selectedVariantIndex === idx
                        ? 'bg-maroon-800 text-gold-400 shadow-sm'
                        : 'bg-cream-200 text-espresso-700 hover:bg-cream-300'
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>

              {/* Price & Action Row */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="text-[10px] text-espresso-400 block font-medium">MRP (Incl. taxes)</span>
                  <span className="text-base font-bold text-maroon-800 font-serif">
                    {selectedVariant?.mrp}
                  </span>
                </div>

                <Link
                  to={`/contact?product=${encodeURIComponent(name)}&variant=${encodeURIComponent(selectedVariant?.weight)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gold-500 text-espresso-900 hover:bg-gold-400 transition-colors shadow-sm"
                >
                  <span>Inquire</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1 bg-cream-100 px-3 rounded-lg border border-gold-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-maroon-800">
                  Launching Soon
                </span>
              </div>
              <Link
                to={`/contact?product=${encodeURIComponent(name)}&type=preorder`}
                className="text-[11px] font-bold text-maroon-800 underline hover:text-gold-600"
              >
                Pre-order Info
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

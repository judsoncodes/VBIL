import React from 'react';
import RoseMotif from './RoseMotif';

/**
 * ImagePlaceholder component enforcing exact fixed aspect ratios to prevent Layout Shift.
 * @param {string} aspectRatio - "4:5" | "16:9" | "1:1" | "4:3"
 * @param {string} title - Label describing the image content
 * @param {string} category - Optional category tag (e.g. "Biscuits", "Infrastructure")
 * @param {string} src - Optional image URL if real photo exists
 * @param {string} alt - Alt text for image
 * @param {string} className - Additional CSS classes
 */
export default function ImagePlaceholder({ 
  aspectRatio = "4:5", 
  title = "ROSE Product Photography", 
  category = "ROSE Bakery", 
  src = null, 
  alt = "", 
  className = "" 
}) {
  // Map ratio strings to Tailwind utility classes
  const aspectClassMap = {
    "4:5": "aspect-[4/5]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]"
  };

  const aspectClass = aspectClassMap[aspectRatio] || "aspect-[4/5]";

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-cream-200 ${aspectClass} ${className}`}>
        <img 
          src={src} 
          alt={alt || title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300 border border-maroon-800/10 flex flex-col items-center justify-center p-6 text-center select-none shadow-inner ${aspectClass} ${className}`}
      aria-label={`${title} placeholder`}
    >
      {/* Background SVG Watermark reusing RoseMotif */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center text-maroon-800">
        <RoseMotif size={140} strokeWidth={1} />
      </div>


      {/* Decorative Gold Frame */}
      <div className="absolute inset-2 border border-gold-500/20 rounded-lg pointer-events-none"></div>

      {/* Icon & Label */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-maroon-800/10 text-maroon-800 flex items-center justify-center border border-gold-500/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-100 px-2 py-0.5 rounded border border-gold-500/20 mb-1">
            {category}
          </span>
          <h4 className="font-serif font-semibold text-sm text-espresso-800 line-clamp-2 px-2">
            {title}
          </h4>
        </div>

        <span className="text-[11px] text-espresso-400 font-medium italic">
          [Studio Shot Placeholder • {aspectRatio}]
        </span>
      </div>
    </div>
  );
}

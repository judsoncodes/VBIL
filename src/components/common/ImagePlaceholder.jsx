import React, { useState } from 'react';
import RoseMotif from './RoseMotif';

/**
 * ImagePlaceholder component enforcing exact fixed aspect ratios to prevent Layout Shift.
 * Includes shimmer-style skeleton placeholder while images load.
 * 
 * @param {string} aspectRatio - "4:5" | "16:9" | "1:1" | "4:3"
 * @param {string} title - Label describing the image content
 * @param {string} category - Optional category tag
 * @param {string} src - Optional image URL
 * @param {string} alt - Alt text
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
  const [imageLoaded, setImageLoaded] = useState(false);

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
        {/* Shimmer Skeleton layer shown while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton-shimmer z-10"></div>
        )}

        <img 
          src={src} 
          alt={alt || title} 
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-amber-50/95 via-amber-100/80 to-amber-200/70 border border-amber-900/15 flex flex-col items-center justify-center p-6 text-center select-none shadow-inner ${aspectClass} ${className}`}
      aria-label={`${title} placeholder`}
    >
      {/* Warm top-light highlight gradient simulating Studio Food Photography */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/90 via-transparent to-amber-950/20 pointer-events-none"></div>

      {/* Soft Linen / Bakery Surface Texture simulation */}
      <div className="absolute inset-0 bg-rose-pattern opacity-[0.08] pointer-events-none mix-blend-multiply"></div>

      {/* Background SVG Watermark reusing RoseMotif */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center text-maroon-800">
        <RoseMotif size={160} strokeWidth={1} />
      </div>

      {/* Decorative Warm Gold Studio Border */}
      <div className="absolute inset-2.5 border border-amber-600/25 rounded-lg pointer-events-none shadow-sm"></div>

      {/* Food Presentation Card & Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-maroon-900 flex items-center justify-center border border-amber-500/40 shadow-md transform group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-maroon-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-maroon-900 bg-amber-200/90 px-2.5 py-0.5 rounded border border-amber-400/40 mb-1.5 shadow-xs">
            {category}
          </span>
          <h4 className="font-serif font-bold text-sm text-espresso-900 line-clamp-2 px-2 leading-tight drop-shadow-xs">
            {title}
          </h4>
          <span className="text-[10px] text-amber-900/70 font-semibold block mt-1">
            Studio Pack Shot Preview
          </span>
        </div>
      </div>
    </div>
  );
}


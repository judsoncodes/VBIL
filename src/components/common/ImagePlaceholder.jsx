import React, { useState } from 'react';
import RoseMotif from './RoseMotif';

/**
 * High-Tier Factory & Equipment Photography Component.
 * Utilizes actual Veeramani Biscuit Industries factory infrastructure photographs
 * cropped and color-graded to match the warm maroon/gold palette.
 */
const DEFAULT_PHOTO_MAP = [
  { keywords: ['rotary', 'moulding', 'cutting'], src: '/factory/rotary_moulding_line.jpg' },
  { keywords: ['oven', 'baking', 'band'], src: '/factory/continuous_band_oven.jpg' },
  { keywords: ['wrapping', 'packaging', 'flow', 'cartoning'], src: '/factory/flow_wrapping_line.jpg' },
  { keywords: ['lab', 'testing', 'quality', 'qc', 'hygiene'], src: '/factory/rotary_moulding_line.jpg' },
  { keywords: ['factory', 'plant', 'infrastructure', 'turkayamjal'], src: '/factory/continuous_band_oven.jpg' },
  { keywords: ['cookie', 'biscuits', 'baked', 'bakery'], src: '/rose_hero_slide_3.png' },
  { keywords: ['export', 'trade', 'container'], src: '/rose_hero_slide_2.png' },
  { keywords: ['chairman', 'founder', 'jabamany'], src: '/Chairmain.jpg' },
  { keywords: ['md', 'managing director', 'rajiah'], src: '/MD.jpg' }
];

function resolvePhoto(src, title = '', category = '') {
  if (src) return src;
  const searchText = `${title} ${category}`.toLowerCase();
  for (const item of DEFAULT_PHOTO_MAP) {
    if (item.keywords.some(k => searchText.includes(k))) {
      return item.src;
    }
  }
  return '/factory/continuous_band_oven.jpg';
}

export default function ImagePlaceholder({ 
  aspectRatio = "16:9", 
  title = "Turkayamjal Factory Setup", 
  category = "FACTORY SETUP", 
  src = null, 
  alt = "", 
  className = "" 
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectClassMap = {
    "4:5": "aspect-[4/5]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]"
  };

  const aspectClass = aspectClassMap[aspectRatio] || "aspect-[16/9]";
  const resolvedSrc = resolvePhoto(src, title, category);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-espresso-950 border border-gold-500/40 shadow-xl group ${aspectClass} ${className}`}>
      {/* Skeleton loading shimmer */}
      {!imageLoaded && (
        <div className="absolute inset-0 skeleton-shimmer z-10"></div>
      )}

      {/* Real Factory Image with Warm Color-Grade Filter */}
      <img 
        src={resolvedSrc} 
        alt={alt || title} 
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-full object-cover sepia-[0.22] contrast-[1.08] saturate-[1.15] brightness-[0.95] transition-all duration-700 group-hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Warm Maroon Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-maroon-950/25 to-espresso-950/15 pointer-events-none" />

      {/* Corner Overlay Tag Badge (FACTORY SETUP / PASSED QC / etc.) */}
      {category && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg bg-maroon-950/90 backdrop-blur-md text-gold-400 text-[10px] font-extrabold uppercase tracking-widest border border-gold-500/40 shadow-md inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            <span>{category}</span>
          </span>
        </div>
      )}
    </div>
  );
}

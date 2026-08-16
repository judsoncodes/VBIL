import React from 'react';

/**
 * Floating / Embedded "Since 1987" Golden Heritage Seal
 */
export default function HeritageBadge({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-16 h-16 text-[10px]",
    md: "w-24 h-24 text-xs",
    lg: "w-32 h-32 text-sm"
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full bg-maroon-800 border-2 border-gold-500 shadow-warm text-cream-100 flex-col text-center select-none ${sizeMap[size] || sizeMap.md} ${className}`}>
      {/* Outer dashed ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-gold-400/50"></div>
      
      <span className="font-sans uppercase tracking-widest text-[9px] text-gold-400 font-bold leading-none mb-0.5">
        Est.
      </span>
      <span className="font-serif font-extrabold text-gold-500 leading-none text-base">
        1987
      </span>
      <span className="font-sans text-[8px] tracking-wider text-cream-200 mt-0.5">
        ROSE Brand
      </span>
    </div>
  );
}

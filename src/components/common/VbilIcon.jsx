import React from 'react';

/**
 * Official VBIL (Veeramani Biscuit Industries Ltd) Circular Corporate Monogram Emblem.
 * Solid red disc with crisp white calligraphic "VBi/VBIL" script monogram (NO white border).
 */
export default function VbilIcon({ size = 32, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-label="VBIL Corporate Monogram Icon"
    >
      {/* Solid Red Disc - No White Border */}
      <circle cx="50" cy="50" r="48" fill="#F50108" />
      <circle cx="50" cy="50" r="47" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      
      {/* White Script VBi Monogram */}
      {/* Stylized 'V' */}
      <path 
        d="M 22 42 C 26 30, 36 32, 40 45 L 47 68 C 48 70, 52 70, 53 66 L 58 46" 
        stroke="#FFFFFF" 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Stylized 'B' loops */}
      <path 
        d="M 53 38 C 60 30, 72 32, 70 42 C 68 50, 56 50, 54 50 C 66 50, 74 54, 72 65 C 70 72, 58 72, 51 64" 
        stroke="#FFFFFF" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Stylized 'i' stroke & dot */}
      <path 
        d="M 74 48 C 76 56, 75 64, 78 68" 
        stroke="#FFFFFF" 
        strokeWidth="5.5" 
        strokeLinecap="round" 
      />
      <circle cx="75" cy="36" r="4" fill="#FFFFFF" />
    </svg>
  );
}

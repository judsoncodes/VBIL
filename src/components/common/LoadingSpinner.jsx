import React from 'react';
import RoseMotif from './RoseMotif';

/**
 * Reusable Loading Spinner utilizing the single signature Rose Motif.
 */
export default function LoadingSpinner({ size = 48, label = "Loading ROSE Bakery..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-3 text-center">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute w-14 h-14 rounded-full border-2 border-gold-500/30 animate-ping"></div>
        
        {/* Animated Rose Motif */}
        <RoseMotif 
          size={size} 
          className="text-maroon-800 animate-spin" 
          strokeWidth={2}
        />
      </div>

      {label && (
        <span className="text-xs font-bold text-espresso-700 font-serif tracking-wider">
          {label}
        </span>
      )}
    </div>
  );
}

import React from 'react';
import RoseMotif from './RoseMotif';

/**
 * Signature Rose Motif Flourish Divider reusing the single custom rose line-art.
 */
export default function RoseDivider({ className = "", light = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`} aria-hidden="true">
      <div className={`h-px flex-1 max-w-[120px] ${light ? 'bg-gold-500/40' : 'bg-maroon-800/20'}`}></div>
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-gold-400' : 'bg-gold-500'}`}></span>
        <RoseMotif 
          size={24} 
          className={light ? 'text-gold-400' : 'text-maroon-800'} 
          strokeWidth={2}
        />
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-gold-400' : 'bg-gold-500'}`}></span>
      </div>
      <div className={`h-px flex-1 max-w-[120px] ${light ? 'bg-gold-500/40' : 'bg-maroon-800/20'}`}></div>
    </div>
  );
}

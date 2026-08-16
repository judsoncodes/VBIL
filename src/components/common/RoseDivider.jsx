import React from 'react';

/**
 * Signature Rose Motif Flourish Divider for section transitions
 */
export default function RoseDivider({ className = "", light = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`} aria-hidden="true">
      <div className={`h-px flex-1 max-w-[120px] ${light ? 'bg-gold-500/30' : 'bg-maroon-800/20'}`}></div>
      <div className="flex items-center gap-1.5 text-gold-500">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
        <svg className="w-6 h-6 text-maroon-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.2 2 7 4.2 7 7C7 9.5 8.7 11.6 11 12.2V17H9V19H15V17H13V12.2C15.3 11.6 17 9.5 17 7C17 4.2 14.8 2 12 2ZM12 10C10.3 10 9 8.7 9 7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7C15 8.7 13.7 10 12 10Z" />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
      </div>
      <div className={`h-px flex-1 max-w-[120px] ${light ? 'bg-gold-500/30' : 'bg-maroon-800/20'}`}></div>
    </div>
  );
}

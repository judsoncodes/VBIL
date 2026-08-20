import React from 'react';
import SectionHeader from '../common/SectionHeader';
import WorldDistributionMap from './WorldDistributionMap';

export default function ExportMapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 relative overflow-hidden tactile-paper-grain border-t border-b border-gold-500/30">
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            Domestic Leadership &amp; Global Exports
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 leading-tight">
            Strong Indian FMCG Footprint &amp; Global Reach
          </h2>
          <p className="mt-3 text-sm sm:text-base text-cream-200 font-sans leading-relaxed">
            Explore our manufacturing hub in Hyderabad, India and direct container export shipping routes to 20+ nations across the Middle East, Americas, Europe, Asia, and Africa.
          </p>
        </div>

        {/* Real TopoJSON World Distribution Map Component */}
        <WorldDistributionMap />

      </div>
    </section>
  );
}

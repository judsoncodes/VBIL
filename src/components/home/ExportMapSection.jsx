import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { COMPANY_DETAILS } from '../../data/company';

export default function ExportMapSection() {
  return (
    <section className="py-20 bg-maroon-800 text-cream-100 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-maroon-gradient opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider">
              Global Presence
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 leading-tight">
              Exporting Goodness Across 20+ Countries Worldwide
            </h2>

            <p className="text-cream-200 text-sm sm:text-base leading-relaxed font-sans">
              With custom packaging compliance, international nutritional standards, and robust bulk export logistics, ROSE biscuits and papads are trusted by distributors across North America, the Middle East, Africa, and South East Asia.
            </p>

            {/* Key Southern States & Global Badges */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Domestic Leadership (Southern India)
              </h4>
              <div className="flex flex-wrap gap-2">
                {COMPANY_DETAILS.keyStates.map((state) => (
                  <span 
                    key={state}
                    className="px-3 py-1 rounded-lg bg-maroon-900/80 border border-gold-500/30 text-cream-100 text-xs font-semibold"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: World Map / Footprint Card */}
          <div className="lg:col-span-6 bg-maroon-900/90 rounded-3xl p-8 border-2 border-gold-500/30 shadow-2xl relative">
            <div className="text-center space-y-4 mb-8">
              <span className="text-4xl sm:text-6xl font-serif font-extrabold text-gold-500 block">
                20+
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-100">
                International Export Destinations
              </h3>
              <p className="text-xs text-cream-300 max-w-sm mx-auto">
                Tailored private label packaging & international standard container shipping.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center border-t border-maroon-700/60 pt-6">
              <div className="p-3 rounded-xl bg-maroon-800/60">
                <span className="text-gold-400 font-bold text-xs uppercase block">Compliance</span>
                <span className="text-cream-100 text-xs font-semibold">FSSAI & Global Standard</span>
              </div>
              <div className="p-3 rounded-xl bg-maroon-800/60">
                <span className="text-gold-400 font-bold text-xs uppercase block">Packaging</span>
                <span className="text-cream-100 text-xs font-semibold">Moisture-Proof Foil Seals</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

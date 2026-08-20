import React from 'react';
import SectionHeader from '../common/SectionHeader';

// Verified 6 Southern States from company profile
const SOUTHERN_STATES = [
  { name: "Telangana", coverage: "State-wide Stockist & Distribution Network" },
  { name: "Andhra Pradesh", coverage: "Coastal & Rayalaseema Trade Coverage" },
  { name: "Tamil Nadu", coverage: "Regional Distribution Network" },
  { name: "Maharashtra", coverage: "Southern & Western Market Logistics" },
  { name: "Karnataka", coverage: "Metropolitan & Regional Trade Outlets" },
  { name: "Kerala", coverage: "Regional Wholesale Distribution Network" }
];

export default function DistributorProof() {
  return (
    <section className="py-20 bg-cream-100 relative overflow-hidden border-b border-espresso-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Trade Network & Footprint"
          title="Trusted Across South India &amp; International Markets"
          subtitle="Supplying super-stockists, regional trade distributors, and wholesale markets across 6 southern states and 20+ export nations."
        />

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 shadow-warm text-center space-y-2">
            <span className="font-display font-normal text-3xl sm:text-4xl text-maroon-900 block">Widespread</span>
            <h4 className="font-display font-semibold text-lg text-espresso-950">Retail Presence</h4>
            <p className="text-xs text-espresso-600 font-sans leading-relaxed">
              Consistent supply to Kirana stores, bakeries, tea stalls, and supermarkets across South India.
            </p>
          </div>

          <div className="bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 shadow-warm text-center space-y-2">
            <span className="font-display font-normal text-3xl sm:text-4xl text-maroon-900 block">6 Key</span>
            <h4 className="font-display font-semibold text-lg text-espresso-950">Southern States Covered</h4>
            <p className="text-xs text-espresso-600 font-sans leading-relaxed">
              Established distribution in Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Karnataka, and Kerala.
            </p>
          </div>

          <div className="bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 shadow-warm text-center space-y-2">
            <span className="font-display font-normal text-3xl sm:text-4xl text-maroon-900 block">20+</span>
            <h4 className="font-display font-semibold text-lg text-espresso-950">Export Nations</h4>
            <p className="text-xs text-espresso-600 font-sans leading-relaxed">
              Active export cargo shipping to Middle East, North America, SE Asia, Australia, and Africa.
            </p>
          </div>

        </div>

        {/* Regional States Breakdown */}
        <div className="bg-cream-50 border border-espresso-950/10 rounded-3xl p-6 sm:p-10 shadow-warm">
          <div className="flex items-center justify-between border-b border-espresso-950/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-maroon-900 block">
                Regional Footprint
              </span>
              <h3 className="font-display text-2xl font-semibold text-espresso-950">
                Southern State Trade Networks
              </h3>
            </div>
            <span className="text-xs font-bold text-espresso-600 bg-cream-200 px-3 py-1 rounded-full hidden sm:inline-block">
              Daily Factory Dispatch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOUTHERN_STATES.map((state, idx) => (
              <div
                key={idx}
                className="bg-cream-100 border border-espresso-950/10 rounded-xl p-4 flex items-center justify-between hover:bg-cream-200 transition-colors"
              >
                <div>
                  <h4 className="font-display font-bold text-base text-espresso-950">
                    {state.name}
                  </h4>
                  <span className="text-[11px] text-espresso-600 block mt-0.5">
                    {state.coverage}
                  </span>
                </div>
                <span className="w-8 h-8 rounded-full bg-maroon-900/10 text-maroon-900 flex items-center justify-center font-bold text-xs border border-maroon-900/20">
                  ✓
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

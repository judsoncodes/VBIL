import React from 'react';

const TRADE_ADVANTAGES = [
  {
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
      </svg>
    ),
    title: "Direct Factory Wholesale Supply",
    subtitle: "Eliminate Intermediaries",
    description: "Source directly from our automated Hyderabad manufacturing facility with volume pricing and direct factory dispatch."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Strict Quality Control & Standards",
    subtitle: "35+ Years Uncompromising Standards",
    description: "Continuous batch inspections, ingredient verification, and hygienic baking processes ensuring pure taste and quality consistency."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "High-Velocity SKU Turnover",
    subtitle: "Proven Household Demand",
    description: "Diverse SKU formats from single-serve impulse packs to family value boxes engineered for rapid stock rotation."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4" />
      </svg>
    ),
    title: "Global Export Cargo Readiness",
    subtitle: "20+ Nations Active Supply",
    description: "Seaworthy packaging, container loading, customs documentation support, and private label OEM capability."
  }
];

export default function WhyTradePartnersChooseRose() {
  return (
    <section className="py-16 bg-cream-100 border-y border-espresso-950/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-maroon-900 bg-maroon-900/5 border border-maroon-900/15 mb-3">
            Institutional Trust &amp; Reliability
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-espresso-950 tracking-tight">
            Why Trade Partners Choose ROSE®
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans leading-relaxed mt-2">
            Engineered for long-term wholesale partnerships, consistent supply security, and high retail velocity.
          </p>
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRADE_ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-maroon-900/10 border border-maroon-900/20 flex items-center justify-center mb-4">
                  {adv.icon}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-900 block mb-1">
                  {adv.subtitle}
                </span>

                <h3 className="font-display font-semibold text-lg text-espresso-950 mb-2 leading-snug">
                  {adv.title}
                </h3>

                <p className="text-xs text-espresso-700 font-sans leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-espresso-950/10 text-[10px] font-bold text-espresso-500 uppercase tracking-widest">
                ROSE® Trade Standard #0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

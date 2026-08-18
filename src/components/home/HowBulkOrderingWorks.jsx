import React from 'react';
import SectionHeader from '../common/SectionHeader';

const STEPS = [
  {
    step: '01',
    title: 'Select Products & Cases',
    description: 'Browse our product catalog or interactive food showcase and choose case counts for your required SKUs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Review & Submit Quote Request',
    description: 'Verify your selected line items in the B2B Quote Drawer and submit your firm details. No upfront payment required.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'We Confirm Pricing & Dispatch',
    description: 'Our regional trade desk verifies inventory, applies volume pricing, and sends your proforma invoice & delivery timeline.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function HowBulkOrderingWorks() {
  return (
    <section className="py-16 bg-cream-100 relative border-t border-maroon-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Simple B2B Workflow"
          title="How Bulk Ordering Works for Trade Partners"
          subtitle="A transparent 3-step process designed for fast, direct factory fulfillment without hassle."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-10">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0 -translate-y-6 pointer-events-none z-0"></div>

          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="bg-cream-50 border border-maroon-800/15 rounded-2xl p-6 relative z-10 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-maroon-800 text-gold-400 flex items-center justify-center border border-gold-500/30 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="font-serif font-extrabold text-3xl text-gold-500/40">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-espresso-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-200 text-[11px] font-bold text-maroon-800 flex items-center gap-1">
                <span>Step {idx + 1} of 3</span>
                <span>• Trade Simple</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import SectionHeader from '../common/SectionHeader';

const QUALITY_STAGES = [
  {
    step: "01",
    title: "Raw Material Verification",
    description: "Inspection and quality checks of refined wheat flour, pure butter, wholesome ingredients, and spices prior to batch mixing."
  },
  {
    step: "02",
    title: "Automated Continuous Baking",
    description: "Multi-zone temperature controlled continuous band ovens ensuring golden color, crisp texture, and uniform baking."
  },
  {
    step: "03",
    title: "Optical & Weight Inspection",
    description: "Automated weight check and visual inspection systems to maintain precise pack fill and texture standards."
  },
  {
    step: "04",
    title: "Hygienic Barrier Packaging",
    description: "High-speed pouching & sealing with protective moisture barriers to preserve freshness and crisp oven taste."
  }
];

export default function ManufacturingAuthority() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden border-b border-espresso-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Operational Scale & Capacity"
          title="Manufacturing Authority &amp; Production Infrastructure"
          subtitle="Inside our Hyderabad bakery facility (Kammagudem, Turkayamjal), built to deliver consistent large-volume wholesale orders without interruption."
        />

        {/* 1. Manufacturing Scale Overview Banner */}
        <div className="bg-gradient-to-r from-espresso-950 via-maroon-950 to-espresso-950 rounded-3xl p-8 sm:p-12 text-cream-100 shadow-2xl border border-gold-500/30 mb-16 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider">
                Turkayamjal Facility • Hyderabad
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-normal text-cream-50 leading-tight">
                High-Capacity Automated Continuous Baking Lines
              </h3>
              <p className="text-cream-200 text-sm sm:text-base font-sans leading-relaxed">
                Operating continuous band oven lines with automated dough mixing, rotary cutting, multi-zone temperature baking, and protective pouch packaging. Our facility is engineered for high-volume production to satisfy regional wholesale demand and export shipping schedules.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gold-400">
                <span className="bg-maroon-900/80 px-3.5 py-1.5 rounded-lg border border-gold-500/30">
                  ✓ Food Safety &amp; Quality Standards
                </span>
                <span className="bg-maroon-900/80 px-3.5 py-1.5 rounded-lg border border-gold-500/30">
                  ✓ Hygienic Automated Baking
                </span>
                <span className="bg-maroon-900/80 px-3.5 py-1.5 rounded-lg border border-gold-500/30">
                  ✓ Quality Inspected Production
                </span>
              </div>
            </div>

            {/* Right Stat Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-maroon-900/40 p-6 rounded-2xl border border-gold-500/20 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-gold-400 block">Multiple</span>
                <span className="text-xs text-cream-200 font-medium block">Continuous Band Oven Lines</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-gold-400 block">High-Output</span>
                <span className="text-xs text-cream-200 font-medium block">Daily Baking Capability</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-gold-400 block">Fast Turn</span>
                <span className="text-xs text-cream-200 font-medium block">Distributor Dispatch Process</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-gold-400 block">Hygienic</span>
                <span className="text-xs text-cream-200 font-medium block">Automated Pouch Packaging</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. 4-Stage Quality Control & Process Sequence */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-espresso-950">
              4-Stage Quality Control Process
            </h3>
            <p className="text-xs sm:text-sm text-espresso-600 font-sans mt-1">
              Every batch undergoes quality inspection before case sealing and warehouse dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_STAGES.map((qs, idx) => (
              <div
                key={idx}
                className="bg-cream-100 border border-espresso-950/10 rounded-2xl p-6 relative shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-extrabold text-3xl text-maroon-900/30 block mb-2">
                    {qs.step}
                  </span>

                  <h4 className="font-display font-semibold text-lg text-espresso-950 mb-2">
                    {qs.title}
                  </h4>

                  <p className="text-xs text-espresso-700 font-sans leading-relaxed">
                    {qs.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-espresso-950/10 text-[10px] font-bold text-maroon-900 uppercase tracking-widest">
                  Quality Checkpoint {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

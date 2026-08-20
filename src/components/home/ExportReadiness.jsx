import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';

const EXPORT_PILLARS = [
  {
    icon: (
      <svg className="w-6 h-6 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
      </svg>
    ),
    title: "Container Loading & Cargo Logistics",
    description: "Direct factory stuffing of 20ft & 40ft Full Container Loads (FCL) with protective palletization and seaworthy wrapping."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Export Documentation Support",
    description: "Issuance of Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and customs documentation assistance."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Seaworthy Moisture Barrier Packaging",
    description: "Multi-layer laminate foil pouches and heavy-duty corrugated master cartons engineered to withstand oceanic shipping."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "International Quality & Compliance",
    description: "Full alignment with international food safety standards, hygienic baking protocols, and import regulatory requirements."
  }
];

export default function ExportReadiness() {
  return (
    <section className="py-20 bg-cream-100 text-espresso-950 relative overflow-hidden border-b border-espresso-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-maroon-900 bg-maroon-900/5 border border-maroon-900/15 mb-3">
            Global Trade &amp; Container Freight
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-espresso-950 tracking-tight">
            Dedicated Export Infrastructure &amp; Logistics
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans leading-relaxed mt-2">
            Engineered for international food importers, overseas distributors, and private-label buyers across 20+ export nations.
          </p>
        </div>

        {/* 4 Pillars Grid on Cream Surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {EXPORT_PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 sm:p-8 shadow-warm hover:shadow-warm-hover transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-maroon-900/10 border border-maroon-900/20 flex items-center justify-center">
                {p.icon}
              </div>

              <h3 className="font-display font-semibold text-xl text-espresso-950">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-espresso-700 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Export Inquiry Callout in Maroon Banner */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 rounded-3xl p-8 sm:p-10 text-cream-100 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-500/30">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-cream-50">
              Planning an Overseas Container Shipment or Private Label Order?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200 font-sans">
              Our export procurement desk assists with FOB / CIF terms, custom language packaging, and container stuffing.
            </p>
          </div>

          <Link
            to="/contact?type=export"
            className="px-8 py-4 rounded-xl bg-gold-500 text-espresso-950 font-bold text-sm hover:bg-gold-400 transition-all shadow-xl whitespace-nowrap border border-gold-600/40"
          >
            Contact Export Desk →
          </Link>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';
import RoseCTAButton from '../common/RoseCTAButton';

const VOLUME_TIERS = [
  {
    cases: 25,
    label: 'Standard Stockist',
    discountTier: 'Tier 1 Wholesale Savings',
    benefits: ['Direct Factory Fresh Dispatch', 'Standard Trade Payment Terms', 'Regional Sales Representative Support'],
    dispatchTime: '24-48 Hours'
  },
  {
    cases: 100,
    label: 'Regional Distributor',
    discountTier: 'Tier 2 Volume Margin',
    benefits: ['Priority Production Allocation', 'Subsidized Transport Logistics', 'Marketing & POP Banner Kit'],
    dispatchTime: '24-36 Hours'
  },
  {
    cases: 300,
    label: 'Super-Stockist / Hub',
    discountTier: 'Tier 3 Preferred Trade Margin',
    benefits: ['Dedicated Relationship Manager', 'Free Doorstep Freight Logistics', 'Credit Terms (Post Audit Approval)'],
    dispatchTime: 'Direct Factory Slot'
  },
  {
    cases: 1000,
    label: 'Container Export / OEM',
    discountTier: 'Custom Contract & Export Pricing',
    benefits: ['Full Container Load (FCL) Shipping', 'Private Labeling & OEM Options', 'Port FOB / CIF Documentation'],
    dispatchTime: 'Custom Schedule'
  }
];

export default function WholesaleCalculator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const currentTier = VOLUME_TIERS[selectedTierIndex];

  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="B2B Wholesale Value Proposition"
          title="Interactive Trade Volume &amp; Tier Estimator"
          subtitle="Explore wholesale benefits, logistics lead times, and distributor terms based on your estimated monthly order volume."
        />

        <div className="max-w-4xl mx-auto bg-cream-100 border border-cream-300 rounded-3xl p-6 sm:p-10 shadow-warm relative">

          {/* Tier Volume Selector Slider / Tabs */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-espresso-800">
                Select Your Business Order Volume:
              </label>
              <span className="text-sm font-extrabold text-maroon-800 bg-gold-400/30 px-3 py-1 rounded-full border border-gold-500/40">
                {currentTier.label} ({currentTier.cases}+ Cases)
              </span>
            </div>

            {/* Interactive Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {VOLUME_TIERS.map((tier, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedTierIndex(idx)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border text-center ${
                    selectedTierIndex === idx
                      ? 'bg-maroon-800 text-gold-400 border-gold-500/50 shadow-md scale-105'
                      : 'bg-cream-50 text-espresso-800 border-cream-300 hover:bg-cream-200'
                  }`}
                >
                  <span className="block font-serif text-sm">{tier.cases}+ Cases</span>
                  <span className="text-[10px] font-normal block opacity-80 mt-0.5">{tier.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tier Dynamic Results Box */}
          <div className="bg-cream-50 border border-maroon-800/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: General Non-Numeric Margins & Tier Label */}
            <div className="md:col-span-5 space-y-3 border-b md:border-b-0 md:border-r border-cream-200 pb-4 md:pb-0 md:pr-6">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-maroon-800 bg-gold-400/30 px-2.5 py-0.5 rounded border border-gold-500/30">
                {currentTier.discountTier}
              </span>

              <h3 className="font-serif text-2xl font-bold text-espresso-900">
                {currentTier.label} Package
              </h3>

              <div className="space-y-1 pt-1">
                <span className="text-xs text-espresso-500 block">Dispatch Timeline:</span>
                <span className="font-bold text-sm text-maroon-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{currentTier.dispatchTime}</span>
                </span>
              </div>
            </div>

            {/* Right: Benefits List & CTA */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-800">
                Key Trade Partner Advantages:
              </h4>

              <ul className="space-y-2 text-xs text-espresso-700 font-sans">
                {currentTier.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-gold-500 text-espresso-950 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to={`/order-request?volume=${currentTier.cases}&tier=${encodeURIComponent(currentTier.label)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 text-gold-400 font-bold text-xs hover:bg-maroon-900 transition-all shadow-sm border border-gold-500/30"
                >
                  <span>Request Official Quotation for {currentTier.label}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

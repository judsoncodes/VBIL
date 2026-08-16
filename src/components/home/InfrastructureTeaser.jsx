import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { COMPANY_DETAILS } from '../../data/company';

export default function InfrastructureTeaser() {
  return (
    <section className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="State-of-the-Art Facility"
          title="Turkayamjal Manufacturing Infrastructure"
          subtitle="Located in Kammagudem Village, Turkayamjal, R.R. District — built with high-speed automated ovens and hygiene controls."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <ImagePlaceholder
              aspectRatio="16:9"
              title="Modern Automated Biscuit & Wafer Oven Lines"
              category="Turkayamjal Facility"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-espresso-800">
                100+ Tons Daily Baking Capacity
              </h3>
              <p className="text-sm text-espresso-600 leading-relaxed font-sans">
                Our plant integrates high-precision temperature control, automated dough mixing, rotary cutting, rotary moulding, and continuous band oven lines to deliver uniform baking quality across every single batch.
              </p>
            </div>

            <ul className="space-y-3 text-xs font-semibold text-espresso-800">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-maroon-800 text-gold-400 flex items-center justify-center text-[10px]">✓</span>
                <span>Rotary Cutting & Rotary Moulding Automated Lines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-maroon-800 text-gold-400 flex items-center justify-center text-[10px]">✓</span>
                <span>Untouched Packaging Hygiene & Quality Testing Labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-maroon-800 text-gold-400 flex items-center justify-center text-[10px]">✓</span>
                <span>Multi-tier Warehousing for Bulk Container Dispatch</span>
              </li>
            </ul>

            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-800 text-gold-400 font-bold text-xs hover:bg-maroon-900 transition-colors shadow-sm"
            >
              <span>Explore Infrastructure & Factory Details</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

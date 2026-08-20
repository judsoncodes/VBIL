import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { COMPANY_DETAILS } from '../../data/company';
import RoseCTAButton from '../common/RoseCTAButton';

export default function InfrastructureTeaser() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="State-of-the-Art Facility"
          title="Turkayamjal Manufacturing Infrastructure"
          subtitle="Located in Kammagudem Village, Turkayamjal, R.R. District — built with high-speed automated ovens and hygiene controls."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-2xl border border-gold-500/40 shadow-xl bg-espresso-950 aspect-[16/9] group">
              <img 
                src="/HOMEROSE.PNG.png" 
                alt="Turkayamjal Automated Bakery Facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-maroon-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/40 text-gold-400 text-xs font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
                <span>Direct Factory Production Lines • Turkayamjal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-maroon-900/10 text-maroon-900 border border-maroon-900/20 text-xs font-bold uppercase tracking-wider">
                High-Speed Bakery Automation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                100+ Tons Daily Baking Capacity
              </h3>
              <p className="text-sm text-espresso-700 leading-relaxed font-sans">
                Our plant integrates high-precision temperature control, automated dough mixing, rotary cutting, rotary moulding, and continuous band oven lines to deliver uniform baking quality across every single batch.
              </p>
            </div>

            <ul className="space-y-3 text-xs font-bold text-espresso-900">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center text-[10px] shadow-xs">✓</span>
                <span>Rotary Cutting &amp; Rotary Moulding Automated Continuous Lines</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center text-[10px] shadow-xs">✓</span>
                <span>Untouched Packaging Hygiene &amp; In-House Quality Testing Labs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center text-[10px] shadow-xs">✓</span>
                <span>Multi-tier Warehousing for Bulk 40ft Container Dispatch</span>
              </li>
            </ul>

            <RoseCTAButton
              variant="primary"
              showGear={true}
              label="Explore Factory & Infrastructure"
              to="/infrastructure"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

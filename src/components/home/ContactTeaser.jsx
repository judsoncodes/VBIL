import React from 'react';
import { COMPANY_DETAILS } from '../../data/company';
import RoseCTAButton from '../common/RoseCTAButton';

export default function ContactTeaser() {
  return (
    <section className="py-16 bg-gold-500 text-espresso-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-block px-3.5 py-1 rounded-sm border border-maroon-900/30 text-maroon-950 text-xs font-serif font-bold uppercase tracking-widest mb-4">
          Partnership &amp; Bulk Supply
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-espresso-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Partner with South India’s Most Trusted FMCG Bakery Brand
        </h2>

        <p className="mt-4 text-base sm:text-lg text-espresso-800 max-w-xl mx-auto font-sans font-medium">
          We welcome wholesale distributors, export buyers, and retail chains. Reach our sales team directly today.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-7">
          <RoseCTAButton
            variant="ghost"
            label="Become a Regional Distributor"
            to="/distributors"
          />
          <RoseCTAButton
            variant="ghost"
            label="Request Trade Price List"
            to="/contact"
          />
        </div>

      </div>
    </section>
  );
}

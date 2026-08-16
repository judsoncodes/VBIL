import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../../data/company';

export default function ContactTeaser() {
  return (
    <section className="py-16 bg-gold-500 text-espresso-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-block px-3 py-1 rounded-full bg-maroon-800 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
          Partnership & Bulk Supply
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-espresso-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Partner with South India’s Most Trusted FMCG Bakery Brand
        </h2>

        <p className="mt-4 text-base sm:text-lg text-espresso-800 max-w-xl mx-auto font-sans font-medium">
          We welcome wholesale distributors, export buyers, and retail chains. Reach our sales team directly today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-maroon-800 text-gold-400 font-bold text-sm hover:bg-maroon-900 transition-all shadow-xl hover:scale-105 border border-gold-400/30"
          >
            Submit Distributor Inquiry
          </Link>
          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
            className="px-8 py-4 rounded-xl bg-cream-100 text-espresso-900 font-bold text-sm hover:bg-cream-200 transition-all shadow-md flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-maroon-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call: {COMPANY_DETAILS.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

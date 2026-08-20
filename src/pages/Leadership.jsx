import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeritageBadge from '../components/common/HeritageBadge';
import RoseMotif from '../components/common/RoseMotif';
import { COMPANY_DETAILS } from '../data/company';

export default function Leadership() {
  const { md } = COMPANY_DETAILS.leadership;

  return (
    <Layout
      title="Leadership | Managing Director P.J.E. Rajiah | ROSE Biscuits (VBIL)"
      description="Managing Director P.J.E. Rajiah leads Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE), driving quality baking, facility automation, and international exports."
    >
      <section className="py-8 lg:py-0 lg:h-[calc(100vh-85px)] lg:min-h-[560px] lg:max-h-[760px] bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 relative overflow-hidden tactile-paper-grain flex items-center border-b border-gold-500/30">
        {/* Ambient Radial Glow & Rose Motifs */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-gold-400">
          <RoseMotif size={520} strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: MD Photo Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-espresso-950 w-full max-w-sm lg:max-w-md group">
                <img
                  src={md.image || "/MD.jpg"}
                  alt={md.name}
                  className="w-full h-auto object-cover object-top max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 z-10">
                  <HeritageBadge size="md" className="shadow-xl border-2 border-gold-500 bg-maroon-900/95 text-gold-400" />
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Core Info - All in One Screen */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              
              {/* Navigation & Breadcrumb */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 text-xs font-bold transition-all border border-cream-100/20 hover:border-gold-500/50 group cursor-pointer shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-gold-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Go Back</span>
                </button>
                <span className="text-cream-400/40 text-xs">•</span>
                <Link to="/" className="text-xs text-cream-300 hover:text-gold-400 font-semibold transition-colors">
                  Home
                </Link>
                <span className="text-cream-400/40 text-xs">/</span>
                <span className="text-xs text-gold-400 font-bold">Leadership</span>
              </div>

              {/* Eyebrow Chip */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gold-400 bg-maroon-900/80 border border-gold-500/30 shadow-xs">
                <span>MANAGING DIRECTOR</span>
              </div>

              {/* Name & Subtitle */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 tracking-tight leading-tight">
                  {md.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-gold-400 font-sans">
                  Managing Director Since 2009 • Veeramani Biscuit Industries Pvt. Ltd.
                </p>
              </div>

              {/* Natural Bio */}
              <div className="space-y-2.5 text-cream-200 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  P.J.E. Rajiah joined Veeramani Biscuit Industries as Production Manager, working closely alongside founder Sri D.S. Jabamany to build the company's manufacturing capability from the ground up.
                </p>
                <p>
                  Serving as Managing Director since 2009, he has guided the expansion of our Turkayamjal plant near Hyderabad, overseeing modern continuous band ovens, strict food safety controls, and bringing the ROSE brand to households across South India and over 20 export nations.
                </p>
              </div>

              {/* Stat Chips Row */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-maroon-900/80 border border-gold-500/30 text-center">
                  <span className="text-gold-400 font-serif font-bold block text-xs sm:text-sm">Continuous Ovens</span>
                  <span className="text-cream-300 text-[10px] font-sans block mt-0.5">Automated Baking Lines</span>
                </div>
                <div className="p-3 rounded-2xl bg-maroon-900/80 border border-gold-500/30 text-center">
                  <span className="text-gold-400 font-serif font-bold block text-xs sm:text-sm">20+ Nations</span>
                  <span className="text-cream-300 text-[10px] font-sans block mt-0.5">Global Export Reach</span>
                </div>
                <div className="p-3 rounded-2xl bg-maroon-900/80 border border-gold-500/30 text-center">
                  <span className="text-gold-400 font-serif font-bold block text-xs sm:text-sm">50+ SKUs</span>
                  <span className="text-cream-300 text-[10px] font-sans block mt-0.5">Biscuits &amp; Wafers Range</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-gold-500 text-espresso-950 font-bold text-xs hover:bg-gold-400 transition-all shadow-md"
                >
                  Contact Management
                </Link>
                <Link
                  to="/order-request"
                  className="px-6 py-3 rounded-xl bg-maroon-900 text-gold-400 border border-gold-500/40 font-bold text-xs hover:bg-maroon-800 transition-all shadow-sm"
                >
                  Bulk B2B Quote
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ProcessSteps from '../components/common/ProcessSteps';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import RoseMotif from '../components/common/RoseMotif';

export default function Quality() {
  return (
    <Layout
      title="Quality Control & Food Safety | Veeramani Biscuit Industries Pvt. Ltd."
      description="Quality assurance standards, laboratory testing, automated baking, and hygiene controls at Veeramani Biscuit Industries Pvt. Ltd. (ROSE)."
    >
      {/* 1. Hero Section matching Homepage Visual Tier */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 text-center relative overflow-hidden tactile-paper-grain border-b border-gold-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-gold-400">
          <RoseMotif size={480} strokeWidth={1} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Navigation & Breadcrumb Row */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 text-xs font-bold transition-all border border-cream-100/20 hover:border-gold-500/50 group cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4 text-gold-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Go Back</span>
            </button>
            <span className="text-cream-400/40 text-xs">•</span>
            <Link to="/" className="text-xs text-cream-300 hover:text-gold-400 font-semibold transition-colors">
              Home
            </Link>
            <span className="text-cream-400/40 text-xs">/</span>
            <span className="text-xs text-gold-400 font-bold">Quality Control</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-gold-400 bg-maroon-950/80 border border-gold-500/30 shadow-xs mb-4">
            <span>UNCOMPROMISING FOOD SAFETY • FSSAI CERTIFIED</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-cream-100 tracking-tight leading-tight">
            Quality Control &amp; Food Safety
          </h1>

          <p className="mt-4 text-cream-200 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In-house laboratory testing, automated continuous band baking ovens, and nitrogen-sealed foil packaging ensuring purity in every bite.
          </p>
        </div>
      </section>

      {/* 2. Manufacturing Process Sequence */}
      <ProcessSteps />

      {/* 3. Laboratory Testing Protocols */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge="Laboratory Testing Protocols"
            title="Raw Material, In-Process &amp; Final Batch Quality Checks"
            subtitle="Every single batch of ROSE biscuits, wafers, and papads undergoes rigorous sensory, moisture, and micro-biological testing at our Turkayamjal plant labs."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-cream-50 p-6 rounded-3xl border border-espresso-950/10 shadow-warm space-y-4 hover:shadow-xl transition-all group">
              <ImagePlaceholder 
                aspectRatio="16:9" 
                title="Precision Rotary Moulding QC" 
                category="PASSED QC" 
              />
              <div className="space-y-2">
                <h3 className="font-display font-normal text-2xl text-espresso-950 group-hover:text-maroon-900 transition-colors">
                  Rotary Moulding Weight Check
                </h3>
                <p className="text-xs sm:text-sm text-espresso-700 font-sans leading-relaxed">
                  Precision roller dies ensure uniform biscuit dimensions, crisp shape, and exact weight consistency before entering continuous band ovens.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-cream-50 p-6 rounded-3xl border border-espresso-950/10 shadow-warm space-y-4 hover:shadow-xl transition-all group">
              <ImagePlaceholder 
                aspectRatio="16:9" 
                title="Continuous Band Temperature Control" 
                category="PASSED QC" 
              />
              <div className="space-y-2">
                <h3 className="font-display font-normal text-2xl text-espresso-950 group-hover:text-maroon-900 transition-colors">
                  Continuous Oven Moisture Control
                </h3>
                <p className="text-xs sm:text-sm text-espresso-700 font-sans leading-relaxed">
                  Multi-zone gas-fired continuous band ovens maintain optimal bake temperatures (180°C) to guarantee golden color and perfect crunch.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-cream-50 p-6 rounded-3xl border border-espresso-950/10 shadow-warm space-y-4 hover:shadow-xl transition-all group">
              <ImagePlaceholder 
                aspectRatio="16:9" 
                title="Automated Nitrogen Flow Packaging" 
                category="PASSED QC" 
              />
              <div className="space-y-2">
                <h3 className="font-display font-normal text-2xl text-espresso-950 group-hover:text-maroon-900 transition-colors">
                  Hygienic Flow-Wrap Packaging
                </h3>
                <p className="text-xs sm:text-sm text-espresso-700 font-sans leading-relaxed">
                  Nitrogen-flushed metallic foil wrapping preserves crispness and aroma for extended shelf life during domestic distribution and export.
                </p>
              </div>
            </div>

          </div>

          {/* Quality Stats & Certifications Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-maroon-950 text-cream-100 border border-gold-500/30 text-center shadow-2xl">
            <div className="p-2 border-r border-gold-500/20 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-gold-400">100%</span>
              <span className="text-xs font-bold text-cream-200 uppercase tracking-wider block mt-1">FSSAI Certified</span>
            </div>

            <div className="p-2 border-r border-gold-500/20 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-gold-400">180°C</span>
              <span className="text-xs font-bold text-cream-200 uppercase tracking-wider block mt-1">Controlled Oven Bake</span>
            </div>

            <div className="p-2 border-r border-gold-500/20 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-gold-400">0%</span>
              <span className="text-xs font-bold text-cream-200 uppercase tracking-wider block mt-1">Hand Contact Packaging</span>
            </div>

            <div className="p-2">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-gold-400">20+</span>
              <span className="text-xs font-bold text-cream-200 uppercase tracking-wider block mt-1">Export Nations Approved</span>
            </div>
          </div>

          {/* Trade Partnership Callout */}
          <div className="p-8 rounded-3xl bg-cream-50 border border-espresso-950/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm">
            <div className="text-left space-y-1">
              <h3 className="font-serif font-bold text-xl text-espresso-950">
                Request Certified Product Samples &amp; Quality Specifications
              </h3>
              <p className="text-xs text-espresso-700 font-sans">
                Our QA laboratory provides batch certificates of analysis for wholesale stockists and export containers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/order-request"
                className="px-6 py-3 rounded-xl bg-maroon-900 text-gold-400 font-bold text-xs hover:bg-maroon-950 transition-all shadow-md"
              >
                Request B2B Quote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-cream-200 text-espresso-950 border border-espresso-950/20 font-bold text-xs hover:bg-cream-300 transition-all shadow-sm"
              >
                Contact Quality Desk
              </Link>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

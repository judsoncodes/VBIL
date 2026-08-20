import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Microscope, PackageCheck } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import HeritageBadge from '../components/common/HeritageBadge';
import RoseMotif from '../components/common/RoseMotif';
import { COMPANY_DETAILS } from '../data/company';

export default function About() {
  const { chairman, md } = COMPANY_DETAILS.leadership;

  return (
    <Layout
      title="About Us | Veeramani Biscuit Industries Pvt. Ltd. (ROSE)"
      description="Learn about Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE), founded in 1987 in Hyderabad by Founder Sri D.S. Jabamany and Managing Director P.J.E. Rajiah."
    >
      {/* 1. Rich Textured Hero Band */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 text-center relative overflow-hidden tactile-paper-grain border-b border-gold-500/30">
        
        {/* Soft Radial Ambient Glow & Rose Watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-gold-400">
          <RoseMotif size={480} strokeWidth={1} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Refined Navigation & Breadcrumb Row */}
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
            <span className="text-xs text-gold-400 font-bold">About VBIL</span>
          </div>

          {/* Restyled Small-Caps Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-gold-400 bg-maroon-950/80 border border-gold-500/30 shadow-xs mb-4">
            <span>ESTD. 1987 • COMPANY OVERVIEW &amp; STORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-cream-100 tracking-tight leading-tight">
            35+ Years of Bakery Excellence
          </h1>

          <p className="mt-4 text-cream-200 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From humble beginnings on the outskirts of Hyderabad to an international FMCG manufacturer exporting to 20+ countries.
          </p>
        </div>
      </section>

      {/* 2. Editorial Story & Real Photography Section */}
      <section className="py-20 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-maroon-900 bg-maroon-900/10 px-3 py-1 rounded-full border border-maroon-900/20 inline-block">
                Our Heritage &amp; Roots
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-espresso-950 leading-tight">
                The ROSE Brand Story
              </h2>

              <p className="text-base text-espresso-700 leading-relaxed font-sans font-medium">
                Founded in 1987, Veeramani Biscuit Industries Pvt. Ltd. (formerly VBIPL/VBIL) started with a simple commitment: providing wholesome, delicious, and affordable biscuits to households across Southern India.
              </p>

              <p className="text-base text-espresso-700 leading-relaxed font-sans">
                Our founder, <strong className="text-maroon-900">Sri D.S. Jabamany</strong>, started his journey as a hard-working street vendor and hand-packer from Oyangudi village in Thoothukudi District, Tamil Nadu. Through relentless dedication and insistence on pure quality, he built our Turkayamjal manufacturing facility on the outskirts of Hyderabad.
              </p>

              <p className="text-base text-espresso-700 leading-relaxed font-sans">
                Today, under the leadership of Managing Director <strong className="text-maroon-900">P.J.E. Rajiah</strong> and our flagship brand <strong className="text-maroon-900">"ROSE"</strong>, we bake over 50+ product varieties including Marie, Osmania cookies, cream wafers, rusks, and spicy papads across automated continuous band oven lines.
              </p>
            </div>

            {/* Real Studio / Factory Photography Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-espresso-950 group">
                <img
                  src="/rose_hero_slide_1.png"
                  alt="ROSE Signature Bakery Products & Manufacturing Facility"
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Vignette & Overlaid Heritage Seal */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 z-10">
                  <HeritageBadge size="md" className="shadow-xl border-2 border-gold-500 bg-maroon-900/95 text-gold-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 bg-espresso-950/90 backdrop-blur-md rounded-2xl border border-gold-500/30 text-cream-100 shadow-lg">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 block">
                    Turkayamjal Plant • Hyderabad
                  </span>
                  <h3 className="font-serif font-bold text-sm text-cream-100 block mt-0.5">
                    Automated Baking Lines &amp; Quality QA Center
                  </h3>
                </div>
              </div>
            </div>

          </div>

          {/* Key Stat Callout Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-cream-50 border border-espresso-950/10 shadow-warm text-center">
            <div className="p-2 border-r border-espresso-950/10 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-maroon-900">35+</span>
              <span className="text-xs font-bold text-espresso-700 uppercase tracking-wider block mt-1">Years Heritage</span>
            </div>

            <div className="p-2 border-r border-espresso-950/10 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-maroon-900">50+</span>
              <span className="text-xs font-bold text-espresso-700 uppercase tracking-wider block mt-1">Product Varieties</span>
            </div>

            <div className="p-2 border-r border-espresso-950/10 last:border-r-0">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-maroon-900">20+</span>
              <span className="text-xs font-bold text-espresso-700 uppercase tracking-wider block mt-1">Export Nations</span>
            </div>

            <div className="p-2">
              <span className="block font-display font-normal text-3xl sm:text-4xl text-maroon-900">100+</span>
              <span className="text-xs font-bold text-espresso-700 uppercase tracking-wider block mt-1">Tons / Day Capacity</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Leadership Team & Vision Section */}
      <section className="py-20 bg-cream-50 border-t border-espresso-950/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Leadership & Legacy"
            title="Guided by Vision &amp; Operational Excellence"
            subtitle="Meet the leaders who shaped Veeramani Biscuit Industries into a trusted FMCG bakery brand."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Chairman Card */}
            <div className="bg-cream-100 rounded-3xl p-8 border border-espresso-950/10 shadow-warm flex flex-col md:flex-row gap-6 items-center md:items-start group hover:shadow-xl transition-all">
              <div className="w-32 h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-md bg-espresso-950">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 text-center md:text-left flex-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500 text-espresso-950 inline-block shadow-xs">
                  {chairman.title}
                </span>

                <h3 className="font-serif font-bold text-2xl text-espresso-950">
                  {chairman.name}
                </h3>

                <p className="text-xs text-gold-600 font-bold font-sans">
                  {chairman.birthPlace}
                </p>

                <p className="text-xs text-espresso-700 leading-relaxed font-sans pt-1">
                  {chairman.bio}
                </p>
              </div>
            </div>

            {/* MD Card */}
            <div className="bg-cream-100 rounded-3xl p-8 border border-espresso-950/10 shadow-warm flex flex-col md:flex-row gap-6 items-center md:items-start group hover:shadow-xl transition-all">
              <div className="w-32 h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-md bg-espresso-950">
                <img
                  src={md.image}
                  alt={md.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 text-center md:text-left flex-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-maroon-900 text-gold-400 inline-block shadow-xs border border-gold-500/30">
                  {md.title} (MD Since {md.mdSince})
                </span>

                <h3 className="font-serif font-bold text-2xl text-espresso-950">
                  {md.name}
                </h3>

                <p className="text-xs text-gold-600 font-bold font-sans">
                  {md.experience}
                </p>

                <p className="text-xs text-espresso-700 leading-relaxed font-sans pt-1">
                  {md.bio}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Manufacturing Infrastructure & Quality Section */}
      <section className="py-20 bg-maroon-950 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-maroon-gradient opacity-95 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-wider mb-3">
              Turkayamjal Facility
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100">
              State-of-the-Art Baking &amp; Quality Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream-200 font-sans">
              Our automated manufacturing plant combines traditional oven recipes with modern hygienic controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-maroon-900/80 rounded-2xl p-6 border border-gold-500/30 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center font-bold text-xl">
                <Settings className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gold-400">
                Continuous Band Ovens
              </h3>
              <p className="text-xs text-cream-200 leading-relaxed font-sans">
                Automated 180°C continuous band ovens ensure precise temperature baking and uniform crispness across all 100+ tons per day.
              </p>
            </div>

            <div className="bg-maroon-900/80 rounded-2xl p-6 border border-gold-500/30 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center font-bold text-xl">
                <Microscope className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gold-400">
                In-House QA Laboratory
              </h3>
              <p className="text-xs text-cream-200 leading-relaxed font-sans">
                Every batch undergoes rigorous quality testing for moisture levels, sensory taste profile, and microbiological purity before packaging.
              </p>
            </div>

            <div className="bg-maroon-900/80 rounded-2xl p-6 border border-gold-500/30 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center font-bold text-xl">
                <PackageCheck className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gold-400">
                Export-Grade Seals
              </h3>
              <p className="text-xs text-cream-200 leading-relaxed font-sans">
                Nitrogen-flushed, moisture-proof metallic foil wrapping preserves crispness during domestic distribution and long export container transit.
              </p>
            </div>

          </div>

          {/* Trade Partnership Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-espresso-950/90 border border-gold-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <h3 className="font-serif font-bold text-xl text-cream-100">
                Partner with ROSE Biscuits for Wholesale Trade &amp; Exports
              </h3>
              <p className="text-xs text-cream-300 font-sans">
                Supplying super-stockists, regional trade distributors, and international partners across 20+ countries.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/order-request"
                className="px-6 py-3 rounded-xl bg-gold-500 text-espresso-950 font-bold text-xs hover:bg-gold-400 transition-all shadow-md"
              >
                Request B2B Quote
              </Link>
              <Link
                to="/distributors"
                className="px-6 py-3 rounded-xl bg-maroon-900 text-gold-400 border border-gold-500/40 font-bold text-xs hover:bg-maroon-800 transition-all shadow-sm"
              >
                Distributor Inquiry
              </Link>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  );
}

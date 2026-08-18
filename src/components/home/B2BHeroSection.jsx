import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import HeritageBadge from '../common/HeritageBadge';
import ImagePlaceholder from '../common/ImagePlaceholder';
import RoseMotif from '../common/RoseMotif';
import { useB2BCart } from '../../context/B2BCartContext';

export default function B2BHeroSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { totalCases } = useB2BCart();

  // Scroll-driven subtle parallax for photography preview card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "-8%"]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-14 pb-20 md:pt-24 md:pb-32 bg-cream-100 text-espresso-950 overflow-hidden tactile-paper-grain border-b border-espresso-950/10"
    >
      {/* Subtle Background Rose Line Art Watermark — Ultra Restrained 3% Opacity */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-24 opacity-[0.035] pointer-events-none text-maroon-900 hidden lg:block select-none z-0">
        <RoseMotif size={500} strokeWidth={0.6} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left Column: Editorial Headline & Restrained Content */}
          <motion.div
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Restrained Eyebrow Chip */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-maroon-900 bg-maroon-900/5 border border-maroon-900/15">
                <span>Est. 1987 • Direct Factory B2B Supply</span>
              </div>
            </motion.div>

            {/* Editorial Display Headline using Fraunces Display Serif */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight leading-[1.08] text-espresso-950"
            >
              Oven Fresh Bakery Craft &amp; Bulk Direct Supply of{' '}
              <span className="inline-block relative align-baseline mx-1">
                <img 
                  src="/rose_text_logo.png" 
                  alt="ROSE" 
                  className="h-[1.15em] sm:h-[1.25em] w-auto inline-block object-contain translate-y-[20%] drop-shadow-sm"
                />
              </span>{' '}
              Confectionery.
            </motion.h1>

            {/* Quiet, Legible Body Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-espresso-700"
            >
              Supplying super-stockists, regional trade distributors, retail chains, and international exporters from our automated Hyderabad production facility.
            </motion.p>

            {/* Simplified CTA Buttons: ONE Primary + ONE Secondary Text Link */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2"
            >
              <a
                href="#b2b-food-showcase"
                className="px-8 py-4 rounded-xl bg-maroon-900 text-gold-400 font-medium text-sm hover:bg-maroon-950 transition-all shadow-md hover:shadow-lg border border-gold-500/30 flex items-center gap-2.5 group"
              >
                <span>Build Wholesale Quote</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                to="/products"
                className="px-3 py-4 text-espresso-950 font-semibold text-sm hover:text-maroon-900 underline underline-offset-4 decoration-gold-500/60 transition-colors flex items-center gap-1.5"
              >
                <span>Explore 50+ Product SKUs</span>
                {totalCases > 0 && (
                  <span className="bg-maroon-900 text-gold-400 text-[11px] px-2 py-0.5 rounded-full font-bold">
                    {totalCases} Cases
                  </span>
                )}
              </Link>
            </motion.div>

            {/* High-Contrast Editorial Stats Row (Solid Espresso Text on Cream) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-espresso-950/10 max-w-xl mx-auto lg:mx-0"
            >
              <div>
                <span className="block font-display font-normal text-3xl sm:text-4xl text-espresso-950">35+</span>
                <span className="text-xs font-medium text-espresso-600 block mt-0.5">Years Heritage</span>
              </div>

              <div>
                <span className="block font-display font-normal text-3xl sm:text-4xl text-espresso-950">20+</span>
                <span className="text-xs font-medium text-espresso-600 block mt-0.5">Export Nations</span>
              </div>

              <div>
                <span className="block font-display font-normal text-xl sm:text-2xl text-espresso-950 leading-tight">High-Capacity</span>
                <span className="text-xs font-medium text-espresso-600 block mt-0.5">Automated Lines</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Editorial Product Image Placement */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: yParallax }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-espresso-950/10 bg-cream-50 p-2.5"
            >
              <ImagePlaceholder
                aspectRatio="4:5"
                title="ROSE Signature Bakery Range"
                category="Hyderabad Oven Fresh"
              />
            </motion.div>

            {/* Floating Heritage Badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 z-20 hidden sm:block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <HeritageBadge size="md" />
            </motion.div>

            {/* Subtle Decorative Frame */}
            <div className="absolute -inset-3 border border-espresso-950/10 rounded-3xl pointer-events-none translate-x-2 translate-y-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

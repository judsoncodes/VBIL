import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import HeritageBadge from '../common/HeritageBadge';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Scroll-driven parallax for the hero photography card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", shouldReduceMotion ? "0%" : "-12%"]
  );

  // 2. Orchestrated entrance variants (staggered ~150ms delay per child)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 25 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // 3. Stamp-like spring animation for "Since 1987" HeritageBadge
  const stampBadgeVariants = {
    hidden: {
      opacity: 0,
      rotate: shouldReduceMotion ? 0 : -8,
      scale: shouldReduceMotion ? 1 : 0.8
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: shouldReduceMotion 
        ? { duration: 0 } 
        : {
            type: "spring",
            stiffness: 320,
            damping: 16,
            delay: 0.65 // Stamps down after headline/eyebrow sequence
          }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-hero-vignette"
    >
      {/* Background Decorative Rose Pattern */}
      <div className="absolute inset-0 bg-rose-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Orchestrated Staggered Entrance */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Element 1: Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span>Premier South Indian FMCG Bakery Since 1987</span>
              </div>
            </motion.div>

            {/* Element 2: Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-espresso-800 tracking-tight leading-[1.15]"
            >
              Crisp Perfection &amp; Rich Heritage in Every <span className="text-maroon-800 underline decoration-gold-500 underline-offset-8">ROSE</span> Bite.
            </motion.h1>

            {/* Element 3: Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-espresso-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              From our state-of-the-art Hyderabad bakery facility to homes across 20+ countries, Veeramani Biscuit Industries crafts classic Marie, buttery Osmania cookies, wafer rolls, and crisp papad using 35+ years of oven craftsmanship.
            </motion.p>

            {/* Element 4: CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-xl bg-maroon-800 text-gold-400 font-bold text-sm hover:bg-maroon-900 transition-all shadow-warm hover:shadow-warm-hover border border-gold-500/30 flex items-center gap-2 group"
              >
                <span>Explore 50+ Product SKUs</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-gold-500 text-espresso-900 font-bold text-sm hover:bg-gold-400 transition-all shadow-warm flex items-center gap-2"
              >
                <span>Become a Distributor</span>
              </Link>
            </motion.div>

            {/* Element 5: Quick Metrics Bar */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-maroon-800/10 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <span className="block font-serif font-extrabold text-2xl text-maroon-800">35+</span>
                <span className="text-xs text-espresso-600 font-medium">Years Heritage</span>
              </div>
              <div>
                <span className="block font-serif font-extrabold text-2xl text-maroon-800">20+</span>
                <span className="text-xs text-espresso-600 font-medium">Export Nations</span>
              </div>
              <div>
                <span className="block font-serif font-extrabold text-2xl text-maroon-800">6</span>
                <span className="text-xs text-espresso-600 font-medium">Southern States</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Parallax Visual Stack & Stamp-Effect Seal */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: yParallax }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-warm-hover border-4 border-cream-50 bg-cream-50 p-2"
            >
              <ImagePlaceholder
                aspectRatio="16:9"
                title="ROSE Signature Bakery Range"
                category="Hyderabad Oven Fresh"
              />
            </motion.div>

            {/* Floating "Since 1987" Heritage Seal with Stamp Effect */}
            <motion.div 
              className="absolute -bottom-6 -left-6 z-20 hidden sm:block"
              variants={stampBadgeVariants}
              initial="hidden"
              animate="visible"
            >
              <HeritageBadge size="md" />
            </motion.div>

            {/* Decorative Gold Frame Outline */}
            <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-3xl pointer-events-none translate-x-2 translate-y-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

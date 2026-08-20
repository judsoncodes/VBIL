import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import HeritageBadge from '../common/HeritageBadge';
import ImagePlaceholder from '../common/ImagePlaceholder';
import RoseMotif from '../common/RoseMotif';
import { useB2BCart } from '../../context/B2BCartContext';
import RoseCTAButton from '../common/RoseCTAButton';

const HERO_SLIDES = [
  {
    src: '/rose_hero_slide_1.png',
    title: 'ROSE Signature Bakery Range',
    category: 'Hyderabad Oven Fresh',
    badge: '180°C Continuous Band Baked'
  },
  {
    src: '/rose_hero_slide_2.png',
    title: 'Wholesale Trade & Export Range',
    category: 'Direct Factory Supply',
    badge: '20+ Nations Direct Container'
  },
  {
    src: '/rose_hero_slide_3.png',
    title: 'Premium Biscuits & Cookies Selection',
    category: 'Est. 1987 Craftsmanship',
    badge: 'Melt-in-Mouth Hyderabadi Recipe'
  },
  {
    src: '/rose_hero_slide_4.png',
    title: 'Global Export Quality Packaging',
    category: '20+ Export Nations',
    badge: 'Nitrogen Flushed Foil Seals'
  },
  {
    src: '/homepage_hero_clean.png',
    title: 'Automated Factory Bakery Line',
    category: 'Direct Wholesale Supply',
    badge: 'Turkayamjal Facility'
  }
];

export default function B2BHeroSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { totalCases } = useB2BCart();

  // Slide index state for auto-transitioning hero showcase carousel
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // 5 seconds smooth dissolve interval
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  // Scroll-driven subtle parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "-4%"]
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

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream-100 text-espresso-950 overflow-hidden tactile-paper-grain border-b border-espresso-950/10"
    >
      {/* Subtle Background Rose Line Art Watermark — Ultra Restrained 3% Opacity */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-24 opacity-[0.03] pointer-events-none text-maroon-900 hidden lg:block select-none z-0">
        <RoseMotif size={560} strokeWidth={0.6} />
      </div>

      <div className="w-full max-w-[1650px] mx-auto">
        {/* 50/50 Split Screen Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:h-[calc(100vh-85px)] lg:min-h-[560px] lg:max-h-[760px] items-stretch">

          {/* Left Column: Headline, Stacked CTAs & Credibility Metrics */}
          <motion.div
            className="lg:col-span-6 px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-12 xl:py-14 flex flex-col justify-center space-y-6 lg:space-y-7 text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Heritage Seal Label */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-sm border border-gold-500/40 px-3.5 py-1 bg-transparent select-none">
                <span className="font-serif font-bold text-xs uppercase tracking-widest text-maroon-900">
                  Est. 1987
                </span>
                <span className="h-3.5 w-[1px] bg-gold-500/40 mx-2.5 self-center"></span>
                <span className="font-sans font-semibold text-[11px] uppercase tracking-widest text-espresso-800">
                  Direct Factory B2B Supply
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.3rem] font-display font-normal tracking-tight leading-[1.15] text-espresso-950"
            >
              Oven Fresh Bakery Craft &amp; Bulk Direct Supply of{' '}
              <span className="inline-block relative align-baseline mx-1 sm:mx-1.5">
                <img 
                  src="/rose_text_logo.png" 
                  alt="ROSE" 
                  className="h-[1.15em] sm:h-[1.22em] lg:h-[1.25em] w-auto inline-block object-contain translate-y-[10%] drop-shadow-xs hover:scale-[1.03] transition-transform cursor-pointer"
                />
              </span>{' '}
              Confectionery.
            </motion.h1>

            {/* Sub-Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-espresso-700 font-medium"
            >
              Supplying super-stockists, regional trade distributors, retail chains, and international exporters from our automated Hyderabad production facility.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 lg:gap-7 pt-3.5 w-full mx-auto lg:mx-0"
            >
              <RoseCTAButton
                variant="primary"
                showGear={true}
                label="Build Wholesale Quote"
                href="#b2b-food-showcase"
              />

              <RoseCTAButton
                variant="ghost"
                label="Explore 50+ Product SKUs"
                badgeCount={totalCases > 0 ? totalCases : undefined}
                to="/products"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Full-Height 50% Full Bleed Cover (With Silky Left-Edge Transition) */}
          <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[520px] lg:h-full lg:min-h-0 overflow-hidden bg-espresso-950">
            
            {/* Subtle, Narrow Left-Edge Seam Blend (Keeps photo 100% crisp & un-diminished) */}
            <div className="absolute inset-y-0 left-0 w-6 sm:w-8 lg:w-12 bg-gradient-to-r from-cream-100/50 via-cream-100/20 to-transparent z-20 pointer-events-none hidden lg:block" />

            {/* Stacked Continuous Dissolve Carousel Layers filling 100% width and height */}
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <motion.div
                  key={slide.src}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.02
                  }}
                  transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                  className={`absolute inset-0 w-full h-full ${isActive ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}
                >
                  {/* Subtle Blurred Background Fill so non-matching ratios fill seamlessly */}
                  <img
                    src={slide.src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md scale-110 pointer-events-none"
                  />

                  {/* 100% Complete Product Photo Fit with Zero Cropping or Cutoff */}
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="relative z-10 w-full h-full object-contain p-2 sm:p-4 drop-shadow-xl"
                  />

                </motion.div>
              );
            })}

            {/* Top Right Floating Heritage Seal */}
            <div className="absolute top-6 right-6 z-20 hidden sm:block pointer-events-none">
              <HeritageBadge size="sm" className="shadow-2xl border-2 border-gold-500 bg-maroon-900/95 backdrop-blur-md text-gold-400" />
            </div>

            {/* Ultra-Minimalist Clean Slide Indicators (No Glass Box) */}
            {HERO_SLIDES.length > 1 && (
              <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5 pointer-events-auto">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlideIndex === idx
                        ? 'w-6 bg-gold-400 drop-shadow-md'
                        : 'w-2 bg-cream-100/50 hover:bg-cream-100'
                    }`}
                  />
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

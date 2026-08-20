import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import HeritageBadge from '../common/HeritageBadge';
import ImagePlaceholder from '../common/ImagePlaceholder';
import RoseMotif from '../common/RoseMotif';
import { getActiveCampaign } from '../../data/theme';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Get active festive campaign (null if standard brand state)
  const campaign = getActiveCampaign();

  // 2. Scroll-driven parallax for the hero photography card
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "-12%"]
  );

  // 3. Orchestrated entrance variants
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
          delay: 0.65
        }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden ${campaign ? campaign.festiveVignette : 'bg-hero-vignette'
        }`}
    >
      {/* Optional Festive Top Announcement Strip */}
      {campaign && (
        <div className={`w-full py-2 px-4 text-center font-bold text-xs uppercase tracking-widest shadow-md mb-6 ${campaign.accentBgBanner}`}>
          <span>{campaign.name} — Exclusive Corporate &amp; Bulk Gifting Orders Open!</span>
        </div>
      )}

      {/* Background Decorative Rose Pattern */}
      <div className="absolute inset-0 bg-rose-pattern pointer-events-none opacity-40"></div>

      {/* Subtle Ambient Line-Art Watermark behind Left Hero Content */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-16 opacity-[0.05] pointer-events-none text-maroon-800 hidden lg:block select-none z-0">
        <RoseMotif size={380} strokeWidth={0.8} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Staggered Entrance */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Element 1: Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${campaign
                  ? 'bg-gold-500/20 border border-gold-500 text-gold-400'
                  : 'bg-gold-500 text-espresso-900 shadow-sm'
                }`}>
                <span className="w-2 h-2 rounded-full bg-espresso-900 animate-pulse"></span>
                <span>{campaign ? campaign.eyebrow : "Premier South Indian FMCG Bakery Since 1987"}</span>
              </div>
            </motion.div>

            {/* Element 2: Headline */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] ${campaign ? 'text-cream-50' : 'text-espresso-800'
                }`}
            >
              {campaign ? (
                campaign.headline
              ) : (
                <>
                  Crisp Perfection &amp; Rich Heritage in Every{' '}
                  <span className="inline-block relative align-baseline mx-1 sm:mx-1.5">
                    <img 
                      src="/rose_text_logo.png" 
                      alt="ROSE" 
                      className="h-[1.12em] sm:h-[1.2em] lg:h-[1.25em] w-auto inline-block object-contain translate-y-[10%] drop-shadow-xs hover:scale-[1.02] transition-transform cursor-pointer"
                    />
                  </span>{' '}
                  Bite.
                </>
              )}
            </motion.h1>

            {/* Element 3: Subheadline */}
            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed ${campaign ? 'text-cream-200' : 'text-espresso-600'
                }`}
            >
              {campaign ? (
                campaign.subheadline
              ) : (
                "From our state-of-the-art Hyderabad bakery facility to homes across 20+ countries, Veeramani Biscuit Industries crafts classic Marie, buttery Osmania cookies, wafer rolls, and crisp papad using 35+ years of oven craftsmanship."
              )}
            </motion.p>

            {/* Element 4: CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                to={campaign ? campaign.primaryCtaLink : "/products"}
                className="px-7 py-3.5 rounded-xl bg-maroon-800 text-gold-500 font-bold text-sm hover:bg-maroon-900 transition-all shadow-warm hover:shadow-warm-hover border border-gold-500/40 flex items-center gap-2 group"
              >
                <span>{campaign ? campaign.primaryCta : "Explore 50+ Product SKUs"}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to={campaign ? (campaign.secondaryCtaLink || "/contact") : "/contact"}
                className="px-7 py-3.5 rounded-xl bg-gold-500 text-espresso-900 font-bold text-sm hover:bg-gold-600 transition-all shadow-warm flex items-center gap-2"
              >
                <span>{campaign ? (campaign.secondaryCta || "Bulk Festive Order") : "Become a Distributor"}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Parallax Visual Stack */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: yParallax }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-warm-hover border-4 border-cream-50 bg-cream-50 p-2"
            >
              <ImagePlaceholder
                aspectRatio="4:3"
                title={campaign ? campaign.name : "ROSE Signature Bakery Range"}
                category={campaign ? campaign.badgeText : "Hyderabad Oven Fresh"}
                src="/rose_hero_showcase.png"
                alt="ROSE Signature Bakery Range"
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

            {/* Decorative Frame Outline */}
            <div className="absolute -inset-4 border-2 border-gold-500/30 rounded-3xl pointer-events-none translate-x-2 translate-y-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

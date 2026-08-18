import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import HeritageBadge from '../common/HeritageBadge';
import RoseDivider from '../common/RoseDivider';
import RoseMotif from '../common/RoseMotif';
import { HERITAGE_MILESTONES } from '../../data/company';

export default function HeritageTimeline() {
  const targetRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Scroll-pinning vertical-to-horizontal translation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Transform 0 -> 1 vertical scroll into 0% -> -82% horizontal movement
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", shouldReduceMotion ? "0%" : "-80%"]
  );

  return (
    <section className="relative bg-cream-100 border-y border-maroon-800/10">
      
      {/* ========================================================================= */}
      {/* DESKTOP / TABLET: Scroll-Scrubbed Pinned Horizontal Timeline (md and up)  */}
      {/* ========================================================================= */}
      <div 
        ref={targetRef} 
        className="hidden md:block relative h-[260vh]"
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen flex flex-col justify-between py-12 overflow-hidden">
          
          {/* Background Watermarks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-maroon-800">
            <RoseMotif size={520} strokeWidth={1} />
          </div>

          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 text-center relative z-20 shrink-0">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <HeritageBadge size="sm" />
            </div>
            <SectionHeader
              badge="Over 35 Years of Oven Craftsmanship"
              title="The Inspiring Journey of Veeramani Biscuits"
              subtitle="Scroll down to travel through our heritage milestones from 1987 to a 20+ country export reach."
              center={true}
              className="mb-4"
            />
          </div>

          {/* Horizontal Track Container */}
          <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden my-auto">
            
            {/* Horizontal Line Guide */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-maroon-800 via-gold-500 to-maroon-800 -translate-y-1/2 pointer-events-none"></div>

            <motion.div 
              style={{ x }} 
              className="flex items-center gap-12 px-16 relative"
            >
              {HERITAGE_MILESTONES.map((item, idx) => (
                <motion.div
                  key={item.era}
                  className="w-[380px] shrink-0 group select-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ margin: "-100px" }}
                >
                  {/* Milestone Card */}
                  <div className={`bg-cream-50 rounded-3xl p-6 border border-maroon-800/10 shadow-warm group-hover:shadow-warm-hover transition-all duration-300 relative ${
                    idx % 2 === 0 ? 'mb-12' : 'mt-12'
                  }`}>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between mb-3 border-b border-cream-200 pb-2">
                      <span className="font-serif font-extrabold text-2xl text-maroon-800">
                        {item.era}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-espresso-900 bg-gold-500 px-2 py-0.5 rounded shadow-sm">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-espresso-800 mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-gold-600 mb-2 font-sans">
                      {item.subtitle}
                    </h4>

                    <p className="text-xs text-espresso-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Marker Node on Center Line */}
                  <div className="flex justify-center -mt-6 z-20 relative">
                    <div className="w-10 h-10 rounded-full bg-maroon-800 border-2 border-gold-500 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-115 transition-transform">
                      <RoseMotif size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Bottom Progress Bar Indicator */}
          <div className="max-w-md mx-auto w-full px-4 shrink-0 relative z-20">
            <div className="h-1.5 w-full bg-cream-300 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-maroon-800"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
              />
            </div>
            <span className="text-[10px] text-espresso-400 font-bold uppercase tracking-widest text-center block mt-1.5">
              Scroll Progress
            </span>
          </div>

        </div>
      </div>


      {/* ========================================================================= */}
      {/* MOBILE / NARROW VIEWPORTS: Simple Vertical Stacked Timeline (md:hidden)    */}
      {/* ========================================================================= */}
      <div className="block md:hidden py-16 px-4">
        
        <div className="flex flex-col items-center mb-10 text-center">
          <HeritageBadge size="md" className="mb-4" />
          <SectionHeader
            badge="Our Story Since 1987"
            title="The Heritage Journey of ROSE Biscuits"
            subtitle="Key milestones in our 35+ year bakery legacy."
            center={true}
          />
        </div>

        <div className="relative border-l-2 border-gold-500/40 pl-6 ml-4 space-y-8">
          {HERITAGE_MILESTONES.map((item, idx) => (
            <div key={item.era} className="relative">
              
              {/* Marker Node */}
              <div className="absolute -left-[37px] top-1.5 w-7 h-7 rounded-full bg-maroon-800 border-2 border-gold-500 flex items-center justify-center text-gold-400 text-xs shadow-sm">
                <RoseMotif size={14} />
              </div>

              <div className="bg-cream-50 rounded-2xl p-5 border border-maroon-800/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-extrabold text-xl text-maroon-800">
                    {item.era}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-gold-500 text-espresso-900 px-1.5 py-0.5 rounded">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-espresso-800">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-gold-600">
                  {item.subtitle}
                </h4>

                <p className="text-xs text-espresso-600 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        <RoseDivider className="mt-12" />

      </div>

    </section>
  );
}

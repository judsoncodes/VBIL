import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { COMPANY_DETAILS } from '../../data/company';

// Data model for Key Indian States & Regional Hubs
const INDIA_LOCATIONS = [
  { id: "hyderabad-hq", name: "Telangana (Hyderabad HQ)", region: "Factory & Regd Office", note: "Turkayamjal High-Capacity Manufacturing Plant & Regd. Office", x: 48, y: 52, isHQ: true },
  { id: "ap", name: "Andhra Pradesh", region: "Core FMCG Market", note: "Extensive rural & urban distribution for Marie Delite, Saltino & Glucose", x: 55, y: 58 },
  { id: "tn", name: "Tamil Nadu", region: "Southern Leadership", note: "Founder Sri D.S. Jabamany's home state & key retail market for Osmania & Wafers", x: 49, y: 78 },
  { id: "maharashtra", name: "Maharashtra", region: "Western Region", note: "Major FMCG wholesale distribution hub across Mumbai & Pune markets", x: 38, y: 44 },
  { id: "karnataka", name: "Karnataka", region: "Urban Retail Hub", note: "Bengaluru & regional distribution for Hyderabadi Chocobullets & Rusk", x: 42, y: 68 },
  { id: "kerala", name: "Kerala", region: "Coastal South", note: "Beloved market for ROSE Cream Touch series & Fruit Rusk", x: 42, y: 84 },
  { id: "export-hub", name: "Global Export Portals", region: "20+ Export Nations", note: "Container dispatch shipping to Middle East, USA, UK, Africa & SE Asia", x: 28, y: 38 }
];

export default function ExportMapSection() {
  const [activeLocation, setActiveLocation] = useState(INDIA_LOCATIONS[0]);

  return (
    <section className="py-20 bg-maroon-900 text-cream-100 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-maroon-gradient opacity-95"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Domestic Leadership &amp; Global Exports
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 leading-tight">
            Strong Indian FMCG Footprint &amp; Global Reach
          </h2>
          <p className="mt-3 text-sm sm:text-base text-cream-200 font-sans leading-relaxed">
            Hover or tap on key Indian states and manufacturing hubs below to explore our regional market strength and 20+ nation export reach.
          </p>
        </div>

        {/* Interactive India Map Container */}
        <div className="bg-maroon-950/90 rounded-3xl border-2 border-gold-500/30 p-4 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive India SVG Map Canvas (7 cols) */}
            <div className="lg:col-span-7 relative w-full aspect-[4/3] bg-maroon-950 rounded-2xl overflow-hidden border border-gold-500/20 p-4 flex items-center justify-center">
              
              {/* Grid Overlay */}
              <svg viewBox="0 0 500 500" className="w-full h-full object-contain" aria-label="India Regional Map">
                <defs>
                  <pattern id="indiaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D9A441" strokeWidth="0.5" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                <rect width="500" height="500" fill="url(#indiaGrid)" />

                {/* Stylized India Landmass Silhouette */}
                <g stroke="#D9A441" strokeWidth="1.25" strokeOpacity="0.6" fill="#F7EFE1" fillOpacity="0.12">
                  {/* Kashmir / North */}
                  <path d="M 180,60 Q 220,30 250,50 Q 280,80 270,120 L 290,140" />
                  {/* North-West / Rajasthan */}
                  <path d="M 180,60 Q 140,110 130,180 L 170,220" />
                  {/* Central & West / Maharashtra */}
                  <path d="M 170,220 Q 200,280 230,300" />
                  {/* South Peninsula / Karnataka, Kerala, Tamil Nadu */}
                  <path d="M 230,300 Q 210,380 240,450 Q 260,450 280,380 Q 300,320 280,260" />
                  {/* East Coast / AP, Odisha, Bengal */}
                  <path d="M 280,260 Q 340,220 370,180 Q 340,140 290,140" />
                  {/* Entire Contiguous India Shape Outline */}
                  <path d="M 220,35 Q 260,50 270,110 Q 310,130 380,160 Q 420,180 430,220 Q 360,250 300,250 Q 290,320 250,450 Q 210,380 180,300 Q 130,220 120,170 Q 150,110 220,35 Z" fill="#F7EFE1" fillOpacity="0.15" stroke="#D9A441" strokeWidth="1.5" />
                </g>
              </svg>

              {/* Staggered Pulsing Location Pins on India Map */}
              {INDIA_LOCATIONS.map((loc, idx) => {
                const isSelected = activeLocation?.id === loc.id;
                const staggerDelay = (idx % 4) * 0.35;

                return (
                  <div
                    key={loc.id}
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    onMouseEnter={() => setActiveLocation(loc)}
                    onClick={() => setActiveLocation(loc)}
                  >
                    {/* Pulsing Outer Ping Ring */}
                    <span 
                      style={{ animationDelay: `${staggerDelay}s` }}
                      className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                        loc.isHQ ? 'bg-red-500' : 'bg-gold-400'
                      }`}
                    ></span>

                    {/* Marker Disc */}
                    <div className={`relative w-4.5 h-4.5 rounded-full border-2 transition-transform duration-200 group-hover:scale-130 flex items-center justify-center ${
                      isSelected 
                        ? 'bg-cream-100 border-gold-400 scale-125 shadow-gold-glow' 
                        : loc.isHQ 
                        ? 'bg-red-600 border-cream-100 shadow-md' 
                        : 'bg-gold-500 border-maroon-900'
                    }`}>
                      {loc.isHQ && <span className="w-2 h-2 rounded-full bg-white"></span>}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Right Column: Active State / Market Detail Box (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cream-50 text-espresso-900 rounded-2xl p-6 shadow-2xl border-2 border-gold-500/80 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-cream-300 pb-2">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-600 block">
                          {activeLocation.region}
                        </span>
                        <h3 className="font-serif font-extrabold text-2xl text-maroon-800">
                          {activeLocation.name}
                        </h3>
                      </div>
                      {activeLocation.isHQ && (
                        <span className="px-2.5 py-1 rounded bg-maroon-800 text-gold-400 text-[10px] font-bold uppercase tracking-wider">
                          HQ &amp; Plant
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-espresso-700 font-sans leading-relaxed">
                      {activeLocation.note}
                    </p>

                    {activeLocation.isHQ && (
                      <div className="pt-2 border-t border-cream-200 text-xs font-semibold text-espresso-800">
                        <strong className="block text-maroon-800">Turkayamjal Factory Address:</strong>
                        {COMPANY_DETAILS.address.factory}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Key States Pills List */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  Key Southern &amp; Western Markets
                </h4>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_DETAILS.keyStates.map((state) => (
                    <button
                      key={state}
                      onClick={() => {
                        const matched = INDIA_LOCATIONS.find(l => l.name.includes(state));
                        if (matched) setActiveLocation(matched);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeLocation?.name.includes(state)
                          ? 'bg-gold-500 text-espresso-900 shadow-sm scale-105'
                          : 'bg-maroon-900/80 border border-gold-500/30 text-cream-100 hover:bg-maroon-800'
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footprint Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-maroon-800/60 text-center">
            <div className="bg-maroon-900/80 p-3 rounded-xl border border-gold-500/20">
              <span className="text-2xl font-serif font-extrabold text-gold-400 block">6</span>
              <span className="text-xs text-cream-200">Key Indian States</span>
            </div>
            <div className="bg-maroon-900/80 p-3 rounded-xl border border-gold-500/20">
              <span className="text-2xl font-serif font-extrabold text-gold-400 block">Widespread</span>
              <span className="text-xs text-cream-200">Retail Distribution Reach</span>
            </div>
            <div className="bg-maroon-900/80 p-3 rounded-xl border border-gold-500/20">
              <span className="text-2xl font-serif font-extrabold text-gold-400 block">20+</span>
              <span className="text-xs text-cream-200">Global Export Nations</span>
            </div>
            <div className="bg-maroon-900/80 p-3 rounded-xl border border-gold-500/20">
              <span className="text-2xl font-serif font-extrabold text-gold-400 block">High-Output</span>
              <span className="text-xs text-cream-200">Automated Daily Baking</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

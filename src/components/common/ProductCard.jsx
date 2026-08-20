import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import RoseCTAButton from './RoseCTAButton';

/**
 * Enhanced Food-Brand Craveable ProductCard Component.
 * Features:
 * 1. Subtle 3D tilt effect on hover using Framer Motion (mouse position based, max 4 deg).
 * 2. Crossfade between packaging shot (product.image) and out-of-pack shot (product.imageOut) on hover/tap.
 * 3. Pill-style tabs variant selector highlighted in Warm Biscuit-Gold (#D9A441).
 * 4. Full touch device compatibility (tap to toggle out-of-pack view or select weight pills).
 */
export default function ProductCard({ product }) {
  const { id, name, categoryName, badge, description, variants, image, imageOut } = product;

  const hasVariants = Array.isArray(variants) && variants.length > 0;
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const selectedVariant = hasVariants ? variants[selectedVariantIndex] : null;
  const shouldReduceMotion = useReducedMotion();

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse offsets to max 4 degree rotations
  const rotateX = useTransform(mouseY, [-100, 100], [3.5, -3.5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3.5, 3.5]);

  // Apply smooth physics spring damping
  const springConfig = { stiffness: 300, damping: 22 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="group bg-cream-50 rounded-2xl border border-maroon-800/10 p-4 shadow-warm hover:shadow-warm-hover transition-shadow duration-300 flex flex-col justify-between h-full relative perspective-1000 select-none"
      style={{
        rotateX: shouldReduceMotion ? 0 : springRotateX,
        rotateY: shouldReduceMotion ? 0 : springRotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ y: shouldReduceMotion ? 0 : -6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(prev => !prev)} // Touch device tap support
    >
      {/* Product Image Container with 4:5 Aspect Ratio & Crossfade */}
      <div className="relative mb-4 overflow-hidden rounded-xl bg-cream-200 aspect-[4/5]">
        {badge && (
          <span className={`absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm pointer-events-none ${
            badge === "COMING SOON" 
              ? "bg-rosePink-500 text-maroon-900 border border-maroon-800/20" 
              : badge === "Bestseller" || badge === "Heritage Signature"
              ? "bg-maroon-800 text-gold-400 border border-gold-500/30"
              : "bg-gold-500 text-espresso-900"
          }`}>
            {badge}
          </span>
        )}

        {/* View Toggle Badge for Touch/Hover */}
        <span className="absolute bottom-2.5 right-2.5 z-20 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-espresso-900/80 text-cream-100 backdrop-blur-sm pointer-events-none transition-opacity duration-200">
          {isHovered ? "Out-of-Pack View" : "Pack Shot"}
        </span>

        {/* 1. Packaging Shot Layer */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <ImagePlaceholder 
            aspectRatio="4:5"
            title={`${name} (Packaging)`}
            category={`${categoryName} • Pack Shot`}
            src={image || null}
            alt={`${name} packaging shot`}
          />
        </motion.div>

        {/* 2. Out-of-Pack Biscuit Shot Layer (Crossfade on Hover/Tap) */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <ImagePlaceholder 
            aspectRatio="4:5"
            title={`${name} (Fresh Baked)`}
            category={`${categoryName} • Out of Pack`}
            src={imageOut || null}
            alt={`${name} out of pack product`}
          />
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-espresso-400 font-semibold mb-1">
            <span>{categoryName}</span>
            {hasVariants && (
              <span className="text-gold-600 bg-gold-100 px-1.5 py-0.5 rounded text-[10px]">
                {variants.length} Pack Sizes
              </span>
            )}
          </div>

          <h3 className="font-serif font-bold text-lg text-espresso-800 group-hover:text-maroon-800 transition-colors line-clamp-1">
            {name}
          </h3>

          <p className="text-xs text-espresso-600 mt-1.5 line-clamp-2 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* Variant Selector & Price Row */}
        <div className="mt-4 pt-3 border-t border-cream-200">
          {hasVariants ? (
            <div>
              {/* Weight Selector Pill-Style Tabs */}
              <div 
                className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none"
                onClick={(e) => e.stopPropagation()} // Prevent parent card click toggle on pill tap
              >
                {variants.map((v, idx) => {
                  const isActive = selectedVariantIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVariantIndex(idx);
                      }}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all whitespace-nowrap border ${
                        isActive
                          ? 'bg-gold-500 text-espresso-900 border-gold-600/50 shadow-sm scale-105'
                          : 'bg-cream-200 text-espresso-700 border-transparent hover:bg-cream-300'
                      }`}
                    >
                      {v.weight}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Price & Action Row */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="text-[10px] text-espresso-400 block font-medium">MRP (Incl. taxes)</span>
                  <span className="text-base font-bold text-maroon-800 font-serif">
                    {selectedVariant?.mrp}
                  </span>
                </div>

                <Link
                  to={`/contact?product=${encodeURIComponent(name)}&variant=${encodeURIComponent(selectedVariant?.weight)}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-maroon-800 text-gold-400 hover:bg-maroon-900 transition-colors shadow-sm border border-gold-500/30"
                >
                  <span>Inquire</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 bg-cream-100 px-3 rounded-lg border border-gold-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-maroon-800">
                  Launching Soon
                </span>
              </div>
              <Link
                to={`/contact?product=${encodeURIComponent(name)}&type=preorder`}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-bold text-maroon-800 underline hover:text-gold-600"
              >
                Pre-order Info
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

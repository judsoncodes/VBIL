import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import { useB2BCart } from '../../context/B2BCartContext';

// Helper to determine exact units per case indicator for B2B wholesale
const getCasePackingIndicator = (product, selectedVariant) => {
  const weightStr = selectedVariant?.weight || '';
  if (weightStr.includes('Family Pack') || weightStr.includes('400g') || weightStr.includes('300g')) {
    return '1 Case = 24 Packs';
  } else if (weightStr.includes('Tin')) {
    return '1 Case = 12 Metal Tins';
  } else if (weightStr.includes('Jar')) {
    return '1 Case = 24 Jars';
  } else if (weightStr.includes('Box') || weightStr.includes('250g') || weightStr.includes('200g')) {
    return '1 Case = 36 Boxes';
  } else if (weightStr.includes('100g') || weightStr.includes('120g') || weightStr.includes('150g')) {
    return '1 Case = 48 Packs';
  } else if (weightStr.includes('Pocket') || weightStr.includes('5') || weightStr.includes('10')) {
    return '1 Case = 120 Packs';
  }
  return '1 Case = 48 Units';
};

export default function ProductCard({ product }) {
  const { id, name, categoryName, badge, description, variants, image, imageOut } = product;
  const { addToCart, cartItems } = useB2BCart();

  const hasVariants = Array.isArray(variants) && variants.length > 0;
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const selectedVariant = hasVariants ? variants[selectedVariantIndex] : null;
  const shouldReduceMotion = useReducedMotion();

  const inCartItem = cartItems.find(
    item => item.productId === id && item.variant === selectedVariant?.weight
  );

  const packingText = getCasePackingIndicator(product, selectedVariant);

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3, 3]);

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
      className="group bg-cream-50 rounded-2xl border border-espresso-950/10 p-4 shadow-warm hover:shadow-warm-hover transition-shadow duration-300 flex flex-col justify-between h-full relative perspective-1000 select-none"
      style={{
        rotateX: shouldReduceMotion ? 0 : springRotateX,
        rotateY: shouldReduceMotion ? 0 : springRotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(prev => !prev)}
    >
      {/* Product Image Container */}
      <div className="relative mb-3 overflow-hidden rounded-xl bg-cream-200 aspect-[4/5]">
        {badge && (
          <span className={`absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${
            badge === "COMING SOON" 
              ? "bg-rosePink-500 text-maroon-900 border border-maroon-800/20" 
              : badge === "Bestseller" || badge === "Heritage Signature"
              ? "bg-maroon-900 text-gold-400 border border-gold-500/30"
              : "bg-gold-500 text-espresso-950"
          }`}>
            {badge}
          </span>
        )}

        <span className="absolute bottom-2 right-2 z-20 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-espresso-950/80 text-cream-100 backdrop-blur-sm pointer-events-none opacity-80">
          {isHovered ? "Out-of-Pack" : "Pack Shot"}
        </span>

        {/* 1. Packaging Shot Layer */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ImagePlaceholder 
            aspectRatio="4:5"
            title={`${name} (Packaging)`}
            category={`${categoryName} • Pack`}
            src={image || null}
            alt={`${name} packaging shot`}
          />
        </motion.div>

        {/* 2. Out-of-Pack Biscuit Shot Layer */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ImagePlaceholder 
            aspectRatio="4:5"
            title={`${name} (Fresh Baked)`}
            category={`${categoryName} • Fresh Baked`}
            src={imageOut || null}
            alt={`${name} out of pack product`}
          />
        </motion.div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-espresso-500 font-semibold mb-1">
            <span>{categoryName}</span>
            {hasVariants && (
              <span className="text-maroon-900 bg-maroon-900/10 px-2 py-0.5 rounded text-[10px] font-bold">
                {variants.length} Pack Sizes
              </span>
            )}
          </div>

          <h3 className="font-display font-bold text-base text-espresso-950 group-hover:text-maroon-900 transition-colors line-clamp-1">
            {name}
          </h3>

          <p className="text-xs text-espresso-600 mt-1 line-clamp-2 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* Trade Unit Packaging Indicator */}
        {hasVariants && (
          <div className="mt-2 py-1.5 px-2.5 bg-amber-100/60 border border-amber-500/30 rounded-lg flex items-center justify-between text-[11px]">
            <span className="font-bold text-maroon-900 flex items-center gap-1">
              <span>📦</span>
              <span>{packingText}</span>
            </span>
            <span className="font-bold text-espresso-950">
              {selectedVariant?.mrp}
            </span>
          </div>
        )}

        {/* Variant Selector & Price Row */}
        <div className="mt-3 pt-2.5 border-t border-espresso-950/10">
          {hasVariants ? (
            <div>
              <div 
                className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none"
                onClick={(e) => e.stopPropagation()}
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
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all whitespace-nowrap border ${
                        isActive
                          ? 'bg-gold-500 text-espresso-950 border-gold-600 shadow-xs'
                          : 'bg-cream-200 text-espresso-700 border-transparent hover:bg-cream-300'
                      }`}
                    >
                      {v.weight}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Action Buttons */}
              <div className="flex items-center gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => selectedVariant && addToCart(product, selectedVariant.weight, 5)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 ${
                    inCartItem
                      ? 'bg-emerald-800 text-cream-100 hover:bg-emerald-900 border border-emerald-600'
                      : 'bg-maroon-900 text-gold-400 hover:bg-maroon-950 border border-gold-500/30'
                  }`}
                >
                  {inCartItem ? (
                    <span>✓ {inCartItem.cases} Cases</span>
                  ) : (
                    <span>+ Add 5 Cases</span>
                  )}
                </button>

                <Link
                  to={`/contact?product=${encodeURIComponent(name)}&variant=${encodeURIComponent(selectedVariant?.weight)}`}
                  className="px-2.5 py-2 rounded-xl bg-cream-200 text-espresso-950 hover:bg-cream-300 font-bold text-xs border border-espresso-950/10"
                >
                  Specs
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 bg-cream-100 px-3 rounded-lg border border-gold-500/30">
              <span className="text-xs font-semibold text-maroon-900">
                Launching Soon
              </span>
              <Link
                to={`/contact?product=${encodeURIComponent(name)}&type=preorder`}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-bold text-maroon-900 underline hover:text-gold-600"
              >
                Pre-order
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}


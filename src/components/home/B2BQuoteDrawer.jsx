import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useB2BCart } from '../../context/B2BCartContext';
import { Link } from 'react-router-dom';
import RoseCTAButton from '../common/RoseCTAButton';

export default function B2BQuoteDrawer() {
  const { cartItems, totalCases, totalSkus, removeFromCart, clearCart } = useB2BCart();
  const [isExpanded, setIsExpanded] = useState(false);

  if (totalCases === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 inset-x-0 z-50 p-4 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto pointer-events-auto">
          
          {/* Expanded Drawer Modal View */}
          {isExpanded && (
            <div className="bg-espresso-950 border-2 border-gold-500/40 rounded-t-2xl p-4 shadow-2xl text-cream-100 mb-2 max-h-96 overflow-y-auto scrollbar-thin space-y-3">
              
              {/* Folded 3-Step Process Guide Bar */}
              <div className="bg-maroon-950/90 border border-gold-500/30 rounded-xl p-3 grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="space-y-0.5">
                  <span className="font-bold text-gold-400 block">Step 01 • Select SKUs</span>
                  <span className="text-cream-300 block text-[9px]">Add items &amp; case volumes</span>
                </div>
                <div className="space-y-0.5 border-x border-gold-500/20 px-1">
                  <span className="font-bold text-gold-400 block">Step 02 • Review Quote</span>
                  <span className="text-cream-300 block text-[9px]">Verify items &amp; business info</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-gold-400 block">Step 03 • Factory Dispatch</span>
                  <span className="text-cream-300 block text-[9px]">Receive price &amp; proforma</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-gold-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛒</span>
                  <h4 className="font-serif font-bold text-sm text-gold-400">
                    Selected B2B Wholesale SKUs ({totalSkus} Products)
                  </h4>
                </div>
                
                <div className="flex items-center gap-3">
                  <RoseCTAButton
                    variant="ghost"
                    size="compact"
                    label="Clear All"
                    icon={null}
                    stubText=""
                    onClick={clearCart}
                  />
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-cream-300 hover:text-cream-50 font-bold text-xs"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.productId}-${item.variant}-${idx}`}
                    className="flex items-center justify-between bg-maroon-950/80 border border-gold-500/20 p-2.5 rounded-xl text-xs"
                  >
                    <div>
                      <span className="font-bold text-cream-100 block">{item.name}</span>
                      <span className="text-[10px] text-gold-400">{item.variant} • {item.packingDetails}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-gold-400 bg-maroon-900 px-2.5 py-1 rounded-lg border border-gold-500/30">
                        {item.cases} Cases
                      </span>
                      <button
                        onClick={() => removeFromCart(item.productId, item.variant)}
                        className="text-red-400 hover:text-red-300 font-bold text-xs"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sticky Main Floating Dock Bar */}
          <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-espresso-950 border-2 border-gold-500/50 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between text-cream-100 backdrop-blur-md">
            
            {/* Left: Summary Info */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="relative w-11 h-11 rounded-xl bg-gold-500 text-espresso-950 flex items-center justify-center font-bold shadow-md hover:scale-105 transition-transform"
              >
                <span className="text-xl">🛒</span>
                <span className="absolute -top-1.5 -right-1.5 bg-maroon-800 text-gold-400 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-gold-500">
                  {totalSkus}
                </span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm text-gold-400">
                    B2B Quote Cart: {totalCases} Cases Total
                  </span>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[11px] text-cream-300 underline font-semibold hover:text-gold-400"
                  >
                    {isExpanded ? 'Hide Details' : 'View SKUs'}
                  </button>
                </div>
                <p className="text-[11px] text-cream-200 font-sans hidden sm:block">
                  Direct Factory Dispatch • Volume Wholesale Pricing Applied
                </p>
              </div>
            </div>

            {/* Right: Proceed CTA */}
            <div className="flex items-center gap-2">
              <RoseCTAButton
                variant="primary"
                size="compact"
                label="Proceed to B2B Quote Request"
                to="/order-request"
              />
            </div>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

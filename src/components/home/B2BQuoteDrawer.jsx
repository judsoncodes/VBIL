import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useB2BCart } from '../../context/B2BCartContext';
import { Link } from 'react-router-dom';

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
            <div className="bg-espresso-950 border-2 border-gold-500/40 rounded-t-2xl p-4 shadow-2xl text-cream-100 mb-2 max-h-80 overflow-y-auto scrollbar-thin">
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛒</span>
                  <h4 className="font-serif font-bold text-sm text-gold-400">
                    Selected B2B Wholesale SKUs ({totalSkus} Products)
                  </h4>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={clearCart}
                    className="text-[11px] font-semibold text-red-400 hover:text-red-300 underline"
                  >
                    Clear All
                  </button>
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
              <Link
                to="/order-request"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gold-500 text-espresso-950 font-bold text-xs sm:text-sm hover:bg-gold-400 transition-all shadow-warm flex items-center gap-1.5"
              >
                <span>Proceed to Quote Request</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

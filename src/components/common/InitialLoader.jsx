import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick, responsive 650ms transition for a crisp, high-end professional feel
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 650);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream-100 text-espresso-950 tactile-paper-grain select-none overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Clean Official ROSE Logo */}
            <img
              src="/logo1.png"
              alt="ROSE Biscuits"
              className="h-16 sm:h-20 w-auto object-contain mb-6"
            />

            {/* Ultra-Thin Minimalist Loading Line */}
            <div className="w-32 h-[1.5px] bg-espresso-950/10 overflow-hidden relative rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-maroon-900"
              />
            </div>

            {/* Minimalist Subtext */}
            <span className="text-[10px] tracking-[0.3em] font-medium uppercase text-espresso-600 mt-4">
              EST. 1987
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

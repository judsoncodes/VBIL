import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FlaskConical, Globe2 } from 'lucide-react';

// Verified claims grounded strictly in factual company.js & Quality.jsx copy
const TRUST_ITEMS = [
  {
    id: "hygiene-code",
    icon: ShieldCheck,
    title: "International Food Hygiene",
    subtitle: "Compliant with General Principles of Food Hygiene Code of Practice"
  },
  {
    id: "hitech-lab",
    icon: FlaskConical,
    title: "In-House Hi-Tech Lab Testing",
    subtitle: "Every batch verified for moisture, sensory crispness & micro-biological purity"
  },
  {
    id: "heritage-quality",
    icon: Award,
    title: "35+ Years Oven Craftsmanship",
    subtitle: "Continuous automated band oven baking in Hyderabad since 1987"
  },
  {
    id: "export-packaging",
    icon: Globe2,
    title: "Export-Grade Foil Seals",
    subtitle: "Nitrogen-flushed, moisture-proof wrapping for domestic & 20+ nation transit"
  }
];

export default function TrustSignals({ className = "" }) {
  return (
    <section className={`py-6 bg-maroon-900 text-cream-100 border-y border-gold-500/20 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authoritative, quiet horizontal trust row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {TRUST_ITEMS.map((item) => {
            const IconComponent = item.icon;

            return (
              <div 
                key={item.id}
                className="flex items-start gap-3.5 p-3 rounded-2xl bg-maroon-950/40 border border-gold-500/15"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-400 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-xs text-gold-400">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-cream-200/90 font-sans leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

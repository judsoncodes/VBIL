import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FlaskConical, Globe2 } from 'lucide-react';

// Verified claims grounded strictly in factual company.js & Quality.jsx copy
const TRUST_ITEMS = [
  {
    id: "hygiene-code",
    icon: ShieldCheck,
    title: "Highest Hygiene Standards",
    subtitle: "Certified food safety and strict quality protocols across all baking stages."
  },
  {
    id: "hitech-lab",
    icon: FlaskConical,
    title: "In-House Quality Testing",
    subtitle: "Every batch is verified for freshness, taste, crispness, and purity."
  },
  {
    id: "heritage-quality",
    icon: Award,
    title: "35+ Years Baking Legacy",
    subtitle: "Time-tested recipes baked daily in Hyderabad since 1987."
  },
  {
    id: "export-packaging",
    icon: Globe2,
    title: "Freshness Sealed Packaging",
    subtitle: "Moisture-proof, export-grade packaging ensuring long-lasting crispness."
  }
];

export default function TrustSignals({ className = "" }) {
  return (
    <section className={`py-8 bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 border-y border-gold-500/30 relative overflow-hidden shadow-md ${className}`}>
      {/* Background Subtle Shimmer Line */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Authoritative, quiet horizontal trust row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-maroon-950/70 border border-gold-500/30 hover:border-gold-500/60 backdrop-blur-md hover:bg-maroon-950/90 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-gold-400" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xs text-gold-400 tracking-wide">
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

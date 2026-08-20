import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  FlaskConical, 
  RotateCw, 
  Flame, 
  ShieldCheck, 
  PackageCheck 
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import RoseDivider from './RoseDivider';

const MANUFACTURING_STEPS = [
  {
    step: "01",
    title: "Raw Material Selection",
    icon: FlaskConical,
    description: "Every shipment of premium wheat flour, butter, sugar, and natural spices undergoes strict laboratory testing before entering dough mixers."
  },
  {
    step: "02",
    title: "Automated Mixing",
    icon: RotateCw,
    description: "High-precision automated dough mixers combine ingredients to exact moisture and elasticity tolerances for recipe batch consistency."
  },
  {
    step: "03",
    title: "Rotary Cutting & Moulding",
    icon: CheckCircle2,
    description: "Specialized rotary cutter and rotary moulder rollers shape Marie, Saltino, and Osmania cookies with uniform thickness and embossed branding."
  },
  {
    step: "04",
    title: "Continuous Band Baking",
    icon: Flame,
    description: "Multi-zone gas-fired continuous band ovens deliver precision temperature control, producing golden-brown bake color and optimal crispness."
  },
  {
    step: "05",
    title: "Quality & Hygiene Testing",
    icon: ShieldCheck,
    description: "Expert lab technicians test every batch for moisture levels, sensory texture, and strict micro-biological hygiene compliance."
  },
  {
    step: "06",
    title: "Untouched Foil Packaging",
    icon: PackageCheck,
    description: "High-speed automated flow-wrapping packs biscuits into nitrogen-flushed, moisture-proof foil seals for extended shelf life across domestic and export transit."
  }
];

export default function ProcessSteps({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className={`py-20 bg-cream-50 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Behind the Bake"
          title="From Raw Ingredients to Oven-Fresh Crunch"
          subtitle="Discover the 6-stage automated manufacturing process that guarantees pure taste and hygiene in every ROSE bite."
          center={true}
        />

        {/* Staggered Grid of 6 Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MANUFACTURING_STEPS.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.step}
                variants={cardVariants}
                className="bg-cream-100/80 rounded-3xl p-6 border border-maroon-800/10 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-3 -right-2 font-serif font-extrabold text-7xl text-maroon-800/5 group-hover:text-maroon-800/10 transition-colors pointer-events-none select-none">
                  {item.step}
                </span>

                <div className="space-y-4 relative z-10">
                  {/* Step Badge & Icon Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-maroon-800 text-gold-400 border border-gold-500/30 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="font-serif font-extrabold text-sm text-maroon-800 bg-gold-100 px-3 py-1 rounded-full border border-gold-500/30">
                      Stage {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl font-bold text-espresso-800 group-hover:text-maroon-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Grounded Description */}
                  <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-cream-200 flex items-center justify-between text-[10px] font-bold text-espresso-400 uppercase tracking-widest relative z-10">
                  <span>Turkayamjal Facility</span>
                  <span className="text-gold-600 font-extrabold">Passed QC</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <RoseDivider className="mt-16" />

      </div>
    </section>
  );
}

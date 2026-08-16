import React from 'react';
import SectionHeader from '../common/SectionHeader';
import HeritageBadge from '../common/HeritageBadge';
import RoseDivider from '../common/RoseDivider';
import RoseMotif from '../common/RoseMotif';

export default function HeritageTimeline() {
  const milestones = [

    {
      year: "1987",
      title: "Humble Beginnings in Hyderabad",
      description: "Founded by Sri D.S. Jabamany on the outskirts of Hyderabad. Starting as a street vendor and hand-packer, Sri Jabamany built the company on raw determination and commitment to quality."
    },
    {
      year: "1998",
      title: "Southern Expansion & Brand ROSE",
      description: "Expanded distribution across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Kerala, and Maharashtra. Established the beloved 'ROSE' brand identity."
    },
    {
      year: "2009",
      title: "Leadership & Automated Innovation",
      description: "Sri P.J.E. Rajiah assumed the role of Managing Director after 20+ years of production excellence, introducing modern automated oven lines and international hygiene controls."
    },
    {
      year: "Present",
      title: "Global FMCG Footprint (20+ Nations)",
      description: "Now exporting to over 20 countries worldwide with 50+ product SKUs ranging from biscuits to papads, wafers, and gourmet cookies."
    }
  ];

  return (
    <section className="py-20 bg-cream-100 relative overflow-hidden border-y border-maroon-800/10">
      {/* Background Subtle Rose Motif Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-maroon-800">
        <RoseMotif size={480} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        
        <div className="flex flex-col items-center mb-12">
          <HeritageBadge size="lg" className="mb-4" />
          <SectionHeader
            badge="Over 35 Years of Craftsmanship"
            title="From Local Bakery Pioneer to Global Exporter"
            subtitle="The inspiring journey of Veeramani Biscuit Industries Pvt. Ltd."
            center={true}
          />
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-maroon-800 via-gold-500 to-maroon-800 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 relative z-10">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.year}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-cream-50 rounded-2xl p-6 md:p-8 border border-maroon-800/10 shadow-warm hover:shadow-warm-hover transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif font-extrabold text-2xl md:text-3xl text-maroon-800">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-100 px-2 py-0.5 rounded border border-gold-500/20">
                          Milestone #{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-espresso-800 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs md:text-sm text-espresso-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="w-12 h-12 rounded-full bg-maroon-800 border-4 border-gold-500 flex items-center justify-center text-gold-400 font-bold text-xs shadow-md shrink-0 z-20">
                    <span className="w-3 h-3 rounded-full bg-gold-400"></span>
                  </div>

                  {/* Spacer for 50/50 balance on desktop */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        <RoseDivider className="mt-16" />

      </div>
    </section>
  );
}

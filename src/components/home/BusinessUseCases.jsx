import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Link } from 'react-router-dom';

const USE_CASES = [
  {
    id: 'retail',
    name: 'Kirana & Retail Stores',
    badge: 'High-Velocity Impulse SKUs',
    description: 'Fast-moving single-serve and value packs engineered for neighborhood retail sales and rapid inventory turnover.',
    recommendedSkus: ['ROSE Marie Delite', 'ROSE Energy Glucose', 'ROSE Cream Touch', 'ROSE Potato Tubes'],
    marginCategory: 'High Retail Turn',
    ctaLink: '/products?segment=retail'
  },
  {
    id: 'moderntrade',
    name: 'Modern Trade & Supermarkets',
    badge: 'Premium Family & Boxed Series',
    description: 'Aesthetically packaged family value boxes, Osmania cookie tins, and multi-layer wafer cartons designed for supermarket shelf appeal.',
    recommendedSkus: ['ROSE Hyderabadi Osmania Cookies Tin', 'ROSE Marie Delite Family Pack', 'ROSE Premium Fruit Rusk Box', 'ROSE Hyderabadi Chocobullets Jar'],
    marginCategory: 'High Ticket Value',
    ctaLink: '/products?segment=moderntrade'
  },
  {
    id: 'institutional',
    name: 'Institutional & Catering Supply',
    badge: 'Bulk Tea Dunking & Canteen Supply',
    description: 'Formulated for high structural dunkability without crumbling in hot tea/coffee. Preferred by canteens, hotels, and roadside tea stalls.',
    recommendedSkus: ['ROSE Chaipiyo Tea Biscuits', 'ROSE Classic Plain Tea Rusk', 'ROSE Saltino Butter Crackers', 'ROSE Milk Touch'],
    marginCategory: 'Bulk Case Volume',
    ctaLink: '/order-request?segment=institutional'
  },
  {
    id: 'gifting',
    name: 'Corporate & Festive Gifting',
    badge: 'Artisanal Cookie Tins & Hampers',
    description: 'Gourmet Hyderabadi Osmania cookies, cashew butter biscuits, and premium wafer rolls packed in elegant metal tins for festive corporate orders.',
    recommendedSkus: ['ROSE Osmania Cookie Metal Gift Box', 'ROSE Premium Kaju Cookies Box', 'ROSE Excellence Butter Cookies Tin', 'Festive Multi-Pack Hamper'],
    marginCategory: 'Premium Gifting Margin',
    ctaLink: '/order-request?segment=gifting'
  },
  {
    id: 'export',
    name: 'Global Export & Importers',
    badge: 'Full Container Load (FCL) Cargo',
    description: 'Seaworthy protective foil barrier packaging, export documentation support, extended freshness protection, and custom private labeling options.',
    recommendedSkus: ['ROSE Chocobullets Wafer Rolls Jar', 'ROSE Hyderabadi Biryani Papad Pack', 'ROSE Osmania Cookies Box', 'Custom Private Label OEM'],
    marginCategory: 'Container Load FOB/CIF',
    ctaLink: '/contact?type=export'
  }
];

export default function BusinessUseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = USE_CASES[activeTab];

  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden border-b border-espresso-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Commercial Procurement Segments"
          title="Designed for Your Business Model"
          subtitle="Whether you operate a Kirana distribution network, modern supermarket chain, institutional supply company, or international import firm, ROSE® provides tailored SKU solutions."
        />

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-8 justify-start lg:justify-center">
          {USE_CASES.map((uc, idx) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                activeTab === idx
                  ? 'bg-maroon-900 text-gold-400 border-gold-500/40 shadow-md scale-105'
                  : 'bg-cream-100 text-espresso-800 border-espresso-950/10 hover:bg-cream-200'
              }`}
            >
              {uc.name}
            </button>
          ))}
        </div>

        {/* Active Segment Detail Card */}
        <div className="max-w-5xl mx-auto bg-cream-100 border border-espresso-950/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Description & Margin Tag */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider">
                {currentCase.badge}
              </span>

              <h3 className="font-display text-3xl font-semibold text-espresso-950">
                {currentCase.name}
              </h3>

              <p className="text-sm text-espresso-700 font-sans leading-relaxed">
                {currentCase.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-espresso-500 block mb-1">Commercial Structure:</span>
                <span className="inline-block text-xs font-bold text-maroon-900 bg-cream-50 px-3 py-1.5 rounded-lg border border-maroon-900/20">
                  ⚡ {currentCase.marginCategory}
                </span>
              </div>
            </div>

            {/* Right: Recommended SKUs & Action */}
            <div className="lg:col-span-6 bg-cream-50 border border-espresso-950/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-espresso-800">
                Recommended Core SKUs for {currentCase.name}:
              </h4>

              <ul className="space-y-2 text-xs text-espresso-800 font-sans">
                {currentCase.recommendedSkus.map((sku, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium">
                    <span className="w-4 h-4 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{sku}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to={currentCase.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-900 text-gold-400 font-bold text-xs hover:bg-maroon-950 transition-colors shadow-sm border border-gold-500/30"
                >
                  <span>Inquire for {currentCase.name} Portfolio</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

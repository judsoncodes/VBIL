import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { CATEGORIES_LIST } from '../../data/navigation';
import ImagePlaceholder from '../common/ImagePlaceholder';

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Product Categories"
          title="Crafted for Every Taste & Tea-Time Moment"
          subtitle="Explore our diverse range of FMCG bakery offerings manufactured with stringent hygienic controls."
        />

        {/* Asymmetrical Category Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Hero Category Card (Biscuits) - Spans 7 cols */}
          <div className="md:col-span-7 bg-maroon-800 text-cream-100 rounded-3xl p-8 shadow-warm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-10 -translate-y-10">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" stroke="#D9A441" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider">
                Flagship Range • 17 SKUs
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream-100">
                Biscuits & Crackers
              </h3>

              <p className="text-cream-200 text-sm max-w-md font-sans leading-relaxed">
                From crispy Marie Delite and flaky Saltino crackers to rich Bourbon and Cream Touch varieties in Elachi, Orange, and Strawberry.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-maroon-700 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-gold-400 font-semibold">
                Variants: 400g Family, 100g, 15g Pocket Packs
              </div>

              <Link
                to="/products/biscuits"
                className="px-5 py-2.5 rounded-xl bg-gold-500 text-espresso-900 font-bold text-xs hover:bg-gold-400 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>View All Biscuits</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Secondary Hero Category Card (Cookies) - Spans 5 cols */}
          <div className="md:col-span-5 bg-gold-500 text-espresso-900 rounded-3xl p-8 shadow-warm flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-maroon-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
                Artisanal Bakery • 10 SKUs
              </span>

              <h3 className="font-serif text-3xl font-bold text-espresso-900">
                Hyderabadi Cookies
              </h3>

              <p className="text-espresso-800 text-sm font-sans leading-relaxed">
                Authentic sweet & salt Osmania, Butter Delite, Kaju, and Birthday Cake cookies baked fresh daily.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-600/30 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-maroon-900">Heritage Recipe</span>
              <Link
                to="/products/cookies"
                className="px-4 py-2 rounded-xl bg-maroon-800 text-gold-400 font-bold text-xs hover:bg-maroon-900 transition-colors"
              >
                Explore Cookies →
              </Link>
            </div>
          </div>

          {/* Bottom Row - 3 Asymmetric Column Cards */}

          {/* Card 3: Wafers */}
          <div className="md:col-span-4 bg-cream-200 text-espresso-800 rounded-2xl p-6 border border-maroon-800/10 shadow-sm hover:shadow-warm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-800 bg-maroon-100 px-2 py-0.5 rounded">
                Wafers & Rolls
              </span>
              <h4 className="font-serif text-xl font-bold text-espresso-800">
                Chocobullets & Wafer Rolls
              </h4>
              <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                Hyderabadi Chocobullets, wafer rolls, and multi-layer fruit cream wafer squares.
              </p>
            </div>
            <Link to="/products/wafers" className="mt-6 text-xs font-bold text-maroon-800 hover:text-gold-600 inline-flex items-center gap-1">
              <span>Browse 9 SKUs</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 4: Papad & Snacks */}
          <div className="md:col-span-4 bg-espresso-800 text-cream-100 rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-espresso-700 px-2 py-0.5 rounded">
                Savory & Spicy
              </span>
              <h4 className="font-serif text-xl font-bold text-cream-100">
                Hyderabadi Biryani Papad
              </h4>
              <p className="text-xs text-espresso-200 font-sans leading-relaxed">
                Spicy urad dal papad, Potato Tubes, Potato Curls, Onion Rings, and 3D Magic.
              </p>
            </div>
            <Link to="/products/papad" className="mt-6 text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1">
              <span>Browse 10 SKUs</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 5: Upcoming Duet Series */}
          <div className="md:col-span-4 bg-rosePink-100 text-maroon-900 border-2 border-dashed border-rosePink-500 rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cream-100 bg-maroon-800 px-2 py-0.5 rounded">
                New Teaser
              </span>
              <h4 className="font-serif text-xl font-bold text-maroon-900">
                Duet Series (Mango, Kulfi & Vanilla)
              </h4>
              <p className="text-xs text-espresso-700 font-sans leading-relaxed">
                Dual-cream taste creations launching soon nationwide. Pre-order info available.
              </p>
            </div>
            <Link to="/products/new" className="mt-6 text-xs font-extrabold text-maroon-800 hover:underline inline-flex items-center gap-1">
              <span>View Teaser Details</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

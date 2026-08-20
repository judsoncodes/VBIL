import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { CATEGORIES_LIST } from '../../data/navigation';
import ImagePlaceholder from '../common/ImagePlaceholder';
import RoseMotif from '../common/RoseMotif';
import RoseCTAButton from '../common/RoseCTAButton';

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Product Categories"
          title="Baked for Every Taste &amp; Teatime Moment"
          subtitle="Discover our wide range of tea biscuits, Hyderabadi cookies, crisp rusks, wafers, and savory snacks."
        />

        {/* Asymmetrical Category Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Hero Category Card (Biscuits) - Spans 7 cols */}
          <div className="md:col-span-7 bg-maroon-900 text-cream-100 rounded-3xl p-8 shadow-warm flex flex-col justify-between relative overflow-hidden group border border-gold-500/30 hover:shadow-2xl transition-all duration-500">
            {/* Background Product Photography Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/rose_hero_slide_1.png" 
                alt="Biscuits Range" 
                className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-900/80 to-transparent"></div>
            </div>

            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-10 -translate-y-10 text-gold-400 z-0">
              <RoseMotif size={280} strokeWidth={1} />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-950 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                Tea Biscuits &amp; Crackers
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream-100 drop-shadow-md">
                Biscuits &amp; Crackers
              </h3>

              <p className="text-cream-200 text-sm max-w-md font-sans leading-relaxed drop-shadow-xs">
                From crispy Marie Delite and flaky Saltino crackers to rich Bourbon and Cream Touch varieties in Elachi, Orange, and Strawberry.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-maroon-700/60 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-gold-400 font-bold tracking-wide">
                Variants: 400g Family, 100g, 15g Pocket Packs
              </div>

              <Link
                to="/products/biscuits"
                className="px-5 py-2.5 rounded-xl bg-gold-500 text-espresso-950 font-bold text-xs hover:bg-gold-400 transition-all shadow-md inline-flex items-center gap-2 group-hover:scale-105"
              >
                <span>View All Biscuits</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Secondary Hero Category Card (Cookies) - Spans 5 cols */}
          <div className="md:col-span-5 bg-espresso-950 text-cream-100 rounded-3xl p-8 shadow-warm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group border border-gold-500/30">
            {/* Background Photography Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/rose_hero_slide_3.png" 
                alt="Hyderabadi Cookies" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/70 to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/90 text-espresso-950 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                Oven-Fresh Cookies
              </span>

              <h3 className="font-serif text-3xl font-bold text-cream-100 drop-shadow-md">
                Hyderabadi Cookies
              </h3>

              <p className="text-cream-200 text-sm font-sans leading-relaxed drop-shadow-xs">
                Authentic sweet &amp; salty Osmania, Butter Delite, Kaju, and Birthday Cake cookies baked fresh daily.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cream-100/20 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-gold-400 tracking-wide">Heritage Recipe</span>
              <Link
                to="/products/cookies"
                className="px-4 py-2 rounded-xl bg-maroon-900 text-gold-400 border border-gold-500/30 font-bold text-xs hover:bg-maroon-950 transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Explore Cookies</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Bottom Row - 3 Asymmetric Column Cards */}

          {/* Card 3: Wafers */}
          <div className="md:col-span-4 bg-espresso-900 text-cream-100 rounded-2xl p-6 border border-gold-500/30 shadow-sm hover:shadow-warm transition-all relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img 
                src="/rose_hero_slide_2.png" 
                alt="Wafers & Rolls" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-900/80 to-transparent"></div>
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 bg-espresso-950/80 border border-gold-500/30 px-2.5 py-1 rounded-md inline-block">
                Wafers &amp; Rolls
              </span>
              <h4 className="font-serif text-xl font-bold text-cream-100">
                Chocobullets &amp; Wafer Rolls
              </h4>
              <p className="text-xs text-cream-200 font-sans leading-relaxed">
                Hyderabadi Chocobullets, wafer rolls, and multi-layer fruit cream wafer squares.
              </p>
            </div>
            <Link to="/products/wafers" className="mt-6 text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1 relative z-10">
              <span>Browse 9 SKUs</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 4: Papad & Snacks */}
          <div className="md:col-span-4 bg-maroon-950 text-cream-100 rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all border border-gold-500/30 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img 
                src="/rose_hero_slide_4.png" 
                alt="Papad & Snacks" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/85 to-transparent"></div>
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 bg-maroon-900/90 border border-gold-500/30 px-2.5 py-1 rounded-md inline-block">
                Savory &amp; Spicy
              </span>
              <h4 className="font-serif text-xl font-bold text-cream-100">
                Hyderabadi Biryani Papad
              </h4>
              <p className="text-xs text-cream-200 font-sans leading-relaxed">
                Spicy urad dal papad, Potato Tubes, Potato Curls, Onion Rings, and 3D Magic.
              </p>
            </div>
            <Link to="/products/papad" className="mt-6 text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1 relative z-10">
              <span>Browse 10 SKUs</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 5: Upcoming Duet Series */}
          <div className="md:col-span-4 bg-cream-100 text-espresso-950 border-2 border-dashed border-maroon-800/30 rounded-2xl p-6 shadow-sm hover:shadow-warm transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img 
                src="/rose_hero_slide_5.png" 
                alt="Duet Series" 
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cream-100 bg-maroon-900 px-2.5 py-1 rounded-md inline-block shadow-xs">
                New Teaser
              </span>
              <h4 className="font-serif text-xl font-bold text-maroon-900">
                Duet Series (Mango, Kulfi &amp; Vanilla)
              </h4>
              <p className="text-xs text-espresso-700 font-sans leading-relaxed">
                Dual-cream taste creations launching soon nationwide. Pre-order info available.
              </p>
            </div>
            <Link to="/products/new" className="mt-6 text-xs font-extrabold text-maroon-900 hover:underline inline-flex items-center gap-1 relative z-10">
              <span>View Teaser Details</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import Layout from '../components/layout/Layout';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { COMPANY_DETAILS } from '../data/company';

export default function Leadership() {
  const { md, chairman } = COMPANY_DETAILS.leadership;

  return (
    <Layout
      title="Leadership & Management | Veeramani Biscuit Industries Pvt. Ltd."
      description="Meet the leadership team driving Veeramani Biscuit Industries Pvt. Ltd. (ROSE) - Managing Director P.J.E. Rajiah and Founder Chairman Sri D.S. Jabamany."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Operational Excellence
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Company Leadership
          </h1>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* MD Spotlight Card */}
          <div className="bg-cream-50 rounded-3xl p-8 border border-maroon-800/10 shadow-warm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-cream-300 bg-cream-100 group">
                <img 
                  src={md.image || "/MD.jpg"} 
                  alt={md.name}
                  className="w-full h-auto object-cover object-center max-h-[340px] group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/40 to-transparent p-3 text-center">
                  <span className="text-xs font-bold text-gold-400 block font-serif">
                    {md.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="border-b border-cream-300 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-100 px-2 py-0.5 rounded">
                  Managing Director Since {md.mdSince}
                </span>
                <h2 className="font-serif font-bold text-3xl text-espresso-800 mt-1">
                  {md.name}
                </h2>
                <span className="text-xs font-semibold text-espresso-600">
                  {md.experience}
                </span>
              </div>

              <p className="text-xs md:text-sm text-espresso-700 leading-relaxed font-sans">
                {md.bio}
              </p>
            </div>
          </div>

          {/* Chairman Spotlight Card */}
          <div className="bg-cream-50 rounded-3xl p-8 border border-maroon-800/10 shadow-warm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-cream-300 bg-cream-100 group">
                <img 
                  src={chairman.image || "/Chairmain.jpg"} 
                  alt={chairman.name}
                  className="w-full h-auto object-cover object-center max-h-[340px] group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/40 to-transparent p-3 text-center">
                  <span className="text-xs font-bold text-gold-400 block font-serif">
                    {chairman.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="border-b border-cream-300 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-maroon-800 bg-maroon-800/10 px-2 py-0.5 rounded">
                  Founder &amp; Chairman
                </span>
                <h2 className="font-serif font-bold text-3xl text-espresso-800 mt-1">
                  {chairman.name}
                </h2>
                <span className="text-xs font-semibold text-espresso-600">
                  Born {chairman.birthDate} • {chairman.birthPlace}
                </span>
              </div>

              <p className="text-xs md:text-sm text-espresso-700 leading-relaxed font-sans">
                {chairman.bio}
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

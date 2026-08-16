import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import HeritageBadge from '../components/common/HeritageBadge';
import { COMPANY_DETAILS } from '../data/company';

export default function Chairman() {
  const { chairman } = COMPANY_DETAILS.leadership;

  return (
    <Layout
      title="Founder & Chairman Sri D.S. Jabamany | ROSE Biscuits (VBIL)"
      description="Profile of Sri D.S. Jabamany (b. Sept 8, 1944, Oyangudi village), Founder & Chairman of Veeramani Biscuit Industries Pvt. Ltd. (ROSE)."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Founding Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Chairman Profile: {chairman.name}
          </h1>
          <p className="mt-2 text-gold-400 font-serif italic text-base">
            Founder & Chairman, Veeramani Biscuit Industries Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-cream-50 rounded-3xl p-8 border border-maroon-800/10 shadow-warm">
            <div className="md:col-span-5">
              <ImagePlaceholder
                aspectRatio="1:1"
                title={chairman.name}
                category="Founder & Chairman"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="border-b border-cream-300 pb-3">
                <h2 className="font-serif font-bold text-2xl text-espresso-800">
                  {chairman.name}
                </h2>
                <span className="text-xs font-semibold text-gold-600">
                  Born {chairman.birthDate} • {chairman.birthPlace}
                </span>
              </div>

              <p className="text-xs md:text-sm text-espresso-700 leading-relaxed font-sans">
                {chairman.bio}
              </p>

              <div className="pt-2">
                <blockquote className="border-l-4 border-gold-500 pl-4 py-1 italic text-xs text-maroon-800 font-serif">
                  "Quality is not an accident; it is the result of continuous hard work, honesty, and care for the families who eat our biscuits."
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

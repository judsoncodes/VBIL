import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import HeritageBadge from '../components/common/HeritageBadge';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { COMPANY_DETAILS } from '../data/company';

export default function About() {
  return (
    <Layout
      title="About Us | Veeramani Biscuit Industries Pvt. Ltd. (ROSE)"
      description="Learn about Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE), founded in 1987 in Hyderabad by Founder Sri D.S. Jabamany and MD P.J.E. Rajiah."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Company Overview & Story
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            35+ Years of Bakery Excellence
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-2xl mx-auto">
            From humble beginnings on the outskirts of Hyderabad to an international FMCG manufacturer exporting to 20+ countries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Our Heritage</span>
              <h2 className="text-3xl font-serif font-bold text-espresso-800">
                The ROSE Brand Story
              </h2>
              <p className="text-xs md:text-sm text-espresso-600 leading-relaxed">
                Founded in 1987, Veeramani Biscuit Industries Pvt. Ltd. (formerly VBIPL/VBIL) started with a simple commitment: providing wholesome, delicious, and affordable biscuits to households across Southern India.
              </p>
              <p className="text-xs md:text-sm text-espresso-600 leading-relaxed">
                Today, under the brand name "ROSE", we manufacture over 50+ product varieties including Marie, Osmania cookies, cream wafers, rusks, and spicy papads at our state-of-the-art facility in Kammagudem Village, Turkayamjal.
              </p>
            </div>

            <div>
              <ImagePlaceholder
                aspectRatio="16:9"
                title="Historical Hyderabad Oven Line"
                category="ROSE Heritage"
              />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

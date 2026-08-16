import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { COMPANY_DETAILS } from '../data/company';

export default function Infrastructure() {
  return (
    <Layout
      title="Infrastructure & Turkayamjal Factory | Veeramani Biscuit Industries Pvt. Ltd."
      description="Explore the automated manufacturing lines, rotary cutting, moulding, oven bands, and quality testing labs at Kammagudem Village, Turkayamjal."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Manufacturing Setup
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Factory & Infrastructure
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-xl mx-auto">
            Survey No. 249 & 250, Kammagudem Village, Turkayamjal Post, R.R. District – 501510, Telangana.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            title="Automated High-Speed Production Lines"
            subtitle="Equipped with modern dough mixers, continuous band baking ovens, automatic flow-wrap machinery, and multi-tier warehousing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-maroon-800/10 shadow-sm space-y-4">
              <ImagePlaceholder aspectRatio="16:9" title="Rotary Cutting & Moulding Line" category="Factory Setup" />
              <h3 className="font-serif font-bold text-lg text-espresso-800">Rotary Cutting & Moulding</h3>
              <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                Precision roller dies ensure uniform biscuit dimensions and weight consistency across Marie, Saltino, and Glucose series.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-maroon-800/10 shadow-sm space-y-4">
              <ImagePlaceholder aspectRatio="16:9" title="Continuous Band Baking Ovens" category="Factory Setup" />
              <h3 className="font-serif font-bold text-lg text-espresso-800">Continuous Band Baking</h3>
              <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                Multi-zone gas-fired continuous band ovens deliver golden-brown bake color and crisp texture control.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-maroon-800/10 shadow-sm space-y-4">
              <ImagePlaceholder aspectRatio="16:9" title="Automated Flow Wrapping & Cartoning" category="Packaging Setup" />
              <h3 className="font-serif font-bold text-lg text-espresso-800">High-Speed Flow Packaging</h3>
              <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                Nitrogen-flushed foil pillow packaging preserves crispness and aroma for extended shelf life during domestic and export transit.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}

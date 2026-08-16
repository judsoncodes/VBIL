import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';

export default function Quality() {
  return (
    <Layout
      title="Quality Control | Veeramani Biscuit Industries Pvt. Ltd."
      description="Quality assurance standards, hygiene controls, and testing protocols at Veeramani Biscuit Industries Pvt. Ltd."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Uncompromising Standards
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Quality Control & Food Safety
          </h1>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <SectionHeader
            title="Zero-Touch Automated Baking & Quality Assurance"
            subtitle="Every single batch of ROSE biscuits, wafers, and papads undergoes rigorous sensory, moisture, and micro-biological testing before dispatch."
          />
        </div>
      </section>
    </Layout>
  );
}

import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ProcessSteps from '../components/common/ProcessSteps';

export default function Quality() {
  return (
    <Layout
      title="Quality Control & Food Safety | Veeramani Biscuit Industries Pvt. Ltd."
      description="Quality assurance standards, laboratory testing, automated baking, and hygiene controls at Veeramani Biscuit Industries Pvt. Ltd. (ROSE)."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Uncompromising Standards
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Quality Control &amp; Food Safety
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-xl mx-auto">
            State-of-the-art laboratory testing, automated baking lines, and expert staff checking every batch.
          </p>
        </div>
      </section>

      {/* Manufacturing Process Sequence */}
      <ProcessSteps />

      <section className="py-16 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <SectionHeader
            badge="Laboratory Testing Protocols"
            title="Raw Material, In-Process &amp; Post-Production Testing"
            subtitle="Every single batch of ROSE biscuits, wafers, and papads undergoes rigorous sensory, moisture, and micro-biological testing at our Turkayamjal plant labs."
          />
        </div>
      </section>
    </Layout>
  );
}

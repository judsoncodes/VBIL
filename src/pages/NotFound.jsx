import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RoseDivider from '../components/common/RoseDivider';

export default function NotFound() {
  return (
    <Layout 
      title="Page Not Found | ROSE Biscuits (VBIL)"
      description="The page you are looking for does not exist."
    >
      <div className="py-20 px-4 max-w-4xl mx-auto text-center my-12">
        <div className="w-20 h-20 mx-auto rounded-full bg-maroon-800/10 text-maroon-800 flex items-center justify-center border-2 border-gold-500 mb-6">
          <span className="font-serif font-extrabold text-3xl text-maroon-800">404</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-espresso-800 mb-4">
          Recipe Not Found
        </h1>

        <p className="text-espresso-600 max-w-md mx-auto mb-8 font-sans text-base leading-relaxed">
          The page or product link you followed may have moved or been renamed. Explore our freshly baked product catalog or return to the main homepage.
        </p>

        <RoseDivider className="max-w-xs mx-auto my-6" />

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-maroon-800 text-gold-400 font-semibold text-sm hover:bg-maroon-900 transition-colors shadow-warm border border-gold-500/30"
          >
            Back to Homepage
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 rounded-xl bg-gold-500 text-espresso-900 font-semibold text-sm hover:bg-gold-400 transition-colors shadow-warm"
          >
            View Products Catalog
          </Link>
        </div>
      </div>
    </Layout>
  );
}

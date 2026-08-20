import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS_CATALOG } from '../data/products';
import { CATEGORIES_LIST } from '../data/navigation';
import { Link } from 'react-router-dom';

export default function ProductsHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS_CATALOG 
    : PRODUCTS_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <Layout
      title="Complete ROSE Products Catalog | Biscuits, Cookies, Wafers, Papad & Snacks"
      description="Explore the complete master product catalog of Veeramani Biscuit Industries Pvt. Ltd. (ROSE) - Marie Delite, Osmania cookies, rusks, cream wafers, papad, and snacks."
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Oven-Fresh FMCG Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Our Products Hub
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-xl mx-auto">
            Explore 50+ product SKUs baked with pure ingredients, authentic recipes, and 35+ years of South Indian oven craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-maroon-800 text-gold-400 shadow-md'
                  : 'bg-cream-200 text-espresso-800 hover:bg-cream-300'
              }`}
            >
              All Products ({PRODUCTS_CATALOG.length})
            </button>

            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-maroon-800 text-gold-400 shadow-md'
                    : 'bg-cream-200 text-espresso-800 hover:bg-cream-300'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className="text-[9px] font-extrabold px-1 rounded bg-gold-500 text-espresso-900">
                    {cat.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Product Cards Grid OR Helpful Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-cream-50 rounded-3xl border border-maroon-800/10 max-w-xl mx-auto space-y-4">
              <h3 className="font-serif font-bold text-2xl text-espresso-800">
                No SKUs Listed Under This Filter
              </h3>
              <p className="text-xs text-espresso-600 font-sans leading-relaxed">
                We couldn't find products matching this specific category view. Explore our full range of 50+ flagship biscuits, cookies, and wafers or contact our sales team for custom manufacturing enquiries.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-5 py-2.5 rounded-xl bg-maroon-800 text-gold-400 font-bold text-xs hover:bg-maroon-900 transition-colors"
                >
                  View All 50+ Products
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl bg-gold-500 text-espresso-900 font-bold text-xs hover:bg-gold-400 transition-colors"
                >
                  Contact Sales Team
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
}

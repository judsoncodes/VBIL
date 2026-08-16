import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS_CATALOG } from '../data/products';
import { CATEGORIES_LIST } from '../data/navigation';

export default function CategoryPage() {
  const { categorySlug } = useParams();

  const category = CATEGORIES_LIST.find(c => c.id === categorySlug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = PRODUCTS_CATALOG.filter(p => p.category === categorySlug);

  return (
    <Layout
      title={`${category.name} | ROSE Product Catalog`}
      description={`${category.name} range by Veeramani Biscuit Industries Pvt. Ltd. (ROSE). ${category.description}`}
    >
      <section className="py-16 bg-maroon-800 text-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/products" className="text-xs font-bold text-gold-400 hover:underline block mb-2">
            ← Back to All Product Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            {category.name}
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-xl mx-auto">
            {category.tagline}
          </p>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold text-espresso-600">
              Showing {categoryProducts.length} Product SKUs in {category.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}

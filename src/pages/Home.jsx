import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import HeritageTimeline from '../components/home/HeritageTimeline';
import ExportMapSection from '../components/home/ExportMapSection';
import InfrastructureTeaser from '../components/home/InfrastructureTeaser';
import ContactTeaser from '../components/home/ContactTeaser';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS_CATALOG } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  // Select top featured SKUs across categories
  const featuredProducts = PRODUCTS_CATALOG.filter(p => p.badge).slice(0, 4);

  return (
    <Layout
      title="ROSE Biscuits | Veeramani Biscuit Industries Pvt. Ltd. (Est. 1987)"
      description="Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE) - Premier South Indian manufacturer & exporter of premium biscuits, cookies, rusks, wafers, papad, and snacks since 1987."
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Category Asymmetrical Grid */}
      <CategoryGrid />

      {/* 3. Featured Bestsellers Showcase */}
      <section className="py-20 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Customer Favorites"
            title="Featured Bestsellers & Heritage Specialties"
            subtitle="Handpicked favorites loved across South India and export markets."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-maroon-800 text-gold-400 font-bold text-sm hover:bg-maroon-900 transition-colors shadow-warm border border-gold-500/30"
            >
              <span>Explore Complete 50+ Product Catalog</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Heritage Timeline ("Since 1987") */}
      <HeritageTimeline />

      {/* 5. Global Export Footprint */}
      <ExportMapSection />

      {/* 6. Infrastructure & Turkayamjal Factory */}
      <InfrastructureTeaser />

      {/* 7. Distributor Contact Callout */}
      <ContactTeaser />
    </Layout>
  );
}

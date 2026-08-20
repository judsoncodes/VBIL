import React from 'react';
import Layout from '../components/layout/Layout';
import B2BHeroSection from '../components/home/B2BHeroSection';
import TrustSignals from '../components/home/TrustSignals';
import ScrollableFoodShowcase from '../components/home/ScrollableFoodShowcase';
import CategoryGrid from '../components/home/CategoryGrid';
import HeritageTimeline from '../components/home/HeritageTimeline';
import ExportMapSection from '../components/home/ExportMapSection';
import ContactTeaser from '../components/home/ContactTeaser';
import B2BQuoteDrawer from '../components/home/B2BQuoteDrawer';
import ProductCard from '../components/common/ProductCard';
import SectionHeader from '../components/common/SectionHeader';
import { PRODUCTS_CATALOG } from '../data/products';
import { Link } from 'react-router-dom';
import RoseCTAButton from '../components/common/RoseCTAButton';

export default function Home() {
  // Select top featured SKUs across categories
  const featuredProducts = PRODUCTS_CATALOG.filter(p => p.badge).slice(0, 4);

  return (
    <Layout
      title="ROSE Biscuits | Veeramani Biscuit Industries Pvt. Ltd. (Est. 1987) — B2B Wholesale Portal"
      description="Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE) - Premier South Indian B2B manufacturer & exporter of premium biscuits, cookies, rusks, wafers, papad, and snacks since 1987."
    >
      {/* 1. B2B High-Converting Hero Section */}
      <B2BHeroSection />

      {/* 2. Compact Authoritative Trust Signals Strip */}
      <TrustSignals />

      {/* 3. MAIN FEATURE: Interactive Scrollable Food Showcase with Case Packing Indicators */}
      <ScrollableFoodShowcase />

      {/* 4. Asymmetrical Category Grid Navigator */}
      <CategoryGrid />

      {/* 5. Featured Bestsellers Grid */}
      <section className="py-20 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Customer Favorites"
            title="Featured Bestsellers &amp; Heritage Specialties"
            subtitle="Handpicked favorites loved across South India and export markets."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <RoseCTAButton
              variant="primary"
              label="Explore Complete 50+ Product Catalog"
              to="/products"
            />
          </div>
        </div>
      </section>

      {/* 6. Heritage Timeline ("Since 1987") */}
      <HeritageTimeline />

      {/* 7. Global & Regional Footprint (Includes Unified Export Flags) */}
      <ExportMapSection />

      {/* 8. Distributor Contact Callout */}
      <ContactTeaser />

      {/* Sticky B2B Bulk Order Quote Drawer Dock (Includes Folded 3-Step Process Guide) */}
      <B2BQuoteDrawer />
    </Layout>
  );
}

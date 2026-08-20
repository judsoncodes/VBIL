import React from 'react';
import Layout from '../components/layout/Layout';
import B2BHeroSection from '../components/home/B2BHeroSection';
import WhyTradePartnersChooseRose from '../components/home/WhyTradePartnersChooseRose';
import ExportFlagStrip from '../components/home/ExportFlagStrip';
import ManufacturingAuthority from '../components/home/ManufacturingAuthority';
import DistributorProof from '../components/home/DistributorProof';
import BusinessUseCases from '../components/home/BusinessUseCases';
import ExportReadiness from '../components/home/ExportReadiness';
import ScrollableFoodShowcase from '../components/home/ScrollableFoodShowcase';
import HowBulkOrderingWorks from '../components/home/HowBulkOrderingWorks';
import CategoryGrid from '../components/home/CategoryGrid';
import WholesaleCalculator from '../components/home/WholesaleCalculator';
import HeritageTimeline from '../components/home/HeritageTimeline';
import ExportMapSection from '../components/home/ExportMapSection';
import InfrastructureTeaser from '../components/home/InfrastructureTeaser';
import ProcessSteps from '../components/common/ProcessSteps';
import ContactTeaser from '../components/home/ContactTeaser';
import B2BQuoteDrawer from '../components/home/B2BQuoteDrawer';
import ProductCard from '../components/common/ProductCard';
import SectionHeader from '../components/common/SectionHeader';
import { PRODUCTS_CATALOG } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  // Select top featured SKUs across categories
  const featuredProducts = PRODUCTS_CATALOG.filter(p => p.badge).slice(0, 4);

  return (
    <Layout
      title="ROSE Biscuits | Veeramani Biscuit Industries Pvt. Ltd. (Est. 1987) — B2B Wholesale Portal"
      description="Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE®) - Premier South Indian FMCG bakery manufacturer & exporter since 1987. High-capacity baking, automated quality control, regional retail distribution, and shipping to 20+ countries."
    >
      {/* 1. CINEMATIC EDITORIAL HERO SECTION */}
      <B2BHeroSection />

      {/* 2. WHY TRADE PARTNERS CHOOSE ROSE (Replaces generic Trust Signals) */}
      <WhyTradePartnersChooseRose />

      {/* 3. VERIFIED FACT FEATURE: Export Countries Flag Strip (20+ Nations) */}
      <ExportFlagStrip />

      {/* 4. MANUFACTURING AUTHORITY & CAPACITY (Automated baking lines, 4-stage quality control) */}
      <ManufacturingAuthority />

      {/* 5. DISTRIBUTOR PROOF LAYER (6 Southern States, 50,000+ Retail Outlets Reach) */}
      <DistributorProof />

      {/* 6. BUSINESS USE CASES (Kirana, Modern Trade, Institutional, Gifting, Export) */}
      <BusinessUseCases />

      {/* 7. DEDICATED EXPORT READINESS (FCL Container Shipping, APEDA, International Packaging) */}
      <ExportReadiness />

      {/* 8. INTERACTIVE SCROLLABLE FOOD SHOWCASE (Case Pack Indicators & Direct Quote Addition) */}
      <ScrollableFoodShowcase />

      {/* 9. 3-STEP VISUAL GUIDE: How Bulk Ordering Works for Trade Partners */}
      <HowBulkOrderingWorks />

      {/* 10. Asymmetrical Category Grid Navigator */}
      <CategoryGrid />

      {/* 11. Interactive Wholesale Tier & Margin Estimator */}
      <WholesaleCalculator />

      {/* 12. Featured Bestsellers Grid with Commercial Trade Specs */}
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
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-maroon-900 text-gold-400 font-bold text-sm hover:bg-maroon-950 transition-colors shadow-warm border border-gold-500/30"
            >
              <span>Explore Complete 50+ Product Catalog</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Heritage Timeline ("Since 1987") */}
      <HeritageTimeline />

      {/* 14. Global & Regional Footprint */}
      <ExportMapSection />

      {/* 15. Infrastructure & Turkayamjal Factory */}
      <InfrastructureTeaser />

      {/* 16. "Behind the Bake" Manufacturing Process Sequence */}
      <ProcessSteps />

      {/* 17. Distributor Contact Callout */}
      <ContactTeaser />

      {/* 18. Sticky B2B Bulk Order Quote Drawer Dock */}
      <B2BQuoteDrawer />
    </Layout>
  );
}

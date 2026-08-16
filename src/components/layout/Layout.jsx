import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component wrapping all page routes.
 * Dynamically handles Helmet meta tags, canonical links, OpenGraph imagery, and scroll restoration.
 */
export default function Layout({ 
  children, 
  title = "ROSE Biscuits | Veeramani Biscuit Industries Pvt. Ltd.",
  description = "Veeramani Biscuit Industries Pvt. Ltd. (brand: ROSE) - Premier South Indian manufacturer & exporter of premium biscuits, cookies, rusks, wafers, papad, and snacks since 1987.",
  ogImage = "/og-image.jpg"
}) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const canonicalUrl = `https://veeramanibiscuits.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-espresso-800 antialiased selection:bg-gold-500 selection:text-maroon-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph / Social Share */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

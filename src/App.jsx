import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import InitialLoader from './components/common/InitialLoader';
import Home from './pages/Home';
import About from './pages/About';
import Quality from './pages/Quality';
import ProductsHub from './pages/ProductsHub';
import CategoryPage from './pages/CategoryPage';
import Chairman from './pages/Chairman';
import Leadership from './pages/Leadership';
import Infrastructure from './pages/Infrastructure';
import Distributors from './pages/Distributors';
import OrderRequest from './pages/OrderRequest';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Aesthetic Initial Loading Screen (Triggers on visit & page refresh) */}
      <InitialLoader />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/products" element={<ProductsHub />} />
            <Route path="/products/:categorySlug" element={<CategoryPage />} />
            <Route path="/chairman" element={<Chairman />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/distributors" element={<Distributors />} />
            <Route path="/order-request" element={<OrderRequest />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

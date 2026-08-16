import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Quality from './pages/Quality';
import ProductsHub from './pages/ProductsHub';
import CategoryPage from './pages/CategoryPage';
import Chairman from './pages/Chairman';
import Leadership from './pages/Leadership';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/products" element={<ProductsHub />} />
      <Route path="/products/:categorySlug" element={<CategoryPage />} />
      <Route path="/chairman" element={<Chairman />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/contact" element={<Contact />} />
      {/* Catch-all 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

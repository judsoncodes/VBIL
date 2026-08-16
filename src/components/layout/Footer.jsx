import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../../data/company';
import { NAVIGATION_LINKS, CATEGORIES_LIST } from '../../data/navigation';
import HeritageBadge from '../common/HeritageBadge';

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-200 pt-16 pb-12 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 20 C35 20 25 32 25 45 C25 60 50 80 50 80 C50 80 75 60 75 45 C75 32 65 20 50 20 Z" fill="#D9A441" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-espresso-700">
          
          {/* Col 1 & 2: Brand Story & Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-maroon-800 border-2 border-gold-500 flex items-center justify-center text-cream-100 shadow-sm">
                <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.2 2 7 4.2 7 7C7 9.5 8.7 11.6 11 12.2V17H9V19H15V17H13V12.2C15.3 11.6 17 9.5 17 7C17 4.2 14.8 2 12 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream-100 tracking-wider">
                  ROSE BISCUITS
                </h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">
                  Veeramani Biscuit Industries Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-sm text-espresso-200 leading-relaxed max-w-sm">
              Established in 1987 in Hyderabad, India. Manufacturers & global exporters of premium biscuits, cookies, rusks, wafer rolls, and snack foods across 20+ countries.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <HeritageBadge size="sm" />
              <div className="text-xs space-y-1">
                <span className="text-gold-400 font-bold block">FSSAI & Export Certified</span>
                <span className="text-espresso-300 block">South India's Trusted FMCG Bakery</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-gold-400 mb-4 border-b border-espresso-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAVIGATION_LINKS.filter(l => !l.dropdown).map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-espresso-200"
                  >
                    <span className="text-gold-500">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-espresso-200 font-semibold">
                  <span className="text-gold-500">›</span>
                  <span>Products Catalog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Product Categories */}
          <div>
            <h4 className="font-serif font-bold text-base text-gold-400 mb-4 border-b border-espresso-700 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_LIST.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={cat.path} 
                    className="hover:text-gold-400 transition-colors flex items-center justify-between text-espresso-200"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-espresso-400 bg-espresso-800 px-1.5 py-0.5 rounded">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Verified Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-base text-gold-400 mb-4 border-b border-espresso-700 pb-2">
              Registered Office
            </h4>
            <address className="not-italic text-xs text-espresso-200 space-y-3 leading-relaxed">
              <p>
                <strong className="text-cream-100 block">Factory & Regd. Address:</strong>
                {COMPANY_DETAILS.address.registeredOffice}
              </p>
              <p>
                <strong className="text-cream-100 block">Phone Enquiries:</strong>
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-gold-400 hover:underline">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <div>
                <strong className="text-cream-100 block mb-0.5">Email Support:</strong>
                <a href={`mailto:${COMPANY_DETAILS.emails.info}`} className="block text-espresso-300 hover:text-gold-400">
                  {COMPANY_DETAILS.emails.info}
                </a>
                <a href={`mailto:${COMPANY_DETAILS.emails.marketing}`} className="block text-espresso-300 hover:text-gold-400">
                  {COMPANY_DETAILS.emails.marketing}
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-espresso-400">
          <p>© {new Date().getFullYear()} Veeramani Biscuit Industries Pvt. Ltd. (ROSE). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Terms of Business</Link>
            <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

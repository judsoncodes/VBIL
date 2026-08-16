import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../../data/company';
import { NAVIGATION_LINKS, CATEGORIES_LIST } from '../../data/navigation';
import HeritageBadge from '../common/HeritageBadge';
import RoseMotif from '../common/RoseMotif';
import RoseLogo from '../common/RoseLogo';

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-200 pt-16 pb-12 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Background Watermark featuring single signature Rose Motif */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4 text-gold-400">
        <RoseMotif size={360} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-espresso-700">
          
          {/* Col 1 & 2: Brand Story & Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block hover:scale-105 transition-transform">
              <RoseLogo height={58} variant="full" light={true} />
            </Link>



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

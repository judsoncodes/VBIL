import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../data/navigation';
import { COMPANY_DETAILS } from '../../data/company';
import RoseLogo from '../common/RoseLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Strip */}
      <div className="bg-maroon-900 text-cream-200 text-xs py-1.5 px-4 font-sans border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              Exporting to 20+ Countries
            </span>
            <span className="hidden md:inline text-cream-300/40">•</span>
            <span className="hidden md:inline text-cream-300">Est. 1987 | Hyderabad, India</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} 
              className="hover:text-gold-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <svg className="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-cream-300/40">|</span>
            <Link to="/contact" className="hover:text-gold-400 font-semibold text-gold-400 underline">
              Distributor Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-warm border-maroon-800/10 py-2.5' 
            : 'bg-cream-100 border-maroon-800/10 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official ROSE Brand Logo */}
          <Link to="/" className="flex items-center group focus:outline-none hover:scale-105 transition-transform">
            <RoseLogo height={52} variant="full" />
          </Link>


          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.dropdown && location.pathname.startsWith('/products'));

              if (link.dropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                        isActive 
                          ? 'text-maroon-800 bg-gold-500/15' 
                          : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-200/50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-cream-50 rounded-xl shadow-warm-hover border border-maroon-800/10 p-2 py-3 mt-1 grid gap-1 animate-fadeIn z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`p-2.5 rounded-lg transition-colors flex flex-col ${
                              location.pathname === subItem.path
                                ? 'bg-maroon-800 text-cream-100'
                                : 'hover:bg-cream-200/70 text-espresso-800'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold font-serif">{subItem.name}</span>
                              {subItem.badge && (
                                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-gold-500 text-espresso-900">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            <span className={`text-[11px] mt-0.5 ${location.pathname === subItem.path ? 'text-cream-300' : 'text-espresso-600'}`}>
                              {subItem.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'text-maroon-800 bg-gold-500/15' 
                      : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-200/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-maroon-800 text-gold-400 font-semibold text-xs hover:bg-maroon-900 transition-colors shadow-sm border border-gold-500/30"
            >
              <span>Get Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-maroon-800 hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-t border-maroon-800/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold ${
                    location.pathname === link.path ? 'bg-maroon-800 text-gold-400' : 'text-espresso-800 hover:bg-cream-200'
                  }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-gold-500/30">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block px-3 py-1.5 text-xs font-medium rounded ${
                          location.pathname === sub.path ? 'text-maroon-800 font-bold bg-gold-100' : 'text-espresso-600 hover:text-maroon-800'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

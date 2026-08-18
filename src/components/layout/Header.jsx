import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { NAVIGATION_LINKS } from '../../data/navigation';
import { COMPANY_DETAILS } from '../../data/company';
import RoseLogo from '../common/RoseLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Past 100px triggers shrunk header styling
      setIsScrolled(currentScrollY > 100);

      // Smart Sticky reveal on scroll UP, hide on scroll DOWN (past 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY + 5) {
          // Scrolling down - hide header unless mobile menu is open
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 5) {
          // Scrolling up - reveal header
          setIsVisible(true);
        }
      } else {
        // At the top - always visible
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Keep header visible if mobile drawer is active
  const activeVisibility = isVisible || mobileMenuOpen;

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full"
      initial={{ y: 0 }}
      animate={{ y: (activeVisibility || shouldReduceMotion) ? 0 : "-100%" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
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
            <Link to="/distributors" className="hover:text-gold-400 font-semibold text-gold-400 underline">
              Distributor Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Scroll-Aware Padding & Shadow */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-cream-100/95 backdrop-blur-md shadow-warm border-maroon-800/15 py-2' 
            : 'bg-cream-100 border-transparent py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official ROSE Brand Logo - Shrinks smoothly on scroll */}
          <Link to="/" className="flex items-center group focus:outline-none hover:scale-105 transition-transform">
            <RoseLogo height={isScrolled ? 42 : 52} variant="full" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.dropdown && link.dropdown.some(sub => location.pathname === sub.path));
              const isOpen = activeDropdown === link.name;

              if (link.dropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                        isActive || isOpen
                          ? 'text-maroon-800 bg-gold-500/20 shadow-sm' 
                          : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-200/60'
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-maroon-800' : 'text-espresso-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Grouped Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 w-80 bg-cream-50 rounded-2xl shadow-warm-hover border border-maroon-800/10 p-2.5 mt-1 grid gap-1 animate-fadeIn z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`p-2.5 rounded-xl transition-colors flex flex-col ${
                              location.pathname === subItem.path
                                ? 'bg-maroon-800 text-cream-100 shadow-sm'
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
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive 
                      ? 'text-maroon-800 bg-gold-500/20 shadow-sm' 
                      : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-200/60'
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
    </motion.header>
  );
}

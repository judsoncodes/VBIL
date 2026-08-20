import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../data/navigation';
import { COMPANY_DETAILS } from '../../data/company';
import RoseLogo from '../common/RoseLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-cream-50">
      {/* Top Banner Strip */}
      <div className="bg-maroon-950 text-cream-200 text-xs py-2 px-4 font-sans border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-bold tracking-wider uppercase text-[11px]">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Exporting to 20+ Countries
            </span>
            <span className="hidden md:inline text-cream-400/30">•</span>
            <span className="hidden md:inline text-cream-200/90 text-xs font-medium">Est. 1987 | Hyderabad, India</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} 
              className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-cream-100 font-semibold"
            >
              <svg className="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.1 1.1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-cream-400/30">|</span>
            <Link to="/distributors" className="hover:text-gold-300 font-bold text-gold-400 transition-colors">
              Distributor Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 border-b border-gold-500/20 bg-cream-50/98 transform-gpu ${
          isScrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official ROSE Brand Logo */}
          <Link to="/" className="flex items-center group focus:outline-none hover:opacity-95 transition-opacity">
            <RoseLogo height={isScrolled ? 42 : 50} variant="full" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
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
                      className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all flex items-center gap-1.5 relative ${
                        isActive || isOpen
                          ? 'text-maroon-950 font-extrabold bg-maroon-900/10' 
                          : 'text-espresso-950 hover:text-maroon-900 hover:bg-cream-200/70'
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-maroon-900' : 'text-espresso-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Grouped Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 w-72 bg-cream-50 rounded-2xl shadow-xl border border-gold-500/30 p-2.5 mt-1 grid gap-1 animate-fadeIn z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`p-2.5 rounded-xl transition-colors flex flex-col ${
                              location.pathname === subItem.path
                                ? 'bg-maroon-900 text-cream-100 shadow-sm'
                                : 'hover:bg-cream-200/80 text-espresso-900'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold font-serif">{subItem.name}</span>
                              {subItem.badge && (
                                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-gold-500 text-espresso-950">
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
                  className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all ${
                    isActive 
                      ? 'text-maroon-950 font-extrabold bg-maroon-900/10' 
                      : 'text-espresso-950 hover:text-maroon-900 hover:bg-cream-200/70'
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
              to="/order-request"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-maroon-900 text-gold-400 font-bold text-xs tracking-wider uppercase hover:bg-maroon-950 transition-all shadow-sm border border-gold-500/40 hover:scale-105"
            >
              <span>Get Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-maroon-900 hover:bg-cream-200 focus:outline-none"
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
          <div className="lg:hidden bg-cream-50 border-t border-gold-500/20 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-xl text-sm font-bold ${
                    location.pathname === link.path ? 'bg-maroon-900 text-gold-400' : 'text-espresso-900 hover:bg-cream-200'
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
                        className={`block px-3 py-1.5 text-xs font-bold rounded-lg ${
                          location.pathname === sub.path ? 'text-maroon-900 bg-gold-100' : 'text-espresso-700 hover:text-maroon-900'
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

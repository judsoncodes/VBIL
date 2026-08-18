import React from 'react';

const EXPORT_DESTINATIONS = [
  { name: 'United Arab Emirates', code: '🇦🇪' },
  { name: 'Saudi Arabia', code: '🇸🇦' },
  { name: 'United States', code: '🇺🇸' },
  { name: 'United Kingdom', code: '🇬🇧' },
  { name: 'Kuwait', code: '🇰🇼' },
  { name: 'Oman', code: '🇴🇲' },
  { name: 'Qatar', code: '🇶🇦' },
  { name: 'Singapore', code: '🇸🇬' },
  { name: 'Malaysia', code: '🇲🇾' },
  { name: 'Australia', code: '🇦🇺' },
  { name: 'Canada', code: '🇨🇦' },
  { name: 'New Zealand', code: '🇳🇿' },
  { name: 'Kenya', code: '🇰🇪' },
  { name: 'South Africa', code: '🇿🇦' },
  { name: 'Mauritius', code: '🇲🇺' },
  { name: 'Sri Lanka', code: '🇱🇰' }
];

export default function ExportFlagStrip() {
  return (
    <section className="py-6 bg-gradient-to-r from-espresso-950 via-maroon-950 to-espresso-950 text-cream-100 border-y border-gold-500/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse"></span>
          <h3 className="font-serif text-xs font-bold uppercase tracking-widest text-gold-400">
            Global Footprint • Shipping Direct Container Cargo to 20+ Export Nations
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-cream-300 hidden sm:inline-block">
          Export Cargo &amp; Seaworthy Packaging
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="flex overflow-hidden select-none space-x-6 py-1">
        <div className="flex items-center space-x-6 animate-marquee whitespace-nowrap">
          {EXPORT_DESTINATIONS.concat(EXPORT_DESTINATIONS).map((country, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-maroon-900/60 border border-gold-500/20 text-xs font-bold text-cream-100 shadow-xs"
            >
              <span className="text-base">{country.code}</span>
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

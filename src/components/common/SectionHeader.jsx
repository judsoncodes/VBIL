import React from 'react';

/**
 * Standardized Section Title Header with optional badge and subtitle
 */
export default function SectionHeader({
  badge = "ROSE Bakery Heritage",
  title,
  subtitle,
  center = true,
  className = ""
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-gold-100 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-espresso-800 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-espresso-600 max-w-2xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

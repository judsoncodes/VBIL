import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

/**
 * RoseCTAButton — Branded Call-To-Action Button
 *
 * Font: `font-sans` (Plus Jakarta Sans) — the UI action font of the ROSE brand system.
 * Headings use `font-display`/`font-serif` (Fraunces); buttons use `font-sans` for
 * clean legibility and professional B2B tone.
 *
 * Props:
 *   variant  - "primary" | "ghost" | "outline"   (default: "primary")
 *   label    - Button label text
 *   to       - React Router internal link (renders <Link>)
 *   href     - Native anchor scroll/external link (renders <a>)
 *   onClick  - Click handler (renders <button>)
 *   showGear - Boolean — show a spinning Settings icon prefix
 *   badgeCount - Number — show a count badge (e.g. cart total)
 *   className - Extra Tailwind classes to merge
 */
const VARIANTS = {
  primary: [
    'bg-maroon-900 text-gold-400',
    'border border-gold-500/40',
    'hover:bg-maroon-950 hover:text-gold-300 hover:border-gold-500/70',
    'shadow-sm hover:shadow-md',
    'active:scale-[0.97]',
  ].join(' '),

  ghost: [
    'bg-transparent text-espresso-900',
    'border border-espresso-900/40',
    'hover:border-maroon-900 hover:text-maroon-900 hover:bg-maroon-900/5',
    'active:scale-[0.97]',
  ].join(' '),

  outline: [
    'bg-transparent text-cream-100',
    'border border-cream-100/40',
    'hover:border-gold-400 hover:text-gold-400 hover:bg-cream-100/5',
    'active:scale-[0.97]',
  ].join(' '),
};

const BASE =
  'inline-flex items-center justify-center gap-2 ' +
  /* ── FONT: Plus Jakarta Sans (font-sans) ── */
  'font-sans font-bold text-sm ' +
  'uppercase tracking-widest ' +
  'px-7 py-3 rounded-full ' +
  'transition-all duration-200 ease-out ' +
  'whitespace-nowrap select-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

export default function RoseCTAButton({
  variant = 'primary',
  label,
  to,
  href,
  onClick,
  showGear = false,
  badgeCount,
  className = '',
  ...rest
}) {
  const cls = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`;

  const inner = (
    <>
      {showGear && (
        <Settings
          size={14}
          strokeWidth={2.5}
          className="shrink-0 animate-[spin_8s_linear_infinite]"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
      {badgeCount !== undefined && (
        <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1.5 text-[10px] font-extrabold text-espresso-900 leading-none">
          {badgeCount}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  );
}

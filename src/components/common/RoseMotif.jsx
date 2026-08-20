import React from 'react';

/**
 * VBI Logo Emblem — renders the actual original logo (logotab.png), not a
 * hand-drawn recreation. This guarantees pixel-exact fidelity to the source
 * artwork instead of an approximated line-art interpretation.
 *
 * Because the source logo is a full-color filled emblem (red circle, white
 * lettering, black outline) rather than a flat monoline icon, it is NOT a
 * good candidate for a `currentColor` stroke-based SVG — recoloring would
 * break the brand mark. This component renders the actual logo asset directly.
 */
export default function RoseMotif({
  size = 24,
  className = '',
  src = '/vbi-logo.svg',
  alt = 'VBI Logo',
  // Safely destructure unused stroke/color props to maintain backwards
  // compatibility with existing call sites that pass these props.
  color,
  strokeWidth,
  animate,
  ...restProps
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      className={`inline-block shrink-0 object-contain ${className}`}
      draggable={false}
      {...restProps}
    />
  );
}
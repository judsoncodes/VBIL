import React from 'react';

/**
 * VBI Logo Emblem — renders the actual original logo (logotab.png), not a
 * hand-drawn recreation. This guarantees pixel-exact fidelity to the source
 * artwork instead of an approximated line-art interpretation.
 *
 * Setup:
 * 1. Logo asset location: /public/logotab.png (or /public/logo/vbi-logo.png)
 * 2. Point `src` below at the emblem asset.
 *
 * Because the source logo is a full-color filled emblem (red circle, white
 * lettering, black outline) rather than a flat monoline icon, it is NOT a
 * good candidate for a `currentColor` stroke-based SVG — recoloring would
 * break the brand mark. This component renders the actual logo asset directly as an img.
 */
export default function RoseMotif({
  size = 24,
  className = "",
  src = "/logotab.png",
  alt = "VBI Logo",
  // Destructure unused stroke/color props safely to maintain backwards compatibility with existing call sites
  color,
  strokeWidth,
  animate,
  ...restProps
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size }}
      className={`inline-block shrink-0 object-contain ${className}`}
      draggable={false}
      {...restProps}
    />
  );
}

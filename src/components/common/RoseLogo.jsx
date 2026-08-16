import React from 'react';

/**
 * Official ROSE Brand Logo Component.
 * Vector implementation strictly retaining the authentic vibrant brand red (#ED1C24) color:
 * - Bright Red (#ED1C24) oval badge with italic "ROSE®" wordmark and signature white swoosh
 * - Red "BISCUIT" label
 * - Red "PURE JOY" ribbon banner with white lettering
 * - Red "Tasty & Healthy" tagline
 */
export default function RoseLogo({ 
  variant = "full", 
  height = 56, 
  className = "",
  light = false 
}) {
  // Authentic Red Brand Color from original logo asset
  const redColor = "#ED1C24"; 
  const lightBgText = light ? "#F7EFE1" : redColor;

  if (variant === "compact") {
    return (
      <svg 
        height={height} 
        viewBox="0 0 200 65" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-label="ROSE Biscuits Logo"
      >
        {/* Oval Badge in Authentic Red */}
        <ellipse cx="100" cy="30" rx="90" ry="26" fill={redColor} />
        
        {/* ROSE Text */}
        <text 
          x="100" 
          y="38" 
          fontFamily="'Playfair Display', Georgia, serif" 
          fontSize="32" 
          fontWeight="900" 
          fontStyle="italic"
          fill="#FFFFFF" 
          textAnchor="middle"
          letterSpacing="1"
        >
          ROSE
        </text>
        
        {/* Signature Underline Swoosh */}
        <path 
          d="M 38 42 C 55 48, 120 48, 155 40 C 130 46, 65 46, 38 42 Z" 
          fill="#FFFFFF" 
        />
        
        {/* Registered Mark */}
        <text x="178" y="18" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#FFFFFF">®</text>
      </svg>
    );
  }

  return (
    <svg 
      height={height} 
      viewBox="0 0 240 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="Veeramani ROSE Biscuits Pure Joy Logo"
    >
      {/* 1. Top Oval Badge in Authentic Brand Red (#ED1C24) */}
      <ellipse cx="120" cy="30" rx="85" ry="24" fill={redColor} />
      
      {/* ROSE Wordmark in Crisp White */}
      <text 
        x="120" 
        y="37" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="30" 
        fontWeight="900" 
        fontStyle="italic"
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="1.5"
      >
        ROSE
      </text>

      {/* Signature Underline Swoosh */}
      <path 
        d="M 60 40 C 78 46, 138 46, 172 38 C 148 44, 88 44, 60 40 Z" 
        fill="#FFFFFF" 
      />

      {/* Registered Mark */}
      <text x="194" y="18" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#FFFFFF">®</text>

      {/* 2. Sub-label: BISCUIT (Authentic Red) */}
      <text 
        x="120" 
        y="62" 
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
        fontSize="9" 
        fontWeight="800" 
        fill={light ? "#F7EFE1" : redColor} 
        textAnchor="middle"
        letterSpacing="3"
      >
        BISCUIT
      </text>

      {/* 3. Pure Joy Ribbon Banner */}
      {/* Ribbon Left Tail */}
      <path d="M 25 72 L 45 66 L 45 78 Z" fill={redColor} />
      <path d="M 15 72 L 30 68 L 30 76 Z" fill={redColor} opacity="0.8" />
      
      {/* Ribbon Right Tail */}
      <path d="M 215 72 L 195 66 L 195 78 Z" fill={redColor} />
      <path d="M 225 72 L 210 68 L 210 76 Z" fill={redColor} opacity="0.8" />

      {/* Main Ribbon Body in Authentic Red */}
      <rect x="42" y="66" width="156" height="14" rx="2" fill={redColor} />

      <text 
        x="120" 
        y="76.5" 
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
        fontSize="9" 
        fontWeight="900" 
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="2.5"
      >
        PURE JOY
      </text>

      {/* 4. Bottom Tagline: Tasty & Healthy */}
      <text 
        x="120" 
        y="92" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="11" 
        fontWeight="700" 
        fontStyle="italic"
        fill={light ? "#F7EFE1" : redColor} 
        textAnchor="middle"
        letterSpacing="0.5"
      >
        Tasty &amp; Healthy
      </text>
    </svg>
  );
}

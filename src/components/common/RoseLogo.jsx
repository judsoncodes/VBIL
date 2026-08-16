import React from 'react';

/**
 * Official ROSE Brand Logo Component.
 * Vector implementation replicating the exact legacy emblem:
 * - Stylized "ROSE" oval badge with signature swoosh underline & ® mark
 * - "BISCUIT" text label
 * - "PURE JOY" ribbon banner with decorative tails
 * - "Tasty & Healthy" tagline
 */
export default function RoseLogo({ 
  variant = "full", 
  height = 56, 
  className = "",
  light = false 
}) {
  const primaryColor = light ? "#F7EFE1" : "#5C1A1A"; // Deep Maroon/Oxblood or Cream
  const accentColor = light ? "#D9A441" : "#D9A441";  // Warm Biscuit-Gold
  const textColor = light ? "#F7EFE1" : "#241A15";

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
        {/* Oval Badge */}
        <ellipse cx="100" cy="30" rx="90" ry="26" fill={primaryColor} />
        {/* Gold Outer Border Ring */}
        <ellipse cx="100" cy="30" rx="88" ry="24" stroke={accentColor} strokeWidth="1.5" fill="none" />
        
        {/* ROSE Text */}
        <text 
          x="100" 
          y="38" 
          fontFamily="'Playfair Display', Georgia, serif" 
          fontSize="32" 
          fontWeight="900" 
          fontStyle="italic"
          fill="#FFFDF9" 
          textAnchor="middle"
          letterSpacing="1"
        >
          ROSE
        </text>
        
        {/* Signature Underline Swoosh */}
        <path 
          d="M 38 42 C 55 48, 120 48, 155 40 C 130 46, 65 46, 38 42 Z" 
          fill="#FFFDF9" 
        />
        
        {/* Registered Mark */}
        <text x="178" y="18" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#FFFDF9">®</text>
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
      {/* 1. Top Oval Badge */}
      <ellipse cx="120" cy="30" rx="85" ry="24" fill={primaryColor} />
      <ellipse cx="120" cy="30" rx="83" ry="22" stroke={accentColor} strokeWidth="1.5" fill="none" />
      
      {/* ROSE Wordmark */}
      <text 
        x="120" 
        y="37" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="30" 
        fontWeight="900" 
        fontStyle="italic"
        fill="#FFFDF9" 
        textAnchor="middle"
        letterSpacing="1.5"
      >
        ROSE
      </text>

      {/* Signature Underline Swoosh */}
      <path 
        d="M 60 40 C 78 46, 138 46, 172 38 C 148 44, 88 44, 60 40 Z" 
        fill="#FFFDF9" 
      />

      {/* Registered Mark */}
      <text x="194" y="18" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#FFFDF9">®</text>

      {/* 2. Sub-label: BISCUIT */}
      <text 
        x="120" 
        y="62" 
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
        fontSize="9" 
        fontWeight="800" 
        fill={primaryColor} 
        textAnchor="middle"
        letterSpacing="3"
      >
        BISCUIT
      </text>

      {/* 3. Pure Joy Ribbon Banner */}
      {/* Ribbon Left Tail */}
      <path d="M 25 72 L 45 66 L 45 78 Z" fill={primaryColor} />
      <path d="M 15 72 L 30 68 L 30 76 Z" fill={primaryColor} opacity="0.8" />
      
      {/* Ribbon Right Tail */}
      <path d="M 215 72 L 195 66 L 195 78 Z" fill={primaryColor} />
      <path d="M 225 72 L 210 68 L 210 76 Z" fill={primaryColor} opacity="0.8" />

      {/* Main Ribbon Body */}
      <rect x="42" y="66" width="156" height="14" rx="2" fill={primaryColor} />
      <rect x="44" y="67" width="152" height="12" rx="1" stroke={accentColor} strokeWidth="0.75" fill="none" />

      <text 
        x="120" 
        y="76.5" 
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
        fontSize="9" 
        fontWeight="900" 
        fill="#FFFDF9" 
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
        fill={primaryColor} 
        textAnchor="middle"
        letterSpacing="0.5"
      >
        Tasty &amp; Healthy
      </text>
    </svg>
  );
}

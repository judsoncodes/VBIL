import React from 'react';

/**
 * Signature Rose Line-Art Motif Component.
 * The SINGLE visual motif used across dividers, background watermarks, loading indicators, and favicons.
 */
export default function RoseMotif({ 
  size = 24, 
  className = "", 
  color = "currentColor", 
  strokeWidth = 2,
  animate = false 
}) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${animate ? 'animate-spin-slow' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Outer Petals */}
      <path 
        d="M50 18C38 18 28 28 28 40C28 56 50 72 50 72C50 72 72 56 72 40C72 28 62 18 50 18Z" 
        stroke={color} 
        strokeWidth={strokeWidth * 1.1} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Middle Petals */}
      <path 
        d="M50 26C43 26 36 32 36 40C36 50 50 62 50 62C50 62 64 50 64 40C64 32 57 26 50 26Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Inner Petal Spiral */}
      <path 
        d="M50 33C46 33 42 36 42 41C42 47 50 54 50 54C50 54 58 47 58 41C58 36 54 33 50 33Z" 
        stroke={color} 
        strokeWidth={strokeWidth * 0.9} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Center Rose Core */}
      <circle cx="50" cy="41" r="3" fill={color} />
      
      {/* Stem */}
      <path 
        d="M50 72V88" 
        stroke={color} 
        strokeWidth={strokeWidth * 1.2} 
        strokeLinecap="round"
      />
      {/* Left Leaf */}
      <path 
        d="M50 76C40 73 30 78 28 83C36 85 45 83 50 76Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Right Leaf */}
      <path 
        d="M50 80C60 77 70 82 72 87C64 89 55 87 50 80Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

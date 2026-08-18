import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Official ROSE Brand Logo Component.
 * Renders logo1.png and provides clickable redirect to home page.
 */
export default function RoseLogo({ 
  variant = "full", 
  height = 56, 
  className = "",
  light = false,
  onClick
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else {
      navigate('/');
    }
  };

  return (
    <img 
      src="/logo1.png" 
      alt="ROSE Biscuits - Veeramani Biscuit Industries Pvt. Ltd." 
      style={{ height: `${height}px`, width: 'auto' }}
      onClick={handleClick}
      title="ROSE Biscuits - Click to return to Home"
      className={`inline-block object-contain select-none cursor-pointer hover:opacity-95 transition-opacity mix-blend-multiply ${light ? 'brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]' : ''} ${className}`}
    />
  );
}



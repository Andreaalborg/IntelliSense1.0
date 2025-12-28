"use client";

interface IllustrationProps {
  size?: number;
  className?: string;
}

// ============================================
// ICONS8 3D FLUENCY - Profesjonelle 3D Ikoner
// https://icons8.com/icons/3d-fluency
// ============================================

// Globe/Website - 3D Globe
export function Globe3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/globe-earth.png"
        alt="Nettside utvikling"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// SEO/Search - 3D Magnifying glass with chart
export function Search3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/seo.png"
        alt="SEO optimalisering"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Megaphone/Marketing - 3D Megaphone
export function Megaphone3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/commercial.png"
        alt="Digital markedsføring"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Chart/Analytics - 3D Analytics Dashboard
export function Chart3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/combo-chart.png"
        alt="Data og analyse"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Palette/Design - 3D Paint Palette
export function Palette3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/paint-palette.png"
        alt="Merkevarebygging"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Gear/Support - 3D Settings/Gear
export function Gear3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/services.png"
        alt="Vedlikehold og support"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Rocket/Growth - 3D Rocket
export function Rocket3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/launched-rocket.png"
        alt="Vekst og oppstart"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Lightbulb/Idea - 3D Lightbulb
export function Lightbulb3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/light-on.png"
        alt="Ideer og innovasjon"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

// Shield/Security - 3D Shield
export function Shield3D({ size = 200, className = "" }: IllustrationProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://img.icons8.com/3d-fluency/188/shield.png"
        alt="Sikkerhet"
        width={size}
        height={size}
        style={{ 
          objectFit: 'contain',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
        }}
      />
    </div>
  );
}

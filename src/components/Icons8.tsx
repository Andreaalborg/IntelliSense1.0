"use client";

interface IconProps {
  size?: number;
  className?: string;
}

// ============================================
// ICONS8 3D FLUENCY - Fargerike 3D-ikoner
// ============================================

export function Icon8Globe({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/globe.png`}
      alt="Nettside"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Search({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/search.png`}
      alt="SEO"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Megaphone({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/megaphone.png`}
      alt="Markedsføring"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Chart({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/bar-chart.png`}
      alt="Analyse"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Palette({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/paint-palette.png`}
      alt="Design"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Support({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/technical-support.png`}
      alt="Support"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Rocket({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/rocket.png`}
      alt="Vekst"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Icon8Lightbulb({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/3d-fluency/${size}/light-on.png`}
      alt="Ideer"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

// ============================================
// ALTERNATIVE STILER
// ============================================

// Stickers stil - også fargerik
export function Icon8GlobeSticker({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/stickers/${size}/globe.png`}
      alt="Nettside"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

// Doodle stil - håndtegnet look
export function Icon8GlobeDoodle({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/doodle/${size}/globe.png`}
      alt="Nettside"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

// Bubbles stil - runde, fargerike
export function Icon8GlobeBubbles({ size = 100, className = "" }: IconProps) {
  return (
    <img 
      src={`https://img.icons8.com/bubbles/${size}/globe.png`}
      alt="Nettside"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

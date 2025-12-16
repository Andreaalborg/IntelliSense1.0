"use client";

interface IllustrationProps {
  size?: number;
  className?: string;
}

// 3D Globe/Website illustration
export function Globe3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="globe-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="globe-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="35" ry="8" fill="url(#globe-shadow)" />
      
      {/* Main sphere */}
      <circle cx="60" cy="55" r="45" fill="url(#globe-gradient)" />
      
      {/* Highlight */}
      <ellipse cx="45" cy="40" rx="20" ry="15" fill="url(#globe-highlight)" />
      
      {/* Grid lines - horizontal */}
      <ellipse cx="60" cy="55" rx="45" ry="15" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      <ellipse cx="60" cy="55" rx="45" ry="30" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      
      {/* Grid lines - vertical */}
      <ellipse cx="60" cy="55" rx="15" ry="45" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      <ellipse cx="60" cy="55" rx="30" ry="45" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      
      {/* Cursor/pointer */}
      <g transform="translate(75, 65)">
        <path d="M0 0L12 18L6 18L8 26L4 27L2 19L-4 22L0 0Z" fill="white" />
      </g>
    </svg>
  );
}

// 3D Magnifying glass/SEO illustration
export function Search3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="search-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff6b4a" />
        </linearGradient>
        <linearGradient id="search-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="search-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="55" cy="108" rx="30" ry="6" fill="url(#search-shadow)" />
      
      {/* Handle */}
      <rect x="75" y="75" width="12" height="35" rx="6" fill="url(#search-gradient)" transform="rotate(45 75 75)" />
      
      {/* Outer ring */}
      <circle cx="50" cy="50" r="38" fill="url(#search-gradient)" />
      
      {/* Inner glass */}
      <circle cx="50" cy="50" r="30" fill="#1a1a25" />
      <circle cx="50" cy="50" r="28" fill="url(#search-glass)" />
      
      {/* Glass highlight */}
      <ellipse cx="40" cy="40" rx="12" ry="8" fill="white" fillOpacity="0.2" />
      
      {/* Graph bars inside */}
      <rect x="35" y="55" width="6" height="15" rx="2" fill="#4ecdc4" />
      <rect x="45" y="45" width="6" height="25" rx="2" fill="#ff6b4a" />
      <rect x="55" y="50" width="6" height="20" rx="2" fill="#ffb347" />
    </svg>
  );
}

// 3D Megaphone/Marketing illustration
export function Megaphone3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="mega-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#44a08d" />
        </linearGradient>
        <linearGradient id="mega-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="mega-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="35" ry="8" fill="url(#mega-shadow)" />
      
      {/* Sound waves */}
      <path d="M90 45C95 50 98 57 98 65C98 73 95 80 90 85" stroke="url(#mega-accent)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M100 38C108 46 113 56 113 67C113 78 108 88 100 96" stroke="url(#mega-accent)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
      
      {/* Main cone */}
      <path d="M25 50L80 30V100L25 80V50Z" fill="url(#mega-gradient)" />
      
      {/* Front opening */}
      <ellipse cx="80" cy="65" rx="8" ry="35" fill="#44a08d" />
      <ellipse cx="80" cy="65" rx="5" ry="28" fill="#1a1a25" />
      
      {/* Handle */}
      <rect x="15" y="55" width="15" height="20" rx="4" fill="url(#mega-accent)" />
      
      {/* Highlight */}
      <path d="M30 52L75 34V45L30 60V52Z" fill="white" fillOpacity="0.2" />
    </svg>
  );
}

// 3D Chart/Analytics illustration
export function Chart3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="chart-gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ff8a6a" />
        </linearGradient>
        <linearGradient id="chart-gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ffc56e" />
        </linearGradient>
        <linearGradient id="chart-gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#7eddd7" />
        </linearGradient>
        <linearGradient id="chart-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="40" ry="8" fill="url(#chart-shadow)" />
      
      {/* Base platform */}
      <path d="M10 85L60 100L110 85L60 70L10 85Z" fill="#2a2a35" />
      <path d="M10 85L10 90L60 105L60 100L10 85Z" fill="#1a1a25" />
      <path d="M110 85L110 90L60 105L60 100L110 85Z" fill="#22222d" />
      
      {/* Bar 1 */}
      <path d="M25 85L25 50L40 43L40 78L25 85Z" fill="url(#chart-gradient1)" />
      <path d="M40 43L55 50L55 85L40 78L40 43Z" fill="#e55a3a" />
      <path d="M25 50L40 43L55 50L40 57L25 50Z" fill="#ff8a6a" />
      
      {/* Bar 2 */}
      <path d="M50 78L50 35L65 28L65 71L50 78Z" fill="url(#chart-gradient2)" />
      <path d="M65 28L80 35L80 78L65 71L65 28Z" fill="#e5a030" />
      <path d="M50 35L65 28L80 35L65 42L50 35Z" fill="#ffc56e" />
      
      {/* Bar 3 */}
      <path d="M75 71L75 20L90 13L90 64L75 71Z" fill="url(#chart-gradient3)" />
      <path d="M90 13L105 20L105 71L90 64L90 13Z" fill="#3eb5ad" />
      <path d="M75 20L90 13L105 20L90 27L75 20Z" fill="#7eddd7" />
      
      {/* Arrow */}
      <path d="M20 70L95 25" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      <path d="M90 20L100 25L92 32" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
}

// 3D Palette/Design illustration
export function Palette3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="palette-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#e0e0e5" />
        </linearGradient>
        <linearGradient id="palette-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="40" ry="8" fill="url(#palette-shadow)" />
      
      {/* Palette shape */}
      <path d="M60 15C30 15 10 40 10 65C10 90 30 100 55 100C65 100 70 95 70 88C70 81 65 78 60 78C50 78 45 70 50 62C55 54 75 50 85 55C95 60 100 50 100 40C100 25 82 15 60 15Z" fill="url(#palette-gradient)" />
      
      {/* Thumb hole */}
      <ellipse cx="35" cy="75" rx="12" ry="10" fill="#1a1a25" />
      
      {/* Paint dots */}
      <circle cx="45" cy="35" r="10" fill="#ff6b4a" />
      <circle cx="70" cy="30" r="8" fill="#ffb347" />
      <circle cx="88" cy="42" r="7" fill="#4ecdc4" />
      <circle cx="75" cy="55" r="9" fill="#8b5cf6" />
      <circle cx="55" cy="55" r="8" fill="#ec4899" />
      
      {/* Highlights on dots */}
      <circle cx="42" cy="32" r="3" fill="white" fillOpacity="0.4" />
      <circle cx="68" cy="27" r="2" fill="white" fillOpacity="0.4" />
      <circle cx="86" cy="40" r="2" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

// 3D Gear/Support illustration
export function Gear3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#44a08d" />
        </linearGradient>
        <linearGradient id="gear-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="gear-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="105" rx="35" ry="7" fill="url(#gear-shadow)" />
      
      {/* Outer gear */}
      <path d="M60 10L68 10L72 20L82 16L86 24L78 32L86 40L92 36L98 44L88 50L92 60L100 60L100 70L92 70L88 80L98 86L92 94L82 88L78 98L68 94L68 102L52 102L52 94L42 98L38 88L28 94L22 86L32 80L28 70L20 70L20 60L28 60L32 50L22 44L28 36L38 42L42 32L32 24L38 16L48 20L52 10L60 10Z" fill="url(#gear-gradient)" />
      
      {/* Inner circle */}
      <circle cx="60" cy="56" r="25" fill="#1a1a25" />
      <circle cx="60" cy="56" r="20" fill="url(#gear-inner)" />
      
      {/* Center hole */}
      <circle cx="60" cy="56" r="8" fill="#1a1a25" />
      
      {/* Highlight */}
      <ellipse cx="50" cy="46" rx="8" ry="5" fill="white" fillOpacity="0.3" />
      
      {/* Wrench */}
      <g transform="translate(70, 65) rotate(45)">
        <rect x="0" y="-4" width="30" height="8" rx="2" fill="#f5f5f7" />
        <circle cx="30" cy="0" r="8" fill="#f5f5f7" />
        <circle cx="30" cy="0" r="4" fill="#1a1a25" />
      </g>
    </svg>
  );
}

// 3D Rocket/Growth illustration
export function Rocket3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="rocket-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#d0d0d5" />
        </linearGradient>
        <linearGradient id="rocket-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="rocket-flame1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id="rocket-flame2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#fff3e0" />
        </linearGradient>
        <linearGradient id="rocket-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="108" rx="25" ry="6" fill="url(#rocket-shadow)" />
      
      {/* Flames */}
      <ellipse cx="60" cy="95" rx="12" ry="18" fill="url(#rocket-flame1)" />
      <ellipse cx="60" cy="92" rx="8" ry="12" fill="url(#rocket-flame2)" />
      
      {/* Fins */}
      <path d="M40 70L30 85L45 80L40 70Z" fill="url(#rocket-accent)" />
      <path d="M80 70L90 85L75 80L80 70Z" fill="url(#rocket-accent)" />
      
      {/* Body */}
      <path d="M45 80L45 45C45 35 52 20 60 10C68 20 75 35 75 45L75 80L45 80Z" fill="url(#rocket-body)" />
      
      {/* Window */}
      <circle cx="60" cy="45" r="12" fill="#4ecdc4" />
      <circle cx="60" cy="45" r="8" fill="#1a1a25" />
      <ellipse cx="56" cy="42" rx="3" ry="2" fill="white" fillOpacity="0.5" />
      
      {/* Accent stripe */}
      <rect x="45" y="60" width="30" height="8" fill="url(#rocket-accent)" />
      
      {/* Highlight */}
      <path d="M50 25C55 18 58 15 60 10C58 15 52 25 50 40L50 25Z" fill="white" fillOpacity="0.4" />
      
      {/* Stars */}
      <circle cx="25" cy="30" r="2" fill="#ffb347" />
      <circle cx="95" cy="45" r="1.5" fill="#4ecdc4" />
      <circle cx="20" cy="60" r="1" fill="#ff6b4a" />
      <circle cx="100" cy="25" r="2" fill="#ffb347" />
    </svg>
  );
}

// 3D Lightbulb/Idea illustration
export function Lightbulb3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="bulb-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff6b4a" />
        </linearGradient>
        <linearGradient id="bulb-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff9e6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="bulb-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="bulb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Glow */}
      <circle cx="60" cy="50" r="55" fill="url(#bulb-glow)" />
      
      {/* Shadow */}
      <ellipse cx="60" cy="108" rx="25" ry="6" fill="url(#bulb-shadow)" />
      
      {/* Bulb glass */}
      <path d="M60 10C40 10 28 28 28 48C28 62 35 72 42 78L42 88L78 88L78 78C85 72 92 62 92 48C92 28 80 10 60 10Z" fill="url(#bulb-glass)" />
      
      {/* Highlight */}
      <ellipse cx="45" cy="40" rx="10" ry="15" fill="white" fillOpacity="0.5" />
      
      {/* Base */}
      <rect x="42" y="88" width="36" height="8" fill="#888" />
      <rect x="45" y="96" width="30" height="4" fill="#666" />
      <rect x="48" y="100" width="24" height="4" fill="#888" />
      <path d="M52 104L60 112L68 104L52 104Z" fill="#666" />
      
      {/* Filament */}
      <path d="M50 70L55 55L60 65L65 55L70 70" stroke="#ff6b4a" strokeWidth="2" fill="none" />
      
      {/* Sparkles */}
      <g fill="#ffb347">
        <path d="M20 30L22 35L20 40L18 35L20 30Z" />
        <path d="M100 40L102 45L100 50L98 45L100 40Z" />
        <path d="M30 70L32 73L30 76L28 73L30 70Z" />
        <path d="M90 25L92 28L90 31L88 28L90 25Z" />
      </g>
    </svg>
  );
}

// 3D Shield/Security illustration
export function Shield3D({ size = 120, className = "" }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" />
          <stop offset="100%" stopColor="#44a08d" />
        </linearGradient>
        <linearGradient id="shield-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a25" />
          <stop offset="100%" stopColor="#2a2a35" />
        </linearGradient>
        <linearGradient id="shield-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#44a08d" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="60" cy="108" rx="30" ry="6" fill="url(#shield-shadow)" />
      
      {/* Outer shield */}
      <path d="M60 8L100 25L100 55C100 80 80 100 60 108C40 100 20 80 20 55L20 25L60 8Z" fill="url(#shield-gradient)" />
      
      {/* Inner shield */}
      <path d="M60 18L90 32L90 55C90 75 75 90 60 96C45 90 30 75 30 55L30 32L60 18Z" fill="url(#shield-inner)" />
      
      {/* Checkmark */}
      <path d="M45 55L55 65L78 42" stroke="url(#shield-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Highlight */}
      <path d="M35 30L60 18L65 20L40 32L35 30Z" fill="white" fillOpacity="0.3" />
    </svg>
  );
}


"use client";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 56, text: "text-3xl", gap: "gap-3" },
  };

  const currentSize = sizes[size];
  
  // Farger basert på variant
  const iconBg = variant === "dark" 
    ? "url(#gradient-primary)" 
    : "white";
  const iconColor = variant === "dark" 
    ? "white" 
    : "url(#gradient-primary)";
  const textColor = variant === "dark" 
    ? "text-[var(--foreground)]" 
    : "text-white";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      {/* Icon */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect 
          x="0" 
          y="0" 
          width="56" 
          height="56" 
          rx="14" 
          fill={iconBg}
        />
        
        {/* Brain/AI symbol made of connected nodes */}
        <g fill={variant === "dark" ? "white" : "url(#gradient-icon)"}>
          {/* Left chevron/arrow */}
          <path 
            d="M22 18L12 28L22 38" 
            stroke={variant === "dark" ? "white" : "url(#gradient-icon)"} 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Right chevron/arrow */}
          <path 
            d="M34 18L44 28L34 38" 
            stroke={variant === "dark" ? "white" : "url(#gradient-icon)"} 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Center dot/node */}
          <circle cx="28" cy="28" r="4" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${textColor}`}>
          Intelli<span className="gradient-text-warm">Sense</span>
        </span>
      )}
    </div>
  );
}

// Alternative logo design - more abstract/modern
export function LogoAlt({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 56, text: "text-3xl", gap: "gap-3" },
  };

  const currentSize = sizes[size];
  const textColor = variant === "dark" 
    ? "text-[var(--foreground)]" 
    : "text-white";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      {/* Icon - Abstract brain/network */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-alt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="50%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#4ecdc4" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect 
          x="0" 
          y="0" 
          width="56" 
          height="56" 
          rx="14" 
          fill={variant === "dark" ? "url(#gradient-alt)" : "white"}
        />
        
        {/* Lightbulb/idea symbol */}
        <g stroke={variant === "dark" ? "white" : "url(#gradient-alt)"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Bulb top */}
          <path d="M28 12C21.4 12 16 17.4 16 24C16 28.4 18.4 32.2 22 34.4V38C22 39.1 22.9 40 24 40H32C33.1 40 34 39.1 34 38V34.4C37.6 32.2 40 28.4 40 24C40 17.4 34.6 12 28 12Z" />
          {/* Bulb base lines */}
          <line x1="24" y1="44" x2="32" y2="44" />
          {/* Rays */}
          <line x1="28" y1="4" x2="28" y2="8" />
          <line x1="12" y1="24" x2="8" y2="24" />
          <line x1="44" y1="24" x2="48" y2="24" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${textColor}`}>
          Intelli<span className="gradient-text-warm">Sense</span>
        </span>
      )}
    </div>
  );
}

// Version 3 - Double arrows like in the reference image (coral/orange)
export function LogoArrows({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 56, text: "text-3xl", gap: "gap-3" },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-arrows" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect 
          x="0" 
          y="0" 
          width="56" 
          height="56" 
          rx="14" 
          fill={variant === "dark" ? "url(#gradient-arrows)" : "white"}
        />
        
        {/* Double arrows pointing right - like >> but stylized */}
        <g 
          stroke={variant === "dark" ? "white" : "url(#gradient-arrows)"} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        >
          {/* First arrow */}
          <path d="M16 18L26 28L16 38" />
          {/* Second arrow */}
          <path d="M30 18L40 28L30 38" />
        </g>
      </svg>

      {/* Text - on light background, both parts are white */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${variant === "light" ? "text-white" : "text-[var(--foreground)]"}`}>
          Intelli<span className={variant === "light" ? "text-white" : "gradient-text-warm"}>Sense</span>
        </span>
      )}
    </div>
  );
}

// Version 4 - Purple/Blue gradient (like the reference image)
export function LogoPurple({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 56, text: "text-3xl", gap: "gap-3" },
  };

  const currentSize = sizes[size];
  const textColor = variant === "dark" 
    ? "text-[var(--foreground)]" 
    : "text-white";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect 
          x="0" 
          y="0" 
          width="56" 
          height="56" 
          rx="14" 
          fill={variant === "dark" ? "url(#gradient-purple)" : "white"}
        />
        
        {/* Double arrows pointing right - exactly like reference */}
        <g 
          stroke={variant === "dark" ? "white" : "url(#gradient-purple)"} 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        >
          {/* First arrow (left) */}
          <path d="M14 17L25 28L14 39" />
          {/* Second arrow (right) */}
          <path d="M28 17L39 28L28 39" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${textColor}`}>
          Intelli<span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">Sense</span>
        </span>
      )}
    </div>
  );
}

// Version 5 - Combined: Purple gradient with dual chevron style (closest to reference)
export function LogoChevrons({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2" },
    md: { icon: 40, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 56, text: "text-3xl", gap: "gap-3" },
  };

  const currentSize = sizes[size];
  const textColor = variant === "dark" 
    ? "text-[var(--foreground)]" 
    : "text-white";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-chevrons" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect 
          x="0" 
          y="0" 
          width="56" 
          height="56" 
          rx="12" 
          fill={variant === "dark" ? "url(#gradient-chevrons)" : "white"}
        />
        
        {/* Triple chevron design - matching reference exactly */}
        <g 
          stroke={variant === "dark" ? "white" : "url(#gradient-chevrons)"} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        >
          {/* Left chevron pointing left */}
          <path d="M20 16L10 28L20 40" />
          {/* Middle chevron pointing right */}
          <path d="M28 18L36 28L28 38" />
          {/* Right chevron pointing right */}
          <path d="M38 18L46 28L38 38" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${textColor}`}>
          Intelli<span className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] bg-clip-text text-transparent">Sense</span>
        </span>
      )}
    </div>
  );
}


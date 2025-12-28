interface LogoProps {
  variant?: "dark" | "light";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
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
  const textColor = variant === "dark"
    ? "text-[var(--foreground)]"
    : "text-white"; // Changed to white for light variant

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

      {/* Text */}
      {showText && (
        <span className={`font-bold tracking-tight ${currentSize.text} ${textColor}`}>
          Intelli<span className="gradient-text-warm">Sense</span>
        </span>
      )}
    </div>
  );
}

// Version 4 - Hollow/Outline for email signatures (transparent background)
export function LogoHollow({
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
    : "text-gray-800";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outline version - transparent background */}
        <rect
          x="0"
          y="0"
          width="56"
          height="56"
          rx="14"
          fill="none"
          stroke="url(#gradient-outline)"
          strokeWidth="2"
        />

        {/* Double arrows pointing right - outline */}
        <g
          stroke="url(#gradient-outline)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* First arrow */}
          <path d="M16 18L26 28L16 38" />
          {/* Second arrow */}
          <path d="M30 18L40 28L30 38" />
        </g>

        <defs>
          <linearGradient id="gradient-outline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
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

// Version 5 - Minimal outline (just arrows, no background)
export function LogoMinimal({
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
    : "text-gray-800";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimal - just the arrows */}
        <g
          stroke="url(#gradient-minimal)"
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

        <defs>
          <linearGradient id="gradient-minimal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
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

// Version 6 - Signature friendly (smaller, horizontal layout)
export function LogoSignature({
  variant = "dark",
  showText = true,
  size = "sm",
  className = ""
}: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-sm", gap: "gap-1.5" },
    md: { icon: 32, text: "text-base", gap: "gap-2" },
    lg: { icon: 40, text: "text-lg", gap: "gap-2.5" },
  };

  const currentSize = sizes[size];
  const textColor = variant === "dark"
    ? "text-[var(--foreground)]"
    : "text-gray-800";

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Compact version for signatures */}
        <rect
          x="0"
          y="0"
          width="56"
          height="56"
          rx="8"
          fill="none"
          stroke="url(#gradient-sig)"
          strokeWidth="2"
        />

        <g
          stroke="url(#gradient-sig)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M16 18L26 28L16 38" />
          <path d="M30 18L40 28L30 38" />
        </g>

        <defs>
          <linearGradient id="gradient-sig" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
        </defs>
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
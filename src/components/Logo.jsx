import React from "react";

export default function Logo({ 
  showText = true, 
  layout = "horizontal", 
  className = "", 
  iconSize = "h-8 w-8",
  textColor = "text-ink"
}) {
  const isVertical = layout === "vertical";

  return (
    <div className={`flex items-center ${isVertical ? "flex-col gap-3 text-center" : "gap-3"} ${className}`}>
      {/* Scalable SVG Icon */}
      <svg 
        className={`${iconSize} shrink-0 transition-colors duration-300`} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mask to punch a hole in intersecting lines where the circle is */}
          <mask id="logo-circle-mask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <circle cx="51" cy="48" r="6.5" fill="black" />
          </mask>
        </defs>

        {/* Bottom-Right Leg Loop (masked) */}
        <path 
          d="M 45 49 L 51 55 A 3 3 0 0 0 57 55 L 51 49" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          mask="url(#logo-circle-mask)"
        />
        
        {/* Center line from circle to arrow (masked) */}
        <path 
          d="M 51 48 L 63 36" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          mask="url(#logo-circle-mask)"
        />

        {/* Main diagonal to arrow */}
        <path 
          d="M 37 49 L 63 23" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Arrow Head */}
        <path 
          d="M 51 23 H 63 V 35" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Stem (Left vertical loop) */}
        <path 
          d="M 37 35 L 37 23 A 4 4 0 0 1 45 23 L 45 61 A 4 4 0 0 1 37 61 L 37 49" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Inner dot/circle (fully transparent outer border/gap, thanks to mask) */}
        <circle 
          cx="51" 
          cy="48" 
          r="4.2" 
          stroke="currentColor" 
          strokeWidth="4.5" 
          fill="none" 
        />
        <circle 
          cx="51" 
          cy="48" 
          r="1.3" 
          fill="currentColor" 
        />
      </svg>

      {/* Logotype Text */}
      {showText && (
        <span 
          className={`font-display font-700 tracking-wider transition-colors duration-300 cursor-default select-none ${
            isVertical 
              ? "text-xl md:text-2xl letter-spacing-[0.18em]" 
              : "text-lg md:text-xl"
          } ${textColor}`}
          style={isVertical ? { letterSpacing: "0.18em" } : {}}
        >
          KYNYX
        </span>
      )}
    </div>
  );
}

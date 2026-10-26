"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";

export interface Logo {
  name: string;
  /** simple-icons SVG path, drawn in a 24x24 viewBox */
  path?: string;
  /** brand colour as a hex string without the leading # */
  hex?: string;
  /** fallback icon for tools without a brand mark */
  Icon?: LucideIcon;
}

// Brand colours that would vanish on the dark or light theme fall back to the text colour
const isTooDark = (hex?: string) => {
  if (!hex) return true;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b < 70;
};

const LogoTile: React.FC<{ logo: Logo }> = ({ logo }) => {
  const color = isTooDark(logo.hex) ? "rgb(var(--fg))" : `#${logo.hex}`;
  return (
    <div className="group/logo flex items-center gap-3 shrink-0 rounded-2xl bg-surf/90 border border-line px-5 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-royal/60">
      {logo.path ? (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover/logo:scale-110"
          fill={color}
        >
          <path d={logo.path} />
        </svg>
      ) : logo.Icon ? (
        <logo.Icon className="h-7 w-7 shrink-0 text-accent transition-transform duration-300 group-hover/logo:scale-110" />
      ) : null}
      <span className="font-semibold text-fg whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
};

const MarqueeRow: React.FC<{ logos: Logo[]; reverse?: boolean }> = ({ logos, reverse }) => (
  <div
    className="group/row relative overflow-hidden py-2"
    style={{
      maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}
  >
    <div
      className={`flex w-max gap-4 pr-4 group-hover/row:[animation-play-state:paused] motion-reduce:animate-none ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {/* The list is rendered twice so the -50% translate loops seamlessly */}
      {[...logos, ...logos].map((logo, i) => (
        <LogoTile key={`${logo.name}-${i}`} logo={logo} />
      ))}
    </div>
  </div>
);

// Aceternity-style logo cloud: two rows of brand tiles drifting in opposite directions
export const LogoCloud: React.FC<{ logos: Logo[] }> = ({ logos }) => {
  const half = Math.ceil(logos.length / 2);
  return (
    <div className="space-y-4">
      <MarqueeRow logos={logos.slice(0, half)} />
      <MarqueeRow logos={logos.slice(half)} reverse />
    </div>
  );
};

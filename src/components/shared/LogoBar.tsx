"use client";

import React from "react";
import { cn } from "@/lib/utils";

const LOGOS = [
  "Ambev",
  "Wellhub",
  "Estímulo",
  "Partner 4",
  "SolarBR",
  "EcoWatt",
];

export default function LogoBar({ className }: { className?: string }) {
  // Triple the items to ensure a seamless loop
  const displayLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className={cn("w-full overflow-hidden py-12 border-y border-white/5", className)}>
      <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] w-max">
        {displayLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-12 md:px-20 text-white/30 hover:text-[var(--color-accent-green)] transition-colors duration-500"
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

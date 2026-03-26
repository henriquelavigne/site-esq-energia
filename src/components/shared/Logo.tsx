import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, showTagline = true, size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? "h-6" : size === "md" ? "h-8" : "h-10";
  const fontSize = size === "sm" ? "text-xl" : size === "md" ? "text-3xl" : "text-4xl";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("flex items-center justify-center", iconSize)}>
        {/* Usando uma representação SVG simplificada do logo da ESQ */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto text-[var(--color-accent-green)]"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C12 6 10 8 10 10C10 12 12 12 12 12C12 12 14 12 14 10C14 8 12 6 12 6Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("font-heading font-bold esq-gradient-text", fontSize)}>
          esq
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--color-text-secondary)]">
            Energia Digital
          </span>
        )}
      </div>
    </div>
  );
}

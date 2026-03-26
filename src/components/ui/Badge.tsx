import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pill";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-accent-green)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-accent-green)] transition-colors",
        variant === "pill" && "rounded-full",
        className
      )}
      {...props}
    />
  );
}

export default Badge;

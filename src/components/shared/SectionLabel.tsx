import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-accent-green)]",
        className
      )}
      {...props}
    >
      <span className="text-[14px]">✦</span> {children}
    </div>
  );
}

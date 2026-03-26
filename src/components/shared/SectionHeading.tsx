import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  gradient?: boolean;
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ as: Component = "h2", gradient = false, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-heading font-bold tracking-tight",
          Component === "h1" && "text-4xl md:text-5xl lg:text-7xl",
          Component === "h2" && "text-3xl md:text-4xl lg:text-5xl",
          Component === "h3" && "text-xl md:text-2xl",
          gradient ? "esq-gradient-text" : "text-white",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;

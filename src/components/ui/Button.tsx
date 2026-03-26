import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent-green)] text-[var(--color-bg-deep)] shadow-[0_0_24px_rgba(77,232,122,0.35)] hover:shadow-[0_0_32px_rgba(77,232,122,0.5)] hover:-translate-y-0.5",
        secondary:
          "bg-[var(--color-accent-blue)] text-white hover:bg-[var(--color-accent-blue)]/90 hover:-translate-y-0.5",
        "outline-green":
          "border border-[var(--color-accent-green)] bg-transparent text-[var(--color-accent-green)] hover:bg-[var(--color-accent-green)]/10",
        "outline-blue":
          "border border-[var(--color-accent-blue)] bg-transparent text-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/10",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:bg-white/5",
      },
      size: {
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;

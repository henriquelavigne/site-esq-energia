"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  cta?: React.ReactNode;
}

interface AccordionFAQProps {
  items: FAQItem[];
  className?: string;
}

export default function AccordionFAQ({ items, className }: AccordionFAQProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn("w-full divide-y divide-[var(--color-text-dark)]/10", className)}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={`item-${index}`}
          className="group"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                "flex w-full items-center justify-between py-5 text-left",
                "text-[var(--color-text-dark)] font-bold text-base md:text-lg",
                "transition-colors hover:text-[var(--color-bg-deep)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 rounded-sm",
                "[&[data-state=open]]:text-[var(--color-bg-deep)]"
              )}
            >
              <span className="pr-6">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[var(--color-bg-mid)] transition-transform duration-300",
                  "group-data-[state=open]:rotate-180"
                )}
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content
            className={cn(
              "overflow-hidden",
              "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            )}
            style={
              {
                "--radix-accordion-content-height": "var(--radix-accordion-content-height)",
              } as React.CSSProperties
            }
          >
            <div className="pb-5 pr-8">
              <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-dark)]/70">
                {item.answer}
              </p>
              {item.cta && <div className="mt-4">{item.cta}</div>}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

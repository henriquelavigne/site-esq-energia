"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
  className?: string;
}

export default function StepTimeline({ steps, className }: StepTimelineProps) {
  return (
    <div className={cn("relative space-y-12", className)}>
      {/* Vertical Line */}
      <div className="absolute left-5 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-white/20 -z-10" />

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="flex gap-8 group"
        >
          {/* Number Circle */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent-green)] flex items-center justify-center text-[var(--color-bg-deep)] font-bold shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-transform group-hover:scale-110">
              {index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[var(--color-accent-green)]">
              {step.title}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

interface TestimonialCarouselProps {
  items: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({
  items,
  autoplay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoplay || isPaused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoplay, isPaused, next, interval]);

  // Swipe logic using touch events or framer-motion drag
  // For simplicity and accessibility, we'll use buttons and dots, 
  // but let's add framer-motion drag for that "swipe" feel.

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-live="polite"
    >
      <div className="overflow-hidden py-12">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
          className="flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full"
            >
              <GlassCard className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-6 md:p-10 min-h-[320px] items-center">
                {/* Video Placeholder */}
                <div className="relative aspect-video md:aspect-square bg-zinc-800 rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent-green)] flex items-center justify-center text-[var(--color-bg-deep)] shadow-lg transition-transform group-hover:scale-110">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Clique para assistir
                  </p>
                </div>

                {/* Content */}
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-[var(--color-accent-green)]/10" size={80} />
                  <div className="relative z-10 space-y-6">
                    <p className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] italic leading-relaxed">
                      "{items[index].quote}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-white">{items[index].name}</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">{items[index].company}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === i 
                  ? "w-8 bg-[var(--color-accent-green)]" 
                  : "bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

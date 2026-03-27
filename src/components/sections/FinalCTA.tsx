"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Rocket } from "lucide-react";
import Button from "@/components/ui/Button";

interface FinalCTAProps {
  onOpenLeadForm?: () => void;
}

export default function FinalCTA({ onOpenLeadForm }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--gradient-hero-bg)" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-accent-green)]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Composed headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-10 max-w-3xl">
            <span className="text-white">Faça parte de uma empresa </span>
            <span
              className="inline-block"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-green) 0%, var(--color-accent-blue) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reconhecida
            </span>
            <span className="text-white"> pelo mercado</span>
          </h2>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[var(--color-accent-green)]/30 bg-white/5 backdrop-blur">
              <div className="h-10 w-10 rounded-full bg-[var(--color-accent-green)]/15 flex items-center justify-center">
                <Award className="h-5 w-5 text-[var(--color-accent-green)]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  Certificação
                </p>
                <p className="text-sm font-bold text-white">Empresa B Certificada</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[var(--color-accent-blue)]/30 bg-white/5 backdrop-blur">
              <div className="h-10 w-10 rounded-full bg-[var(--color-accent-blue)]/15 flex items-center justify-center">
                <Rocket className="h-5 w-5 text-[var(--color-accent-blue)]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  Reconhecimento
                </p>
                <p className="text-sm font-bold text-white">100 Startups to Watch</p>
              </div>
            </div>
          </motion.div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenLeadForm}
              className="text-xl px-12 py-7 shadow-[0_0_40px_rgba(77,232,122,0.45)] hover:shadow-[0_0_56px_rgba(77,232,122,0.6)]"
            >
              Quero ser ESQ
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

interface FinalCTAProps {
  onOpenLeadForm?: () => void;
}

export default function FinalCTA({ onOpenLeadForm }: FinalCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[var(--color-bg-deep)] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-accent-green)]/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent-green)] text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            Economia Garantida
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            Pronto para reduzir sua conta de luz hoje?
          </h2>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de empresas que já economizam com a ESQ Energia. 
            Sem investimento, sem obras e 100% digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="lg" className="group px-10 h-14" onClick={onOpenLeadForm}>
              Começar agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-[var(--color-text-secondary)]/60">
               Leve menos de 2 minutos para se cadastrar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

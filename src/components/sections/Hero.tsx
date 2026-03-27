"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";

interface HeroProps {
  onOpenLeadForm?: () => void;
}

export default function Hero({ onOpenLeadForm }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[var(--gradient-hero-bg)]">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-accent-green)]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent-blue)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <SectionLabel className="justify-center mb-6">
            ✦ ENERGIA SOLAR DIGITAL POR ASSINATURA
          </SectionLabel>

          <SectionHeading as="h1" className="mb-6 text-5xl md:text-6xl lg:text-7xl">
            Economia com energia solar — sem painéis, sem complicação
          </SectionHeading>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed">
            A ESQ Energia conecta sua empresa a fazendas solares.
            Economize{" "}
            <span className="text-[var(--color-accent-green)] font-semibold">até 20%</span>{" "}
            na conta de luz todo mês — sem obras, sem papelada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="group" onClick={onOpenLeadForm}>
              Comece a economizar
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-12 px-8 text-lg rounded-full font-semibold border border-[var(--color-accent-blue)] text-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/10 transition-all"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Veja como funciona
            </a>
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-14 flex flex-wrap justify-center items-center gap-6 text-[var(--color-text-muted)] text-sm"
          >
            {[
              "Zero investimento",
              "Sem obras",
              "Cancelamento grátis",
              "+5.000 clientes ativos",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-green)] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

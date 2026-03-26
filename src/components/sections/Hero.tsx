"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/shared/GlassCard";
import Badge from "@/components/ui/Badge";
import Logo from "@/components/shared/Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[var(--gradient-hero-bg)]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-green)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <SectionLabel className="mb-6">
              ENERGIA SOLAR DIGITAL POR ASSINATURA
            </SectionLabel>
            
            <SectionHeading as="h1" className="mb-6 text-5xl md:text-6xl lg:text-7xl">
              Economia com energia solar — sem painéis, sem complicação
            </SectionHeading>
            
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-xl leading-relaxed">
              A ESQ Energia conecta sua empresa a fazendas solares.
              Economize <span className="text-[var(--color-accent-green)] font-semibold">até 20%</span> na conta de luz todo mês.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="group">
                Comece a economizar
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-blue" size="lg">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Veja como funciona
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-6 text-[var(--color-text-muted)] text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-green)]" />
                <span>Zero investimento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-green)]" />
                <span>Sem obras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-green)]" />
                <span>Cancelamento grátis</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (Dashboard) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Ambient Glow behind card */}
            <div className="absolute inset-0 bg-[var(--color-accent-green)]/5 blur-3xl rounded-full -z-10 animate-pulse" />

            <GlassCard className="p-8 md:p-10 border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-accent-green)]/20 to-transparent blur-2xl" />
              
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <p className="text-sm text-[var(--color-text-muted)] font-medium">Sua economia hoje:</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-accent-green)] tracking-tight">
                    R$ 2.600,00
                  </h3>
                </div>
                <Logo size="sm" showTagline={false} className="opacity-80" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[var(--color-accent-green)]/30 transition-colors"
                >
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Impacto Ambiental</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🍃</span>
                    <span className="font-bold text-white leading-tight">45 kg de CO₂ evitados</span>
                  </div>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: 10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.7 }}
                   className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">Status do Gerador</p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-accent-green)] animate-ping" />
                    <span className="font-bold text-white">Produzindo 100%</span>
                  </div>
                </motion.div>
              </div>

              {/* Notification Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 p-4 bg-[var(--color-bg-deep)]/80 backdrop-blur border border-white/10 rounded-2xl shadow-xl"
              >
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-xs font-bold esq-gradient-text">ESQ</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-white">Notificação ESQ</p>
                  <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">
                    Confira sua economia deste mês! Você poupou energia equivalente a 3 árvores plantadas.
                  </p>
                </div>
                <Badge variant="pill" className="text-[8px] px-2 py-0">NOVO</Badge>
              </motion.div>
            </GlassCard>

            {/* Floating elements for extra depth */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--color-accent-blue)]/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[var(--color-accent-green)]/10 rounded-full blur-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

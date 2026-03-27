"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";

const METRICS = [
  {
    emoji: "🌿",
    text: "93.000 toneladas de CO₂ evitadas pela comunidade ESQ desde 2019"
  },
  {
    emoji: "🌳",
    text: "Equivalente a 571.000 árvores plantadas"
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <SectionLabel className="mb-6 !text-[var(--color-bg-deep)]">Sustentabilidade</SectionLabel>
            <SectionHeading as="h2" gradient={false} className="!text-black mb-8 leading-tight">
              Transforme energia solar em diferencial para o seu negócio
            </SectionHeading>
            
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Além de economizar, sua empresa se torna parceira do planeta. 
              <span className="block mt-2 font-bold text-zinc-900 italic">
                "88% dos consumidores preferem empresas que apoiam o meio ambiente"
              </span>
              <span className="text-xs text-zinc-500">— Fonte: Mind Miners</span>
            </p>

            <div className="space-y-4">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 p-5 bg-[var(--color-accent-green)]/5 rounded-2xl border border-[var(--color-accent-green)]/10"
                >
                  <span className="text-2xl">{metric.emoji}</span>
                  <p className="text-sm font-bold !text-black leading-snug">
                    {metric.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual (Seal/Sticker) */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-accent-green)]/10 blur-3xl rounded-full -z-10" />

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* Spinning circular text would go here, using a simpler DIV sticker for now */}
              <div className="w-full h-full rounded-full border-4 border-dashed border-[var(--color-accent-green)]/30 flex items-center justify-center p-8 animate-[spin_20s_linear_infinite]">
                 <div className="absolute inset-0 rounded-full border-2 border-[var(--color-accent-green)]/10 flex items-center justify-center flex-col text-center">
                    <span className="text-[var(--color-accent-green)] font-black text-4xl uppercase tracking-tighter">100%</span>
                    <span className="text-zinc-600 font-bold text-xs uppercase tracking-widest">Energia Limpa</span>
                 </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 flex flex-col items-center">
                    <div className="h-12 w-12 bg-[var(--color-accent-green)] rounded-2xl flex items-center justify-center mb-3">
                       <span className="text-white text-xl font-black">ESQ</span>
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Selo Sustentável</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

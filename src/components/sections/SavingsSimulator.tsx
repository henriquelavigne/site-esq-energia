"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Wallet, Leaf, HelpCircle } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/shared/GlassCard";

const PERIODS = [
  { label: "1 ano", value: 1 },
  { label: "3 anos", value: 3 },
  { label: "6 anos", value: 6 },
];

const REINVESTMENT_SUGGESTIONS = [
  { icon: <TrendingUp size={16} />, label: "Expansão do negócio" },
  { icon: <Wallet size={16} />, label: "Reserva de emergência" },
  { icon: <Leaf size={16} />, label: "ESG e Sustentabilidade" },
];

interface SavingsSimulatorProps {
  onOpenLeadForm?: () => void;
}

export default function SavingsSimulator({ onOpenLeadForm }: SavingsSimulatorProps) {
  const [billValue, setBillValue] = useState(1500);
  const [period, setPeriod] = useState(3);

  const estimatedSavings = useMemo(() => {
    // Formula: valorConta * 20% * 12 meses * anos
    return billValue * 0.20 * 12 * period;
  }, [billValue, period]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <section id="simulator" className="py-24 bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center mb-4">Economia</SectionLabel>
          <SectionHeading as="h2" gradient={false} className="text-black mb-6">
            Economize em energia solar para reinvestir no que importa
          </SectionHeading>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent-green)]/10 text-[var(--color-bg-deep)] rounded-2xl border border-[var(--color-accent-green)]/20"
          >
            <span className="text-xl">💰</span>
            <p className="text-sm font-bold">
              <span className="text-[var(--color-accent-teal)]">R$ 80.000 economizados:</span> marco de um cliente desde 2021
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Calculator Controls */}
          <GlassCard className="p-8 md:p-12 bg-white/80 border-white shadow-xl">
            <div className="space-y-12">
              {/* Bill Value Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                      Conta de luz atual
                    </label>
                    <p className="text-xs text-zinc-500">Quanto você paga hoje sem a ESQ?</p>
                  </div>
                  <span className="text-3xl font-bold text-[var(--color-accent-teal)]">
                    {formatCurrency(billValue)}
                  </span>
                </div>
                
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={billValue}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-accent-green)]"
                />
                
                <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase">
                  <span>R$ 300</span>
                  <span>R$ 5.000</span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              {/* Period Toggles */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    Período de economia
                  </label>
                  <p className="text-xs text-zinc-500">Veja o impacto a longo prazo</p>
                </div>
                
                <div className="flex p-1 bg-zinc-100 rounded-2xl w-full sm:w-fit">
                  {PERIODS.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPeriod(p.value)}
                      className={`flex-1 sm:flex-none px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                        period === p.value
                          ? "bg-[var(--color-accent-green)] text-[var(--color-bg-deep)] shadow-lg"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Results Panel */}
          <motion.div
            layout
            className="bg-[var(--color-bg-deep)] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-green)]/10 blur-3xl rounded-full" />
            
            <div className="relative z-10 h-full flex flex-col">
              <p className="text-xs font-bold text-[var(--color-accent-green)] uppercase tracking-[0.2em] mb-4">
                Resultado Estimado
              </p>
              
              <div className="mb-10">
                <p className="text-zinc-400 text-sm mb-2">Sua economia total seria de:</p>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={estimatedSavings}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight"
                  >
                    {formatCurrency(estimatedSavings)}
                  </motion.h3>
                </AnimatePresence>
                <p className="text-[10px] text-zinc-500 mt-2 italic">
                  *Cálculo baseado em desconto médio de 20%
                </p>
              </div>

              <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <HelpCircle size={14} /> Reinvista em:
                </p>
                <div className="space-y-3">
                  {REINVESTMENT_SUGGESTIONS.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                      <div className="p-1.5 bg-white/5 rounded-lg text-[var(--color-accent-green)]">
                        {s.icon}
                      </div>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button variant="primary" size="lg" className="w-full justify-center py-6" onClick={onOpenLeadForm}>
                  Simular minha economia
                </Button>
                <p className="text-[10px] text-zinc-500 text-center mt-4">
                  Taxas de distribuidora já inclusas na simulação.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

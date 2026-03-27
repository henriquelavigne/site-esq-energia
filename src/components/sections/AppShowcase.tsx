"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Star, Apple, PlayCircle } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const APP_FEATURES = [
  {
    id: "item-1",
    title: "Fatura digital simplificada",
    content: "Receba sua conta de luz em um formato fácil de entender, com todos os descontos aplicados de forma transparente."
  },
  {
    id: "item-2",
    title: "Economia mensal garantida",
    content: "Acompanhe em tempo real quanto você está economizando todos os meses através da nossa rede de fazendas solares."
  },
  {
    id: "item-3",
    title: "Histórico de faturas",
    content: "Acesse todas as suas contas passadas em um só lugar, facilitando o controle financeiro da sua empresa ou residência."
  },
  {
    id: "item-4",
    title: "Lembretes de pagamento",
    content: "Nunca mais esqueça de pagar uma conta. Receba notificações inteligentes antes do vencimento."
  },
  {
    id: "item-5",
    title: "Rastreador de impacto CO₂",
    content: "Veja o impacto positivo que você está gerando no planeta, medindo a quantidade de CO₂ que deixou de ser emitida."
  }
];

export default function AppShowcase() {
  return (
    <section id="app-showcase" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <SectionLabel className="mb-6">Comodidade</SectionLabel>
            <SectionHeading as="h2" gradient={false} className="text-black mb-8">
              Pague e acompanhe seu consumo de energia solar no App ESQ
            </SectionHeading>

            {/* Ratings */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-900">4,7</span>
              <span className="text-sm text-zinc-600">(+100 avaliações)</span>
            </div>

            {/* Feature Accordion */}
            <Accordion.Root
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full space-y-4 mb-10"
            >
              {APP_FEATURES.map((item) => (
                <Accordion.Item
                  key={item.id}
                  value={item.id}
                  className="border-b border-zinc-100 pb-4 last:border-0"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex flex-1 items-center justify-between text-left text-lg font-bold text-zinc-800 hover:text-[var(--color-accent-green)] transition-all group">
                      {item.title}
                      <ChevronDown className="h-5 w-5 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="pt-3 text-zinc-600 leading-relaxed overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
                    {item.content}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition-colors">
                <PlayCircle size={24} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase opacity-70">Disponível no</span>
                  <span className="font-bold">Android</span>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition-colors">
                <Apple size={24} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase opacity-70">Disponível no</span>
                  <span className="font-bold">iOS</span>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Visual (Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-accent-green)]/5 blur-3xl rounded-full -z-10" />

            <div className="relative w-[300px] aspect-[9/18.5] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border-8 border-zinc-800">
              {/* Speaker / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              
              <div className="w-full h-full bg-[var(--color-bg-deep)] rounded-[2rem] overflow-hidden relative flex flex-col p-6">
                <div className="mt-8 space-y-6">
                  <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-xs font-bold text-[var(--color-accent-green)]">ESQ</span>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-sm text-[var(--color-text-muted)]">Fatura disponível</p>
                    <h4 className="text-3xl font-bold text-white">R$ 480,00</h4>
                    <p className="text-[10px] text-[var(--color-accent-green)] uppercase tracking-wider font-bold">Expectativa: R$ 600,00</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                     <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-[var(--color-accent-green)] to-[var(--color-accent-blue)]" />
                     </div>
                     <p className="text-[10px] text-[var(--color-text-secondary)] text-center">Economia de 20% atingida!</p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[var(--color-bg-deep)] to-transparent pt-12">
                   <div className="bg-[var(--color-accent-green)] text-[var(--color-bg-deep)] rounded-xl py-3 text-center text-sm font-bold shadow-lg">
                      Pagar com PIX
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Message Bubble */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-4 top-1/3 p-4 bg-white rounded-2xl shadow-xl border border-zinc-100 max-w-[180px]"
            >
              <p className="text-xs font-medium text-zinc-800 leading-tight">
                Receba sua fatura digital e pague via PIX ou boleto com facilidade
              </p>
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-zinc-100 rotate-45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

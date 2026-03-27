"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Zap, Smartphone, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const BENEFITS = [
  {
    icon: <Sun className="h-10 w-10 text-[var(--color-accent-green)]" />,
    title: "Zero custo de instalação",
    content: "A ESQ conecta você a fazendas solares parceiras remotamente — sem equipamentos.",
    badge: "+100 fazendas parceiras"
  },
  {
    icon: <Zap className="h-10 w-10 text-[var(--color-accent-blue)]" />,
    title: "Sem obras ou reformas",
    content: "A energia limpa chega até você pela infraestrutura da sua distribuidora.",
    badge: "12 distribuidoras brasileiras"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-[var(--color-accent-green)]" />,
    title: "Sem papelada, sem burocracia",
    content: "Cadastre-se online, envie sua conta e RG — a ESQ cuida do resto.",
    badge: "Cadastro em minutos"
  }
];

interface BenefitsProps {
  onOpenLeadForm?: () => void;
}

export default function Benefits({ onOpenLeadForm }: BenefitsProps) {
  return (
    <section id="benefits" className="py-24 bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center mb-4">Vantagens Reais</SectionLabel>
          <SectionHeading as="h2" gradient={false} className="text-black mb-6">
            Por que escolher a ESQ Energia?
          </SectionHeading>
          <p className="text-zinc-600 text-lg">
            Economia inteligente, energia limpa e total comodidade para o seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[20px] shadow-sm hover:shadow-xl transition-all border border-zinc-100 flex flex-col items-start group"
            >
              <div className="mb-6 p-4 bg-zinc-50 rounded-2xl group-hover:bg-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                {benefit.content}
              </p>
              <Badge variant="pill" className="bg-zinc-100 text-zinc-600 border-none px-3">
                {benefit.badge}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline-blue" size="lg" className="w-full sm:w-auto">
            <MessageCircle className="mr-2 h-5 w-5" />
            Fale com um especialista
          </Button>
          <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={onOpenLeadForm}>
            Quero fazer parte
          </Button>
        </div>
      </div>
    </section>
  );
}

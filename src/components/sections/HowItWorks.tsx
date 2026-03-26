"use client";

import React from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import StepTimeline from "@/components/shared/StepTimeline";

const HOW_IT_WORKS_STEPS = [
  {
    title: "Cadastre-se online",
    description: "Preencha seus dados e envie uma foto da sua conta de luz pelo nosso portal ou WhatsApp."
  },
  {
    title: "Conectamos você a uma fazenda solar",
    description: "A ESQ analisa seu consumo e aloca seus créditos em uma fazenda solar parceira próxima da sua região."
  },
  {
    title: "Os créditos chegam pela sua distribuidora",
    description: "Sua concessionária local recebe os créditos solares e aplica o desconto automaticamente na sua fatura."
  },
  {
    title: "Você recebe uma conta mais barata todo mês",
    description: "Pronto! Agora é só acompanhar sua economia em tempo real pelo app da ESQ e pagar menos pela mesma energia."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-bg-deep)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Sticky Header */}
          <div className="lg:sticky lg:top-32">
            <SectionLabel className="mb-6">Como funciona</SectionLabel>
            <SectionHeading as="h2" gradient className="mb-8">
              Simples, digital e rápido
            </SectionHeading>
            <p className="text-[var(--color-text-muted)] text-lg mb-8 max-w-md">
              Mudar para energia solar por assinatura é mais fácil do que você imagina. 
              Sem obras, sem taxas de adesão e 100% online.
            </p>
            
            {/* Visual highlight */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hidden lg:block">
               <p className="text-sm font-medium text-white mb-2">💡 Economia Garantida</p>
               <p className="text-xs text-[var(--color-text-muted)] italic">
                 "O processo de integração levou menos de 10 minutos. No mês seguinte já vi a redução na conta."
               </p>
            </div>
          </div>

          {/* Right Timeline */}
          <StepTimeline steps={HOW_IT_WORKS_STEPS} />
        </div>
      </div>
    </section>
  );
}

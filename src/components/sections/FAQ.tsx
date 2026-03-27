"use client";

import React from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import AccordionFAQ, { FAQItem } from "@/components/shared/AccordionFAQ";

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como recebo o desconto na minha conta de luz?",
    answer: "A ESQ Energia aloca créditos de energia solar gerados em nossas fazendas parceiras diretamente na sua conta de luz através da sua distribuidora local. Esses créditos compensam o seu consumo, gerando economia real todo mês.",
  },
  {
    question: "Preciso instalar painéis solares na minha empresa?",
    answer: "Não! Essa é a grande vantagem da ESQ. Você recebe todos os benefícios da energia solar de forma digital, sem necessidade de obras, investimentos em equipamentos ou manutenção.",
  },
  {
    question: "Existe algum custo de adesão ou taxa de cancelamento?",
    answer: "A adesão à ESQ Energia é 100% gratuita. Além disso, não exigimos fidelidade — você pode cancelar o serviço a qualquer momento com um aviso prévio simples, sem qualquer multa.",
  },
  {
    question: "Quem pode contratar a ESQ Energia?",
    answer: "Atendemos empresas e residências conectadas em baixa tensão (Grupo B) nas áreas de atuação das nossas distribuidoras parceiras. Basta ter uma conta de luz média acima de R$ 300.",
  },
];

interface FAQProps {
  onOpenLeadForm?: () => void;
}

export default function FAQ({ onOpenLeadForm }: FAQProps) {
  return (
    <section id="faq" className="py-24 bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-4 !text-[var(--color-bg-deep)]">FAQ</SectionLabel>
            <SectionHeading as="h2" className="!text-[var(--color-bg-deep)] mb-6">
              Dúvidas Frequentes
            </SectionHeading>
            <p className="text-[var(--color-text-dark)]/70">
              Tudo o que você precisa saber para começar a economizar com energia limpa.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-zinc-100">
            <AccordionFAQ items={FAQ_ITEMS} />
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-[var(--color-text-dark)]/60 text-sm mb-6">
                Ainda tem dúvidas? Fale com nosso time agora mesmo.
             </p>
             <button 
                onClick={onOpenLeadForm}
                className="text-[var(--color-bg-deep)] font-bold hover:underline"
             >
                Contatar Suporte →
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}

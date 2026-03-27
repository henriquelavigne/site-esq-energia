"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import AccordionFAQ, { type FAQItem } from "@/components/shared/AccordionFAQ";
import { FAQ as FAQ_DATA } from "@/lib/constants";

interface FAQProps {
  onOpenLeadForm?: () => void;
}

export default function FAQ({ onOpenLeadForm }: FAQProps) {
  const inlineCTA = (
    <button
      onClick={onOpenLeadForm}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-bg-deep)] hover:text-[var(--color-bg-mid)] transition-colors"
    >
      Comece agora mesmo
      <ArrowRight className="h-4 w-4" />
    </button>
  );

  // Attach inline CTA to Q1 (index 0), Q3 (index 2), Q8 (index 7)
  const items: FAQItem[] = FAQ_DATA.map((faq, i) => ({
    question: faq.question,
    answer: faq.answer,
    cta: [0, 2, 7].includes(i) ? inlineCTA : undefined,
  }));

  return (
    <section id="faq" className="py-24 bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel className="justify-center mb-4">Dúvidas</SectionLabel>
          <SectionHeading
            as="h2"
            gradient={false}
            className="text-[var(--color-text-dark)]"
          >
            Perguntas Frequentes
          </SectionHeading>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AccordionFAQ items={items} />

          <div className="mt-10 text-center">
            <button
              onClick={onOpenLeadForm}
              className="text-sm font-medium text-[var(--color-accent-blue)] hover:underline transition-all"
            >
              Mais dúvidas? Fale com nossa equipe →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

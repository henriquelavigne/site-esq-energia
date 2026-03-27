"use client";

import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import LogoBar from "@/components/shared/LogoBar";
import Button from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialsProps {
  onOpenLeadForm?: () => void;
}

export default function Testimonials({ onOpenLeadForm }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-[var(--color-bg-deep)]">
      <div className="container mx-auto">
        <div className="text-center mb-16 px-4">
          <SectionHeading as="h2" gradient className="mb-4">
            Clientes que já estão economizando
          </SectionHeading>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Junte-se a centenas de empresas e residências que transformaram sua relação com a energia elétrica.
          </p>
        </div>

        <TestimonialCarousel items={TESTIMONIALS} />

        <div className="mt-24">
          <p className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-8">
            Grandes parceiros que confiam na ESQ
          </p>
          <LogoBar />
        </div>

        {/* Final CTAs */}
        <div className="mt-24 flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
          <Button variant="outline-blue" size="lg" className="w-full sm:w-auto">
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

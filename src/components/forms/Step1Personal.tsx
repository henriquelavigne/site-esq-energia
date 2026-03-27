"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import type { LeadFormData } from "@/lib/schema";

interface Step1Props {
  onNext: () => void;
}

export default function Step1Personal({ onNext }: Step1Props) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<LeadFormData>();

  async function handleNext() {
    const valid = await trigger(["name", "email", "phone"]);
    if (valid) onNext();
  }

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          Nome completo
        </label>
        <Input
          id="name"
          placeholder="Seu nome completo"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          E-mail
        </label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com.br"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          WhatsApp / Telefone
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="(11) 99999-9999"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs text-red-400 mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <Button
        type="button"
        variant="primary"
        size="lg"
        className="w-full justify-center mt-2"
        onClick={handleNext}
      >
        Próximo
      </Button>
    </div>
  );
}

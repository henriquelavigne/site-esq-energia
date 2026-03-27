"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import type { LeadFormData } from "@/lib/schema";

interface Step3Props {
  onBack: () => void;
  isSubmitting: boolean;
}

export default function Step3Confirm({ onBack, isSubmitting }: Step3Props) {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  const values = watch();

  const summaryRows = [
    { label: "Nome", value: values.name },
    { label: "E-mail", value: values.email },
    { label: "Telefone", value: values.phone },
    { label: "Tipo", value: values.customerType === "PF" ? "Pessoa Física" : "Pessoa Jurídica" },
    { label: "Faixa de conta", value: values.billRange },
    { label: "Distribuidora", value: values.distributor },
    { label: "Estado", value: values.state },
  ];

  return (
    <div className="space-y-5">
      {/* Summary card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-white/5 p-5 space-y-2.5">
        <p className="text-xs font-bold text-[var(--color-accent-green)] uppercase tracking-widest mb-3">
          Resumo do cadastro
        </p>
        {summaryRows.map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm gap-4">
            <span className="text-[var(--color-text-muted)] shrink-0">{label}</span>
            <span className="text-[var(--color-text-primary)] font-medium text-right">
              {value || "—"}
            </span>
          </div>
        ))}
      </div>

      {/* Terms checkbox */}
      <div className="space-y-1.5">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={errors.terms ? "terms-error" : undefined}
              />
              <label
                htmlFor="terms"
                className="text-sm text-[var(--color-text-secondary)] leading-relaxed cursor-pointer"
              >
                Concordo com os{" "}
                <a href="#" className="text-[var(--color-accent-blue)] hover:underline">
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-[var(--color-accent-blue)] hover:underline">
                  Política de Privacidade
                </a>
              </label>
            </div>
          )}
        />
        {errors.terms && (
          <p id="terms-error" className="text-xs text-red-400 pl-8" role="alert">
            {errors.terms.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full justify-center shadow-[0_0_32px_rgba(77,232,122,0.4)] mt-1"
      >
        {isSubmitting ? "Enviando…" : "Comece a economizar com a ESQ!"}
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="md"
        className="w-full justify-center"
        onClick={onBack}
        disabled={isSubmitting}
      >
        Voltar
      </Button>
    </div>
  );
}

/* Success screen shown after submit */
export function SuccessScreen({ onClose }: { onClose: () => void }) {
  const waPhone = process.env.NEXT_PUBLIC_WHATSAPP ?? "5511999999999";
  const waMsg = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MSG ??
      "Olá! Acabei de me cadastrar na ESQ Energia e quero saber mais!"
  );

  return (
    <div className="flex flex-col items-center text-center py-8 space-y-5">
      <div className="h-20 w-20 rounded-full bg-[var(--color-accent-green)]/15 flex items-center justify-center">
        <svg
          className="h-10 w-10 text-[var(--color-accent-green)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">Cadastro recebido!</h3>
        <p className="text-[var(--color-text-muted)] max-w-xs mx-auto">
          Nossa equipe entrará em contato em até 24 horas via WhatsApp.
        </p>
      </div>

      <a
        href={`https://wa.me/${waPhone}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe59] transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        Falar agora no WhatsApp
      </a>

      <button
        onClick={onClose}
        className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
      >
        Fechar
      </button>
    </div>
  );
}

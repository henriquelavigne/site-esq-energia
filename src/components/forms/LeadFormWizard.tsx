"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/context/LeadModalContext";
import { leadFormSchema, type LeadFormData } from "@/lib/schema";
import Step1Personal from "./Step1Personal";
import Step2Energy from "./Step2Energy";
import Step3Confirm, { SuccessScreen } from "./Step3Confirm";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 3;

const STEP_LABELS = [
  "Dados pessoais",
  "Consumo de energia",
  "Confirmação",
];

export default function LeadFormWizard() {
  const { isOpen, closeModal } = useLeadModal();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      customerType: undefined,
      billRange: "",
      distributor: "",
      state: "",
      terms: undefined,
    },
  });

  function handleClose() {
    closeModal();
    // Reset after animation completes
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      methods.reset();
    }, 300);
  }

  async function handleSubmit(data: LeadFormData) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("API error");
      setSubmitted(true);
    } catch {
      // Surface error without crashing
      methods.setError("root", {
        message: "Erro ao enviar. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const rootError = methods.formState.errors.root?.message;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Content */}
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-[var(--color-bg-deep)] border border-[var(--color-border)] shadow-2xl",
            "p-6 focus:outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "max-h-[90dvh] overflow-y-auto"
          )}
          aria-labelledby="lead-modal-title"
          aria-describedby="lead-modal-desc"
        >
          {/* Close button */}
          <Dialog.Close
            className="absolute right-4 top-4 rounded-lg p-1.5 text-[var(--color-text-muted)] hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
            aria-label="Fechar formulário"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>

          {submitted ? (
            <SuccessScreen onClose={handleClose} />
          ) : (
            <>
              {/* Social proof strip */}
              <div className="mb-5 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-accent-green)]/10 border border-[var(--color-accent-green)]/20">
                <Users className="h-4 w-4 text-[var(--color-accent-green)] shrink-0" />
                <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                  Mais de 5.000 empresas já economizam com a ESQ
                </p>
              </div>

              <Dialog.Title
                id="lead-modal-title"
                className="text-xl font-bold text-white mb-1"
              >
                Comece a economizar
              </Dialog.Title>
              <Dialog.Description
                id="lead-modal-desc"
                className="text-sm text-[var(--color-text-muted)] mb-6"
              >
                Preencha em menos de 2 minutos — sem compromisso.
              </Dialog.Description>

              {/* Progress bar */}
              <div
                className="flex gap-1.5 mb-8"
                role="progressbar"
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label={`Passo ${step} de ${TOTAL_STEPS}: ${STEP_LABELS[step - 1]}`}
              >
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 h-1.5 rounded-full transition-all duration-300",
                      i + 1 <= step
                        ? "bg-[var(--color-accent-green)]"
                        : "bg-white/15"
                    )}
                  />
                ))}
              </div>

              {/* Step label */}
              <p className="text-xs font-bold text-[var(--color-accent-green)] uppercase tracking-widest mb-5">
                Passo {step} de {TOTAL_STEPS} — {STEP_LABELS[step - 1]}
              </p>

              {/* Step content with animation */}
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step === 1 && (
                        <Step1Personal onNext={() => setStep(2)} />
                      )}
                      {step === 2 && (
                        <Step2Energy
                          onNext={() => setStep(3)}
                          onBack={() => setStep(1)}
                        />
                      )}
                      {step === 3 && (
                        <Step3Confirm
                          onBack={() => setStep(2)}
                          isSubmitting={isSubmitting}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {rootError && (
                    <p className="mt-3 text-xs text-red-400 text-center" role="alert">
                      {rootError}
                    </p>
                  )}
                </form>
              </FormProvider>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

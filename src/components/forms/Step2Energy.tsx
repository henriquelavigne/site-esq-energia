"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { User, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { BILL_RANGES, DISTRIBUTORS, BRAZILIAN_STATES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LeadFormData } from "@/lib/schema";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

const CUSTOMER_TYPES = [
  { value: "PF", label: "Pessoa Física", icon: User },
  { value: "PJ", label: "Pessoa Jurídica", icon: Building2 },
] as const;

export default function Step2Energy({ onNext, onBack }: Step2Props) {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext<LeadFormData>();

  const customerType = watch("customerType");

  async function handleNext() {
    const valid = await trigger(["customerType", "billRange", "distributor", "state"]);
    if (valid) onNext();
  }

  return (
    <div className="space-y-5">
      {/* Customer type radio cards */}
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          Tipo de cliente
        </p>
        <Controller
          name="customerType"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-3">
              {CUSTOMER_TYPES.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={field.value === value}
                  onClick={() => field.onChange(value)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all text-left",
                    field.value === value
                      ? "border-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]"
                      : "border-[var(--color-border)] bg-white/5 text-[var(--color-text-secondary)] hover:border-[var(--color-accent-green)]/40"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">{label}</span>
                </button>
              ))}
            </div>
          )}
        />
        {errors.customerType && (
          <p className="text-xs text-red-400 mt-1" role="alert">
            {errors.customerType.message}
          </p>
        )}
      </div>

      {/* Bill range */}
      <div className="space-y-1.5">
        <label
          htmlFor="billRange"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          Faixa de conta mensal
        </label>
        <Controller
          name="billRange"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="billRange" aria-invalid={!!errors.billRange}>
                <SelectValue placeholder="Selecione a faixa" />
              </SelectTrigger>
              <SelectContent>
                {BILL_RANGES.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.billRange && (
          <p className="text-xs text-red-400 mt-1" role="alert">
            {errors.billRange.message}
          </p>
        )}
      </div>

      {/* Distributor */}
      <div className="space-y-1.5">
        <label
          htmlFor="distributor"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          Distribuidora de energia
        </label>
        <Controller
          name="distributor"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="distributor" aria-invalid={!!errors.distributor}>
                <SelectValue placeholder="Selecione sua distribuidora" />
              </SelectTrigger>
              <SelectContent>
                {DISTRIBUTORS.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.distributor && (
          <p className="text-xs text-red-400 mt-1" role="alert">
            {errors.distributor.message}
          </p>
        )}
      </div>

      {/* State */}
      <div className="space-y-1.5">
        <label
          htmlFor="state"
          className="block text-sm font-semibold text-[var(--color-text-primary)]"
        >
          Estado — UF
        </label>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="state" aria-invalid={!!errors.state}>
                <SelectValue placeholder="Selecione seu estado" />
              </SelectTrigger>
              <SelectContent>
                {BRAZILIAN_STATES.map(({ sigla, nome }) => (
                  <SelectItem key={sigla} value={sigla}>
                    {sigla} — {nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.state && (
          <p className="text-xs text-red-400 mt-1" role="alert">
            {errors.state.message}
          </p>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="flex-1 justify-center"
          onClick={onBack}
        >
          Voltar
        </Button>
        <Button
          type="button"
          variant="primary"
          size="lg"
          className="flex-1 justify-center"
          onClick={handleNext}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}

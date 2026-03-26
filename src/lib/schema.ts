import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export const leadFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().regex(phoneRegex, "Telefone inválido (ex: 11 99999-9999)"),
  customerType: z.enum(["PF", "PJ"], {
    errorMap: () => ({ message: "Selecione o tipo de cliente" }),
  }),
  billRange: z.string().min(1, "Selecione uma faixa de consumo"),
  distributor: z.string().min(1, "Selecione sua distribuidora"),
  state: z.string().length(2, "Selecione seu estado"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos" }),
  }),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

// Partial schemas for wizard steps
export const step1Schema = leadFormSchema.pick({
  name: true,
  email: true,
  phone: true,
  customerType: true,
});

export const step2Schema = leadFormSchema.pick({
  billRange: true,
  distributor: true,
  state: true,
});

export const step3Schema = leadFormSchema.pick({
  terms: true,
});

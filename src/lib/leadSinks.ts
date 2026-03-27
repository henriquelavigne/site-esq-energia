import type { LeadFormData } from "@/lib/schema";

// ── Email sink via Resend ─────────────────────────────────────────────────────
async function sendEmailSink(data: LeadFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.LEAD_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.warn("[leadSinks] Email sink skipped — RESEND_API_KEY / RESEND_FROM / LEAD_EMAIL_TO not configured.");
    return;
  }

  const body = {
    from,
    to: [to],
    subject: `Novo lead ESQ Energia: ${data.name}`,
    html: `
      <h2>Novo lead capturado</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td><strong>Nome</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Telefone</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Tipo</strong></td><td>${data.customerType}</td></tr>
        <tr><td><strong>Faixa de conta</strong></td><td>${data.billRange}</td></tr>
        <tr><td><strong>Distribuidora</strong></td><td>${data.distributor}</td></tr>
        <tr><td><strong>Estado</strong></td><td>${data.state}</td></tr>
      </table>
    `,
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`[leadSinks] Resend API error ${res.status}: ${detail}`);
  }
}

// ── Webhook sink ──────────────────────────────────────────────────────────────
async function sendWebhookSink(data: LeadFormData): Promise<void> {
  const url = process.env.WEBHOOK_URL;

  if (!url) {
    console.warn("[leadSinks] Webhook sink skipped — WEBHOOK_URL not configured.");
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "esq-landing", timestamp: new Date().toISOString(), data }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`[leadSinks] Webhook error ${res.status}: ${detail}`);
  }
}

// ── Dispatcher ────────────────────────────────────────────────────────────────
export async function dispatchLead(data: LeadFormData): Promise<void> {
  const sink = (process.env.LEAD_SINK ?? "email").toLowerCase();

  const tasks: Promise<void>[] = [];

  if (sink === "email" || sink === "both") {
    tasks.push(sendEmailSink(data));
  }
  if (sink === "webhook" || sink === "both") {
    tasks.push(sendWebhookSink(data));
  }

  if (tasks.length === 0) {
    console.warn(`[leadSinks] Unknown LEAD_SINK value "${sink}". No sink ran.`);
    return;
  }

  const results = await Promise.allSettled(tasks);

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[leadSinks] Sink failed:", result.reason);
    }
  }
}

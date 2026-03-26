"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5511999999999";
  const message = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MSG || "Olá, gostaria de saber mais sobre a ESQ Energia!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-green)] text-[var(--color-bg-deep)] shadow-lg transition-transform hover:scale-110 active:scale-95 wa-float",
        "group"
      )}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[var(--color-bg-deep)] px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-xl pointer-events-none border border-white/10">
        Fale conosco
      </span>
    </a>
  );
}

import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-darkest)] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Logo size="sm" />
            <p className="text-[var(--color-text-secondary)] text-sm max-w-xs">
              Sua escolha inteligente para energia limpa e econômica. 100% digital, zero instalação.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[var(--color-accent-green)]">Contato</p>
              <a href="mailto:contato@esqenergia.com.br" className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors">
                contato@esqenergia.com.br
              </a>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-accent-green)]/20 transition-all text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)]">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-accent-blue)]/20 transition-all text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)]">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-red-500/20 transition-all text-[var(--color-text-secondary)] hover:text-red-500">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-accent-green)]/20 transition-all text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)]">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navegação</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Início</Link></li>
                <li><Link href="#how-it-works" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Como funciona</Link></li>
                <li><Link href="#simulator" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Simule sua economia</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Sobre</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Privacidade</Link></li>
                <li><Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Código de Ética</Link></li>
                <li><Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter/Extra info (Customized per prompt) */}
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-lg font-heading font-bold gradient-text">Mude para o digital</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Acompanhe as novidades e receba dicas de economia em primeira mão.
              </p>
              <div className="flex gap-2">
                <input type="email" placeholder="Seu e-mail" className="bg-white/5 border border-white/10 rounded-lg px-4 text-sm flex-1 focus:outline-none focus:border-[var(--color-focus-ring)]" />
                <button className="bg-[var(--color-accent-green)] text-[var(--color-bg-deep)] p-2 rounded-lg hover:opacity-90 transition-opacity">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {currentYear} ESQ Energia Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors">Sermos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

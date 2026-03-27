"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import Logo from "@/components/shared/Logo";
import Button from "@/components/ui/Button";
import MobileMenuDrawer from "@/components/layout/MobileMenuDrawer";
import { useLeadModal } from "@/context/LeadModalContext";

const NAV_LINKS = [
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Simule sua economia", href: "#simulator" },
  { label: "Clientes", href: "#testimonials" },
  { label: "Ajuda", href: "#faq" },
];

export default function Navbar() {
  const { isScrolled } = useScrollOpacity();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useLeadModal();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 flex items-center px-4 md:px-8",
          isScrolled
            ? "bg-[var(--color-bg-deep)]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline-blue" size="sm">
              Já sou cliente
            </Button>
            <Button variant="primary" size="sm" onClick={openModal}>
              Cadastre-se
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        navLinks={NAV_LINKS}
      />
    </>
  );
}

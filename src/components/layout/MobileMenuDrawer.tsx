"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  navLinks: { label: string; href: string }[];
}

export default function MobileMenuDrawer({
  isOpen,
  onOpenChange,
  navLinks,
}: MobileMenuDrawerProps) {
  const { openModal } = useLeadModal();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm bg-[var(--color-bg-deep)] p-6 shadow-2xl focus:outline-none"
              >
                <div className="flex items-center justify-between mb-10">
                  <Logo size="sm" />
                  <Dialog.Close asChild>
                    <button className="p-2 text-white hover:text-[var(--color-accent-green)] transition-colors">
                      <X size={24} />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Dialog.Close asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-green)] transition-all"
                      >
                        {link.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>

                <div className="mt-10">
                  <Dialog.Close asChild>
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        onOpenChange(false);
                        openModal();
                      }}
                    >
                      Comece a economizar
                    </Button>
                  </Dialog.Close>
                </div>

                <div className="absolute bottom-10 left-6 right-6 text-center text-[var(--color-text-muted)] text-sm">
                  ESQ Energia Digital
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

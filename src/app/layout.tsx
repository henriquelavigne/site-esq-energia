import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { LeadModalProvider } from "@/context/LeadModalContext";
import LeadFormWizard from "@/components/forms/LeadFormWizard";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://esqenergia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ESQ Energia Digital — Energia Solar por Assinatura, Sem Instalação",
  description:
    "Economize até 20% na conta de luz com a ESQ Energia. Energia solar limpa sem instalar painéis. 100% digital.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ESQ Energia Digital — Energia Solar por Assinatura",
    description: "Economize até 20% na conta de luz. Sem instalação. 100% digital.",
    url: "/",
    siteName: "ESQ Energia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESQ Energia Digital",
    description: "Energia solar por assinatura. Sem painéis, sem obras, sem burocracia.",
  },
  keywords: ["energia solar", "assinatura de energia", "economia na conta de luz", "energia limpa", "ESQ Energia"],
  authors: [{ name: "ESQ Energia" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://esqenergia.com.br/#organization",
        "name": "ESQ Energia",
        "url": "https://esqenergia.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://esqenergia.com.br/logo.png",
        },
        "sameAs": [
          "https://www.instagram.com/esqenergia",
          "https://www.linkedin.com/company/esqenergia",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://esqenergia.com.br/#website",
        "url": "https://esqenergia.com.br",
        "name": "ESQ Energia",
        "publisher": { "@id": "https://esqenergia.com.br/#organization" },
      },
      {
        "@type": "Service",
        "serviceType": "Energia solar por assinatura",
        "provider": { "@id": "https://esqenergia.com.br/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "BR",
        },
        "description":
          "Economize até 20% na conta de luz com energia solar por assinatura, sem necessidade de instalação de painéis.",
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <LeadModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          {/* Modal rendered at root to ensure correct portal stacking */}
          <LeadFormWizard />
        </LeadModalProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESQ Energia Digital — Energia Solar por Assinatura, Sem Instalação",
  description:
    "Economize até 20% na conta de luz com a ESQ Energia. Energia solar limpa sem instalar painéis. 100% digital.",
  openGraph: {
    title: "ESQ Energia Digital — Energia Solar por Assinatura",
    description: "Economize até 20% na conta de luz. Sem instalação. 100% digital.",
    url: "https://esqenergia.com.br",
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
          "url": "https://esqenergia.com.br/logo.png"
        },
        "sameAs": [
          "https://www.instagram.com/esqenergia",
          "https://www.linkedin.com/company/esqenergia"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://esqenergia.com.br/#website",
        "url": "https://esqenergia.com.br",
        "name": "ESQ Energia",
        "publisher": { "@id": "https://esqenergia.com.br/#organization" }
      },
      {
        "@type": "Service",
        "serviceType": "Energia solar por assinatura",
        "provider": { "@id": "https://esqenergia.com.br/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "BR"
        },
        "description": "Economize até 20% na conta de luz com energia solar por assinatura, sem necessidade de instalação de painéis."
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${dmSans.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

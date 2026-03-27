# ESQ Energia — Design Tokens & Convenções Completas

## 1. Paleta de Cores (CSS Custom Properties)

Defina em `src/app/globals.css` dentro de `:root`:

```css
:root {
  /* ── Fundos primários ── */
  --color-bg-deep:       #0D4F4F;   /* teal escuro — hero, seções escuras */
  --color-bg-dark:       #1A6B6B;   /* teal médio — navbar scroll, seções */
  --color-bg-mid:        #1E7A7A;   /* teal mid — fundo de cards */
  --color-bg-darkest:    #0A2E2E;   /* teal mais escuro — footer */

  /* ── Acentos ── */
  --color-accent-green:  #4DE87A;   /* verde neon — CTAs, ícones, labels */
  --color-accent-blue:   #8BAEE8;   /* azul pervinca — links, CTAs secundários */
  --color-accent-light:  #B8CFF5;   /* lavanda suave — texto secundário, labels */

  /* ── Texto ── */
  --color-text-primary:  #FFFFFF;   /* branco — títulos em fundo escuro */
  --color-text-secondary:#C8D8F0;   /* azul-branco claro — corpo em fundo escuro */
  --color-text-muted:    #7A9AB8;   /* azul-cinza — captions, placeholders */

  /* ── Seções claras ── */
  --color-bg-light:      #EDF6F6;   /* teal-branco — seções alternadas claras */
  --color-bg-card-light: #FFFFFF;   /* branco — cards em seções claras */
  --color-text-dark:     #0D2E2E;   /* teal escuro — títulos em fundo claro */

  /* ── Estados de UI ── */
  --color-border:        rgba(138,174,232,0.2);   /* pervinca a 20% */
  --color-hover:         rgba(77,232,122,0.12);   /* verde a 12% */
  --color-focus-ring:    #4DE87A;                  /* verde neon — focus ring */

  /* ── Gradientes nomeados ── */
  --gradient-hero-bg:    linear-gradient(180deg, #0D4F4F 0%, #1A6B6B 100%);
  --gradient-esq-text:   linear-gradient(135deg, #FFFFFF 0%, #B8CFF5 50%, #8BAEE8 100%);
  --gradient-cta-glow:   0 0 24px rgba(77,232,122,0.35);
}
```

## 2. Tipografia

### Fontes (Google Fonts)
- **Headings**: `"Outfit"`, weight 700, tracking tight (`letter-spacing: -0.02em`)
- **Body**: `"DM Sans"`, weight 400/500, line-height 1.65
- **Labels**: `"DM Sans"` small caps, tracking widest (`letter-spacing: 0.12em`), 12px

### Escala tipográfica
```
h1:    clamp(40px, 5vw, 68px)    — hero headline
h2:    clamp(28px, 3.5vw, 48px)  — section headings
h3:    clamp(18px, 2vw, 24px)    — card headings
body:  16–18px
label: 12px, uppercase, letter-spacing: 0.12em
```

### Importação no Next.js (layout.tsx)
```tsx
import { Outfit, DM_Sans } from "next/font/google";

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
```

## 3. Efeitos Visuais

### Glassmorphism (seções escuras)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(138, 174, 232, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
}
```

### Texto gradiente ESQ
```css
.esq-gradient-text {
  background: linear-gradient(135deg, #FFFFFF 0%, #B8CFF5 50%, #8BAEE8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Botão primário com glow
```css
.btn-primary {
  background-color: var(--color-accent-green);
  color: var(--color-bg-deep);
  border-radius: 9999px;
  font-weight: 600;
  box-shadow: 0 0 24px rgba(77, 232, 122, 0.35);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}
.btn-primary:hover {
  box-shadow: 0 0 32px rgba(77, 232, 122, 0.5);
  transform: translateY(-1px);
}
```

### Pulse do WhatsApp
```css
@keyframes wa-pulse {
  0% { box-shadow: 0 0 0 0 rgba(77, 232, 122, 0.4); }
  70% { box-shadow: 0 0 0 14px rgba(77, 232, 122, 0); }
  100% { box-shadow: 0 0 0 0 rgba(77, 232, 122, 0); }
}
.wa-float {
  animation: wa-pulse 3s infinite;
}
```

## 4. Padrões de Componentes

### `<Button>`
| Variante       | Background                  | Texto                     | Borda                         |
|----------------|-----------------------------|---------------------------|-------------------------------|
| primary        | `--color-accent-green`      | `--color-bg-deep`         | nenhuma                       |
| secondary      | `--color-accent-blue`       | `#FFFFFF`                 | nenhuma                       |
| outline-green  | transparente                | `--color-accent-green`    | 1px solid `--color-accent-green` |
| outline-blue   | transparente                | `--color-accent-blue`     | 1px solid `--color-accent-blue`  |
| ghost          | transparente                | `--color-text-secondary`  | nenhuma                       |

Todos: `border-radius: 9999px` (pill). Tamanhos: `sm` (h-8 px-4 text-sm), `md` (h-10 px-6 text-base), `lg` (h-12 px-8 text-lg).

### `<SectionLabel>`
- Texto: `--color-accent-green`
- Font: 12px, uppercase, letter-spacing 0.12em, font-weight 500
- Exemplo: `✦ ENERGIA SOLAR DIGITAL POR ASSINATURA`

### `<SectionHeading>`
- Padrão: cor branca (fundo escuro) ou `--color-text-dark` (fundo claro)
- Prop `gradient={true}`: aplica `--gradient-esq-text` com background-clip text

### `<GlassCard>`
- Aplica os estilos `.glass-card` definidos acima
- Aceita `className` para extensão

## 5. Animações (Framer Motion)

### Padrão de entrada de seção
```tsx
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
```

### Stagger de cards
```tsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
```

### Respeitar prefers-reduced-motion
```tsx
import { useReducedMotion } from "framer-motion";

// Em componentes animados:
const shouldReduceMotion = useReducedMotion();
const variants = shouldReduceMotion ? {} : sectionVariants;
```

## 6. Responsividade

### Breakpoints (Tailwind default)
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Regras obrigatórias
- **Navbar**: hamburger + drawer abaixo de `md`
- **Hero**: stacked (texto em cima, mockup embaixo) em mobile; side-by-side em `lg+`
- **Cards de benefícios**: 1 coluna em mobile, 3 colunas em `lg+`
- **Simulador**: controles empilhados verticalmente em mobile
- **Carousel**: touch/swipe com threshold de 50px
- **Footer**: stacked em mobile, 2 cols em `md`, 3 cols em `lg+`

## 7. Acessibilidade

- **Contraste**: WCAG AA mínimo em todas as combinações texto/fundo
- **Focus ring**: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px;`
- **Accordion**: `aria-expanded`, `aria-controls`
- **Modal**: focus trap, `aria-modal`, `aria-labelledby`
- **Imagens**: `alt` descritivo obrigatório
- **Carousel**: `aria-live` region, `aria-label` em prev/next
- **Reduced motion**: desabilitar Framer Motion com `prefers-reduced-motion`

## 8. SEO & Metadata

### generateMetadata() em layout.tsx
```tsx
export const metadata: Metadata = {
  title: "ESQ Energia Digital — Energia Solar por Assinatura, Sem Instalação",
  description:
    "Economize até 20% na conta de luz com a ESQ Energia. Energia solar limpa sem instalar painéis. 100% digital.",
  openGraph: {
    title: "ESQ Energia Digital — Energia Solar por Assinatura",
    description: "Economize até 20% na conta de luz. Sem instalação. 100% digital.",
    url: "https://esqenergia.com.br",
    siteName: "ESQ Energia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESQ Energia Digital",
    description: "Energia solar por assinatura. Sem painéis, sem obras, sem burocracia.",
  },
};
```

### JSON-LD (inserir no layout.tsx)
- `Organization`: name, url, logo, sameAs (Instagram, LinkedIn, YouTube)
- `WebSite`: com SearchAction
- `Service`: "Energia solar por assinatura" — serviceType, provider, areaServed: "BR"

## 9. Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/lead/route.ts
├── components/
│   ├── ui/           (Button, Card, Input, Select, Checkbox, Badge)
│   ├── sections/     (Hero, Benefits, AppShowcase, SavingsSimulator,
│   │                  HowItWorks, Sustainability, Testimonials, FAQ, FinalCTA)
│   ├── forms/        (LeadFormWizard, Step1Personal, Step2Energy, Step3Confirm)
│   ├── layout/       (Navbar, Footer, MobileMenuDrawer, FloatingWhatsApp)
│   └── shared/       (SectionLabel, SectionHeading, GlassCard, LogoBar,
│                      StepTimeline, TestimonialCarousel)
├── lib/
│   ├── utils.ts
│   ├── schema.ts
│   ├── constants.ts
│   └── leadSinks.ts
├── hooks/
│   └── useScrollOpacity.ts
└── .env.example
```

## 10. Tech Stack

- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4 (CSS-first config, `@theme` directive)
- Radix UI (Dialog, Accordion, Select)
- Framer Motion (scroll-triggered animations)
- React Hook Form + Zod (formulários)
- Lucide React (ícones)

## 11. Idioma

- **UI / Textos visíveis**: Português Brasileiro (pt-BR)
- **Código / Comentários / Variáveis**: Inglês
- **Copy de CTA**: Sempre em pt-BR, tom direto e acessível

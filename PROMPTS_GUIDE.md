# ESQ Energia — Guia de Prompts para Google Antigravity

## Como usar este guia

Cada prompt abaixo é uma **task independente** para o Agent Manager do Antigravity.

### Recomendações
- Use o modo **Planning** para todos os prompts (o agente cria plano → você revisa → executa).
- Use **Gemini 3 Pro** como modelo padrão.
- Execute os prompts **em ordem** — cada um depende dos anteriores.
- Após cada prompt, use o workflow `/visual-qa` para revisar o resultado.
- Use os comentários estilo Google Docs nos artifacts para dar feedback ao agente.

### Estrutura do workspace
Antes de começar, confirme que a pasta `.agents/` está na raiz do workspace:
```
.agents/
├── skills/esq-energia-brand/
│   ├── SKILL.md
│   └── resources/DESIGN_TOKENS.md
├── rules/
│   ├── code-conventions.md
│   └── project-structure.md
└── workflows/
    ├── create-section.md
    ├── create-ui-component.md
    └── visual-qa.md
```

---

## PROMPT 0 — Scaffolding & Design Tokens

**Modo**: Planning  
**Objetivo**: Criar a fundação do projeto — estrutura Next.js, dependências, tokens CSS, dados estáticos.

```
Crie um projeto Next.js 15 com App Router e TypeScript strict para a landing page da ESQ Energia.

Use a skill @esq-energia-brand para os design tokens completos.

Tarefas:
1. Inicialize com `npx create-next-app@latest esq-energia --typescript --tailwind --app --src-dir --no-import-alias`
2. Instale as dependências: framer-motion, @radix-ui/react-dialog, @radix-ui/react-accordion, @radix-ui/react-select, react-hook-form, @hookform/resolvers, zod, lucide-react, clsx, tailwind-merge
3. Configure `src/app/globals.css` com TODAS as CSS custom properties da skill (paleta, gradientes, efeitos)
4. Configure as fontes Outfit e DM Sans em `src/app/layout.tsx` com next/font/google
5. Crie `src/lib/utils.ts` com a função `cn()` (clsx + tailwind-merge)
6. Crie `src/lib/constants.ts` com TODOS os dados estáticos em pt-BR:
   - FAQ (8 perguntas e respostas sobre energia solar por assinatura)
   - Passos do "Como Funciona" (4 passos)
   - Depoimentos (4 clientes com citação, nome e empresa)
   - Lista de distribuidoras (Enel, Light, CEMIG, Neoenergia, CPFL, Equatorial, Energisa, Outra)
   - Lista de 27 estados brasileiros (sigla + nome)
   - Faixas de conta de luz (Até R$500, R$500-1.000, R$1.000-3.000, Acima de R$3.000)
7. Crie `src/lib/schema.ts` com schemas Zod:
   - leadFormSchema: name (min 2), email (.email()), phone (regex BR), customerType (PF|PJ), billRange, distributor, state, terms (literal true)
   - Schemas parciais para cada step do formulário
8. Crie `.env.example` com: LEAD_SINK, RESEND_API_KEY, RESEND_FROM, LEAD_EMAIL_TO, WEBHOOK_URL, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WHATSAPP, NEXT_PUBLIC_WHATSAPP_MSG
9. Configure metadata SEO em layout.tsx (título, description, openGraph, twitter — tudo em pt-BR)
10. Adicione JSON-LD schemas (Organization, WebSite, Service) no layout.tsx

Rode `npm run dev` e confirme que compila sem erros.
```

---

## PROMPT 1 — Componentes UI Base

**Modo**: Planning  
**Objetivo**: Criar a biblioteca de componentes atômicos.

```
Crie os componentes UI base da ESQ Energia. Use a skill @esq-energia-brand para specs exatas.

Use /create-ui-component como referência de workflow.

Componentes a criar em src/components/ui/:

1. Button.tsx — 5 variantes (primary, secondary, outline-green, outline-blue, ghost) e 3 tamanhos (sm, md, lg). Pill shape (border-radius 9999px). Primário com glow verde. Aceite ícone à esquerda via prop `icon`.

2. Badge.tsx — Pill com borda verde neon, texto verde, fundo transparente. Tamanho pequeno.

3. Input.tsx — Input estilizado para formulários. Fundo semi-transparente em seções escuras, borda com --color-border, placeholder com --color-text-muted. Focus ring verde.

4. Select.tsx — Usando Radix UI Select. Mesmo estilo visual do Input. Lista de opções estilizada.

5. Checkbox.tsx — Usando Radix UI Checkbox. Indicador verde neon quando checked.

Em src/components/shared/:

6. SectionLabel.tsx — Texto verde neon, 12px, uppercase, letter-spacing 0.12em, font-weight 500. Aceite prop `text`.

7. SectionHeading.tsx — h2 por padrão (prop `as` para mudar tag). Prop `gradient` aplica gradiente esq-text. Escala tipográfica h2 dos tokens.

8. GlassCard.tsx — Glassmorphism card (rgba branco 6%, borda pervinca 18%, blur 12px, radius 20px). Aceite className e children.

Todos devem usar cn() para composição de classes e forwardRef onde aplicável.
Verifique no browser que cada componente renderiza corretamente.
```

---

## PROMPT 2 — Layout (Navbar + Footer + WhatsApp)

**Modo**: Planning  
**Objetivo**: Montar o shell da página.

```
Crie os componentes de layout da ESQ Energia. Use a skill @esq-energia-brand.

1. src/hooks/useScrollOpacity.ts
   - Hook que retorna `isScrolled: boolean` (true quando scroll > 64px).
   - Usa IntersectionObserver ou scroll event com throttle.

2. src/components/layout/Navbar.tsx ("use client")
   - Sticky, altura 64px.
   - Fundo transparente no topo → teal escuro (#0D4F4F) + backdrop-blur quando scrolled (use useScrollOpacity).
   - Esquerda: Logo ESQ Energia (ícone de lâmpada verde + wordmark "esq" com gradiente + tagline "ENERGIA DIGITAL").
   - Centro: links "Como funciona" | "Simule sua economia" | "Clientes" | "Ajuda". Cor: --color-text-secondary, hover: --color-accent-green.
   - Direita: "Já sou cliente" (outline-blue, sm) + "Cadastre-se" (primary, sm).
   - Em mobile (< md): esconder links centrais e botões, mostrar ícone hamburger.

3. src/components/layout/MobileMenuDrawer.tsx ("use client")
   - Radix UI Dialog, full-screen, fundo --color-bg-deep.
   - Lista vertical dos links + CTAs.
   - Animação: slide-in da direita com Framer Motion.
   - Focus trap automático do Radix.

4. src/components/layout/Footer.tsx
   - Fundo: --color-bg-darkest (#0A2E2E).
   - Layout 3 colunas em lg+, empilhado em mobile.
   - Coluna 1: Logo pequeno, tagline verde "Energia digital", email contato@esqenergia.com.br, ícones sociais (Instagram, LinkedIn, YouTube, WhatsApp).
   - Coluna 2: Links — Início, Como funciona, Seja gerador, Simule sua economia, Clientes, Ajuda.
   - Coluna 3: Política de Privacidade, Código de Ética, Termos de Uso, Carreiras.
   - Barra inferior: "© 2026 ESQ Energia Digital. Todos os direitos reservados."

5. src/components/layout/FloatingWhatsApp.tsx ("use client")
   - Botão fixo, canto inferior direito, z-50.
   - Círculo 56px, fundo verde neon, ícone WhatsApp branco (Lucide: MessageCircle ou SVG customizado).
   - Tooltip on hover: "Fale conosco".
   - Animação pulse (anel expandindo a cada 3s).
   - Link: https://wa.me/{NEXT_PUBLIC_WHATSAPP}?text={NEXT_PUBLIC_WHATSAPP_MSG}

Monte tudo no layout.tsx: Navbar no topo, Footer no fim, FloatingWhatsApp global.
Verifique no browser em mobile e desktop.
```

---

## PROMPT 3 — Seção Hero

**Modo**: Planning  
**Objetivo**: Above-the-fold, primeira impressão.

```
Crie a seção Hero da ESQ Energia. Use a skill @esq-energia-brand e o workflow /create-section.

src/components/sections/Hero.tsx ("use client" para animações)

Layout: viewport height completa, fundo gradiente hero (--gradient-hero-bg).
55% esquerda texto | 45% direita visual (em lg+). Empilhado em mobile.

Lado esquerdo:
- SectionLabel: "✦ ENERGIA SOLAR DIGITAL POR ASSINATURA"
- Headline h1 (gradient text, escala h1 dos tokens):
  "Economia com energia solar — sem painéis, sem complicação"
- Subheadline (--color-text-muted, 18px):
  "A ESQ Energia conecta sua empresa a fazendas solares.
   Economize até 20% na conta de luz todo mês."
- Linha de CTAs:
  Primário: "Comece a economizar" (Button primary lg, com glow)
  Secundário: "▶ Veja como funciona" (Button outline-blue lg)

Lado direito:
- GlassCard grande simulando dashboard do app:
  - Texto "Sua economia hoje:" em --color-text-muted
  - Valor "R$ 2.600,00" grande, bold, --color-accent-green
  - Badge ESQ logo pequena
  - Card de CO2: "⚡ 45 kg de CO₂ evitados este mês" (Badge verde)
  - Card de notificação: "ESQ Energia — Confira sua economia deste mês!"
- Fundo: radial gradient verde neon a 8% opacidade atrás do card.

Animações Framer Motion:
- Texto esquerdo: fade-in + translateY(20→0), delay 0.1
- Card direito: fade-in + translateY(30→0), delay 0.3
- Badges internos: stagger com delay 0.5

Adicione o Hero como primeira seção em page.tsx.
Verifique no browser em 375px e 1440px.
```

---

## PROMPT 4 — Benefícios + App Showcase

**Modo**: Planning  
**Objetivo**: Proposta de valor e conveniência.

```
Crie as seções Benefits e AppShowcase da ESQ Energia.
Use a skill @esq-energia-brand e o workflow /create-section.

### 1. src/components/sections/Benefits.tsx

Fundo: --color-bg-light (#EDF6F6).
3 cards lado a lado em lg+ (1 coluna em mobile), fundo branco, radius 20px, sombra suave.

Card 1 — Ícone: Sun (Lucide)
  Título: "Zero custo de instalação"
  Corpo: "A ESQ conecta você a fazendas solares parceiras remotamente — sem equipamentos."
  Badge: "+100 fazendas solares parceiras"

Card 2 — Ícone: Zap (Lucide)
  Título: "Sem obras ou reformas"
  Corpo: "A energia limpa chega até você pela infraestrutura da sua distribuidora."
  Badge: "12 distribuidoras brasileiras"

Card 3 — Ícone: Smartphone (Lucide)
  Título: "Sem papelada, sem burocracia"
  Corpo: "Cadastre-se online, envie sua conta e RG — a ESQ cuida do resto."
  Badge: "Cadastro em minutos"

Abaixo dos cards, centralizado:
  "Fale com um especialista" (Button outline-blue, ícone MessageCircle)
  "Quero fazer parte" (Button primary)

### 2. src/components/sections/AppShowcase.tsx ("use client")

Fundo: branco. Layout split: texto esquerda | mockup direita (empilhado em mobile).

Esquerda:
- SectionLabel: "Comodidade"
- SectionHeading: "Pague e acompanhe seu consumo de energia solar no App ESQ"
- Estrelas: ★★★★½ 4,7 (+100 avaliações)
- Links: "Disponível no Android" | "Disponível no iOS"
- Accordion (Radix UI) com 5 itens:
  ▸ Fatura digital simplificada
  ▸ Economia mensal garantida
  ▸ Histórico de faturas
  ▸ Lembretes de pagamento
  ▸ Rastreador de impacto CO₂

Direita:
- Div estilizada simulando tela de celular (bordas arredondadas, sombra, aspect-ratio smartphone):
  "Receba sua fatura digital e pague via PIX ou boleto com facilidade"

Animações: fade-in por seção com Framer Motion.
Adicione ambas em page.tsx após o Hero. Verifique no browser.
```

---

## PROMPT 5 — Simulador de Economia

**Modo**: Planning  
**Objetivo**: Lead magnet interativo.

```
Crie o Savings Simulator da ESQ Energia.
Use a skill @esq-energia-brand e o workflow /create-section.

src/components/sections/SavingsSimulator.tsx ("use client")

Fundo: --color-bg-light (#EDF6F6). Seção full-width.

Topo:
- SectionLabel: "Economia"
- SectionHeading: "Economize em energia solar para reinvestir no que importa"

Banner destaque (card com tint verde):
  💰 "R$ 80.000 economizados: marco de um cliente desde 2021"

Calculadora interativa:
- Slider — "Conta de luz atual" (R$ 300 → R$ 10.000)
  - Exibir valor atual do slider em tempo real formatado (R$ X.XXX)
  - Estilizar thumb e track com cores da marca
- Toggle buttons — Período: "1 ano" | "3 anos" | "6 anos"
  - Grupo de botões pill, ativo com fundo verde neon
- Painel de resultados (animado com Framer Motion ao mudar):
  - "Economia estimada total: R$ X.XXX,00" (grande, bold, --color-text-dark)
  - "Reinvista em:" com link sugestão

Fórmula (client-side):
  economia = valorConta × 0.20 × 12 × anos

CTA: "Simular minha economia" → deve abrir o formulário de lead (modal).
Formatar todos os valores em pt-BR (separador de milhar com ponto, decimal com vírgula).

Adicione em page.tsx. Verifique no browser — teste o slider e os toggles.
```

---

## PROMPT 6 — Como Funciona + Sustentabilidade

**Modo**: Planning  
**Objetivo**: Explicar o processo e destacar impacto ambiental.

```
Crie as seções HowItWorks e Sustainability da ESQ Energia.
Use a skill @esq-energia-brand e o workflow /create-section.

### 1. src/components/sections/HowItWorks.tsx ("use client")

Fundo: gradiente escuro (--gradient-hero-bg).
- SectionLabel: "Como funciona"
- SectionHeading gradient: "Simples, digital e rápido"

Timeline vertical de 4 passos (src/components/shared/StepTimeline.tsx):
  ① Cadastre-se online
     "Preencha seus dados e envie uma foto da sua conta de luz."
  ② Conectamos você a uma fazenda solar
     "A ESQ aloca seus créditos em uma fazenda solar parceira próxima."
  ③ Os créditos chegam pela sua distribuidora
     "Sua concessionária recebe os créditos solares e aplica o desconto."
  ④ Você recebe uma conta mais barata todo mês
     "Acompanhe sua economia em tempo real pelo app da ESQ."

Cada passo: círculo numerado (verde neon, 40px), título (branco, bold), corpo (--color-text-muted).
Linha tracejada conectando os passos.
Animação: cada passo aparece em sequência conforme scroll (stagger 0.15s).

### 2. src/components/sections/Sustainability.tsx

Fundo: branco. Layout split: texto esquerda | visual direita.

Esquerda:
- SectionLabel: "Sustentabilidade"
- SectionHeading: "Transforme energia solar em diferencial para o seu negócio"
- Subtexto: "88% dos consumidores preferem empresas que apoiam o meio ambiente (Fonte: Mind Miners)"

Métricas de impacto (cards com tint verde):
  🌿 "93.000 toneladas de CO₂ evitadas pela comunidade ESQ desde 2019"
  🌳 "Equivalente a 571.000 árvores plantadas"

Direita: Placeholder de selo de sustentabilidade / sticker ESQ (div estilizada com borda verde e texto).

Adicione ambas em page.tsx. Verifique no browser.
```

---

## PROMPT 7 — Depoimentos + Logo Bar

**Modo**: Planning  
**Objetivo**: Prova social.

```
Crie as seções Testimonials e LogoBar da ESQ Energia.
Use a skill @esq-energia-brand e o workflow /create-section.

### 1. src/components/shared/TestimonialCarousel.tsx ("use client")

Carousel horizontal com touch/swipe (threshold 50px).
Props: items (do constants.ts), autoplay (boolean), interval (ms).

Cada card:
- GlassCard (glassmorphism)
- Placeholder de thumbnail de vídeo (div cinza com ícone Play centralizado)
- Citação curta em itálico, --color-text-secondary
- Nome • Empresa em --color-text-muted
- Largura fixa por card (~320px), gap 24px

Acessibilidade:
- aria-live="polite" no container
- Botões prev/next com aria-label
- Indicadores de posição (dots)

Dados dos 4 depoimentos vêm de constants.ts.

### 2. src/components/shared/LogoBar.tsx

Scroll infinito horizontal (CSS animation, não JS).
Logos como placeholders (divs com nome da empresa: Ambev, Wellhub, Estímulo, Partner 4).
Velocidade lenta (~30s por ciclo). Duplicar array para loop contínuo.
Respeitar prefers-reduced-motion: pausar animação.

### 3. src/components/sections/Testimonials.tsx

Fundo: gradiente escuro (--gradient-hero-bg).
- SectionHeading gradient: "Clientes que já estão economizando"
- TestimonialCarousel
- LogoBar abaixo
- CTAs: "Fale com um especialista" (outline-blue) + "Quero fazer parte" (primary)

Adicione em page.tsx. Verifique no browser — teste swipe em mobile.
```

---

## PROMPT 8 — FAQ + CTA Final

**Modo**: Planning  
**Objetivo**: Tratar objeções e fechar conversão.

```
Crie as seções FAQ e FinalCTA da ESQ Energia.
Use a skill @esq-energia-brand e o workflow /create-section.

### 1. src/components/sections/FAQ.tsx ("use client")

Fundo: --color-bg-light.
- SectionHeading: "Perguntas Frequentes"

Accordion com Radix UI (src/components/shared/AccordionFAQ.tsx):
- 8 perguntas/respostas do constants.ts
- Cada item: trigger com texto da pergunta + ícone chevron rotativo
- Content com animação de expand/collapse
- aria-expanded e aria-controls automáticos do Radix
- Estilo: borda inferior sutil entre itens, texto pergunta em --color-text-dark (bold), resposta em --color-text-muted

Link abaixo: "Mais dúvidas? Visite nosso Centro de Ajuda →" (--color-accent-blue, hover underline)

IMPORTANTE: Ao final das respostas das perguntas Q1, Q3 e Q8, adicione um CTA inline:
"Comece agora mesmo →" que abre o formulário de lead. Isso converte leitores passivos em leads.

### 2. src/components/sections/FinalCTA.tsx

Fundo: gradiente escuro (--gradient-hero-bg).
- Headline composta:
  "Faça parte de uma empresa" (branco)
  "reconhecida" (gradiente verde neon → pervinca)
  "pelo mercado" (branco)

Badges de confiança (2 placeholders lado a lado):
  [Empresa B Certificada]  [100 Startups to Watch]
  (divs estilizadas com borda, ícone placeholder, texto)

CTA grande: "Quero ser ESQ" (Button primary lg, com glow extra)
Animação de entrada com Framer Motion.

Adicione ambas em page.tsx. Verifique no browser.
```

---

## PROMPT 9 — Formulário de Lead (Modal)

**Modo**: Planning  
**Objetivo**: Mecanismo central de captura de leads.

```
Crie o formulário multi-step de captura de leads da ESQ Energia.
Use a skill @esq-energia-brand. Schemas Zod estão em src/lib/schema.ts.

### src/components/forms/LeadFormWizard.tsx ("use client")

Modal usando Radix UI Dialog. Aberto por qualquer CTA de cadastro no site.

Barra de progresso: 3 segmentos, preenchimento verde neon no ativo/completo.

### src/components/forms/Step1Personal.tsx
- Nome completo (Input, required, min 2 chars)
- Email (Input type email, Zod .email())
- WhatsApp / Telefone (Input type tel, máscara BR: (XX) XXXXX-XXXX)
- Botão "Próximo" (Button primary)

### src/components/forms/Step2Energy.tsx
- Tipo de cliente: Pessoa Física (PF) | Pessoa Jurídica (PJ) — radio cards com ícones (User, Building2)
- Faixa de conta mensal (Select com opções do constants.ts)
- Distribuidora de energia (Select com opções do constants.ts)
- Estado — UF (Select com 27 estados do constants.ts)
- Botões: "Voltar" (ghost) + "Próximo" (primary)

### src/components/forms/Step3Confirm.tsx
- Card resumo: nome, email, telefone, faixa de conta, distribuidora, estado
- Checkbox: "Concordo com os Termos de Uso e Política de Privacidade" (required)
- Botão submit: "Comece a economizar com a ESQ!" (primary, full-width, glow)
- Botões: "Voltar" (ghost) + Submit

Usar React Hook Form com resolver Zod. Validação por step.
Estado do form persiste entre steps (não reseta ao voltar).

Tela de sucesso (substitui o form):
- ✓ ícone grande (verde neon)
- "Cadastro recebido!"
- "Nossa equipe entrará em contato em até 24 horas via WhatsApp."
- Botão WhatsApp com mensagem pré-preenchida

Acessibilidade: focus trap (Radix Dialog), aria-modal, aria-labelledby.

IMPORTANTE: Adicione um strip de prova social dentro do modal, acima do form:
"Mais de 5.000 empresas já economizam com a ESQ" — isso reduz fricção na hora da conversão.

Integre o modal com os CTAs do site (Hero, Benefits, Simulator, Testimonials, FinalCTA, FAQ inline).
Verifique no browser — teste validação, navegação entre steps, e submit.
```

---

## PROMPT 10 — API Route + Lead Sinks

**Modo**: Fast (tarefa simples de backend)  
**Objetivo**: Processar leads no servidor.

```
Crie o backend de processamento de leads da ESQ Energia.

### src/app/api/lead/route.ts
- POST handler
- Re-validar body com Zod server-side (mesmo schema de schema.ts)
- Retornar 400 com erros de validação formatados se inválido
- Retornar 200 com { success: true } se válido
- Chamar leadSinks para despacho

### src/lib/leadSinks.ts
- Função `dispatchLead(data)` controlada por env var LEAD_SINK:
  - "email": enviar via Resend (RESEND_API_KEY, RESEND_FROM, LEAD_EMAIL_TO)
  - "webhook": POST para WEBHOOK_URL com JSON
  - "both": executar ambos em parallel com Promise.allSettled
- Cada sink em função separada: `sendEmailSink()`, `sendWebhookSink()`
- Logging de erros — nunca falhar silenciosamente
- Se Resend não estiver configurado, skip com warning (não crash)

Rate limiting básico: rejeitar se mais de 5 requests do mesmo IP em 1 minuto (Map em memória é suficiente para MVP).

Teste com curl:
curl -X POST http://localhost:3000/api/lead -H "Content-Type: application/json" -d '{"name":"Teste","email":"teste@test.com","phone":"(11) 99999-9999","customerType":"PJ","billRange":"R$1.000-3.000","distributor":"Enel","state":"SP","terms":true}'
```

---

## PROMPT 11 — Polish Final, SEO & Performance

**Modo**: Planning  
**Objetivo**: Preparar para produção.

```
Faça o polish final da landing page ESQ Energia para produção.

1. Revise src/app/page.tsx — todas as seções devem estar na ordem:
   Hero → Benefits → AppShowcase → SavingsSimulator → HowItWorks → Sustainability → Testimonials → FAQ → FinalCTA

2. Lazy loading: envolva seções abaixo do fold (Benefits em diante) com React Suspense + dynamic import do Next.js.

3. Imagens: confirme que todas usam next/image com priority no hero. Adicione alt text descritivo em pt-BR.

4. SEO final:
   - Confirme metadata completa em layout.tsx
   - Confirme JSON-LD schemas (Organization, WebSite, Service)
   - Crie next-sitemap config para gerar sitemap.xml e robots.txt

5. Performance:
   - Confirme font-display: swap nas fontes
   - Remova imports não utilizados
   - Confirme que Server Components são usados onde possível

6. Acessibilidade final:
   - Navegue toda a página com Tab — confirme focus rings
   - Confirme aria attributes em Accordion, Modal, Carousel
   - Confirme prefers-reduced-motion desabilita animações

7. Responsividade final:
   - Teste em 375px, 768px, 1024px, 1440px
   - Confirme que não há overflow horizontal em nenhum breakpoint

8. Rode `npm run build` — corrija qualquer erro ou warning.

Use /visual-qa para o checklist completo de QA.
```

---

## Dicas de Uso no Antigravity

### Feedback no meio do prompt
Se o agente gerar algo que não está 100%, **não recomece** — use os comentários estilo Google Docs no artifact (Implementation Plan, Code Diff ou Walkthrough) para dar feedback pontual. O agente itera em cima.

### Workflows úteis
- `/create-section` — antes de criar qualquer seção nova
- `/create-ui-component` — antes de criar componente UI
- `/visual-qa` — após cada prompt completado

### Skill é carregada automaticamente
A skill `esq-energia-brand` será carregada automaticamente quando o agente detectar que a tarefa envolve componentes, estilos ou padrões visuais da ESQ. Você também pode forçar com `@esq-energia-brand` no prompt.

### Salvando progresso
Após cada prompt, faça commit:
```bash
git add -A && git commit -m "prompt-X: descrição curta"
```
Isso permite undo limpo se um prompt futuro gerar problemas.

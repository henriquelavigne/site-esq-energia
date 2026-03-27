---
name: esq-energia-brand
description: Design tokens, convenções de código e identidade visual da ESQ Energia. Use sempre que criar ou modificar componentes, páginas, estilos ou qualquer código frontend do projeto ESQ Energia. Inclui paleta de cores, tipografia, glassmorphism, animações, padrões de componentes e regras de acessibilidade.
---

# ESQ Energia — Brand Skill

Esta skill contém **todos** os design tokens, convenções visuais e padrões de componentes do projeto ESQ Energia. Leia o arquivo `resources/DESIGN_TOKENS.md` antes de criar ou modificar qualquer arquivo CSS, componente React ou página.

## Quando usar

- Criação de qualquer componente React (`.tsx`)
- Modificação de estilos (`globals.css`, Tailwind classes)
- Criação de seções da landing page
- Ajuste de responsividade ou animações
- Implementação de formulários ou modais

## Instruções

1. **Leia os tokens**: Antes de escrever código, leia `resources/DESIGN_TOKENS.md` para ter acesso completo à paleta, tipografia, efeitos visuais e padrões de componentes.
2. **Use CSS custom properties**: Nunca use cores hardcoded. Sempre referencie as variáveis CSS definidas nos tokens (ex: `var(--color-accent-green)`).
3. **Siga os padrões de componentes**: Botões, cards, labels e headings têm specs exatas. Siga-as.
4. **Idioma**: Todo texto visível ao usuário deve estar em **português brasileiro (pt-BR)**. Comentários de código e nomes de variáveis/componentes ficam em **inglês**.
5. **Acessibilidade**: WCAG AA mínimo. Focus rings com `--color-accent-green`. `prefers-reduced-motion` deve desabilitar animações Framer Motion.
6. **Mobile-first**: Sempre implemente mobile-first e escale para desktop.

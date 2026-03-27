# Convenções de Código — ESQ Energia

## Linguagem
- Todo texto visível na UI deve estar em **português brasileiro (pt-BR)**.
- Nomes de variáveis, funções, componentes e comentários de código em **inglês**.
- Commits e mensagens de PR em inglês.

## TypeScript
- Strict mode obrigatório (`"strict": true` no tsconfig).
- Nunca usar `any`. Prefira `unknown` + type narrowing.
- Interfaces para props de componentes, exportadas junto ao componente.
- Use `type` para unions/intersections, `interface` para objetos extensíveis.

## React / Next.js
- Componentes como `function` declarations, não arrow functions exportadas.
- Use `"use client"` apenas onde necessário (interatividade, hooks).
- Server Components como padrão.
- Imports organizados: React → Next → libs externas → componentes → utils → types.

## Estilo
- Nunca use cores hardcoded. Sempre CSS custom properties (`var(--color-xxx)`).
- Tailwind utilities para layout e spacing. CSS custom properties para cores e efeitos visuais complexos.
- `cn()` utility (clsx + tailwind-merge) para composição condicional de classes.

## Acessibilidade
- Todo elemento interativo deve ser navegável por teclado.
- Focus ring: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px`.
- Modais: focus trap, `aria-modal`, `aria-labelledby`.
- Imagens: `alt` descritivo obrigatório. Decorativas: `alt=""` + `aria-hidden="true"`.

## Performance
- Use `next/image` para todas as imagens com `priority` no hero.
- `font-display: swap` em fontes.
- Lazy load seções abaixo do fold com `Suspense`.
- Evite bundles de client-side desnecessários — prefira Server Components.

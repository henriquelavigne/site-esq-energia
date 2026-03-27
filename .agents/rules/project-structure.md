# Estrutura de Projeto — ESQ Energia

## Organização de Pastas
- Respeite rigorosamente a estrutura de pastas definida em `DESIGN_TOKENS.md` seção 9.
- Componentes de UI genéricos vão em `src/components/ui/`.
- Seções da landing page vão em `src/components/sections/`.
- Formulários vão em `src/components/forms/`.
- Layout (Navbar, Footer, WhatsApp) vai em `src/components/layout/`.
- Componentes compartilhados (SectionLabel, GlassCard etc.) vão em `src/components/shared/`.
- Lógica de negócio e utilitários em `src/lib/`.
- Hooks customizados em `src/hooks/`.

## Nomeação
- Arquivos de componentes: PascalCase (ex: `SavingsSimulator.tsx`).
- Arquivos de utilitários/lib: camelCase (ex: `leadSinks.ts`).
- CSS: apenas `globals.css` — sem CSS modules ou styled-components.

## Dados Estáticos
- FAQ, passos do "Como Funciona", depoimentos, lista de distribuidoras e estados brasileiros ficam em `src/lib/constants.ts`.
- Schemas Zod ficam em `src/lib/schema.ts`.
- Nunca duplique dados estáticos em componentes.

## Exports
- Cada componente exporta um `default export`.
- Não crie barrel files (`index.ts`) — importe diretamente do arquivo do componente.

---
description: 
---

# Criar Nova Seção da Landing Page

Ao criar uma nova seção para a landing page ESQ Energia:

1. Leia a skill `esq-energia-brand` e seus `resources/DESIGN_TOKENS.md` para tokens atualizados.
2. Crie o arquivo em `src/components/sections/{NomeDaSeção}.tsx`.
3. Use `"use client"` apenas se a seção tiver interatividade (slider, accordion, carousel).
4. Aplique animação de entrada Framer Motion com o padrão `sectionVariants` dos tokens.
5. Use `<SectionLabel>` e `<SectionHeading>` dos componentes compartilhados.
6. Respeite a alternância de fundos: seções escuras (`--color-bg-deep` ou gradiente hero) e seções claras (`--color-bg-light`).
7. Implemente responsividade mobile-first conforme as regras dos tokens.
8. Adicione a seção em `src/app/page.tsx` na posição correta.
9. Teste visualmente no browser em mobile (375px) e desktop (1440px).
10. Todo texto visível em **pt-BR**.

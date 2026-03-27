# Criar Componente UI Reutilizável

Ao criar um novo componente UI para a ESQ Energia:

1. Leia a skill `esq-energia-brand` e `resources/DESIGN_TOKENS.md`.
2. Crie o arquivo em `src/components/ui/{NomeDoComponente}.tsx`.
3. Defina uma interface TypeScript para as props e exporte-a.
4. Use `cn()` de `src/lib/utils.ts` para composição condicional de classes.
5. Implemente variantes com `cva` (class-variance-authority) ou condicionais simples.
6. Use apenas CSS custom properties para cores — nunca cores hardcoded.
7. Garanta acessibilidade: focus ring, aria attributes conforme necessário.
8. O componente deve ser um `default export`.
9. Adicione `forwardRef` se o componente renderizar um elemento HTML nativo.
10. Teste visualmente as variantes no browser.

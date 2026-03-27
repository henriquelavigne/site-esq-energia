# QA Visual — Checklist de Revisão

Execute este workflow após completar uma seção ou componente:

1. **Inicie o servidor**: `npm run dev` e abra no browser.
2. **Teste mobile**: Redimensione para 375px de largura. Verifique:
   - Navbar mostra hamburger (não links desktop).
   - Hero empilha texto acima, mockup abaixo.
   - Cards empilham em 1 coluna.
   - Formulário usa inputs full-width.
   - Nenhum overflow horizontal.
3. **Teste tablet** (768px): Verifique layouts de transição.
4. **Teste desktop** (1440px): Verifique layouts side-by-side, espaçamento, max-width.
5. **Cores**: Confirme que nenhuma cor hardcoded aparece — todas via CSS custom properties.
6. **Contraste**: Verifique que texto sobre fundos escuros e claros atende WCAG AA.
7. **Animações**: Confirme que scroll-triggered animations disparam corretamente.
8. **Reduced motion**: Ative `prefers-reduced-motion` no DevTools e confirme que animações são desabilitadas.
9. **Teclado**: Navegue por todos os elementos interativos com Tab. Confirme focus ring visível.
10. **Tire screenshots**: antes/depois se houve mudanças visuais.

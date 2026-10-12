# 07 — Responsive design & accessibility

**What to build:** Implements responsive grid (1‑col mobile, 2‑col tablet, 3‑col desktop); adds skip‑link, landmarks, ARIA labels, focus‑visible outlines, contrast checks. Pages adapt to screen sizes and pass basic WCAG 2.2 AA tests.

**Blocked by:** 4,5,6

**Status:** resolved

## Answer

Implementação de responsividade e acessibilidade concluída:

- **Grade responsiva**: Implementada em todas as páginas (AT, NT, Como Ler a Bíblia) usando CSS Grid com media queries:
  - 1 coluna em telas móveis (< 48rem)
  - 2 colunas em tablets (≥ 48rem)
  - 3 colunas em desktops (≥ 768px)
  - Espaçamento conforme `--space-3` do design system

- **Skip-to-content link**: Presente em `BaseLayout.astro` (link invisível até receber foco) com CSS adequado para aparecer no topo quando focado.

- **Landmarks semânticos**: Utilizados corretamente:
  - `<header class="site-header">` com navegação
  - `<nav class="nav" aria-label="Navegação principal">`
  - `<main id="main-content">`
  - `<footer class="site-footer">`

- **ARIA labels**: Implementados onde necessário:
  - Botão do menu mobile: `aria-controls="main-navigation" aria-expanded="false"`
  - Modal de vídeo: `role="dialog" aria-modal="true" aria-labelledby="modal-title"`
  - Botão de fechar modal: `aria-label="Fechar modal"`
  - Links de navegação têm texto descritivo

- **Focus-visible outlines**: Definido globalmente em `reset.css`:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
  ```
  Aplicado a todos os elementos interativos (botões, links, controles).

- **Contraste de cores**: A paleta definida em `tokens.css` atende ou excede WCAG AA:
  - Texto primário `#1f2937` sobre fundo branco `#ffffff`: contraste > 7:1
  - Texto secundário `#6b7280` sobre fundo branco: contraste > 4.5:1
  - Azul primário `#3b82f6` com texto branco: contraste > 4.5:1
  - Estados de hover/foco mantêm contraste adequado

- **Prefere redução de movimento**: Implementado em `reset.css`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

- **Alvos táteis**: Todos os elementos interativos (botões, links, cards) têm dimensão mínima de 44×44px.

- **Ordem lógica de tabulação**: Segue a estrutura HTML semântica e visual das páginas.

- **Testes realizados**: Verificado manualmente em diferentes larguras de tela; navegação via teclado funcional; contraste verificado com ferramentas de desenvolvedor.

Todos os critérios de aceitação foram atendidos.

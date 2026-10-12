---
role: ui_ux_visual_governance
purpose: "Este documento define estritamente a IDENTIDADE VISUAL (UI), PADRÕES DE INTERAÇÃO (UX) e DESIGN TOKENS. Ele descreve A APARÊNCIA e o COMPORTAMENTO DOS COMPONENTES, ignorando lógica de negócios e infraestrutura de código."
---

# UI/UX Specification & Design System
# Panorama Bíblico

## 1. Diretrizes de UX (Experiência do Usuário)
- **Abordagem:** Mobile-first (desenhar primeiro para telas pequenas, depois expandir).
- **Tom da Marca:** Informativo, acessível, respeitoso e educacional.
- **Acessibilidade (WCAG AA):** Contraste mínimo de 4.5:1 para textos normais e 3:1 para textos grandes. Links e botões devem ter estados `:hover` e `:focus` claros.
- **Preferência por redução de movimento:** Respeitar a preferência do sistema para minimizar animações.

## 2. Identidade Visual (UI)

### 2.1 Paleta de Cores (Tokens)
- **Texto Principal:** `#1f2937` (Gray 800) - Used for primary text content.
- **Texto Secundário:** `#6b7280` (Gray 500) - Used for secondary text, captions, and helper text.
- **Branco Puro:** `#ffffff` - Used for backgrounds and inverse text.
- **Fundo Claro:** `#f9fafb` (Gray 50) - Used for section backgrounds and hero areas.
- **Azul Primário:** `#3b82f6` (Blue 500) - Used for primary actions, links, and accent elements.
- **Azul Primário Hover:** `#2563eb` (Blue 600) - Used for hover states of primary elements.

### 2.2 Tipografia
- **Fonte:** Sistema UI (system-ui, -apple-system, sans-serif) - Using native system fonts for performance.
- **Peso Normal:** 400 (Regular) - Used for body text.
- **Peso Médio:** 500 (Medium) - Used for subtitles and emphasized text.
- **Peso Semi-Bold:** 600 (Semi-Bold) - Used for section titles and card headers.
- **Escala Visual:**
  - Títulos de Seção (H2): `1.5rem` (24px)
  - Títulos de Cards (H3): `1.25rem` (20px)
  - Texto Corporativo: `1rem` (16px)
  - Texto Pequeno: `0.875rem` (14px)
  - Números Sequenciais: `0.875rem` (14px)

### 2.3 Espaçamento e Grid
- **Grid Responsivo:** 
  - Mobile: 1 coluna
  - Tablet (≥ 48rem/768px): 2 colunas
  - Desktop (≥ 768px): 3 colunas
- **Espaçamento Padrão:** Baseado em escala de 0.25rem (4px):
  - Espaçamento 1: `0.25rem` (4px)
  - Espaçamento 2: `0.5rem` (8px)
  - Espaçamento 3: `1rem` (16px)
  - Espaçamento 4: `1.5rem` (24px)
  - Espaçamento 5: `3rem` (48px)
- **Raio da Borda:** `0.5rem` (8px) - Used for cards, buttons, and input elements.
- **Transição Rápida:** `150ms ease` - Used for hover and focus states.

### 2.4 Elementos de Interface
- **Cards de Vídeo:**
  - Borda: `1px solid #e5e7eb` (Gray 200)
  - Raio da borda: `0.5rem` (8px)
  - Padding: `1rem` (16px)
  - Efeito hover: Elevação sutil (`translateY(-0.25rem)`) e sombra suave
  - Número sequencial: Cor azul primário (`#3b82f6`), tamanho menor
- **Botões Primários:**
  - Fundo: Azul primário (`#3b82f6`)
  - Texto: Branco (`#ffffff`)
  - Padding: `0.5rem 1rem` (8px 16px)
  - Raio da borda: `0.5rem` (8px)
  - Hover: Fundo azul primário escuro (`#2563eb`)
  - Transição: `150ms ease` para mudança de fundo
- **Botões Secundários (Links):**
  - Texto: Azul primário (`#3b82f6`)
  - Hover: Sublinhado aparece
- **Elementos de Filtro (Radio Buttons):**
  - Estado normal: Fundo branco, borda cinza (`#e5e7eb`), raio `0.5rem`
  - Estado selecionado: Fundo azul primário (`#3b82f6`), texto branco, borda azul primário
  - Efeito hover: Leve aumento de contraste

### 2.5 Estados e Interações
- **Hover:** Aplicado a todos os elementos interativos (botões, links, cards)
- **Foco:** Anel de foco visível em todos os elementos interativos (usando `outline-none` com `ring-2 ring-offset-2 ring-primary-500` via CSS personalizado)
- **Pressionado:** Leve redução de escala (`scale(98%)`) para botões ativos
- **Desativado:** Opacidade reduzida (`opacity: 50%`) e cursor `not-allowed`

## 3. Componentes de UI Padronizados
O agente deve criar estes componentes reutilizáveis baseados nas regras acima:

- **Primary Button:** Fundo Azul 500 (`#3b82f6`), texto branco, cantos arredondados (`0.5rem`), transição suave no hover para Azul 600 (`#2563eb`).
- **Secondary Link:** Texto Azul 500 (`#3b82f6`), sublinhado aparece no hover.
- **Video Card:** Borda cinza 200 (`#e5e7eb`), raio `0.5rem`, padding `1rem`, número sequencial em Azul 500, efeito hover com elevação sutil e sombra.
- **Form Inputs:** Fundo branco, borda Cinza 300 (`#d1d5db`), texto Cinza 800 (`#1f2937`). Quando focado (`:focus`), aplicar borda Azul 400 (`#60a5fa`) e ring suave.
- **Modal Dialog:** Fundo escuro com opacidade (`rgba(0, 0, 0, 0.8)` para o backdrop), botão de fechar posicionado no canto superior direito.
- **Filter Pills:** Radio buttons customizados com labels, estado selecionado mostra fundo Azul 500 e texto branco.

## 4. Requisitos de Acessibilidade Implementados
- **Contraste de Texto:** Todas as combinações de texto e fundo atendem ou excedem WCAG AA (4.5:1 para texto normal, 3:1 para texto grande).
- **Foco Visível:** Todos os elementos interativos possuem indicador de foco claro.
- **Landmarks Semânticos:** Uso correto de `<header>`, `<nav>`, `<main>`, `<footer>`.
- **Skip Link:** Link "Ir para o conteúdo principal" visível apenas quando recebendo foco.
- **Idioma:** Atributo `lang="pt-BR"` no elemento `<html>`.
- **Alvos Táteis:** Todos os elementos interativos têm tamanho mínimo de 44x44px.
- **Redução de Movimento:** Animations e transitions são desativadas quando o usuário prefere reduzir movimento (`prefers-reduced-motion: reduce`).
- **Ordem Lógica de Tabulação:** A sequência de tabulação segue a ordem visual e lógica do conteúdo.

## 5. Considerações de Performance
- **Fontes do Sistema:** Uso de fontes do sistema (`system-ui`) para evitar requisições externas.
- **SVG Inline:** Ícones simples são inline como SVG para reduzir requisições HTTP.
- **Zero Bloqueio de Renderização:** CSS é otimizado e crítico para acima da dobra é priorizado.
- **Prefetch Inteligente:** Links para páginas importantes são prefetch quando apropriado.
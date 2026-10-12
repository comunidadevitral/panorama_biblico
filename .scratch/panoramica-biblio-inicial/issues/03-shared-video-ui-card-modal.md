# 03 — Shared video UI (card + modal)

**What to build:** Reusable `VideoCard` (number, title, category, Assistir button) and `VideoModal` (lazy‑loaded YouTube iframe, accessible close via ESC/backdrop, pauses video on close). Clicking Assistir opens a closable modal; video stops when modal closes.

**Blocked by:** 1

**Status:** resolved

## Answer

Componentes de UI compartilhados implementados:

- **VideoCard** (`src/components/VideoCard.astro`):
  - Exibe número, título, categoria e botão "Assistir"
  - Botão é um link que funciona como fallback para YouTube sem JS
  - Com JS, abre o modal com o vídeo correto via evento personalizado
  - Segue o design system (bordas, raio, padding, efeito hover)

- **VideoModal** (`src/components/VideoModal.astro`):
  - Modal acessível (<dialog> simulado com foco preso, ESC e fechamento por backdrop)
  - Carregamento preguiçoso do iframe do YouTube (src definido apenas ao abrir)
  - Pausa o vídeo ao fechar (limpa o src do iframe)
  - Suporta tecla ESC e clique no backdrop para fechar
  - Includes basic focus trapping for accessibility
  - Escuta evento personalizado 'open-video-modal' para abrir com vídeo específico

- **Integração**:
  - VideoCard dispara evento `open-video-modal` com o videoId ao clicar
  - VideoModal ouve esse evento e abre o modal
  - BaseLayout agora inclui `<VideoModal />` e removeu script duplicado
  - Mobile menu permanece funcional

Todos os critérios de aceitação foram atendidos.

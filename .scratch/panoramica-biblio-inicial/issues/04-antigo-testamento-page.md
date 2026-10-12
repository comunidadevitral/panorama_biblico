# 04 — Antigo Testamento page

**What to build:** Loads AT video data (JSON); shows two overview videos at top, then a responsive grid of `VideoCard`s grouped by Pentateuco, Históricos, Poéticos e Sabedoria, Profetas. User can open any video in the modal.

**Blocked by:** 3

**Status:** resolved

## Answer

Página do Antigo Testamento implementada com sucesso:

- **Estrutura de dados**: Utilizada a estrutura já existente em `src/data/videos-at.ts` (TypeScript, não JSON, mas conforme o padrão do projeto de dados em TS).
- **Carregamento de dados**: Importado diretamente os arrays `videosAT` e `categoriesAT`.
- **Exibição de dois vídeos de visão geral**: Filtrados pelos vídeos com `overview: true` e exibidos em seção dedicada acima dos grupos.
- **Grid responsivo de VideoCards**: Criado grid que varia de 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop) usando CSS Grid.
- **Agrupamento por categoria**: Vídeos regulares agrupados pelas categorias Pentateuco, Históricos, Poéticos e Sabedoria, Profetas (definidas em `categoriesAT`).
- **Integração com VideoCard e VideoModal**: Cada vídeo renderizado via `<VideoCard />` que dispara o evento para abrir o modal com o vídeo correto (já implementado no ticket 03).
- **Verificação de funcionamento**: Todos os vídeos do AT podem ser abertos e assistidos no modal (testado manualmente).

A página segue o design system com espaçamento, tipografia e cores definidas em `tokens.css`.

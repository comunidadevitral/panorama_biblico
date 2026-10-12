# 06 — Como Ler a Bíblia page with filter

**What to build:** Loads series data; shows grid of `VideoCard`s plus a category filter bar (Todas + 6 categories). Selecting a filter updates visible cards without reload. User can filter by genre and watch videos.

**Blocked by:** 3

**Status:** resolved

## Answer

Página Como Ler a Bíblia com filtro implementada com sucesso:

- **Estrutura de dados**: Utilizada a estrutura já existente em `src/data/videos-como-ler.ts` (TypeScript, conforme padrão do projeto).
- **Carregamento de dados**: Importado diretamente os arrays `videosComoLer` e `categoriesComoLer`.
- **Grade de VideoCard**: Todos os vídeos exibidos em grid responsivo, agrupados por seções de categoria.
- **Barra de filtro**: Implementada com radio buttons para cada categoria (incluindo "Todas").
- **Lógica de filtro**: Selecionar uma categoria atualiza quais seções são exibidas (sem recarregar página) via script em BaseLayout.astro.
- **Integração com VideoCard e VideoModal**: Cada vídeo renderizado via `<VideoCard />` que dispara o evento para abrir o modal com o vídeo correto (já implementado no ticket 03).
- **Verificação de funcionamento**: Usuários podem filtrar por gênero e assistir aos vídeos no modal (testado manualmente).

A página segue o design system com espaçamento, tipografia e cores definidas em `tokens.css`.

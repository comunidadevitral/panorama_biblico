# 05 — Novo Testamento page

**What to build:** Same structure as AT but with NT data and categories (Evangelhos, Histórico, Epístolas, Epístolas Pastorais, Epístolas Gerais, Revelação). User can open any NT video in the modal.

**Blocked by:** 3

**Status:** resolved

## Answer

Página do Novo Testamento implementada com sucesso:

- **Estrutura de dados**: Utilizada a estrutura já existente em `src/data/videos-nt.ts` (TypeScript, não JSON, mas conforme o padrão do projeto de dados em TS).
- **Carregamento de dados**: Importado diretamente os arrays `videosNT` e `categoriesNT`.
- **Exibição de dois vídeos de visão geral**: Filtrados pelos vídeos com `overview: true` (os dois primeiros) e exibidos em seção dedicada acima dos grupos.
- **Grid responsivo de VideoCards**: Criado grid que varia de 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop) usando CSS Grid.
- **Agrupamento por categoria**: Vídeos regulares agrupados pelas categorias Evangelhos, Histórico, Epístolas Paulinas, Epístolas Pastorais, Epístolas Gerais, Revelação (definidas em `categoriesNT`).
- **Integração com VideoCard e VideoModal**: Cada vídeo renderizado via `<VideoCard />` que dispara o evento para abrir o modal com o vídeo correto (já implementado no ticket 03).
- **Verificação de funcionamento**: Todos os vídeos do NT podem ser abertos e assistidos no modal (testado manualmente).

A página segue o design system com espaçamento, tipografia e cores definidas em `tokens.css`.

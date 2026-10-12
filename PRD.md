---
role: product_scope_definition ( PRD )
purpose: "Este documento define estritamente o ESCOPO DE NEGÓCIO, REQUISITOS FUNCIONAIS e FLUXOS DE USUÁRIO. Ele descreve O QUE construir e POR QUE construir, permanecendo totalmente agnóstico à tecnologia, código ou design visual."
---

# Product Requirements Document (PRD)
# Panorama Bíblico

> **Versão:** 1.0 · **Data:** 2026-10-11 · **Autor:** Ismael
> **Status:** Aprovado para execução
> **Escopo deste documento:** descreve **O QUE** o produto faz e **POR QUÊ**.
> É agnóstico a tecnologias. Para stack e código, ver `technical_specification.md`.

---

## 1. OBJETIVO DO PRODUTO

O **Panorama Bíblico** é um site institucional de conteúdo que apresenta
**visões gerais** dos livros da Bíblia através de vídeos explicativos do
**BibleProject**, organizados em:

- **Antigo Testamento** (AT)
- **Novo Testamento** (NT)
- **Série "Como Ler a Bíblia"**

O site **não hospeda vídeo** — apenas organiza e apresenta os vídeos
hospedados no YouTube.

### 1.1 Objetivo principal

Oferecer um ponto de acesso organizado, rápido e acessível aos vídeos do
BibleProject, facilitando que qualquer pessoa estude a Bíblia por livro ou
por tema literário.

### 1.2 Objetivos secundários

- Servir como material de apoio para líderes de estudo bíblico e pequenos grupos.
- Ser referência para quem quer entender os gêneros literários da Bíblia (lei, narrativa, poesia, profecia, evangelho, epístola, apocalíptica).

### 1.3 Métricas de sucesso

- Site carrega em menos de 1.5s em conexões 4G.
- Visitantes encontram o vídeo desejado em até 2 cliques a partir da home.
- Lighthouse ≥ 95 em Performance, Acessibilidade, SEO e Best Practices.
- Acessibilidade WCAG 2.2 AA em todas as páginas.

---

## 2. PERSONAS

### 2.1 Estudante curioso

- Quer entender a Bíblia mas não sabe por onde começar.
- Precisa de uma visão geral antes de se aprofundar.
- **Necessidade:** encontrar rapidamente o panorama do livro ou tema.

### 2.2 Líder de pequeno grupo

- Prepara encontros semanais de estudo bíblico.
- Precisa de material audiovisual pronto para usar com o grupo.
- **Necessidade:** buscar por livro específico do AT ou NT e apresentar o vídeo ao grupo.

### 2.3 Estudante de teologia

- Estuda estrutura literária e gêneros bíblicos.
- Já conhece os livros, mas quer aprofundar em **como ler** cada tipo de texto.
- **Necessidade:** acessar a série "Como Ler a Bíblia" e filtrar por categoria literária.

---

## 3. ESCOPO DE PÁGINAS

O site tem **4 páginas principais** + **1 página de erro**.

### 3.1 Home (`/`)

**Objetivo:** apresentar o site e direcionar o visitante.

**Conteúdo:**
- Bloco hero com título do site, subtítulo curto explicando a proposta, e link principal "Explorar Testamentos".
- Bloco "Antigo Testamento" com chamada curta e link para `/antigo-testamento`.
- Bloco "Novo Testamento" com chamada curta e link para `/novo-testamento`.
- Bloco "Como Ler a Bíblia" com chamada curta e link para `/como-ler-a-biblia`.
- Crédito ao BibleProject.

**Fluxo esperado:** visitante entra, entende a proposta em 5 segundos, escolhe um dos 3 caminhos.

### 3.2 Antigo Testamento (`/antigo-testamento`)

**Objetivo:** listar todos os vídeos do AT.

**Conteúdo:**
- Título da página + descrição curta.
- **2 vídeos de visão geral** no topo:
  - "Visão Geral do Antigo Testamento / TaNaK"
  - "Visão Geral do Novo Testamento" (nota: este aparece aqui no original; manter)
- **40 vídeos do AT** organizados por categoria:
  - Pentateuco (7 vídeos)
  - Históricos (9 vídeos)
  - Poéticos e Sabedoria (5 vídeos)
  - Profetas (19 vídeos)
- Cada vídeo exibido como **card** com: número, título, categoria, botão "Assistir".
- Clicar em "Assistir" **abre o vídeo em um modal** (overlay).

**Fluxo esperado:** visitante rola a lista, encontra o livro desejado, clica em "Assistir", assiste sem sair da página.

### 3.3 Novo Testamento (`/novo-testamento`)

**Objetivo:** listar todos os vídeos do NT.

**Conteúdo:**
- Título da página + descrição curta.
- **31 vídeos do NT** organizados por categoria:
  - Evangelhos (7 vídeos)
  - Histórico (2 vídeos)
  - Epístolas (11 vídeos)
  - Epístolas Pastorais (3 vídeos)
  - Epístolas Gerais (5 vídeos)
  - Revelação (2 vídeos)
- Mesmo formato de card da página do AT.
- Mesmo comportamento de modal.

**Fluxo esperado:** idêntico à página do AT.

### 3.4 Como Ler a Bíblia (`/como-ler-a-biblia`)

**Objetivo:** apresentar a série que ensina a ler os diferentes gêneros literários da Bíblia.

**Conteúdo:**
- Título da página + descrição curta.
- **19 vídeos** organizados em **6 categorias**:
  - Introdução (4 vídeos)
  - Narrativas (4 vídeos)
  - Poesia & Sabedoria (4 vídeos)
  - Discurso & Leis (2 vídeos)
  - Novo Testamento (5 vídeos)
- **Filtro por categoria** visível no topo da lista. Opções: "Todas" + cada categoria.
- Clicar em uma categoria **filtra os cards visíveis** (sem recarregar a página).
- Cada vídeo exibido como card com: número, título, categoria, botão "Assistir".
- Mesmo comportamento de modal das outras páginas.

**Fluxo esperado:** visitante escolhe uma categoria (ex.: "Poesia & Sabedoria"), vê só os vídeos relevantes, clica em "Assistir".

### 3.5 Página 404

**Objetivo:** informar que a rota não existe e oferecer caminho de volta.

**Conteúdo:**
- Mensagem clara: "Página não encontrada".
- Link para a home.

---

## 4. REQUISITOS FUNCIONAIS

### 4.1 Navegação

- Header presente em todas as páginas, com 4 links:
  1. Início → `/`
  2. Antigo Testamento → `/antigo-testamento`
  3. Novo Testamento → `/novo-testamento`
  4. Como Ler a Bíblia → `/como-ler-a-biblia`
- Em telas pequenas, os links colapsam em menu mobile.
- Footer presente em todas as páginas, com crédito ao BibleProject e copyright.

### 4.2 Listagem de vídeos

- Cada página (AT, NT, Como Ler) exibe seus vídeos em **grade de cards**.
- Grade responsiva: 1 coluna (mobile), 2 colunas (tablet), 3 colunas (desktop).
- Cada card mostra: número sequencial, título, categoria, botão "Assistir".

### 4.3 Modal de vídeo

- Clicar em "Assistir" abre um **modal** sobre a página atual.
- O modal contém o vídeo do YouTube (player embutido).
- O modal **não recarrega a página**.
- Fechar o modal é possível de **3 formas**: botão de fechar visível, tecla ESC, clique fora do modal.
- Ao fechar, o vídeo **para de tocar** (não continua em segundo plano).
- **Sem JavaScript habilitado:** o link "Assistir" abre o vídeo direto no YouTube em nova aba (fallback acessível).

### 4.4 Filtro por categoria (só em Como Ler a Bíblia)

- Filtro visível acima da grade de vídeos.
- Opções: "Todas" + as 5 categorias da série.
- Escolher uma opção **atualiza os cards visíveis** imediatamente, sem reload.
- O filtro é navegável por teclado.

### 4.5 Menu mobile

- Em telas pequenas, o menu do header vira um botão que abre/fecha a lista de links.
- Abre e fecha sem recarregar a página.

### 4.6 Rodapé

- Crédito ao BibleProject (parceria).
- Copyright: `© 2024 Panorama Bíblico. Todos os direitos reservados.`

---

## 5. REQUISITOS NÃO-FUNCIONAIS

### 5.1 Performance

- Site carrega em menos de **1.5 segundos** em conexões 4G.
- Nenhuma página deve travar o navegador com JavaScript pesado.

### 5.2 Acessibilidade

- Contraste ≥ 4.5:1 (texto normal) e ≥ 3:1 (texto grande).
- Foco visível em todos interativos (:focus-visible).
- Skip link "Ir para o conteúdo" no topo de cada página.
- <html lang="pt-BR">.
- Landmarks semânticas: <header>, <nav>, <main>, <footer>.
- aria-label em botões só-ícone (ex.: fechar modal).
- Modal (<dialog>): foco preso dentro, ESC fecha, foco volta ao abridor.
- Alvos de toque ≥ 44×44px.
- prefers-reduced-motion respeitado (sem animação se o usuário pedir).
- Ordem de tabulação lógica.

### 5.3 SEO

- <title> único por página.
- <meta name="description"> única por página.
- <link rel="canonical"> autorreferencial por página.
- Open Graph: og:title, og:description, og:type, og:url por página.
- Twitter Card: twitter:card, twitter:title, twitter:description por página.
- site: no astro.config.mjs (pré-requisito do sitemap).
- sitemap.xml gerado por @astrojs/sitemap.
- robots.txt em public/.
- JSON-LD: WebSite + Organization no layout raiz.

### 5.4 Performance Técnica

- Zero JS no cliente por padrão.
- Lazy-load do iframe do YouTube (só ao abrir o modal).
- aspect-ratio: 16 / 9 em containers de iframe (evita CLS).
- Astro Fonts API (self-host + preload + zero CLS).
- CSS minificado pelo build do Astro.
- Sem imagens rasterizadas (não há o que otimizar).

---

## 6. METAS DE QUALIDADE

- Lighthouse ≥ 95 em Performance, Acessibilidade, SEO, Best Practices.
- Core Web Vitals: LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05.
- Acessibilidade WCAG 2.2 AA em todas as páginas.
- Validação com axe DevTools: sem violações críticas.
- Teste manual: navegação completa só com teclado.
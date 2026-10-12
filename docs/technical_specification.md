---
role: technical_architecture_guidelines
purpose: "Este documento define estritamente a ARQUITETURA TÉCNICA, STACK DE TECNOLOGIA e PADRÕES DE CÓDIGO. Ele descreve COMO o sistema deve ser desenvolvido e estruturado no Astro, ignorando regras de negócio e detalhes de design visual."
---

# Technical Specification & Architecture
# Panorama Bíblico

> **Versão:** 1.0 · **Data:** 2026-10-11 · **Autor:** Ismael
> **Status:** Aprovado para execução
> **Escopo deste documento:** descreve **COMO** construir o produto.
> Assume que o leitor já conhece o `product_requirements_document.prd`.

---

## 1. STACK TECNOLÓGICA

### 1.1 Decisão

**Astro puro.** Sem Tailwind, sem React, sem frameworks UI.

### 1.2 Stack fixada

| Camada | Escolha | Versão mínima |
|--------|---------|---------------|
| Framework | **Astro** | 6.0 |
| Node.js | **Node** | 22.12 |
| Linguagem | **TypeScript** | 5.5 (`strict: true`) |
| Renderização | **SSG** (`output: 'static'`) | — |
| Estilização | **CSS puro** | — |
| Componentes | **Astro Components** (`.astro`) | — |
| Interatividade | **`<script>` dentro dos `.astro`** | — |
| Dados | **TypeScript** em `src/data/*.ts` | — |
| Fontes | **Astro Fonts API** (self-host) | — |
| Deploy | **Cloudflare Pages** | — |

### 1.3 Dependências exatas

**Produção:**
```json
{
  "dependencies": {
    "astro": "^6.0.0"
  }
}

Desenvolvimento:
{
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "@astrojs/sitemap": "^3.2.0",
    "typescript": "^5.5.0"
  }
}

```

Total: 1 dependência de produção, 3 de desenvolvimento.
2. RESTRIÇÕES DURAS

O agente NÃO DEVE, em nenhuma circunstância:

    ❌ Instalar Tailwind CSS (nem v3 nem v4)

    ❌ Instalar React, Vue, Svelte, Solid, Preact, Alpine, Qwik

    ❌ Instalar shadcn/ui, Radix, Headless UI, Ark UI, Material UI

    ❌ Instalar bibliotecas de ícones (lucide, heroicons, phosphor, etc.)

    ❌ Instalar pré-processadores CSS (Sass, Less, Stylus, PostCSS)

    ❌ Instalar CSS-in-JS (styled-components, emotion, vanilla-extract)

    ❌ Instalar bibliotecas de animação (Framer Motion, GSAP, anime.js)

    ❌ Instalar bibliotecas de estado (Zustand, Jotai, Redux, Nanostores)

    ❌ Instalar ORMs, bancos, auth (Prisma, Drizzle, Better Auth, Clerk)

    ❌ Criar arquivo tailwind.config.js

    ❌ Criar diretiva @theme em CSS

    ❌ Usar diretivas client:* (não há ilhas React)

    ❌ Usar type: 'content' em Content Collections (Astro 6 usa loader: glob(...))

    ❌ Criar src/content/config.ts (Astro 6 usa src/content.config.ts)

Se qualquer uma dessas se tornar necessária, o agente PARA e pergunta.
3. ESTRUTURA DE PASTAS

panorama-biblico/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .nvmrc                       # contém: 22.12
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── public/
│   ├── favicon.svg
│   ├── icons.svg                # sprite SVG (se houver)
│   └── robots.txt
└── src/
    ├── data/
    │   ├── types.ts             # tipos Video, Categoria
    │   ├── videos-at.ts         # 42 vídeos (40 AT + 2 visão geral)
    │   ├── videos-nt.ts         # 31 vídeos
    │   ├── videos-como-ler.ts   # 19 vídeos
    │   └── categorias.ts        # lista de categorias (com slug)
    ├── styles/
    │   ├── tokens.css           # :root { --color-*, --space-*, ... }
    │   ├── reset.css            # reset minimalista
    │   └── global.css           # base + utilities (.container, .grid)
    ├── layouts/
    │   └── BaseLayout.astro     # <head> completo + slot
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Hero.astro           # só na home
    │   ├── BookCard.astro       # card de vídeo
    │   ├── VideoGrid.astro      # grade de BookCard
    │   ├── VideoDialog.astro    # <dialog> do player (1 por página)
    │   ├── FilterPills.astro    # filtro (só em /como-ler-a-biblia)
    │   └── PartnerBanner.astro
    └── pages/
        ├── index.astro
        ├── antigo-testamento.astro
        ├── novo-testamento.astro
        ├── como-ler-a-biblia.astro
        └── 404.astro

4. CONFIGURAÇÃO DO PROJETO
4.1 astro.config.mjs

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://<dominio-final>',
  output: 'static',
  integrations: [sitemap()],
});

    A DEFINIR — decisão humana: o valor de site (domínio final).
    Bloqueia deploy com sitemap, mas não bloqueia desenvolvimento local.

4.2 tsconfig.json

{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strictNullChecks": true
  }
}

4.3 .nvmrc

22.12

4.4 .gitignore

node_modules/
dist/
.env
.env.*
!.env.example
.DS_Store
*.log

5. PADRÕES DE CÓDIGO
5.1 Componentes

    Estritamente .astro. Sem React, Vue, Svelte ou qualquer framework.

    Cada componente em seu próprio arquivo, dentro de src/components/.

    Estilo do componente em <style> scoped dentro do .astro (quando local).

    Estilo global em src/styles/.

5.2 HTML

    Semântico sempre que possível: <header>, <nav>, <main>, <section>, <article>, <footer>.

    Botão que executa ação = <button>. Link que navega = <a href>.

    Nunca <a> sem href fingindo ser botão.

    Nunca <div> onde cabe <button>, <a> ou elemento semântico.

5.3 CSS

    CSS puro. Sem Tailwind, sem pré-processador.

    Variáveis CSS em :root (src/styles/tokens.css).

    Classes semânticas (.container, .card, .btn-primary) — não utilitários.

    Escopo por componente com <style> no .astro (Astro aplica data-astro-* automaticamente).

    Não usar !important.

    Não usar estilos inline (style="..." no HTML), exceto quando dinâmico e justificado.

5.4 JavaScript

    Zero JS no cliente por padrão.

    Só JS quando estritamente necessário (modal de vídeo, filtro se não der em CSS puro).

    JS vive em <script> dentro do .astro — sem client:*.

    Sem import de bibliotecas de terceiros no <script>.

    Usar addEventListener, querySelector, dataset — APIs nativas.

5.5 TypeScript

    strict: true.

    Tipos explícitos em src/data/types.ts.

    Sem any. Sem @ts-ignore.

5.6 Rotas

    Rotas puras baseadas em arquivos em src/pages/.

    Nomes em kebab-case, sem extensão visível:

        src/pages/index.astro → /

        src/pages/antigo-testamento.astro → /antigo-testamento

        src/pages/novo-testamento.astro → /novo-testamento

        src/pages/como-ler-a-biblia.astro → /como-ler-a-biblia

        src/pages/404.astro → 404

5.7 Imagens

    Usar <Image /> de astro:assets quando houver imagens rasterizadas.

    Hoje o projeto não tem imagens rasterizadas (só SVG).

    SVG pequeno = inline no .astro. SVG grande = em public/.

6. INTERATIVIDADE — ESPECIFICAÇÃO
6.1 Modal de vídeo

Implementação: <dialog> nativo do HTML.

Requisitos:

    Um <dialog> por página (não um por card).

    O <dialog> recebe o data-video-url dinamicamente ao abrir.

    O iframe só é injetado no DOM quando o dialog abre (lazy-load).

    Fechar: botão ✕, ESC (nativo), clique no backdrop (script).

    Ao fechar: recarregar iframe.src para pausar o vídeo.

Fallback sem JS: cada botão "Assistir" é um <a> que aponta para
https://www.youtube.com/watch?v=<id> com target="_blank". Com JS,
o <a> é interceptado e o modal abre em vez de navegar.
6.2 Filtro por categoria

Implementação: <input type="radio"> + <label> + CSS.

Requisitos:

    6 opções: "Todas" + 5 categorias.

    Cada opção é um par <input type="radio" name="categoria"> + <label>.

    CSS esconde/mostra cards com base no :checked (usando :has() no container).

    Alternativa: se :has() não cobrir bem, usar <script> de ~15 linhas.

6.3 Menu mobile

Implementação: <details>/<summary> (zero JS) ou <script> de ~20 linhas.

Requisitos:

    Em telas ≥ 768px: links visíveis diretamente.

    Em telas < 768px: botão hamburger que abre/fecha a lista.

    Acessível por teclado.

7. ACESSIBILIDADE (WCAG 2.2 AA)
7.1 Requisitos obrigatórios

    Contraste ≥ 4.5:1 (texto normal) e ≥ 3:1 (texto grande).

    Foco visível em todos interativos (:focus-visible).

    Skip link "Ir para o conteúdo" no topo de cada página.

    <html lang="pt-BR">.

    Landmarks semânticas: <header>, <nav>, <main>, <footer>.

    aria-label em botões só-ícone (ex.: fechar modal).

    Modal (<dialog>): foco preso dentro, ESC fecha, foco volta ao abridor.

    Alvos de toque ≥ 44×44px.

    prefers-reduced-motion respeitado (sem animação se o usuário pedir).

    Ordem de tabulação lógica.

7.2 Validação

    axe DevTools: sem violações críticas.

    Lighthouse: Accessibility ≥ 95.

    Teste manual: navegação completa só com teclado.

8. SEO
8.1 Obrigatório por página

    <title> único.

    <meta name="description"> única.

    <link rel="canonical"> autorreferencial.

    Open Graph: og:title, og:description, og:type, og:url.

    Twitter Card: twitter:card, twitter:title, twitter:description.

8.2 Global

    site: no astro.config.mjs (pré-requisito do sitemap).

    sitemap.xml gerado por @astrojs/sitemap.

    robots.txt em public/.

    JSON-LD: WebSite + Organization no layout raiz.

8.3 Não fazer

    ❌ BreadcrumbList (não há breadcrumb visível).

    ❌ BlogPosting (não é blog).

9. PERFORMANCE
9.1 Metas

    Lighthouse ≥ 95 em Performance, Accessibility, SEO, Best Practices.

    Core Web Vitals: LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05.

9.2 Táticas

    Zero JS no cliente por padrão.

    Lazy-load do iframe do YouTube (só ao abrir o modal).

    aspect-ratio: 16 / 9 em containers de iframe (evita CLS).

    Astro Fonts API (self-host + preload + zero CLS).

    CSS minificado pelo build do Astro.

    Sem imagens rasterizadas (não há o que otimizar).

10. CI/CD
10.1 .github/workflows/ci.yml

name: CI
on: [pull_request, push]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: npm ci
      - run: npm run astro check
      - run: npm run build
      - run: npx linkinator ./dist --recurse
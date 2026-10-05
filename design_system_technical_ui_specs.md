# Design System & Technical UI Specifications — panorama_biblico

Este documento especifica a implementação técnica do **Design System da Comunidade Vitral** para o projeto **`panorama_biblico`**, detalhando tokens do Tailwind CSS, tipografia, regras de acessibilidade e arquitetura de componentes da interface.

---

## 1. Configuração do Tailwind CSS (`tailwind.config.js`)

Abaixo estão os tokens de design oficiais mapeados diretamente na configuração do Tailwind CSS:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vitral: {
          primary: '#005F6B',       // Verde Petróleo (Headers, CTAs, ícones ativos)
          secondary: '#94A69A',     // Verde Acinzentado (Bordas, fundos secundários)
          dark: '#1F2421',          // Off-Black / Grafite (Texto principal)
          'bg-light': '#F8F9FA',    // Fundo do modo claro
          'bg-dark': '#121614',     // Fundo do modo escuro
          'card-dark': '#1A201C',   // Cards no modo escuro
        }
      },
      backgroundImage: {
        'vitral-gradient': 'linear-gradient(135deg, #005F6B 0%, #94A69A 100%)',
        'vitral-gradient-subtle': 'linear-gradient(135deg, rgba(0, 95, 107, 0.08) 0%, rgba(148, 166, 154, 0.12) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tagline: '0.15em',
      },
      minHeight: {
        touch: '48px',
      },
      minWidth: {
        touch: '48px',
      },
      boxShadow: {
        'vitral-card': '0 4px 20px -2px rgba(31, 36, 33, 0.08)',
        'vitral-hover': '0 10px 25px -5px rgba(0, 95, 107, 0.15)',
      }
    },
  },
  plugins: [],
}
```

---

## 2. Tipografia e Escala Responsiva

A tipografia utiliza a família **Inter** / **Montserrat** com regras rigorosas de legibilidade para textos curtos e leituras extensas do texto bíblico.

| Elemento | Font Weight | Mobile Size | Desktop Size | Line Height | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero/Título do Livro)** | Bold (700) | `2.0rem` | `3.2rem` | `1.2` | `text-3xl md:text-5xl font-bold tracking-tight text-vitral-dark dark:text-white` |
| **H2 (Seção/Módulo)** | SemiBold (600) | `1.75rem` | `2.25rem` | `1.3` | `text-2xl md:text-3xl font-semibold text-vitral-primary dark:text-vitral-secondary` |
| **H3 (Cards/Temas)** | Medium (500) | `1.25rem` | `1.5rem` | `1.4` | `text-xl md:text-2xl font-medium text-vitral-dark dark:text-white` |
| **Body (Artigos/Resumos)** | Regular (400) | `1.0rem` | `1.125rem` | `1.6` | `text-base md:text-lg text-vitral-dark/90 dark:text-gray-200 leading-relaxed` |
| **Tagline / Badges** | Medium (500) | `0.875rem` | `1.0rem` | `1.0` | `text-xs md:text-sm uppercase tracking-tagline font-medium text-vitral-primary dark:text-vitral-secondary` |

---

## 3. Diretrizes de Microinterações & Acessibilidade

1. **Focus State (Navegação por Teclado):**
   * Todos os elementos interativos contam com anel de foco destacado: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vitral-primary focus-visible:ring-offset-2`.
2. **Área de Toque (Thumb Zone Optimization):**
   * Botões de ação, menus e controles do player possuem tamanho mínimo de `48px x 48px` (`min-h-[48px] min-w-[48px]`).
3. **Efeitos de Toque e Hover:**
   * Botões e cards utilizam efeito de clique tátil: `transition-all duration-200 ease-in-out active:scale-[0.98] hover:-translate-y-0.5`.

---

## 4. Componentes Chave da Interface

### 4.1. Header Fixo & Navegação (`HeaderNav`)
* **Descrição:** Header fixo no topo com logo horizontal compacta (máx 64px de altura) e fundo translúcido.
* **Classes Tailwind:**
```html
<header class="sticky top-0 z-50 w-full h-16 bg-white/90 dark:bg-vitral-bg-dark/90 backdrop-blur-md border-b border-vitral-secondary/20 transition-all">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
    <!-- Logotipo Horizontal Vitral -->
    <a href="/" class="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-vitral-primary rounded-lg p-1">
      <img src="/assets/logo-vitral-horizontal.svg" alt="Vitral — Igreja em Pessoas" class="h-8 w-auto md:h-10" />
      <span class="sr-only">Panorama Bíblico Vitral</span>
    </a>

    <!-- Navegação Desktop -->
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a href="/antigo-testamento" class="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Antigo Testamento</a>
      <a href="/novo-testamento" class="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Novo Testamento</a>
      <a href="/temas-e-colecoes" class="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Temas Bíblicos</a>
    </nav>

    <!-- Menu Hambúrguer (Mobile) -->
    <button type="button" aria-label="Abrir Menu" class="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center text-vitral-dark dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</header>
```

---

### 4.2. Card do Livro Bíblico (`BookCard`)
* **Descrição:** Card representativo do livro bíblico com indicação visual de status, capítulo e badge do testamento.
* **Classes Tailwind:**
```html
<article class="group relative bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card hover:shadow-vitral-hover hover:border-vitral-primary/50 transition-all duration-300 flex flex-col justify-between">
  <div>
    <!-- Badge de Categoria -->
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs uppercase tracking-tagline font-semibold text-vitral-primary dark:text-vitral-secondary bg-vitral-primary/10 dark:bg-vitral-secondary/10 px-3 py-1 rounded-full">
        Pentateuco
      </span>
      <span class="text-xs text-gray-500 dark:text-gray-400">50 Capítulos</span>
    </div>

    <!-- Título do Livro -->
    <h3 class="text-xl font-bold text-vitral-dark dark:text-white group-hover:text-vitral-primary transition-colors">
      Gênesis
    </h3>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
      A criação do mundo, a origem da humanidade e as alianças patriarcais com Abraão, Isaque e Jacó.
    </p>
  </div>

  <!-- Ação do Card -->
  <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
    <span class="text-xs font-medium text-vitral-primary dark:text-vitral-secondary group-hover:underline flex items-center gap-1">
      Assistir Panorama
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </span>
  </div>
</article>
```

---

### 4.3. Reprodutor do Vídeo & Seção de Estudo (`VideoStudySection`)
* **Descrição:** Container do vídeo principal com proporção 16:9 responsiva em conjunto com o resumo do livro.
* **Classes Tailwind:**
```html
<section class="w-full max-w-5xl mx-auto my-8 px-4">
  <!-- Header do Livro -->
  <div class="mb-6 text-center md:text-left">
    <span class="text-xs md:text-sm uppercase tracking-tagline font-semibold text-vitral-primary dark:text-vitral-secondary">
      Novo Testamento • Evangelhos
    </span>
    <h1 class="text-3xl md:text-5xl font-bold text-vitral-dark dark:text-white mt-1">
      Evangelho de Mateus
    </h1>
  </div>

  <!-- Responsive Video Embed (16:9) -->
  <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-vitral-secondary/30">
    <iframe 
      class="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube-nocookie.com/embed/VID_ID" 
      title="Panorama Bíblico — Mateus" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>

  <!-- Botões de Ação Auxiliares -->
  <div class="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-vitral-bg-light dark:bg-vitral-card-dark rounded-xl border border-vitral-secondary/20">
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium text-vitral-dark dark:text-white">Recursos do Livro:</span>
    </div>
    <div class="flex items-center gap-3">
      <a href="#esquema-visual" class="min-h-[48px] px-4 py-2 inline-flex items-center justify-center text-sm font-medium text-white bg-vitral-primary rounded-lg hover:bg-vitral-primary/90 transition-all active:scale-[0.98]">
        Baixar Esquema Visual (PDF)
      </a>
    </div>
  </div>
</section>
```
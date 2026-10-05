# Product Requirements Document (PRD) — panorama_biblico

## 1. Visão Geral do Produto
O **Panorama Bíblico** é o projeto piloto do hub digital da **Comunidade Vitral**. Trata-se de uma plataforma educacional aberta e gratuita dedicada ao ensino bíblico visual e expositivo, inspirada na dinâmica didática do *BibleProject* e desenvolvida sob as diretrizes de UX/UI da marca Vitral.

* **Slogan / Subtítulo:** "Recursos visuais e didáticos para o estudo da Palavra de Deus."
* **Modelo de Negócio:** Recurso comunitário sem fins lucrativos e sem monetização comercial (sem anúncios, links de afiliados ou paywall).
* **Propósito:** Capacitar leitores, pequenos grupos, professores e a comunidade local através de sínteses visuais, vídeos integrados e esquemas de leitura.

---

## 2. Personas e Casos de Uso
1. **Membro da Comunidade / Leitor Curioso:** Busca entender a visão geral e o contexto literário de um livro bíblico antes de iniciar a leitura pessoal.
2. **Líder de Pequeno Grupo / Professor:** Utiliza o material audiovisual e os diagramas visuais como apoio didático para aulas e reuniões.
3. **Novo Convertido / Estudante Iniciante:** Necessita de um formato ágil, visual e acolhedor para compreender a grande narrativa das Escrituras.

---

## 3. Diretrizes de UX/UI & Identidade Visual (Vitral Design System)

### 3.1. Paleta de Cores Oficial
* **Verde Petróleo (`#005F6B`):** Cor primária de marca; utilizada em Headers, títulos de destaque e botões de ação principal.
* **Verde Acinzentado (`#94A69A`):** Cor secundária; bordas de cards, estados desabilitados e divisores.
* **Degradê de Destaque:** `linear-gradient(135deg, #005F6B 0%, #94A69A 100%)` em banners de Hero e cabeçalhos de coleções.
* **Texto & Fundos:** `#1F2421` (Off-Black/Grafite) em fundo `#FFFFFF` / `#F8F9FA` para leitura em Light Mode; `#FFFFFF` para elementos em fundo escuro.

### 3.2. Princípios de Interface e Usabilidade
* **Mobile-First Real:** Navegação priorizada para uso com o polegar (*thumb zone*).
* **Header Sticky:** Barra fixa de até 64px com a versão horizontal do logo Vitral, contendo efeito `backdrop-filter: blur(10px)`.
* **Acessibilidade:** Cumprimento de taxas de contraste WCAG AA/AAA e áreas de toque mínimas de 48x48px.

---

## 4. Arquitetura de Informação & Estrutura de Conteúdo (*Silo Physical Structure*)

O site é organizado fisicamente em três grandes pilares de conteúdo:

```text
/ (Home / Hub Principal)
│
├── /antigo-testamento/
│   ├── /pentateuco/
│   │   ├── /genesis/
│   │   └── /exodo/
│   ├── /historicos/
│   └── /poeticos-e-profetas/
│
├── /novo-testamento/
│   ├── /evangelhos-e-atos/
│   │   ├── /mateus/
│   │   └── /atos/
│   ├── /epistolas/
│   └── /revelacao/
│
└── /temas-e-colecoes/
    ├── /linha-do-tempo/
    ├── /sabedoria/
    └── /aliancas/
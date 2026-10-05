# Product Roadmap & Rollout Plan — panorama_biblico

Este documento especifica o cronograma de desenvolvimento, marcos de entrega e fases de implementação para o lançamento do projeto piloto **`panorama_biblico`** e posterior padronização dos demais repositórios do hub da Comunidade Vitral.

---

## 1. Visão Geral da Execução

O ciclo de desenvolvimento do piloto está dividido em **4 fases principais**, garantindo a criação de um modelo de código reutilizável (boilerplate) que servirá de referência para a migração dos outros 5 repositórios da comunidade.

```text
[ Fase 1: Arquitetura & Setup ] ──► [ Fase 2: Protótipo do Piloto ] ──► [ Fase 3: Conteúdo & QA ] ──► [ Fase 4: Migração do Hub ]
```

---

## 2. Cronograma Mapeado por Fases

### Fase 1: Arquitetura, Core Tokens & Infraestrutura (Semanas 1-2)
**Objetivo:** Estabelecer a base técnica, o repositório oficial no GitHub e o pipeline de CI/CD na Cloudflare Pages.

* [x] **Definição de Requisitos & UX/UI:**
  * Aprovação do `prd.md` e do `design.md`.
* [ ] **Setup do Repositório & Tooling:**
  * Inicialização do repositório `panorama_biblico` no GitHub.
  * Configuração do Tailwind CSS com a paleta oficial da Vitral (`#005F6B`, `#94A69A`, `#1F2421`).
  * Definição da estrutura de dados em arquivos JSON/TypeScript (`/src/config/bible-data.json`).
* [ ] **Deployment Pipeline:**
  * Conexão do repositório GitHub com a **Cloudflare Pages**.
  * Configuração de domínios e SSL automático.

---

### Fase 2: Componentização & Template de Leitura (Semanas 3-4)
**Objetivo:** Desenvolver os componentes chave reutilizáveis da interface e o layout das páginas de livros bíblicos.

* [ ] **Componentes Base de Interface:**
  * `<HeaderNav />`: Header fixo com logotipo horizontal Vitral e navegação responsiva.
  * `<BookCard />`: Card do livro bíblico com badges de divisão e progresso de capítulo.
  * `<VideoStudySection />`: Container responsivo (aspect-ratio 16:9) para reprodutor do YouTube/Vimeo.
* [ ] **Estruturação de Rotas (*Silo Physical Structure*):**
  * Rota principal `/` (Hub de livros e coleções).
  * Sub-rotas `/antigo-testamento/` e `/novo-testamento/`.
  * Layout dinâmico para visualização individual de livro (ex: `/antigo-testamento/pentateuco/genesis`).

---

### Fase 3: Alimentação de Conteúdo & Validação de UX (Semanas 5-6)
**Objetivo:** Cadastrar a estrutura dos 66 livros da Bíblia, integrar os vídeos/esquemas didáticos e executar os testes de usabilidade.

* [ ] **População da Base de Dados (`bible-data.json`):**
  * Cadastro de títulos, categorias, resumos, links dos vídeos explicativos e links para download dos PDFs/Infográficos.
* [ ] **Testes de Usabilidade e Acessibilidade:**
  * Validação da navegação com o polegar em dispositivos móveis (*thumb zone*).
  * Auditoria de acessibilidade WCAG AA (contraste de cor, foco de teclado, leitores de tela).
* [ ] **Otimização de Performance (Core Web Vitals):**
  * Teste do Google PageSpeed Insights (Meta: Pontuação 95+ em Mobile/Desktop).
  * Validação do LCP (< 1.2s) e carregamento otimizado de mídias em `.webp` / SVG.

---

### Fase 4: Lançamento Oficial & Replicabilidade do Hub (Semanas 7+)
**Objetivo:** Disponibilizar o `panorama_biblico` para a comunidade local e iniciar a padronização dos repositórios antigos.

* [ ] **Lançamento do Piloto:**
  * Divulgação do Panorama Bíblico para os pequenos grupos e professores de EBD.
* [ ] **Criação do Kit Boilerplate da Vitral:**
  * Extração do template limpo contendo o Design System e a estrutura de pastas.
* [ ] **Migração dos Repositórios Existentes:**
  * Padronização gradual dos 5 repositórios: `trilhas_discipulado`, `comunidadevitral`, `trilha_lideranca`, `trilha_de_novos` e `trilha_praticando_o_caminho`.

---

## 3. Matriz de Critérios e Marcos (Milestones)

| Marco (Milestone) | Entregáveis Principais | Critério de Aceite |
| :--- | :--- | :--- |
| **M1: Infraestrutura** | Pipeline de deploy ativo na Cloudflare Pages | Deploy automático disparado a cada commit na `main`. |
| **M2: UI Kit Vitral** | Componentes Tailwind e layout responsivo | Compatibilidade total com as especificações do `design.md`. |
| **M3: Versão Alpha** | Rotas de Antigo e Novo Testamento funcionais | Navegação fluida sem quebrá de layout no mobile. |
| **M4: Lançamento (v1.0)** | Todos os livros cadastrados com vídeos integrados | Aprovado no teste de performance 95+ e acessibilidade. |

---

## 4. Próximas Ações Imediatas

1. **Configuração Inicial do Projeto:** Criar a estrutura base de arquivos do `panorama_biblico`.
2. **Modelagem dos Dados:** Criar o schema JSON para os livros bíblicos e módulos de ensino.
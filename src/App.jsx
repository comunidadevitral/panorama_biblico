import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <header className="sticky top-0 z-50 w-full h-16 bg-white/90 dark:bg-vitral-bg-dark/90 backdrop-blur-md border-b border-vitral-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-vitral-gradient" />
            <span className="font-semibold">Panorama Bíblico</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/antigo-testamento" className="hover:text-vitral-primary transition-colors">Antigo Testamento</a>
            <a href="/novo-testamento" className="hover:text-vitral-primary transition-colors">Novo Testamento</a>
            <a href="/temas-e-colecoes" className="hover:text-vitral-primary transition-colors">Temas Bíblicos</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center py-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-vitral-dark dark:text-white">
            Recursos visuais e didáticos para o estudo da Palavra de Deus
          </h1>
          <p className="mt-4 text-lg text-vitral-dark/80 dark:text-gray-300">
            Projeto piloto do hub digital da Comunidade Vitral
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/antigo-testamento" className="min-h-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-medium hover:bg-opacity-90 transition">
              Explorar
            </a>
            <a href="/novo-testamento" className="min-h-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg border border-vitral-secondary text-vitral-dark dark:text-white hover:bg-vitral-bg-light dark:hover:bg-vitral-card-dark transition">
              Saiba mais
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {['Antigo Testamento', 'Novo Testamento', 'Temas e Coleções'].map((title) => (
            <article key={title} className="bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card">
              <h3 className="text-xl font-bold text-vitral-dark dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Navegue por livros e recursos visuais.</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App

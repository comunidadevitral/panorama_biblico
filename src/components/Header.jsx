import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/90 dark:bg-vitral-bg-dark/90 backdrop-blur-md border-b border-vitral-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-vitral-primary rounded-lg p-1">
          <div className="h-8 w-8 rounded bg-vitral-gradient" />
          <span className="font-semibold text-vitral-dark dark:text-white">Panorama Bíblico</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/antigo-testamento" className="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Antigo Testamento</a>
          <a href="/novo-testamento" className="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Novo Testamento</a>
          <a href="/temas-e-colecoes" className="text-vitral-dark hover:text-vitral-primary dark:text-gray-200 transition-colors">Temas Bíblicos</a>
        </nav>

        <button
          type="button"
          aria-label="Abrir Menu"
          aria-expanded={open}
          className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center text-vitral-dark dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setOpen(o => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white dark:bg-vitral-bg-dark border-b border-vitral-secondary/20">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm font-medium">
            <a href="/antigo-testamento" className="text-vitral-dark dark:text-white py-2" onClick={() => setOpen(false)}>Antigo Testamento</a>
            <a href="/novo-testamento" className="text-vitral-dark dark:text-white py-2" onClick={() => setOpen(false)}>Novo Testamento</a>
            <a href="/temas-e-colecoes" className="text-vitral-dark dark:text-white py-2" onClick={() => setOpen(false)}>Temas Bíblicos</a>
          </div>
        </nav>
      )}
    </header>
  )
}

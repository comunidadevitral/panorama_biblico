export default function Footer() {
  return (
    <footer className="border-t border-vitral-secondary/20 bg-vitral-bg-light dark:bg-vitral-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-vitral-dark dark:text-gray-300">
            <div className="h-6 w-6 rounded bg-vitral-gradient" />
            <span className="font-medium">Panorama Bíblico</span>
            <span className="text-gray-400">·</span>
            <span>Comunidade Vitral</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Recursos visuais e didáticos para o estudo da Palavra de Deus. Sem fins lucrativos.
          </p>
        </div>
      </div>
    </footer>
  )
}

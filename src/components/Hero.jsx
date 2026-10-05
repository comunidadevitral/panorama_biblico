export default function Hero() {
  return (
    <section className="relative bg-vitral-bg-light dark:bg-vitral-bg-dark rounded-2xl overflow-hidden border border-vitral-secondary/20">
      <div className="absolute inset-0 bg-vitral-gradient opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <span className="inline-block text-xs md:text-sm uppercase tracking-tagline font-semibold text-white bg-white/15 px-3 py-1 rounded-full">
          Comunidade Vitral
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Panorama Bíblico
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
          Recursos visuais e didáticos para o estudo da Palavra de Deus
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/antigo-testamento" className="min-h-[48px] min-w-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg bg-white text-vitral-primary font-semibold shadow-vitral-card hover:shadow-vitral-hover transition">
            Explorar
          </a>
          <a href="/temas-e-colecoes" className="min-h-[48px] min-w-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg border border-white/40 text-white hover:bg-white/10 transition">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  )
}

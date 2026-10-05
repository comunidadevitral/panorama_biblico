import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { overviewVideos } from '../data/videosData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-vitral-primary dark:text-vitral-secondary text-center">
            Visão Geral da Bíblia
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Antigo Testamento Overview Card */}
            <div className="bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card flex flex-col">
              <h3 className="text-lg font-bold text-vitral-dark dark:text-white mb-4">{overviewVideos.antigoTestamento.title}</h3>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-vitral-secondary/20">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${overviewVideos.antigoTestamento.youtubeId}`}
                  title={overviewVideos.antigoTestamento.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <Link
                  to="/antigo-testamento"
                  className="w-full min-h-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-semibold shadow-vitral-card hover:shadow-vitral-hover transition"
                >
                  Explorar os 39 Livros do Antigo Testamento
                </Link>
              </div>
            </div>

            {/* Novo Testamento Overview Card */}
            <div className="bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card flex flex-col">
              <h3 className="text-lg font-bold text-vitral-dark dark:text-white mb-4">{overviewVideos.novoTestamento.title}</h3>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-vitral-secondary/20">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${overviewVideos.novoTestamento.youtubeId}`}
                  title={overviewVideos.novoTestamento.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <Link
                  to="/novo-testamento"
                  className="w-full min-h-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-semibold shadow-vitral-card hover:shadow-vitral-hover transition"
                >
                  Explorar os 27 Livros do Novo Testamento
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <div className="bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card flex flex-col md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-vitral-dark dark:text-white">Bible App (YouVersion)</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                A Bíblia no seu bolso, com centenas de versões, planos de leitura e devocionais. Siga a Comunidade Vitral e caminhe com outros aprendizes. 100% gratuito, sem anúncios.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:flex-shrink-0">
              <a
                href="https://www.bible.com/organizations/79172d03-a943-4051-aebf-285b525546f1"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-semibold shadow-vitral-card hover:shadow-vitral-hover transition"
              >
                Baixar
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

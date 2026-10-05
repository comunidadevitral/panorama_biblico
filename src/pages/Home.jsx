import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { overviewVideos } from '../data/videosData'

export default function Home() {
  const [modal, setModal] = useState(null)

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
            {[overviewVideos.antigoTestamento, overviewVideos.novoTestamento].map((v, i) => (
              <div key={i} className="bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card">
                <h3 className="text-lg font-bold text-vitral-dark dark:text-white mb-4">{v.title}</h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-vitral-secondary/20">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 flex flex-wrap justify-center gap-6">
          <Link
            to="/antigo-testamento"
            className="min-h-[48px] min-w-[48px] px-8 py-3 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-semibold shadow-vitral-card hover:shadow-vitral-hover transition"
          >
            Explorar os 39 Livros do Antigo Testamento
          </Link>
          <Link
            to="/novo-testamento"
            className="min-h-[48px] min-w-[48px] px-8 py-3 inline-flex items-center justify-center rounded-lg border border-vitral-secondary text-vitral-dark dark:text-white hover:bg-vitral-bg-light dark:hover:bg-vitral-card-dark transition"
          >
            Explorar os 27 Livros do Novo Testamento
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import VideoModal from '../components/VideoModal'
import { howToReadVideos, howToReadCategories } from '../data/howToReadData'

export default function HowToReadBible() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [video, setVideo] = useState(null)

  const filtered = activeCategory === 'Todas'
    ? howToReadVideos
    : howToReadVideos.filter(v => v.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-sm text-vitral-primary hover:underline">&larr; Voltar</Link>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-vitral-dark dark:text-white">Como Ler a Bíblia</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">19 vídeos &middot; Jornada de estudo</p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar categorias">
          {howToReadCategories.map(cat => {
            const active = cat === activeCategory
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[48px] px-4 py-2 text-sm font-medium rounded-full border transition ${
                  active
                    ? 'bg-vitral-primary text-white border-vitral-primary'
                    : 'border-vitral-secondary/40 text-vitral-dark dark:text-white hover:border-vitral-primary dark:hover:border-vitral-secondary'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((videoItem, idx) => (
            <BookCard
              key={videoItem.id}
              book={{
                id: videoItem.id,
                title: `${String(idx + 1).padStart(2, '0')}. ${videoItem.title}`,
                description: videoItem.description,
                youtubeId: videoItem.youtubeId,
              }}
              category={videoItem.category}
              onView={() => setVideo(videoItem)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-gray-500">Nenhum vídeo nesta categoria.</p>
        )}
      </main>
      <Footer />
      {video && (
        <VideoModal
          youtubeId={video.youtubeId}
          title={`Como Ler a Bíblia — ${video.title}`}
          onClose={() => setVideo(null)}
        />
      )}
    </div>
  )
}

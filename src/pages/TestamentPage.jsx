import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import BookCard from '../components/BookCard'
import VideoModal from '../components/VideoModal'
import { antigoTestamentoBooks, novoTestamentoBooks } from '../data/videosData'
import { useState } from 'react'

export default function TestamentPage() {
  const { testament } = useParams()
  const isNew = testament === 'novo-testamento'
  const books = isNew ? novoTestamentoBooks : antigoTestamentoBooks
  const label = isNew ? 'Novo Testamento' : 'Antigo Testamento'
  const [video, setVideo] = useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-sm text-vitral-primary hover:underline">&larr; Voltar</Link>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-vitral-dark dark:text-white">{label}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {books.length} livros &middot; Ordem canônica
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map(book => (
            <div key={book.slug} className="relative">
              <BookCard book={book} category={book.category} />
              <div className="mt-3">
                <button
                  type="button"
                  className="min-h-[48px] w-full px-4 py-2 inline-flex items-center justify-center rounded-lg bg-vitral-primary text-white font-medium text-sm hover:bg-opacity-90 transition"
                  onClick={() => setVideo(book)}
                >
                  Assistir Panorama
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {video && (
        <VideoModal
          videoId={video.videoId || 'PLACEHOLDER'}
          title={`Panorama — ${video.title}`}
          onClose={() => setVideo(null)}
        />
      )}
    </div>
  )
}

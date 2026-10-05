import { Link } from 'react-router-dom'
import Header from '../components/Header'
import BookCard from '../components/BookCard'
import VideoModal from '../components/VideoModal'
import { antigoTestamentoBooks } from '../data/videosData'
import { useState } from 'react'

export default function AntigoTestamento() {
  const [video, setVideo] = useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-sm text-vitral-primary hover:underline">&larr; Voltar</Link>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-vitral-dark dark:text-white">Antigo Testamento</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">39 livros &middot; Ordem canônica</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {antigoTestamentoBooks.map((book) => (
            <div key={book.id} className="relative">
              <BookCard book={book} category={book.category} onView={() => setVideo(book)} />
            </div>
          ))}
        </div>
      </main>
      {video && (
        <VideoModal
          youtubeId={video.youtubeId}
          title={`Panorama — ${video.title}`}
          onClose={() => setVideo(null)}
        />
      )}
    </div>
  )
}

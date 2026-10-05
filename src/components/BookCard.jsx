export default function BookCard({ book, category }) {
  return (
    <article className="group relative bg-white dark:bg-vitral-card-dark rounded-2xl p-6 border border-vitral-secondary/30 shadow-vitral-card hover:shadow-vitral-hover hover:border-vitral-primary/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-tagline font-semibold text-vitral-primary dark:text-vitral-secondary bg-vitral-primary/10 dark:bg-vitral-secondary/10 px-3 py-1 rounded-full">
            {category}
          </span>
          {book.chapters && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{book.chapters} Capítulos</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-vitral-dark dark:text-white group-hover:text-vitral-primary transition-colors">
          {book.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {book.description}
        </p>
      </div>
    </article>
  )
}

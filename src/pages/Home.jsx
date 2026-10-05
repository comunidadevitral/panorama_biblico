import Header from '../components/Header'
import Hero from '../components/Hero'
import BookCard from '../components/BookCard'
import Footer from '../components/Footer'

const antigoTestamento = [
  {
    title: 'Gênesis',
    slug: 'genesis',
    chapters: 50,
    description: 'A criação do mundo, a origem da humanidade e as alianças patriarcais com Abraão, Isaque e Jacó.',
  },
  {
    title: 'Êxodo',
    slug: 'exodo',
    chapters: 40,
    description: 'A libertação do povo de Israel do Egito, a travessia do Mar Vermelho e a entrega da Lei no Sinai.',
  },
]

const novoTestamento = [
  {
    title: 'Mateus',
    slug: 'mateus',
    chapters: 28,
    description: 'O Evangelho do Reino, apresentando Jesus como o Messias prometido a Israel.',
  },
  {
    title: 'Atos',
    slug: 'atos',
    chapters: 28,
    description: 'Os primórdios da Igreja, o derramamento do Espírito Santo e a expansão da mensagem até Roma.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-vitral-bg-dark text-vitral-dark dark:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-vitral-primary dark:text-vitral-secondary">
            Antigo Testamento
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Pentateuco · Históricos · Poéticos e Profetas
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {antigoTestamento.map(book => (
              <BookCard key={book.slug} book={book} category="Antigo Testamento" />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-vitral-primary dark:text-vitral-secondary">
            Novo Testamento
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Evangelhos e Atos · Epístolas · Revelação
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {novoTestamento.map(book => (
              <BookCard key={book.slug} book={book} category="Novo Testamento" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

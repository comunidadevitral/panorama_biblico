export default function VideoPlayer({ videoId, title }) {
  if (!videoId) return null

  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-vitral-secondary/30">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title || 'Vídeo do Panorama Bíblico'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}

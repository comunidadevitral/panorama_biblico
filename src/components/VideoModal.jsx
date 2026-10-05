export default function VideoModal({ videoId, title, onClose }) {
  if (!videoId) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Vídeo'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden bg-black shadow-vitral-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fechar vídeo"
          className="absolute top-3 right-3 z-10 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-full bg-black/60 text-white text-xl leading-none hover:bg-black/80 transition"
          onClick={onClose}
        >
          ×
        </button>
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
    </div>
  )
}

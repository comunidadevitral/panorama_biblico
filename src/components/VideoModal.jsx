import { useEffect } from 'react'

export default function VideoModal({ youtubeId, title, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!youtubeId) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Vídeo'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden bg-black shadow-vitral-hover animate-in zoom-in-95 duration-200"
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
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
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

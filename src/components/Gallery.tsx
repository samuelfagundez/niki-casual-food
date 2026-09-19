import { content } from '../content'
import { assetUrl } from '../lib/asset'

// Carrusel con scroll-snap nativo (sin librería externa): funciona igual de
// bien en móvil (deslizar con el dedo) que en escritorio, y evita depender
// de embla-carousel-react solo para esto.
export default function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">Galería</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Un vistazo al local y a la carta
      </h2>

      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {content.gallery.map((photo) => (
          <div
            key={photo.src}
            className="aspect-[4/5] w-64 flex-none snap-start overflow-hidden rounded-3xl bg-cream-dark sm:w-80"
          >
            <img
              src={assetUrl(photo.src)}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

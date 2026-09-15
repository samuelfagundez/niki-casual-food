import { content, contactHref, reservationHref } from '../content'

// Pendiente: cuando el cliente facilite fotos del local, sustituir este
// fondo decorativo por una imagen real de fondo (ver Hero de otros
// proyectos: <img> + assetUrl(content.gallery[0].src)).
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-tomato/30 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-mustard/30 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mustard">
          Comida casual
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/90">{content.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-tomato px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-tomato/30 transition hover:bg-tomato-dark"
          >
            Hacer pedido
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/70 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-ink"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}

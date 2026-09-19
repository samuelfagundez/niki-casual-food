import { content, contactHref, reservationHref } from '../content'
import { assetUrl } from '../lib/asset'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-charcoal"
    >
      <img
        src={assetUrl(content.gallery[1].src)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mauve">
          Restaurante japonés en Valencia
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
            className="rounded-full bg-salmon px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-salmon/30 transition hover:bg-salmon-dark"
          >
            Reservar mesa
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

        <p className="mt-6 text-sm text-cream/80">
          ★★★★★ {content.rating.value.toFixed(0)} · {content.rating.countDisplay} en Google
        </p>
      </div>
    </section>
  )
}

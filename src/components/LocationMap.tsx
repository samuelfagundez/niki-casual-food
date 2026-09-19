import { content } from '../content'

export default function LocationMap() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">Ubicación</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Dónde encontrarnos
      </h2>
      <p className="mt-3 max-w-xl text-ink/75">{content.address.full}</p>

      <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10">
        <iframe
          title={`Mapa de ${content.name}`}
          src={content.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full"
        />
      </div>

      <a
        href={content.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-cream-dark"
      >
        Cómo llegar en Google Maps
      </a>
    </section>
  )
}

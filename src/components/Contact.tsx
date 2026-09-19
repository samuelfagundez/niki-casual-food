import { content, contactHref, reservationHref } from '../content'

export default function Contact() {
  return (
    <section id="contacto" className="bg-cream-dark/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">Contacto</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Reserva o consúltanos
        </h2>
        <p className="mt-3 max-w-xl text-ink/75">
          Escríbenos por WhatsApp para reservar mesa o resolver cualquier duda, y síguenos en
          Instagram para ver nuestras novedades.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-3xl bg-salmon p-6 text-cream shadow-lg shadow-salmon/20 transition hover:bg-salmon-dark"
          >
            <span className="font-display text-lg font-semibold">WhatsApp</span>
            <span className="text-sm text-cream/90">{content.phoneDisplay}</span>
          </a>

          {content.social.instagram && (
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-3xl border border-mauve-dark/30 bg-white/50 p-6 text-ink transition hover:bg-mauve/15"
            >
              <span className="font-display text-lg font-semibold">Instagram</span>
              <span className="text-sm text-ink/70">@_niki_es_</span>
            </a>
          )}

          <a
            href={content.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 rounded-3xl border border-ink/10 bg-white/50 p-6 text-ink transition hover:bg-cream"
          >
            <span className="font-display text-lg font-semibold">Dirección</span>
            <span className="text-sm text-ink/70">{content.address.full}</span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {content.reviews.map((r) => (
            <blockquote
              key={r.author}
              className="rounded-2xl border border-mauve/20 bg-white/60 p-5 text-sm leading-relaxed text-ink/80"
            >
              <p>&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-mauve-dark">
                {r.author} · Google
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink/85"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

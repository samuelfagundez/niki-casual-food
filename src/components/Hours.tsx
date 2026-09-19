import { content } from '../content'

export default function Hours() {
  return (
    <section className="bg-cream-dark/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">Horario</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Cuándo puedes venir
          </h2>
          <dl className="mt-6 divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white/60">
            {content.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between px-5 py-3 text-sm">
                <dt className="font-medium text-ink/85">{h.day}</dt>
                <dd className={h.hours === 'Cerrado' ? 'text-ink/45' : 'text-ink/75'}>{h.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-3xl border border-mauve/25 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mauve-dark">
              Precio medio
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">
              {content.priceRangeDisplay}
            </p>
          </div>
          <div className="rounded-3xl border border-mauve/25 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mauve-dark">
              Valoración en Google
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-ink">
              ★★★★★ {content.rating.value.toFixed(0)} · {content.rating.countDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

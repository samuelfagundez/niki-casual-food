import { content } from '../content'

export default function About() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-salmon">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Comida casual, hecha con cariño
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">{content.description}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {content.highlights.map((h) => (
            <li
              key={h}
              className="rounded-2xl border border-mauve/25 bg-cream-dark/60 p-5 text-sm leading-relaxed text-ink/85"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

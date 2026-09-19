import { content } from '../content'

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{content.shortName}</p>
          <p className="mt-2 text-sm">{content.tagline}</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-cream">Contacto</p>
          <p className="mt-2">{content.phoneDisplay}</p>
          <p>{content.address.full}</p>
          {content.email && <p>{content.email}</p>}
        </div>

        <div className="text-sm">
          <p className="font-semibold text-cream">Síguenos</p>
          <div className="mt-2 flex gap-4">
            {content.social.instagram && (
              <a
                href={content.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-mauve underline-offset-4 hover:text-mauve"
              >
                Instagram
              </a>
            )}
            {content.social.facebook && (
              <a
                href={content.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-mauve underline-offset-4 hover:text-mauve"
              >
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {content.name}. Todos los derechos reservados.
      </p>
    </footer>
  )
}

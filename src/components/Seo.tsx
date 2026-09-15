import { Helmet } from 'react-helmet-async'
import { content } from '../content'

export default function Seo() {
  const { name, tagline, metaDescription, keywords, siteUrl, phone, social, keywords: kw } = content

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name,
        inLanguage: 'es-ES',
      },
      {
        '@type': 'FoodEstablishment',
        '@id': `${siteUrl}#business`,
        name,
        description: metaDescription,
        url: siteUrl,
        telephone: phone,
        sameAs: [social.instagram, social.facebook, social.tiktok].filter(Boolean),
        keywords: kw.join(', '),
      },
    ],
  }

  return (
    <Helmet>
      <title>{`${name} — ${tagline}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${name} — ${tagline}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${name} — ${tagline}`} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

import { Helmet } from 'react-helmet-async'
import { content } from '../content'

export default function Seo() {
  const { name, tagline, metaDescription, keywords, siteUrl, phone, social, address, geo, rating, priceRange, openingHoursSchema, gallery } =
    content

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
        '@type': 'Restaurant',
        '@id': `${siteUrl}#business`,
        name,
        description: metaDescription,
        url: siteUrl,
        telephone: phone,
        image: gallery.map((g) => `${siteUrl}${g.src.replace(/^\//, '')}`),
        servesCuisine: content.cuisine,
        priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        geo: geo
          ? { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng }
          : undefined,
        openingHoursSpecification: openingHoursSchema.map((s) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: s.dayOfWeek,
          opens: s.opens,
          closes: s.closes,
        })),
        aggregateRating:
          rating.value && rating.count
            ? {
                '@type': 'AggregateRating',
                ratingValue: rating.value,
                reviewCount: rating.count,
              }
            : undefined,
        acceptsReservations: 'True',
        sameAs: [social.instagram, social.facebook, social.tiktok].filter(Boolean),
        keywords: keywords.join(', '),
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
      <meta property="og:image" content={`${siteUrl}${gallery[1].src.replace(/^\//, '')}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} — ${tagline}`} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

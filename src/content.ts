// Única fuente de verdad del negocio. Datos combinados de la ficha de Google
// Maps (ver /data/place.json y /data/ficha.md, descargados el 19 de
// septiembre de 2026) y de la información aportada directamente por el
// cliente (ver /data/contacto.json).

export const content = {
  name: 'Niki Casual Food',
  shortName: 'Niki',
  tagline: 'Cocina japonesa casual en el corazón de Camins al Grau, Valencia',
  description:
    'Niki Casual Food es un pequeño restaurante japonés en el barrio de Camins al Grau, en Valencia, donde el sushi y los poke bowls se preparan con producto fresco y mucho mimo. Un local acogedor, con trato cercano y una carta pensada para disfrutar tanto en pareja como en familia, ya sea comiendo en el local o pidiendo para llevar.',
  metaDescription:
    'Restaurante japonés en Valencia (Camins al Grau). Sushi, poke bowls y rolls frescos en un local pequeño y acogedor. Reserva o pide por WhatsApp.',
  keywords: [
    'Niki Casual Food',
    'restaurante japonés Valencia',
    'sushi Valencia',
    'poke bowl Valencia',
    'Camins al Grau',
    'sushi bar Valencia',
    'comida japonesa cerca de mí',
    'reservas restaurante japonés',
  ],
  priceRange: '20 € - 30 €',
  priceRangeDisplay: '20 € – 30 € por persona',
  cuisine: 'Japonesa',

  rating: { value: 5, count: 367, countDisplay: '367 reseñas' },
  highlights: [
    'Sushi, sashimi y poke bowls con producto fresco de calidad.',
    'Local pequeño y acogedor, con trato cercano de los dueños.',
    'Terraza, apto para niños y con entrada y asientos accesibles.',
  ],

  address: {
    streetAddress: "Carrer de la Dama d'Elx, 11",
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46023',
    addressCountry: 'ES',
    full: "C/ de la Dama d'Elx, 11, Camins al Grau, 46023 València, Valencia",
  },
  geo: { lat: 39.462151899999995, lng: -0.3430218 } as { lat: number; lng: number } | null,

  phone: '+34 644 60 88 73',
  phoneDisplay: '644 60 88 73',
  whatsappNumber: '34644608873',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/niki-casual-food/',

  social: {
    instagram: 'https://www.instagram.com/_niki_es_/',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '19:00–22:30' },
    { day: 'Miércoles', hours: '19:00–22:30' },
    { day: 'Jueves', hours: '19:00–22:30' },
    { day: 'Viernes', hours: '13:00–16:00, 19:00–23:00' },
    { day: 'Sábado', hours: '13:00–16:00, 19:00–23:00' },
    { day: 'Domingo', hours: '13:00–16:00, 19:00–22:30' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '19:00', closes: '22:30' },
    { dayOfWeek: ['Friday', 'Saturday'], opens: '13:00', closes: '16:00' },
    { dayOfWeek: ['Friday', 'Saturday'], opens: '19:00', closes: '23:00' },
    { dayOfWeek: ['Sunday'], opens: '13:00', closes: '16:00' },
    { dayOfWeek: ['Sunday'], opens: '19:00', closes: '22:30' },
  ],

  gallery: [
    { src: '/gallery/niki-fachada.jpg', alt: 'Fachada del restaurante japonés Niki Casual Food en Valencia' },
    { src: '/gallery/niki-sushi-bar.jpg', alt: 'Barra de sushi de Niki Casual Food' },
    { src: '/gallery/niki-bowls.jpg', alt: 'Poke bowls de salmón y pollo teriyaki en Niki Casual Food' },
    { src: '/gallery/niki-rolls.jpg', alt: 'Rolls de sushi frescos servidos en Niki Casual Food' },
    { src: '/gallery/niki-sashimi.jpg', alt: 'Sashimi de salmón fresco en Niki Casual Food' },
    { src: '/gallery/niki-interior.jpg', alt: 'Interior acogedor del restaurante Niki Casual Food' },
  ],

  reviews: [
    {
      author: 'Ignacio Bayo',
      text: 'Restaurante japonés pequeñito, con una estética muy cuidada y un ambiente acogedor. Los dueños son encantadores y muy atentos. La relación calidad-precio nos pareció excelente.',
    },
    {
      author: 'María Ramírez',
      text: 'Uno de los mejores sashimis de salmón que me he comido en mi vida. La calidad del producto es increíble y la presentación preciosa.',
    },
    {
      author: 'Tatyana R',
      text: 'La comida es deliciosa: los rollos son grandes, frescos y jugosos. Los mejores que hemos probado en Valencia.',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent("Niki Casual Food, Carrer de la Dama d'Elx 11, 46023 València") +
    '&hl=es&z=16&output=embed',
  mapLinkUrl: 'https://maps.app.goo.gl/kH8GLYGzHPQwuoGM9',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Niki Casual Food y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Niki Casual Food y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}

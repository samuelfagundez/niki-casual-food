// Única fuente de verdad del negocio. Datos aportados directamente por el
// cliente (ver /data/contacto.json) el 15 de septiembre de 2026. Google Maps
// no expone en este caso dirección, horario, valoración ni fotografías del
// local, por lo que esos campos quedan pendientes de que el cliente los
// facilite (ver comentarios "Pendiente" en cada bloque afectado).

export const content = {
  name: 'Niki Casual Food',
  shortName: 'Niki',
  tagline: 'Comida casual hecha con cariño',
  description:
    'Niki Casual Food es un espacio pensado para comer bien y sin complicaciones, con recetas caseras y un trato cercano de principio a fin. Ya sea para un plato rápido a mediodía o para pedir cómodamente desde casa, en Niki cuidamos cada detalle para que la experiencia sea sencilla y sabrosa.',
  metaDescription:
    'Niki Casual Food: comida casual y cercana, pensada para disfrutar en el local o pedir para llevar. Contacta por WhatsApp o síguenos en Instagram.',
  keywords: [
    'Niki Casual Food',
    'comida casual',
    'restaurante casual',
    'comida para llevar',
    'pedidos por WhatsApp',
    'Niki',
  ],
  priceRange: '',
  priceRangeDisplay: 'Consulta precios por WhatsApp',
  cuisine: 'Comida casual',

  // Pendiente: Google Maps no expone valoración para este negocio. Añadir
  // cuando el cliente facilite el nº de reseñas y la puntuación.
  rating: { value: 0, count: 0, countDisplay: '' },
  highlights: [
    'Recetas caseras pensadas para el día a día.',
    'Trato cercano y atención directa por WhatsApp.',
    'Pedidos rápidos para tomar en el local o para llevar.',
  ],

  // Pendiente: dirección exacta del local — el cliente no la ha facilitado
  // todavía. El botón "Cómo llegar" usa por ahora el enlace corto de Google
  // Maps aportado por el cliente.
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'ES',
    full: '',
  },
  geo: null as { lat: number; lng: number } | null,

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

  // Pendiente: horario de apertura — el cliente no lo ha facilitado todavía.
  hours: [] as { day: string; hours: string }[],
  openingHoursSchema: [] as { dayOfWeek: string[]; opens: string; closes: string }[],

  // Pendiente: fotografías del local — el cliente no ha aportado imágenes
  // todavía. En cuanto lleguen, procesarlas (ver punto 5 del handoff) y
  // añadirlas aquí para activar el Hero con foto real y la galería.
  gallery: [] as { src: string; alt: string }[],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' + encodeURIComponent('Niki Casual Food') + '&hl=es&z=15&output=embed',
  mapLinkUrl: 'https://maps.app.goo.gl/kH8GLYGzHPQwuoGM9',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Niki Casual Food y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Niki Casual Food y me gustaría hacer un pedido.'

// Sin sistema de pedidos propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}

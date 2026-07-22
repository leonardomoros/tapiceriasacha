export const site = {
  name: 'Tapicería Sacha',
  phoneDisplay: '+57 323 363 7606',
  phoneE164: '+573233637606',
  whatsapp: 'https://wa.me/573233637606',
  whatsappWithText: (text: string) => `https://wa.me/573233637606?text=${encodeURIComponent(text)}`,
  facebook: 'https://www.facebook.com/TapiceriaSacha.Medellin',
  instagram: 'https://www.instagram.com/tapiceriasacha/',
  address: 'Carrera 71 #44-47, Florida Nueva, Medellín',
  mapsUrl: 'https://maps.google.com/?q=Carrera+71+44-47+Florida+Nueva+Medellín',
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Catálogo', href: '/productos' },
  { label: 'Nosotros', href: '/somos' },
  { label: 'Contacto', href: '/contacto' },
];

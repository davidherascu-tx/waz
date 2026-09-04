// lib/site.ts
// Zentrale Konfiguration für SEO, Sitemap, Structured Data und Canonical-URLs.
// Die Domain kann per Umgebungsvariable NEXT_PUBLIC_SITE_URL überschrieben werden
// (z. B. für Staging-Umgebungen), ohne dass Code angepasst werden muss.

export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.waz-bm.de').replace(/\/$/, ''),
  name: 'WAZ Blankenfelde-Mahlow',
  legalName: 'Wasser- und Abwasserzweckverband Blankenfelde-Mahlow',
  description:
    'Ihr zuverlässiger Partner für sichere Trinkwasserversorgung und umweltgerechte Abwasserentsorgung in Blankenfelde-Mahlow und Umgebung.',
  locale: 'de_DE',
  street: 'Glasower Damm 92',
  postalCode: '15827',
  city: 'Blankenfelde-Mahlow',
  region: 'Brandenburg',
  country: 'DE',
  phone: '+49 3379 376860',
  fax: '+49 3379 376803',
  email: 'info@waz-bm.de',
  emergencyPhone: '+49 800 8807088',
  ogImage: '/waz_logo_menu.webp',
} as const;

/** Baut eine absolute URL aus einem Pfad (immer mit führendem Slash). */
export function absoluteUrl(path = '/'): string {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

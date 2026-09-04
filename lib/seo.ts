// lib/seo.ts
import type { Metadata } from 'next';
import { siteConfig, absoluteUrl } from './site';

type PageSeo = {
  title: string;
  description: string;
  /** Pfad der Seite, z. B. '/kontakt'. Wird zur Canonical-URL. */
  path: string;
  /** Auf true setzen, wenn die Seite nicht in den Google-Index soll. */
  noindex?: boolean;
};

/**
 * Erzeugt vollständige Metadaten für eine Unterseite:
 * eindeutiger Titel, Description, Canonical-URL und Open-Graph-Daten.
 */
export function pageMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: siteConfig.ogImage, alt: `${siteConfig.name} Logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// app/robots.ts
// Erzeugt automatisch /robots.txt – Google Search Console findet darüber die Sitemap.
import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Die API-Route liefert kein indexierbares HTML.
        disallow: ['/api/'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteConfig.url,
  };
}

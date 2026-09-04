// app/sitemap.ts
// Erzeugt automatisch /sitemap.xml für die Google Search Console.
//
// Die statischen Seiten werden beim Build direkt aus dem app-Verzeichnis
// eingelesen. Neue Seiten landen dadurch automatisch in der Sitemap – es muss
// hier nichts von Hand nachgetragen werden.
import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { newsItems } from '@/app/archiv/newsData';
import { parseGermanDate } from '@/lib/dates';

const APP_DIR = path.join(process.cwd(), 'app');

/** Seiten, die zwar existieren, aber nicht in die Sitemap gehören. */
const EXCLUDED_ROUTES = new Set<string>([]);

/** Rechtlich nötige Seiten – indexierbar, aber für Google zweitrangig. */
const LEGAL_ROUTES = new Set(['/datenschutz', '/impressum']);

/** Wichtigkeit einzelner Bereiche für Google (0.0 – 1.0). */
function priorityFor(route: string): number {
  if (route === '/') return 1;
  if (LEGAL_ROUTES.has(route)) return 0.3;
  if (route === '/kontakt' || route === '/archiv' || route === '/faq') return 0.9;
  if (route.split('/').length === 2) return 0.8;
  return 0.6;
}

function changeFrequencyFor(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (route === '/' || route === '/archiv') return 'weekly';
  if (route.startsWith('/service/satzungen') || route === '/impressum') return 'yearly';
  return 'monthly';
}

/** Läuft rekursiv durch app/ und sammelt alle statischen Routen. */
function collectRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === 'page.tsx') {
      routes.push(`/${segments.join('/')}`.replace(/\/+$/, '') || '/');
      continue;
    }

    if (!entry.isDirectory()) continue;

    const name = entry.name;
    // Dynamische Routen ([id]), Route-Groups ((gruppe)), private Ordner (_ordner)
    // und die API werden übersprungen.
    if (name.startsWith('[') || name.startsWith('(') || name.startsWith('_') || name === 'api') {
      continue;
    }

    routes.push(...collectRoutes(path.join(dir, name), [...segments, name]));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = collectRoutes(APP_DIR)
    .filter((route) => !EXCLUDED_ROUTES.has(route))
    .sort()
    .map((route) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: changeFrequencyFor(route),
      priority: priorityFor(route),
    }));

  // Detailseiten der Bekanntmachungen aus /archiv – hier ist das tatsächliche
  // Veröffentlichungsdatum bekannt und damit aussagekräftiger als "heute".
  const newsEntries = newsItems.map((item) => ({
    url: absoluteUrl(`/archiv/${item.id}`),
    lastModified: parseGermanDate(item.date) ?? lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...newsEntries];
}

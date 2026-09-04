// app/manifest.ts
// Web-App-Manifest: verbessert das Mobil-Erlebnis und den Lighthouse-Score.
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | Wasser- und Abwasserzweckverband`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0067B0',
    lang: 'de',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/waz_logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}

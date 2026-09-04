// app/ueber-uns/haus-des-wassers/layout.tsx
// Die Seite ist eine Client-Komponente ('use client') und kann deshalb selbst
// keine Metadaten exportieren. Das übernimmt dieses Layout.
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Haus des Wassers',
  description:
    'Das Haus des Wassers am Glasower Damm 92 in Blankenfelde-Mahlow: Verwaltungssitz des WAZ mit Bildergalerie und Anfahrt.',
  path: '/ueber-uns/haus-des-wassers',
});

export default function HausDesWassersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

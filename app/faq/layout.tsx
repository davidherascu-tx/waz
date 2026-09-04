// app/faq/layout.tsx
// Die FAQ-Seite ist eine Client-Komponente ('use client') und kann deshalb
// selbst keine Metadaten exportieren. Das übernimmt dieses Layout.
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Fragen & Antworten (FAQ)',
  description:
    'Antworten auf die häufigsten Fragen zu Smartmetern, Wasserzählern, Abrechnung, Hausanschluss und Trinkwasserqualität im Verbandsgebiet.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

// app/archiv/[id]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsItems } from '@/app/archiv/newsData';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { germanDateToISO } from '@/lib/dates';

type RouteParams = { id: string };

// Generiert die statischen Routen
export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

// Jede Bekanntmachung bekommt eigenen Titel, Description und Canonical-URL.
export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams> | RouteParams;
}): Promise<Metadata> {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === id);

  if (!item) {
    return {
      title: 'Bekanntmachung nicht gefunden',
      robots: { index: false, follow: true },
    };
  }

  const url = absoluteUrl(`/archiv/${item.id}`);

  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${item.title} | ${siteConfig.name}`,
      description: item.excerpt,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'article',
      publishedTime: germanDateToISO(item.date),
      images: [{ url: siteConfig.ogImage, alt: `${siteConfig.name} Logo` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} | ${siteConfig.name}`,
      description: item.excerpt,
      images: [siteConfig.ogImage],
    },
  };
}

// WICHTIG: "async" hinzugefügt und params asynchron verarbeitet (Für Next.js 14/15)
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<RouteParams> | RouteParams;
}) {
  // Entpackt die Parameter sicher
  const resolvedParams = await params;
  
  // Sucht den richtigen Beitrag
  const item = newsItems.find((n) => n.id === resolvedParams.id);

  if (!item) {
    return notFound();
  }

  // WICHTIG: Macht den Dateinamen "Browser-sicher" 
  // (Macht aus "Frühjahrsspülung 2026.pdf" -> "Fr%C3%BChjahrssp%C3%BClung%202026.pdf")
  const safePdfName = encodeURIComponent(item.pdf);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 w-full flex-grow mb-24">
        
        {/* Zurück-Button */}
        <Link href="/archiv" className="inline-flex items-center text-[#0067B0] font-bold hover:underline mb-8 bg-blue-50 px-4 py-2 rounded-xl transition-colors hover:bg-blue-100">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Übersicht
        </Link>

        <header className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-bold shadow-sm border ${item.urgent ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-slate-200 text-slate-500'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.date}
              </span>
              {item.urgent && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white rounded-lg text-sm font-bold shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  Wichtig
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {item.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              {item.excerpt}
            </p>
          </div>
          
          <a 
            href={`/news/${safePdfName}`} 
            target="_blank" 
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0067B0] text-white font-bold rounded-xl hover:bg-[#004e87] transition-all shadow-md shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            PDF Download
          </a>
        </header>

        {/* PDF Viewer */}
        <div className="w-full h-[700px] md:h-[900px] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Der Browser-Sichere Link wird hier genutzt */}
          <iframe
            src={`/news/${safePdfName}#view=FitH`}
            className="w-full h-full"
            title={item.title}
            loading="lazy"
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
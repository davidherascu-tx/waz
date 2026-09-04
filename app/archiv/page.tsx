// app/archiv/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { newsItems } from '@/app/archiv/newsData';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Aktuelles & Bekanntmachungen',
  description:
    'Alle Meldungen, amtlichen Bekanntmachungen und Pressemitteilungen des WAZ Blankenfelde-Mahlow auf einen Blick.',
  path: '/archiv',
});

export default function ArchivPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 w-full flex-grow mb-24">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Aktuelles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            News-Archiv
          </h1>
          <p className="text-lg text-slate-600">
            Hier finden Sie alle Meldungen, Pressemitteilungen und Ausgaben der Wasserzeitung auf einen Blick.
          </p>
        </header>

        <div className="grid gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/archiv/${item.id}`}
              className={`p-6 md:p-8 rounded-2xl shadow-sm border hover:shadow-md transition-all group ${
                item.urgent
                  ? 'bg-red-50/60 border-red-200 hover:border-red-400'
                  : 'bg-white border-slate-100 hover:border-[#0067B0]/50'
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className={`text-sm font-bold block flex items-center gap-2 ${item.urgent ? 'text-red-700' : 'text-slate-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </span>
                {item.urgent && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-100 px-2.5 py-1 rounded-full border border-red-200 shrink-0">
                    Wichtig
                  </span>
                )}
              </div>
              <h2 className={`text-2xl font-bold text-slate-900 mb-3 transition-colors ${item.urgent ? 'group-hover:text-red-700' : 'group-hover:text-[#0067B0]'}`}>
                {item.title}
              </h2>
              <p className="text-slate-600">
                {item.excerpt}
              </p>
              <span className="inline-flex items-center text-[#0067B0] font-bold text-sm mt-4">
                Beitrag & PDF ansehen
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
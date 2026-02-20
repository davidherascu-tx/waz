// app/archiv/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { newsItems } from '@/app/archiv/newsData';

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
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#0067B0]/50 hover:shadow-md transition-all group"
            >
              <span className="text-sm font-bold text-slate-500 mb-2 block flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.date}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0067B0] transition-colors">
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
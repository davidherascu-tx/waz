// app/archiv/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsData } from '@/data/news';

export default function ArchivPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 w-full flex-grow mb-20">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">News-Archiv</h1>
        <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
        
        <div className="space-y-6 mt-12">
          {newsData.map((eintrag) => (
            <article key={eintrag.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <time className="text-sm font-semibold text-blue-500">{eintrag.date}</time>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">{eintrag.title}</h2>
              <p className="text-gray-600 mb-4">{eintrag.excerpt}</p>
              {/* WICHTIGER LINK: */}
              <a href={`/archiv/${eintrag.id}`} className="text-blue-600 font-semibold hover:underline">
                Vollständigen Artikel lesen &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
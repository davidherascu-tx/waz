// app/archiv/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsItems } from '@/app/archiv/newsData';

// Generiert die statischen Routen
export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

// WICHTIG: "async" hinzugefügt und params asynchron verarbeitet (Für Next.js 14/15)
export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
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
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-lg text-sm font-bold mb-4 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.date}
            </span>
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
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
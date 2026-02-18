// app/archiv/[id]/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsData } from '@/data/news';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const article = newsData.find((item) => item.id === resolvedParams.id);

  if (!article) {
    return (
      <main className="min-h-screen flex flex-col bg-slate-50 pt-32 text-center lg:pt-52">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Beitrag nicht gefunden</h1>
          <a href="/archiv" className="text-blue-600 hover:underline">Zurück zum Archiv</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    // NEU: Einheitliche Abstände
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 w-full flex-grow mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mt-8">
        
        <a href="/archiv" className="inline-block text-gray-500 hover:text-blue-600 mb-8 font-medium">
          &larr; Zurück zur Übersicht
        </a>

        <header className="mb-10">
          <span className="text-blue-600 font-semibold uppercase text-sm">{article.date}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mt-4 leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="text-lg text-gray-700 leading-relaxed mb-12 whitespace-pre-wrap">
          {article.content}
        </div>

        {/* PDF-Viewer */}
        {article.pdfUrl && (
          <div className="mt-12 pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Zugehöriges Dokument</h3>
            
            <div className="w-full h-[800px] border-2 border-gray-200 rounded-xl overflow-hidden mb-6 bg-gray-200 shadow-inner">
              <iframe 
                src={`${article.pdfUrl}#toolbar=0`} 
                className="w-full h-full" 
                title={`Dokument für ${article.title}`}
              />
            </div>
            
            <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Falls das PDF nicht lädt, klicken Sie hier zum Herunterladen.
            </a>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
// app/service/satzungen/allgemein/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Hier einfach neue Dokumente hinzufügen – die Sortierung passiert automatisch!
const documents = [
  { 
    title: "Entschädigungssatzung des WAZ", 
    date: "2016-01-26", 
    file: "entschaedigungssatzung_waz_v_2016_01_26.pdf" 
  },
  { 
    title: "1. Änderung der Zweckverbandssatzung", 
    date: "2018-11-20", 
    file: "1_aenderung_zweckverbandssatzung_20_11_2018.pdf" 
  },
  { 
    title: "Zweckverbandssatzung", 
    date: "2015-07-06", 
    file: "zweckverbandssatzung_vom_06_07_2015.pdf" 
  }
];

export default function AllgemeinSatzungenPage() {
  // Automatische Sortierung: Neuestes Datum zuerst
  const sortedDocs = [...documents].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Hilfsfunktion für schönes deutsches Datumsformat (z.B. 20.11.2018)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <span className="text-[#0067B0] font-bold tracking-wider uppercase text-sm block mb-2">
            Satzungen
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Allgemeine Satzungen
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie alle allgemeinen rechtlichen Grundlagen und Satzungen des WAZ Blankenfelde-Mahlow zum Download.
          </p>
        </header>

        {/* Dokumenten-Liste */}
        <div className="grid gap-4">
          {sortedDocs.map((doc, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {/* PDF Icon */}
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#0067B0] transition-colors mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold">
                      PDF
                    </span>
                    <span>Veröffentlicht am {formatDate(doc.date)}</span>
                  </p>
                </div>
              </div>

              <a 
                href={`/service/satzung/allgemein/${doc.file}`}
                target="_blank"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-[#0067B0] hover:text-white transition-all text-sm group-hover:shadow-md shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
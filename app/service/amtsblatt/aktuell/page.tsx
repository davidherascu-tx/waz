// app/service/amtsblatt/aktuell/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AmtsblattAktuellPage() {
  // Konfiguration des aktuellen Amtsblatts
  const currentIssue = {
    title: "Amtsblatt WAZ Nr. 02/2025",
    date: "17.12.2025",
    file: "Amtsblatt WAZ Nr. 02_2025 vom 17.12.2025.pdf",
    topics: [
      "Beschlüsse der Zweckverbandsversammlung vom 16.12.2025",
      "Jahresabschluss 2024 und Entlastung der Verbandsvorsteherin",
      "Wirtschaftsplan des WAZ für das Jahr 2026",
      "Festsetzung nach § 14 Eigenbetriebsverordnung für 2026"
    ]
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Amtsblatt</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Aktuelle Ausgabe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Amtsblatt Aktuell
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie die neueste amtliche Bekanntmachung des Zweckverbandes. 
            Ältere Ausgaben finden Sie im <a href="/service/amtsblatt/archiv" className="text-[#0067B0] hover:underline font-semibold">Archiv</a>.
          </p>
        </header>

        {/* Info-Karte zur aktuellen Ausgabe */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#0067B0] rounded-full text-sm font-bold mb-3">
                Veröffentlicht am {currentIssue.date}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {currentIssue.title}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Inhalt dieser Ausgabe:</h3>
                <ul className="space-y-2">
                  {currentIssue.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a 
              href={`/service/amtsblatt/aktuell/${currentIssue.file}`} 
              target="_blank" 
              download
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0067B0] text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              PDF Herunterladen
            </a>
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="w-full h-[1000px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
          <iframe 
            src={`/service/amtsblatt/aktuell/${currentIssue.file}#view=FitH`} 
            className="w-full h-full" 
            title="Aktuelles Amtsblatt PDF"
          />
        </section>

      </div>

      <Footer />
    </main>
  );
}
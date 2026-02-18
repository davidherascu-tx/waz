// app/service/satzungen/trinkwasser/gebuehren/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const documents = [
  { 
    title: "7. Änderung der Trinkwassergebührensatzung", 
    date: "2022-11-29", 
    file: "7. Änderung Trinkwassergebührensatzung vom 29.11.2022.pdf" 
  },
  { 
    title: "6. Änderung der Trinkwassergebührensatzung", 
    date: "2022-09-20", 
    file: "6. Änderung Trinkwassergebührensatzung vom 20.09.2022.pdf" 
  },
  { 
    title: "5. Änderung der Trinkwassergebührensatzung", 
    date: "2021-09-20", 
    file: "5. Änderung Trinkwassergebührensatzung vom 20.09.2021.pdf" 
  },
  { 
    title: "4. Änderung der Trinkwassergebührensatzung", 
    date: "2018-11-20", 
    file: "4. Änderung Trinkwassergebührensatzung vom 20.11.2018.pdf" 
  },
  { 
    title: "3. Änderung der Trinkwassergebührensatzung", 
    date: "2016-11-15", 
    file: "3. Änderung der Trinkwassergebührensatzung vom 15.11.2016.pdf" 
  },
  { 
    title: "2. Änderung der Trinkwassergebührensatzung", 
    date: "2014-11-18", 
    file: "2. Änderung der Trinkwassergebührensatzung vom 18.11.2014.pdf" 
  },
  { 
    title: "1. Änderung der Trinkwassergebührensatzung", 
    date: "2012-11-20", 
    file: "1. Änderung der Trinkwassergebührensatzung vom 20.11.2012.pdf" 
  },
  { 
    title: "Trinkwassergebührensatzung (Ursprungsfassung)", 
    date: "2012-03-20", 
    file: "Trinkwassergebührensatzung_vom_20.03.2012.pdf" 
  }
];

export default function TrinkwasserGebuehrenPage() {
  // Automatische Sortierung: Neuestes Datum zuerst
  const sortedDocs = [...documents].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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

      <div className="max-w-[1200px] mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Satzungen</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Trinkwasser</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Gebühren
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie die aktuelle Gebührensatzung für die Trinkwasserversorgung sowie alle historischen Änderungssatzungen.
          </p>
        </header>

        <div className="grid gap-4">
          {sortedDocs.map((doc, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {/* PDF Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0067B0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                    <span>Vom {formatDate(doc.date)}</span>
                  </p>
                </div>
              </div>

              <a 
                href={`/service/satzung/trinkwasser/gebuehren/${doc.file}`}
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
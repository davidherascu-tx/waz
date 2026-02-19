// app/service/beitraege-gebuehren/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const documents = [
  { 
    title: "Beiträge und Gebühren Trinkwasser", 
    date: "25.07.2024", // Stand laut PDF
    file: "Beiträge und Gebühren Trinkwasser.pdf",
    type: "Trinkwasser"
  },
  { 
    title: "Beiträge und Gebühren Schmutzwasser", 
    date: "27.11.2024", // Stand laut PDF
    file: "Beiträge und Gebühren Schmutzwasser.pdf",
    type: "Schmutzwasser"
  }
];

export default function BeitraegeGebuehrenPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Service</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Übersicht</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Beiträge und Gebühren
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie die aktuellen Übersichten zu den Beiträgen und Gebühren für Trink- und Schmutzwasser im Verbandsgebiet.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all flex flex-col items-start justify-between gap-6"
            >
              <div className="w-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  doc.type === 'Trinkwasser' 
                    ? 'bg-blue-50 text-[#0067B0]' 
                    : 'bg-emerald-50 text-emerald-600'
                }`}>
                  {doc.type === 'Trinkwasser' ? (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0067B0] transition-colors mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full">
                  Stand: {doc.date}
                </p>
              </div>

              <a 
                href={`/service/beitraege-gebuehren/${doc.file}`}
                target="_blank"
                download
                className={`flex items-center justify-center gap-2 w-full px-6 py-4 font-bold rounded-2xl transition-all shadow-sm group-hover:shadow-md ${
                  doc.type === 'Trinkwasser'
                    ? 'bg-blue-50 text-[#0067B0] hover:bg-[#0067B0] hover:text-white'
                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF Herunterladen
              </a>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
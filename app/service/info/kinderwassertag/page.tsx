// app/service/info/kinderwassertag/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KinderwassertagPage() {
  const pdfFile = "Kinderwassertag_2025.pdf";

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Service</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Informationen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            17. Kinderwassertag 2025
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Spiel, Spaß und spannende Einblicke rund um das Thema Wasser! Wir laden alle interessierten Kinder, Schul- und Horteinrichtungen herzlich in das Wasserwerk Ludwigsfelde ein.
          </p>
        </header>

        {/* Info-Karten & Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 text-[#0067B0] rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Wann?</h3>
            <p className="text-slate-600">Freitag, 6. Juni 2025<br/>08:00 - 16:00 Uhr</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Wo?</h3>
            <p className="text-slate-600">Wasserwerk Ludwigsfelde<br/>Straße der Jugend 48</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Anmeldung</h3>
            <p className="text-slate-600">Kitas & Schulen bitte bis<br/>9. Mai 2025 anmelden!</p>
          </div>
        </div>

        {/* PDF Viewer Sektion */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Einladung & Programm
            </h2>
            <a 
              href={`/service/info/${pdfFile}`} 
              target="_blank" 
              download
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0067B0] text-white font-bold rounded-xl hover:bg-[#004e87] transition-all text-sm shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Flyer Herunterladen
            </a>
          </div>

          <div className="w-full h-[700px] md:h-[900px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              src={`/service/info/${pdfFile}#view=FitH`} 
              className="w-full h-full" 
              title="Einladung zum Kinderwassertag 2025"
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
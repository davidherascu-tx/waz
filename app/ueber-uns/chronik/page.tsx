// app/ueber-uns/chronik/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ChronikPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      {/* UPDATE: max-w-6xl für die perfekte Breite */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0067B0] mb-6 leading-tight">
            Chronik des WAZ
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ein Blick auf die geschichtliche Entwicklung und die Meilensteine unseres Zweckverbandes.
          </p>
        </header>

        {/* PDF Sektion */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Dokumentenansicht
            </h2>
            <a 
              href="/ueber-uns/chronik_des_waz.pdf" 
              target="_blank" 
              className="text-sm font-semibold text-[#0067B0] hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Herunterladen
            </a>
          </div>

          <div className="w-full h-[800px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              src="/ueber-uns/chronik_des_waz.pdf#view=FitH" 
              className="w-full h-full" 
              title="Chronik des WAZ"
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
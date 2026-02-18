// app/ueber-uns/wasserzeitung/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WasserzeitungPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      {/* UPDATE: max-w-6xl */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <span className="text-[#0067B0] font-bold tracking-wider uppercase text-sm block mb-2">Jubiläumsausgabe</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            30 Jahre WAZ
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Lesen Sie hier unsere Sonderausgabe der Wasserzeitung zum 30-jährigen Jubiläum.
          </p>
        </header>

        {/* PDF Sektion */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Wasserzeitung ansehen
            </h2>
            <a 
              href="/ueber-uns/waz_jubilaeumsseiten_30_jahre.pdf" 
              target="_blank" 
              className="text-sm font-semibold text-[#0067B0] hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              PDF Download
            </a>
          </div>

          <div className="w-full h-[800px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              src="/ueber-uns/waz_jubilaeumsseiten_30_jahre.pdf#view=FitH" 
              className="w-full h-full" 
              title="Wasserzeitung 30 Jahre WAZ"
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
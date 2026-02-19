// app/service/formulare/trinkwasser/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formulare = [
  { 
    title: "Gartenwasserzähler Wechsel", 
    file: "Gartenwasserzähler Wechsel.pdf" 
  },
  { 
    title: "Gartenwasserzähler Anmeldung", 
    file: "Gartenwasserzähler Anmeldung.pdf" 
  },
  { 
    title: "Antrag auf Wasserversorgung", 
    file: "Antrag auf Wasserversorgung.pdf" 
  },
  { 
    title: "Antrag Auswechselung Hausanschluss", 
    file: "Antrag Auswechselung Hausanschluss.pdf" 
  }
];

const merkblaetter = [
  { 
    title: "Kundeninformation Frost", 
    file: "Kundeninformation Frost.pdf" 
  },
  { 
    title: "Gartenwasserzähler Merkblatt", 
    file: "Gartenwasserzähler Merkblatt.pdf" 
  },
  { 
    title: "Mindestanforderungen an Wasserzählerschächte", 
    file: "Mindestanforderungen an Wasserzählerschächte.pdf" 
  },
  { 
    title: "Hausanschluss nicht begehbarer Wasserzählerschacht", 
    file: "Hausanschluss nicht begehbarer Wasserzählerschacht.pdf" 
  },
  { 
    title: "Hausanschluss begehbarer Wasserzählerschacht", 
    file: "Hausanschluss begehbarer Wasserzählerschacht.pdf" 
  },
  { 
    title: "Hausanschluss Wasserzähler Keller / Bodenplatte", 
    file: "Hausanschluss Wasserzähler Keller Bodenplatte.pdf" 
  }
];

export default function TrinkwasserFormularePage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Formulare & Merkblätter</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Trinkwasser</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Trinkwasser
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie alle Anträge, Formulare und technischen Merkblätter rund um Ihren Trinkwasseranschluss.
          </p>
        </header>

        {/* Sektion: Formulare */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#0067B0] rounded-full"></span>
            Formulare & Anträge
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {formulare.map((doc, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0067B0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#0067B0] transition-colors">
                    {doc.title}
                  </h3>
                </div>

                <a 
                  href={`/service/formulare/trinkwasser/${doc.file}`}
                  target="_blank"
                  download
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-[#0067B0] hover:text-white transition-all text-sm group-hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Formular herunterladen
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Sektion: Merkblätter */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
            Technische Merkblätter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merkblaetter.map((doc, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug">
                    {doc.title}
                  </h3>
                </div>

                <a 
                  href={`/service/formulare/trinkwasser/${doc.file}`}
                  target="_blank"
                  download
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-sm group-hover:shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Merkblatt laden
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
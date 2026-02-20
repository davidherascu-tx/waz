// app/service/info/smartmeter/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SmartmeterPage() {
  const flyerPdf = "Flyer_WAZ_SM.pdf";

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
            Smartmeter
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Informationen zur Technologie und zum Einbau unserer neuen digitalen Wasserzähler im Verbandsgebiet.
          </p>
        </header>

        {/* Info-Karten */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Karte 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-[#0067B0] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Einbau smarter Zähler ab 2022</h3>
            <p className="text-slate-600 leading-relaxed">
              Wir haben über 8.500 Haushalte zu versorgen, weshalb wir die Zählerumstellung der Hauptwasserzähler Schritt für Schritt vornehmen und planen den Einbau der digitalen Zähler spätestens bei Ihrem nächsten regulären Zählerwechsel. Für das Jahr 2022 sind die Wechsel in Blankenfelde, Jühnsdorf und Diedersdorf geplant; Mahlow folgt im Jahr 2025.
            </p>
          </div>

          {/* Karte 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Funkstandard für Smartmeter</h3>
            <p className="text-slate-600 leading-relaxed">
              Die neuen Smartmeter erfüllen in Deutschland geltenden Standards, insbesondere der Datenschutzgrundverordnung und haben eine Zulassung der physikalisch-technischen Bundesanstalt Braunschweig für den deutschen Markt. Der umsichtige Umgang mit Daten und Technologien hilft, Risiken zu minimieren.
            </p>
          </div>

          {/* Karte 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Darum Smartmeter</h3>
            <p className="text-slate-600 leading-relaxed">
              Die neuen Smartmeter messen intelligent: das kontaktlose Messen per Ultraschall gibt präzise und verlässlich Auskunft zum Verbrauch. Das Ablesen und Abrechnen des von Ihnen bezogenen Wassers können wir so noch effektiver und einfacher gestalten und so den Service für Sie weiter optimieren. Die digitale Technologie der Fernauslesung von Zählern werden wir daher ab 2022 in den betrieblichen Alltag einbinden.
            </p>
          </div>
        </div>

        {/* Downloads Sektion (Nur Buttons) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#0067B0] rounded-full"></span>
            Datenblätter zum Download
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a 
              href="/service/info/Datenblatt_Hydrus_1_3.pdf" 
              target="_blank" 
              download
              className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0067B0] hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0067B0] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-[#0067B0]">Datenblatt Hydrus 1.3</span>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>

            <a 
              href="/service/info/Datenblatt_Hydrus_2_0.pdf" 
              target="_blank" 
              download
              className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#0067B0] hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0067B0] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-[#0067B0]">Datenblatt Hydrus 2.0</span>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </section>

        {/* PDF Viewer Sektion (Flyer) */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Informationsflyer Smartmeter
            </h2>
            <a 
              href={`/service/info/${flyerPdf}`} 
              target="_blank" 
              download
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-[#0067B0] hover:text-white transition-all text-sm shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Flyer Herunterladen
            </a>
          </div>

          <div className="w-full h-[700px] md:h-[900px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <iframe 
              src={`/service/info/${flyerPdf}#view=FitH`} 
              className="w-full h-full" 
              title="Flyer Smartmeter"
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
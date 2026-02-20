// app/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsItems } from '@/app/archiv/newsData'; // <-- HIER ANGEPASST

export default function Home() {
  const leistungen = [
    {
      title: 'Trinkwasserversorgung',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      desc: 'Sichere Versorgung mit höchster Wasserqualität – geprüft und zertifiziert nach gesetzlichen Standards.',
      href: '#',
      gradient: 'from-blue-600 to-cyan-500',
      badge: 'Kernleistung',
    },
    {
      title: 'Abwasserentsorgung',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      desc: 'Umweltgerechte Entsorgung und Aufbereitung nach neuesten ökologischen und technischen Maßstäben.',
      href: '#',
      gradient: 'from-teal-600 to-emerald-500',
      badge: 'Kernleistung',
    },
    {
      title: 'Hausanschlüsse',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      desc: 'Kompetente Planung und fachgerechte Verlegung direkt für Ihr Grundstück und Ihren Neubau.',
      href: '#',
      gradient: 'from-violet-600 to-purple-500',
      badge: 'Anschluss',
    },
    {
      title: 'Wartung & Netze',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      desc: 'Regelmäßige Prüfung und Instandhaltung unserer Rohrnetze und technischen Anlagen.',
      href: '#',
      gradient: 'from-orange-600 to-amber-500',
      badge: 'Service',
    },
    {
      title: 'Online-Zählerstand',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      desc: 'Bequem und schnell Ihren Wasserstand online melden – direkt, unkompliziert, jederzeit.',
      href: '/service/zaehlerstand',
      gradient: 'from-sky-600 to-blue-500',
      badge: 'Online',
    },
    {
      title: '24/7 Störungsdienst',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      desc: 'Rund um die Uhr erreichbar bei Rohrbrüchen, Ausfällen und Notfällen jeder Art.',
      href: '/kontakt',
      gradient: 'from-red-600 to-rose-500',
      badge: 'Notfall',
    },
  ];

  const aktuelleNews = newsItems.slice(0, 3); // <-- HIER ANGEPASST: Nutzt jetzt newsItems

  return (
    // NEU: Einheitliche Abstände
    <main className="min-h-screen flex flex-col bg-[#f8fafc] text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <section className="px-4 md:px-6 lg:px-8 pb-0">
        <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#0067B0]/15">
          <div
            className="relative w-full group"
            style={{ height: 'clamp(380px, 52vh, 620px)' }}
          >
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[9000ms]"
            >
              <source src="/wassertropfen.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-[#00346A]/92 via-[#0067B0]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md text-white/90 text-xs font-semibold mb-5 border border-white/20 w-fit tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Willkommen beim WAZ Blankenfelde-Mahlow
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] mb-5 tracking-tight">
                Klares Wasser.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">
                  Für unsere Region.
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-lg leading-relaxed font-light">
                Zuverlässig, umweltbewusst und nah am Bürger – seit über 30 Jahren Ihr Partner für Wasser und Abwasser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0067B0] mb-2">Was wir tun</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Unsere Leistungen</h2>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-10 h-1.5 bg-[#0067B0] rounded-full" />
                <span className="w-4 h-1.5 bg-[#0067B0]/30 rounded-full" />
                <span className="w-2 h-1.5 bg-[#0067B0]/15 rounded-full" />
              </div>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Kompetentes Serviceportfolio rund um Ihre Wasserversorgung und Abwasserentsorgung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {leistungen.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`absolute -right-12 -top-12 w-44 h-44 bg-gradient-to-br ${item.gradient} opacity-[0.06] rounded-full group-hover:opacity-[0.12] group-hover:scale-125 transition-all duration-500`} />

                <span className="self-start inline-block px-2.5 py-1 mb-5 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>

                <div
                  className={`rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  style={{ width: '52px', height: '52px' }}
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0067B0] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-8 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative bg-gradient-to-r from-[#00346A] to-[#0067B0] rounded-3xl px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-xl shadow-[#0067B0]/20">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full" />
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-400/10 rounded-full" />
            </div>
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300 mb-2">Einfach & digital</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">Zählerstand online melden</h3>
              <p className="text-blue-200 text-sm max-w-md">
                Sparen Sie Zeit – melden Sie Ihren aktuellen Wasserstand jederzeit bequem digital, ohne Wartezeit.
              </p>
            </div>
            <a
              href="https://zaehlerstand.dnwab.de/" // <-- HIER EXTERNEN LINK HINZUGEFÜGT
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 flex items-center gap-2.5 px-8 py-4 bg-white text-[#0067B0] font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
              Jetzt melden
            </a>
          </div>
        </div>
      </section>

      <section id="aktuelles" className="bg-white border-t border-slate-100 px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0067B0] mb-2">Neuigkeiten</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Aktuelles</h2>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-10 h-1.5 bg-[#0067B0] rounded-full" />
                <span className="w-4 h-1.5 bg-[#0067B0]/30 rounded-full" />
              </div>
            </div>
            <a
              href="/archiv"
              className="group flex items-center gap-2 text-[#0067B0] font-bold text-sm hover:text-[#004e87] transition-colors"
            >
              Alle Meldungen
              <span className="w-8 h-8 rounded-full bg-[#0067B0]/10 group-hover:bg-[#0067B0] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#0067B0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-5">
            {aktuelleNews.map((item, idx) => (
              <a
                href={`/archiv/${item.id}`}
                key={item.id}
                className={`group flex flex-col rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                  idx === 0
                    ? 'border-[#0067B0]/15 bg-[#f0f7ff]'
                    : 'border-slate-100 bg-slate-50 hover:bg-white'
                }`}
              >
                {idx === 0 && <div className="h-1 bg-gradient-to-r from-[#0067B0] to-[#00C2E0]" />}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${idx === 0 ? 'bg-[#0067B0]/10 text-[#0067B0]' : 'bg-slate-200 text-slate-600'}`}>
                      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </span>
                    {idx === 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">Aktuell</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0067B0] transition-colors leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow line-clamp-3">{item.excerpt}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#0067B0] font-semibold text-sm">
                    Weiterlesen
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:hidden space-y-3">
            {aktuelleNews.map((item, idx) => (
              <a
                href={`/archiv/${item.id}`}
                key={item.id}
                className="group flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-4 hover:border-[#0067B0]/30 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-1 self-stretch rounded-full shrink-0 ${idx === 0 ? 'bg-[#0067B0]' : 'bg-slate-200'}`} />
                <div className="flex-grow min-w-0">
                  <p className="text-xs font-semibold text-slate-400 mb-1">{item.date}</p>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0067B0] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-[#0067B0] shrink-0 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
            <a
              href="/archiv"
              className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 border-2 border-[#0067B0]/20 text-[#0067B0] text-sm font-bold rounded-2xl hover:bg-[#0067B0]/5 transition-colors"
            >
              Alle Meldungen anzeigen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
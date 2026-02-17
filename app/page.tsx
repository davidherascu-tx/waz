// app/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsData } from '@/data/news';

export default function Home() {
  const leistungen = [
    { title: "Trinkwasser", icon: "💧", desc: "Sichere Versorgung mit höchster Wasserqualität für jeden Haushalt." },
    { title: "Abwasser", icon: "♻️", desc: "Umweltgerechte Entsorgung und modernste Aufbereitungstechnik." },
    { title: "Wartung", icon: "🔧", desc: "Regelmäßige Prüfung und Instandhaltung unserer Netze und Anlagen." },
    { title: "Hausanschlüsse", icon: "🏠", desc: "Kompetente Planung und Verlegung direkt für Ihr Grundstück." },
    { title: "Abrechnung", icon: "📊", desc: "Transparente Tarife und unkomplizierte Zählerstandsmeldung." },
    { title: "24/7 Störungsdienst", icon: "🚨", desc: "Rund um die Uhr erreichbar bei Rohrbrüchen oder Notfällen." },
  ];

  const aktuelleNews = newsData.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] font-sans text-gray-800 pt-24 md:pt-32">
      
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="relative w-[95%] md:w-[90%] h-[50vh] min-h-[400px] max-h-[600px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl mb-24 group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover transform transition-transform duration-[10000ms] group-hover:scale-110"
        >
          <source src="/wassertropfen.mp4" type="video/mp4" />
        </video>
        <div className="absolute z-10 w-full h-full bg-gradient-to-r from-[#0067B0]/90 via-[#0067B0]/60 to-transparent"></div>
        <div className="relative z-20 h-full flex flex-col items-start justify-center px-8 md:px-20 max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30 animate-pulse">
            Willkommen beim WAZ Blankenfelde-Mahlow
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Klares Wasser. <br />
            <span className="text-blue-100">Für unsere Region.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl drop-shadow-md">
            Zuverlässig, umweltbewusst und immer nah am Bürger.
          </p>
        </div>
      </section>

      {/* --- LEISTUNGEN (Wieder im hellen, sauberen Design) --- */}
      <section id="leistungen" className="w-[90%] max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Unsere Leistungen</h2>
            <div className="w-20 h-1.5 bg-[#0067B0] rounded-full"></div>
          </div>
          <p className="text-gray-500 max-w-md text-lg">
            Entdecken Sie unser umfassendes Serviceangebot rund um Ihre Wasserversorgung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leistungen.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0067B0]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0067B0]/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#0067B0] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0067B0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0067B0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- AKTUELLES --- */}
      <section id="aktuelles" className="bg-white py-24 border-t border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Aktuelles</h2>
              <div className="w-20 h-1.5 bg-[#0067B0] rounded-full"></div>
            </div>
            <a 
              href="/archiv" 
              className="group flex items-center gap-2 text-[#0067B0] font-bold text-lg hover:text-[#004e87] transition-colors"
            >
              Zum News-Archiv 
              <span className="bg-[#0067B0]/10 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                &rarr;
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aktuelleNews.map((item) => (
              <a 
                href={`/archiv/${item.id}`} 
                key={item.id} 
                className="group flex flex-col bg-slate-50 rounded-3xl p-8 hover:bg-[#0067B0] transition-colors duration-300 shadow-sm hover:shadow-xl border border-gray-100"
              >
                <div className="inline-block px-4 py-2 rounded-xl bg-white text-[#0067B0] font-bold text-sm mb-6 shadow-sm w-fit group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none transition-all">
                  📅 {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow group-hover:text-blue-100 transition-colors line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto font-bold text-[#0067B0] group-hover:text-white flex items-center gap-2">
                  Weiterlesen 
                  <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
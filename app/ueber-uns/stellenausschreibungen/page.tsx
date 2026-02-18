// app/ueber-uns/stellenausschreibungen/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StellenausschreibungenPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0067B0] mb-6 leading-tight">
            Stellenausschreibungen
          </h1>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-4xl">
            🤝
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Aktuell keine offenen Stellen
          </h2>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Derzeit haben wir leider keine offenen Stellen zu besetzen. 
            Schauen Sie gerne zu einem späteren Zeitpunkt wieder vorbei.
          </p>
        </section>

      </div>

      <Footer />
    </main>
  );
}
// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-300 relative overflow-hidden mt-auto border-t-8 border-[#0067B0]">
      {/* Subtiler Deko-Leuchteffekt im Hintergrund */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0067B0]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Spalte 1: Branding & Kontakt */}
          <div className="flex flex-col">
            <div className="bg-white/95 backdrop-blur p-4 rounded-2xl w-fit mb-8 shadow-lg">
              <img src="/waz_logo.webp" alt="WAZ Logo" className="h-10 w-auto" />
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              <strong className="text-white block text-base mb-1">WAZ Blankenfelde-Mahlow</strong>
              Glasower Damm 92<br />
              15827 Blankenfelde-Mahlow
            </p>
            
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#0067B0]">📞</span>
                <span className="text-gray-300">03379 3768-60</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#0067B0]">📠</span>
                <span className="text-gray-300">03379 3768-03</span>
              </div>
            </div>
          </div>

          {/* Spalte 2: Bürgersprechstunde */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 flex items-center gap-3">
              <span className="bg-[#0067B0]/20 p-2 rounded-lg text-[#0067B0]">🕒</span> 
              Bürgersprechstunde
            </h4>
            <div className="border-l-2 border-[#0067B0]/30 pl-5 space-y-6">
              <div>
                <strong className="text-white block mb-1">Dienstag</strong>
                <span className="text-gray-400 text-sm">13:00 – 16:00 Uhr</span>
              </div>
              <div className="pt-2">
                <strong className="text-white block mb-1">Donnerstag</strong>
                <span className="text-gray-400 text-sm block">09:00 – 12:00 Uhr</span>
                <span className="text-gray-400 text-sm block">13:00 – 18:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Spalte 3: Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 flex items-center gap-3">
              <span className="bg-[#0067B0]/20 p-2 rounded-lg text-[#0067B0]">🔗</span> 
              Wichtige Links
            </h4>
            <ul className="space-y-4 text-sm mb-10">
              <li><Link href="/#leistungen" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><span className="text-[#0067B0] group-hover:translate-x-1 transition-transform">&rarr;</span> Formulare & Anträge</Link></li>
              <li><Link href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><span className="text-[#0067B0] group-hover:translate-x-1 transition-transform">&rarr;</span> Zählerstand melden</Link></li>
              <li><Link href="/archiv" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"><span className="text-[#0067B0] group-hover:translate-x-1 transition-transform">&rarr;</span> News-Archiv</Link></li>
            </ul>
            
            <h4 className="text-gray-500 text-xs font-bold mb-4 uppercase tracking-widest">Rechtliches</h4>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="#" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link href="#" className="hover:text-white transition-colors">Satzungen</Link>
            </div>
          </div>

          {/* Spalte 4: Störungsmeldung (Premium Card) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-red-900/20 to-transparent border border-red-500/20 p-6 rounded-3xl relative overflow-hidden group hover:border-red-500/40 transition-all">
              {/* Pulsierender roter Punkt */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.7)]"></div>
              
              <div className="bg-white/95 p-3 rounded-xl inline-block mb-6 shadow-sm">
                <img src="/DNWAB_Logo.webp" alt="DNWAB Logo" className="h-8 w-auto" />
              </div>

              <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">
                Im Havariefall
              </h4>
              <p className="text-white text-lg font-semibold mb-4">Betriebsführer</p>
              
              <div className="inline-block bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1.5 rounded-lg mb-6 border border-red-500/20">
                24/7 RUND UM DIE UHR
              </div>
              
              <a 
                href="tel:08008807088" 
                className="block text-2xl lg:text-3xl font-black text-white hover:text-red-400 transition-colors tracking-tight"
              >
                0800 8807088
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} WAZ Blankenfelde-Mahlow. Alle Rechte vorbehalten.</span>
          <span className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Impressum</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
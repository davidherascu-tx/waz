// components/Footer.tsx
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a192f] to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0067B0]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative">
        {/* Top Blue Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#0067B0] to-transparent"></div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Spalte 1: Branding & Kontakt */}
            <div className="lg:col-span-4">
              <div className="inline-block bg-white/95 backdrop-blur-sm p-4 rounded-2xl mb-6 shadow-xl shadow-[#0067B0]/20">
                <img src="/waz_logo.webp" alt="WAZ Logo" className="h-12 w-auto" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-2">
                WAZ Blankenfelde-Mahlow
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ihr zuverlässiger Partner für Wasser- und Abwasserversorgung seit über 30 Jahren.
              </p>

              <div className="space-y-4">
                {/* Adresse */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0067B0]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-300">Glasower Damm 92</p>
                    <p className="text-gray-400">15827 Blankenfelde-Mahlow</p>
                  </div>
                </div>

                {/* Telefon */}
                <a href="tel:033793768-60" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0067B0]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold group-hover:text-[#0067B0] transition-colors">03379 3768-60</p>
                    <p className="text-gray-400 text-xs">Telefon</p>
                  </div>
                </a>

                {/* Telefax */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0067B0]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-semibold group-hover:text-[#0067B0] transition-colors">03379 3768-03</p>
                    <p className="text-gray-400 text-xs">Telefax</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Spalte 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#0067B0] rounded-full"></span>
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Zählerstand melden', href: '/service/zaehlerstand' },
                  { label: 'Formulare & Anträge', href: '/#leistungen' },
                  { label: 'Leitungsauskunft', href: '/service/leitungsauskunft' },
                  { label: 'Installateursuche', href: '/service/installateure' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 text-[#0067B0] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spalte 3: Informationen */}
            <div className="lg:col-span-3">
              <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0067B0]/50 transition-all hover:shadow-lg hover:shadow-[#0067B0]/10">
                <h5 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bürgersprechstunde
                </h5>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-12 h-12 rounded-xl bg-[#0067B0]/20 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">Di</span>
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-semibold">Dienstag</p>
                      <p className="text-gray-400">13:00 – 16:00 Uhr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-12 h-12 rounded-xl bg-[#0067B0]/20 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">Do</span>
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-semibold">Donnerstag</p>
                      <p className="text-gray-400">09:00 – 12:00 Uhr</p>
                      <p className="text-gray-400">13:00 – 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spalte 4: Notfall-Card */}
            <div className="lg:col-span-3">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-red-950/50 via-red-900/30 to-transparent border border-red-500/20 overflow-hidden group hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 transition-all">
                {/* Animated Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors"></div>
                
                {/* Pulse Indicator */}
                <div className="absolute top-4 right-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>

                <div className="relative">
                  <div className="inline-block bg-white/95 p-2.5 rounded-xl mb-4">
                    <img src="/DNWAB_Logo.webp" alt="DNWAB" className="h-7 w-auto" />
                  </div>

                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
                    24/7 Notdienst
                  </p>
                  <h4 className="text-white text-base font-bold mb-4">
                    Havariefall Betriebsführer
                  </h4>

                  <div className="space-y-3">
                    <a 
                      href="tel:08008807088"
                      className="block text-2xl font-black text-white hover:text-red-400 transition-colors tracking-tight"
                    >
                      0800 / 8807088
                    </a>
                    <p className="text-xs text-gray-400">
                      RUND UM DIE UHR
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Wasser- und Abwasserzweckverband Blankenfelde-Mahlow. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">Impressum</Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">Barrierefreiheit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// app/kontakt/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Kontakt & Sprechzeiten',
  description:
    'So erreichen Sie den WAZ Blankenfelde-Mahlow: Telefon, E-Mail, Anschrift, Bürgersprechstunde und der 24-Stunden-Havariedienst.',
  path: '/kontakt',
});

export default function KontaktPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 w-full flex-grow mb-24">
        
        {/* Header */}
        <header className="mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Kontakt</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Wir sind für Sie da
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Haben Sie Fragen zu Ihrer Abrechnung, zum Hausanschluss oder ein anderes Anliegen? 
            Hier finden Sie alle Informationen, um uns telefonisch, per E-Mail oder persönlich zu erreichen.
          </p>
        </header>

        {/* Info Grid - 3 Spalten Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Spalte 1: Zentrale & Anschrift */}
          <div className="flex flex-col gap-8">
            {/* Anschriften-Box */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Anschrift & Sitz
              </h3>
              <div className="text-slate-600 leading-relaxed space-y-1">
                <p className="font-bold text-slate-900 text-lg">WAZ Blankenfelde-Mahlow</p>
                <p>Glasower Damm 92</p>
                <p>15827 Blankenfelde-Mahlow</p>
              </div>
            </div>

            {/* Kontakt-Box */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Erreichbarkeit
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                  <span className="text-slate-500 text-sm">Telefon:</span>
                  <a href="tel:03379376860" className="font-bold text-[#0067B0] hover:underline">(0 33 79) 37 68 60</a>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                  <span className="text-slate-500 text-sm">Telefax:</span>
                  <span className="font-semibold text-slate-800">(0 33 79) 37 68 03</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">E-Mail:</span>
                  <a href="mailto:info@waz-bm.de" className="font-bold text-[#0067B0] hover:underline">info@waz-bm.de</a>
                </div>
              </div>
            </div>
          </div>

          {/* Spalte 2: Sprechzeiten */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0067B0]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Bürgersprechstunden
            </h3>
            <div className="space-y-6 flex-grow">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-slate-900">Dienstag</span>
                  <span className="px-3 py-1 bg-white rounded-lg text-[#0067B0] text-xs font-black uppercase shadow-sm">Nachmittag</span>
                </div>
                <p className="text-slate-600 text-xl font-medium">13:00 – 16:00 Uhr</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-slate-900">Donnerstag</span>
                  <span className="px-3 py-1 bg-white rounded-lg text-[#0067B0] text-xs font-black uppercase shadow-sm">Ganztägig</span>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600 text-xl font-medium">09:00 – 12:00 Uhr</p>
                  <p className="text-slate-600 text-xl font-medium">13:00 – 18:00 Uhr</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-slate-400 italic text-center">
              Gerne können Sie auch außerhalb dieser Zeiten einen individuellen Termin vereinbaren.
            </p>
          </div>

          {/* Spalte 3: Notfall / Havarie */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-3xl border border-red-500 shadow-lg shadow-red-200 relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute -right-10 -top-10 text-white opacity-10 group-hover:scale-110 transition-transform duration-700">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-white p-3 rounded-2xl mb-8 shadow-md">
                  <Image src="/DNWAB_Logo.webp" alt="DNWAB Logo" width={140} height={40} className="h-10 w-auto" />
                </div>
                
                <p className="text-red-100 text-xs font-black uppercase tracking-[0.2em] mb-2">24h Bereitschaftsdienst</p>
                <h3 className="text-2xl font-black text-white mb-6 leading-tight">Havariefall & Störungen</h3>
                
                <p className="text-red-50 text-sm mb-8 leading-relaxed font-medium">
                  In dringenden Notfällen oder bei Havarien (z.B. Rohrbruch) außerhalb der Geschäftszeiten erreichen Sie unseren Betriebsführer DNWAB rund um die Uhr:
                </p>
              </div>

              <div className="relative z-10">
                <a 
                  href="tel:08008807088" 
                  className="block w-full bg-white text-red-600 text-center py-5 rounded-2xl font-black text-2xl shadow-xl hover:bg-red-50 transition-all hover:-translate-y-1 active:scale-95"
                >
                  0800 / 88 070 88
                </a>
                <p className="text-center text-red-100 text-[10px] mt-4 font-bold tracking-widest uppercase">Kostenlose Notrufnummer</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
// app/not-found.tsx
// Eigene 404-Seite. Wichtig für SEO: Google sieht einen echten 404-Status
// statt einer leeren Standardseite und entfernt tote Links aus dem Index.
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: 'Die aufgerufene Seite existiert nicht oder wurde verschoben.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 w-full flex-grow mb-24">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-100 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0067B0] mb-3">
            Fehler 404
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Diese Seite gibt es nicht
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-10">
            Die aufgerufene Adresse existiert nicht oder wurde verschoben. Über die
            folgenden Links finden Sie schnell zurück.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0067B0] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#004e87] transition-colors"
            >
              Zur Startseite
            </Link>
            <Link
              href="/archiv"
              className="inline-flex items-center gap-2 bg-blue-50 text-[#0067B0] font-bold px-6 py-3 rounded-xl hover:bg-blue-100 transition-colors"
            >
              Aktuelles
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-50 text-[#0067B0] font-bold px-6 py-3 rounded-xl hover:bg-blue-100 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

'use client';

// app/error.tsx
// Auffangnetz für unerwartete Fehler: Besucher sehen eine verständliche Seite
// mit Notfallnummer statt eines leeren Bildschirms.
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unerwarteter Fehler:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans text-gray-800 px-6">
      <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-100 text-center max-w-xl w-full">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0067B0] mb-3">
          Technischer Fehler
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
          Da ist etwas schiefgelaufen
        </h1>
        <p className="text-slate-600 mb-8">
          Bitte versuchen Sie es erneut. Bei einem Havariefall erreichen Sie unseren
          Notdienst rund um die Uhr unter{' '}
          <a href="tel:+498008807088" className="font-bold text-[#0067B0] hover:underline">
            0800 / 8807088
          </a>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 bg-[#0067B0] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#004e87] transition-colors"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-50 text-[#0067B0] font-bold px-6 py-3 rounded-xl hover:bg-blue-100 transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}

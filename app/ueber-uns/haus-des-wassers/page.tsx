// app/ueber-uns/haus-des-wassers/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HausDesWassersPage() {
  const [showDark, setShowDark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDark((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      {/* HIER DIE ÄNDERUNG: 
          max-w-6xl entspricht ca. 1150px. 
          Das ist deutlich breiter als vorher (900px), aber kompakter als die volle Breite (1400px).
      */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0067B0] mb-8 leading-tight">
            Haus des Wassers
          </h1>

          {/* Der Bild-Slider */}
          <div className="relative w-full aspect-[850/270] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
            <img 
              src="/waz_slider_hell_850.jpg" 
              alt="Haus des Wassers bei Tag" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img 
              src="/waz_slider_dunkel_850.jpg" 
              alt="Haus des Wassers bei Nacht" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                showDark ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute bottom-4 right-6 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium pointer-events-none">
              {showDark ? 'Ansicht: Nacht' : 'Ansicht: Tag'}
            </div>
          </div>
        </header>

        {/* Text Sektion */}
        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Wasser und Schönheit im Universum
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify hyphens-auto">
            <p>
              Große Philosophen, Dichter und Künstler haben zu allen Zeiten bildhaft-poetisch vermittelt, 
              dass Schönheit der Natur und des Lebens im Mittelpunkt menschlicher Existenz stehen. 
              Die Wissenschaft hat dazu jüngst entdeckt, dass es einen genetisch vorgeprägten Sinn für 
              Schönheit gibt – bei allen Menschen, in allen Kulturen.
            </p>
            <p>
              Ästhetik, Harmonie und Maß – schöne Gefühle – sind in uns und sind Antrieb für Vieles. 
              Maßstab für Schönes ist die uns umgebende sichtbare Natur in all ihren Facetten. 
              Das Wasser in all seiner Natürlichkeit und Nützlichkeit ist dabei auch Inbegriff des Klaren und Schönen. 
              Dieser Maßstab hat sich geweitet und bestätigt, seit es die phänomenalen Aufnahmen aus den Tiefen 
              des Universums gibt, die uns das Hubble-Teleskop zeigt. Nun wird offenbar, wie harmonisch 
              Micro-und Macrokosmos, Natur und Mensch, verbunden sind – im Bilde sind – und eine ästhetische Einheit bilden.
            </p>
            <p>
              Dies im Haus des Wassers zu zeigen, war ein Ziel der Gesamtgestaltung. Die Anlage des Gebäudes in 
              seiner funktionellen Ordnung, kulturell verwurzelten Farbigkeit und poetisch-transparenten Glasfront, 
              dient diesem Ziel – der sichtbaren Schönheit des Lebens und des Wassers.
            </p>
            <p className="font-medium text-slate-800">
              Bilder des uns umgebenden grandiosen Universums verschmelzen mit den „Ikonen des Schönen“ 
              menschlichen Schaffens und der Kunst zu einer Ästhetik von Geschichte und Gegenwart im unendlichen Raum.
            </p>
            <p className="text-sm text-slate-400 mt-8 italic">
              formbund® 2009
            </p>
          </div>
        </article>

        {/* PDF Sektion */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0067B0]">
              Broschüre ansehen
            </h2>
            <a 
              href="/ueber-uns/haus_des_wassers.pdf" 
              target="_blank" 
              className="text-sm font-semibold text-slate-500 hover:text-[#0067B0] flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              PDF Download
            </a>
          </div>

          <div className="w-full h-[800px] bg-slate-200 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-inner">
            <iframe 
              src="/ueber-uns/haus_des_wassers.pdf#view=FitH" 
              className="w-full h-full" 
              title="Broschüre Haus des Wassers"
            />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
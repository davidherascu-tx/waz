// app/kontakt/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // WICHTIG: Referenz zum Formular sofort sichern, bevor asynchrone Aufgaben starten!
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      // Wir lesen die echte Server-Antwort aus
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        formElement.reset(); // Jetzt funktioniert das Leeren fehlerfrei!
      } else {
        console.error("Server hat Fehler gemeldet:", result.error);
        setStatus('error');
      }
    } catch (error) {
      console.error("Netzwerkfehler:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Kontakt</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Treten Sie mit uns in Kontakt
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Haben Sie Fragen zu Ihrer Abrechnung, zum Hausanschluss oder einem anderen Anliegen? 
            Nutzen Sie unser Kontaktformular oder rufen Sie uns während unserer Sprechzeiten an.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Schreiben Sie uns eine Nachricht</h2>
            
            {/* Erfolgsmeldung */}
            {status === 'success' && (
              <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
                <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-1">Nachricht erfolgreich versendet!</h3>
                  <p className="text-emerald-700 text-sm">Vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                </div>
              </div>
            )}

            {/* Fehlermeldung */}
            {status === 'error' && (
              <div className="mb-8 p-5 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-start gap-3 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
                <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fehler beim Senden</h3>
                  <p className="text-red-700 text-sm">Entschuldigung, Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal oder rufen Sie uns direkt an.</p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name / Firma *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all"
                    placeholder="Max Mustermann"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="kundennummer" className="block text-sm font-bold text-slate-700 mb-2">Kundennummer (falls zur Hand)</label>
                  <input 
                    type="text" 
                    id="kundennummer"
                    name="kundennummer" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all"
                    placeholder="12345678"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">E-Mail-Adresse *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all"
                    placeholder="mail@beispiel.de"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-bold text-slate-700 mb-2">Telefonnummer</label>
                  <input 
                    type="tel" 
                    id="telefon"
                    name="telefon" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all"
                    placeholder="Für eventuelle Rückfragen"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="betreff" className="block text-sm font-bold text-slate-700 mb-2">Betreff *</label>
                <input 
                  type="text" 
                  id="betreff"
                  name="betreff" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all"
                  placeholder="Ihr Anliegen kurz zusammengefasst"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="nachricht" className="block text-sm font-bold text-slate-700 mb-2">Ihre Nachricht *</label>
                <textarea 
                  id="nachricht"
                  name="nachricht" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all resize-y"
                  placeholder="Wie können wir Ihnen helfen?"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Dateiupload */}
              <div>
                <label htmlFor="dateianhang" className="block text-sm font-bold text-slate-700 mb-2">Dateien hochladen (optional)</label>
                <input 
                  type="file" 
                  id="dateianhang"
                  name="dateianhang" 
                  multiple
                  className="w-full text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0067B0]/20 focus:border-[#0067B0] transition-all
                  file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-[#0067B0] hover:file:bg-blue-100 cursor-pointer"
                  disabled={isSubmitting}
                />
                <p className="mt-2 text-xs text-slate-500">Erlaubte Formate: PDF, JPG, PNG (max. 10 MB)</p>
              </div>

              {/* Datenschutz-Link */}
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="datenschutz" 
                  className="mt-1 w-5 h-5 text-[#0067B0] border-slate-300 rounded focus:ring-[#0067B0]"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="datenschutz" className="text-sm text-slate-600 leading-relaxed">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage gemäß der <a href="/datenschutz" className="text-[#0067B0] font-semibold hover:underline" target="_blank">Datenschutzerklärung</a> erhoben und verarbeitet werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#0067B0] hover:bg-[#004e87] disabled:bg-[#0067B0]/60 text-white font-bold rounded-xl transition-all shadow-md shadow-[#0067B0]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht absenden'}
              </button>
            </form>
          </div>

          {/* Rechte Spalte: Kontaktdaten */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Notdienst-Box */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-6 rounded-3xl border border-red-200 shadow-sm relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-red-500 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-red-700 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  24h Bereitschaftsdienst
                </h3>
                <p className="text-red-900/80 mb-3 font-medium">In dringenden Notfällen oder bei Havarien außerhalb der Geschäftszeiten (Betriebsführer DNWAB):</p>
                <a href="tel:08008807088" className="inline-block text-2xl font-black text-red-600 hover:text-red-800 transition-colors tracking-tight">
                  0800 / 88 070 88
                </a>
              </div>
            </div>

            {/* Allgemeine Kontakt-Box */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Telefon & E-Mail
                </h3>
                <div className="space-y-3 text-slate-600">
                  <p className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Telefon:</span>
                    <a href="tel:03379376860" className="font-bold text-[#0067B0] hover:underline">(0 33 79) 37 68 60</a>
                  </p>
                  <p className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Telefax:</span>
                    <span className="font-semibold text-slate-800">(0 33 79) 37 68 03</span>
                  </p>
                  <p className="flex justify-between items-center pb-1">
                    <span>E-Mail:</span>
                    <a href="mailto:info@waz-bm.de" className="font-bold text-[#0067B0] hover:underline">info@waz-bm.de</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bürgersprechstunden
                </h3>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-slate-700 border border-slate-100">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold">Dienstag</span>
                    <span className="text-right">13:00 – 16:00 Uhr</span>
                  </div>
                  <div className="h-px w-full bg-slate-200"></div>
                  <div className="flex justify-between items-start">
                    <span className="font-semibold">Donnerstag</span>
                    <span className="text-right">09:00 – 12:00 Uhr<br/>13:00 – 18:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Anschriften-Box */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Anschrift (Sitz)
              </h3>
              
              <div className="text-slate-600 leading-relaxed">
                <p>
                  Wasser- und Abwasserzweckverband<br/>
                  Blankenfelde-Mahlow (WAZ)<br/>
                  Glasower Damm 92<br/>
                  15827 Blankenfelde-Mahlow
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
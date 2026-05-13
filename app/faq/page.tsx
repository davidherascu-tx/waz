// app/faq/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Typ-Definition für ein einzelnes FAQ-Element
type FAQ = {
  question: string;
  answer: React.ReactNode;
};

// Typ-Definition für eine FAQ-Kategorie
type FAQCategory = {
  category: string;
  items: FAQ[];
};

const faqs: FAQCategory[] = [
  {
    category: "Allgemeine Fragen zum Smartmeter",
    items: [
      {
        question: "Welche Vorteile hat der Smartmeter?",
        answer: "Die Genauigkeit des Smartmeters liegt um ein Vielfaches über der Genauigkeit der bisher verbauten mechanischen Zähler. Der Smartmeter misst bereits Wasserverbräuche von 1 – 2 Liter in der Stunde. Da es keine mechanischen Teile gibt, ist der Verschleiß minimiert, die Messtechnik (Ultraschall) viel präziser. Das Nachlaufen eines herkömmlichen Zählers ist bei Smartmetern nicht mehr möglich. Für Sie entfallen Koordinierungsaufwand und Termine, an denen Sie sich sonst zum Zähler-Ablesen Zeit nehmen mussten. Auch ein Abstieg in Wasserzählerschächte gehört dann der Vergangenheit an. Aufgrund der möglichen Eichfristverlängerung auf 12 Jahre und dem reduzierten Aufwand bei der Ablesung ergeben sich Kostenvorteile und Zeitersparnis."
      },
      {
        question: "Kann ich auch schon einen Zähler haben, obwohl ich erst in 2-5 Jahren mit dem Turnuswechsel dran bin?",
        answer: "Die Zähler sind einem bestimmten Abrechnungsgebiet zugeordnet. Sofern in Ihrem Abrechnungsgebiet die Zählerwechslung erfolgen soll, erhalten auch Sie einen Smartmeter, unabhängig davon, wann die Eichfrist Ihres jetzigen Zählers abläuft."
      },
      {
        question: "Was passiert mit den Gartenwasserzählern?",
        answer: "Der Gartenzähler steht in Ihrem Eigentum. Daher obliegt Ihnen die Auswahl sowie die Organisation der rechtzeitigen Auswechslung des Gartenwasserzählers. Die Zählerstandsmitteilung für die Abrechnung erfolgt weiterhin per Ablesekarte oder Internet."
      },
      {
        question: "Ich weigere mich einen Funkzähler zu haben. Kann ich bei dem Einbau auf einen herkömmlichen Zähler bestehen?",
        answer: "Nein, das Funkmodul kann aber im begründeten Ausnahmefall ausgeschaltet werden. Dies ist aber nur mit Zusatzkosten möglich. Sie müssen hier keine Bedenken haben und können den Smartmeter einbauen lassen."
      },
      {
        question: "Welche Nachteile hat der Smartmeter?",
        answer: "Der Smartmeter besitzt höhere Investitionskosten als der herkömmliche Zähler. Der Smartmeter kann aber länger im Betrieb bleiben und wird daher wieder über die Jahre gesehen „günstiger“."
      }
    ]
  },
  {
    category: "Technik, Funktion & Sicherheit",
    items: [
      {
        question: "Wie funktioniert der Smartmeter?",
        answer: "Die Messung des Wasserverbrauchs in einem Smartmeter funktioniert mittels Ultraschall. Mit der Geschwindigkeit kann über den Rohrquerschnitt das verbrauchte Volumen genau bestimmt werden."
      },
      {
        question: "Wieviel genauer messen die Zähler?",
        answer: "Die Genauigkeit des Smartmeters liegt um ein Vielfaches über der Genauigkeit der bisherigen mechanischen Zähler. Die Zähler messen bereits Wasserverbräuche von 1-2 l/h. Das liegt an der präziseren Messtechnik. Auch ist der Verschleiß minimiert, da es keine mechanischen Teile gibt."
      },
      {
        question: "Wie lese ich den Zähler ab?",
        answer: "Die Ablesung erfolgt folgendermaßen: Den im Normalzustand geschlossenen Deckel öffnen. Über den mittig unter dem Display angeordneten Schalter kann das Display durchgeschaltet werden. Nacheinander erscheinen bei jeder Berührung (aktueller Zählerstand, aktueller Durchfluss, ein Anzeigetest (Display AN und Display AUS wechselt alle 2 Sekunden), Fehlercodes, Softwareversion und das Datum, bis wann die Batterie hält. Die Anzeige für Zählerstand und Durchfluss enthält 3 Nachkommastellen. Für die Abrechnung wird nur der Verbrauch vor dem Komma (also ganze Kubikmeter) berechnet."
      },
      {
        question: "Wie lange speichert der Zähler die Daten?",
        answer: "Der Smartmeter besitzt einen festen internen Speicher. Zur optimalen Nutzung überschreibt er kontinuierlich die ältesten Daten mit neuen. Die Daten werden maximal für 1000 Tage im Zähler gespeichert und dann wieder überschrieben. Per Funk wird nur ein Bruchteil der Daten übertragen."
      },
      {
        question: "Wie lange hält der Akku? Muss ich den Akku ggf. wechseln?",
        answer: "Der Akku hält ca. 15 Jahre. Da nach 12 Jahren ein Ausbau geplant ist, ist kein Akkuwechsel notwendig."
      },
      {
        question: "Sind die Zähler frostsicher?",
        answer: "Die Smartmeter sind wie die bisherigen Zähler nicht frostsicher. Vor dem Einbau muss gewährleistet sein, dass keine Frostgefahr besteht. Die Sicherstellung des frostfreien Einbaus ist eine wichtige Kundenaufgabe, die weiterhin gewährleistet werden muss."
      },
      {
        question: "In meinem Zählerschacht steht Wasser. Verträgt der Zähler das?",
        answer: "Der Smartmeter ist trotz der Messtechnik und der Lithium-Batterie komplett wasserdicht. Einem Einbau im Zählerschacht steht nichts im Wege. Bitte treten Sie beim Ausstieg nicht auf den Zähler; das verträgt er nicht."
      },
      {
        question: "Sind die Zähler auf mikrobiologische Verunreinigungen untersucht?",
        answer: "Die Zähler werden im Rahmen der Beschaffung genauso intensiv, wie die bisherigen mechanischen Zähler, auf mikrobiologische Belastungen untersucht. Aufgrund der Geometrie des Messrohres und der geringen wasserbenetzten Fläche sind hier keine Probleme zu befürchten."
      },
      {
        question: "Kann jemand den Wasserzähler von außen verstellen/hacken?",
        answer: "Das Beeinflussen der Messungen und der gespeicherten Daten ist über Funk technisch unmöglich. Smartmeter sind durch eine Verschlüsselung kodiert. Die Daten werden mit einem zufällig generierten Schlüssel gesichert, damit Hacker kein Muster erkennen können. Eine Entschlüsselung der Daten ist letztlich nur über das Kennwort möglich, mit dem die Daten verschlüsselt wurden. Dieses ist nur in den Ablesegeräten der DNWAB hinterlegt."
      },
      {
        question: "Kann jetzt jeder meinen Wasserverbrauch sehen?",
        answer: "Nein, das Funksignal des Zählers ist verschlüsselt. Die Entschlüsselung erfolgt ausschließlich auf den Rechnern der DNWAB. Die Wahrscheinlichkeit, dass jemand Ihren Zählerstand einsehen kann, ist mindestens genauso gering, wie bei den bisher bekannten Verfahren Interneteingabe und Selbstablesekartensystem."
      },
      {
        question: "Kann ich mir den Zählerstand auf Handy/Computer liefern lassen?",
        answer: "Nein, diese Möglichkeit bietet der Zähler aufgrund seines hohen Sicherheitsstandards nicht. Das Funksignal ist verschlüsselt und die Entschlüsselung ist nur in den Rechnern der DNWAB als Betriebsführungsgesellschaft Ihres Wasserversorgers möglich."
      },
      {
        question: "Werden die Datenschutzrichtlinien mit dem neuen Smartmeter eingehalten?",
        answer: "Beim Einbau der Smartmeter werden selbstverständlich die datenschutzrechtlichen Belange eingehalten. Eine Verbrauchsprofilerstellung ist nicht möglich. Vor einer evtl. Speicherauslesung direkt am Zähler (funktioniert nicht über Funk) würde auf jeden Fall Ihre Zustimmung eingeholt werden."
      },
      {
        question: "Ich habe Angst vor der Funkstrahlung? Ist das gefährlich?",
        answer: (
          <div className="space-y-4">
            <p>
              Aufgrund der relativ geringen Sendeleistung und hohen Abstände sind unseres Ermessens nach keine gesundheitlichen Beeinträchtigungen zu befürchten. Für die Funkübertragung von Zählerdaten gelten internationale Regeln. Nach diesen darf ein Zähler für maximal 50 Sekunden pro Tag aktiv sein. Schnurlostelefone, Mobiltelefone oder WLAN-Router, die selbst im Standby-Modus mit deutlich größerer Leistung senden, wirken dagegen mehrere Stunden – wenn nicht rund um die Uhr auf ihre Umgebung ein.
            </p>
            <div className="my-6">
              <img src="/images/hydrus.png" alt="Vergleich Funkleistung Hydrus" className="max-w-full h-auto rounded-lg border border-slate-200" />
            </div>
            <p>
              Die Stärke elektromagnetischer Felder nimmt mit zunehmender Entfernung zur Quelle rapide ab. So beträgt die sogenannte Dämpfung selbst im freien Raum schon in einem Meter Entfernung ca. 31 Dezibel (dB). Bereits 3 dB bedeuten aber schon eine Halbierung der Sendeleistung. Bei einem Abstand von einem Meter zum Zähler besteht nur noch ein Zehntel der ursprünglichen Sendeleistung. Typischerweise beträgt der Abstand zwischen Hausbewohner und Zähler ein Vielfaches davon – mit Wänden und Decken im Übertragungsweg, die eine deutlich größere Dämpfung bewirken, als der freie Raum. Mobil- und Schnurlostelefone hingegen werden nahe am Körper des Nutzers eingesetzt.
            </p>
          </div>
        )
      }
    ]
  },
  {
    category: "Abrechnung, Ablesung & Kosten",
    items: [
      {
        question: "Ist der nicht viel teurer als die alten Zähler?",
        answer: "Die Smartmeter sind in der Anschaffung zunächst teurer als die herkömmlichen mechanischen Zähler. Aufgrund einer möglichen Eichfristverlängerung auf 12 Jahre entfällt jedoch der Material- und Personaleinsatz beim Kundentermin zum Zählerwechsel nach 6 Jahren. Das spart Kosten und entlastet auch Sie als Kunde. Auch entsteht ein reduzierter Aufwand bei der Ablesung und Übertragung der Zählerstände in die Verbrauchsabrechnungssoftware, der zu weiteren Kostenvorteilen führt."
      },
      {
        question: "Welche Einbaukosten kommen auf mich als Kunde zu? Was entstehen für laufende Kosten?",
        answer: "Dem Kunden entstehen durch den Einbau von Smartmetern keine zusätzlichen Kosten. Wir haben uns für die Umstellung auf Smartmeter entschieden, weil wir langfristig auf 12 Jahre betrachtet eine Kosteneinsparung erwarten."
      },
      {
        question: "Welche Informationen werden vom Smartmeter erfasst?",
        answer: "Durchfluss (Fließgeschwindigkeit), Wasser- und Lufttemperatur, Zählerstände zum Monats- und Jahresende, Fehler im Betrieb (z.B. Manipulation)."
      },
      {
        question: "Wann lest ihr den Zähler ab? / Erfolgt im Vorfeld eine Information?",
        answer: "Der Zähler wird einmal im Jahr für die Verbrauchsabrechnung abgelesen. Da es zukünftig zwei Ablesefolgen (06 und 12) geben wird, wird auch um diesen Zeitraum herum die Ablesung erfolgen. Alle Daten der Ablesung finden sich im Gebührenbescheid wieder."
      },
      {
        question: "Wie oft im Jahr werden meine Daten abgelesen?",
        answer: "Die Ablesung erfolgt im Normalfall einmal im Jahr zum entsprechenden Abrechnungszeitraum."
      },
      {
        question: "Wird der Smartmeter nach 6 Jahren getauscht?",
        answer: "In der Regel sollen die Zähler erst nach 12 Jahren gewechselt werden, einige Stichproben für das Eichamt sind aber im Vorfeld nach 6 bzw. 9 Jahren erforderlich."
      },
      {
        question: "Ist die Möglichkeit der Befundprüfung gegeben, wenn ich mit dem Messergebnis nicht einverstanden bin?",
        answer: "Natürlich. Diese Möglichkeit bleibt in der bisherigen Form bestehen. Die Kosten sind, wie herkömmlich, nach dem Ergebnis der Befundprüfung zu tragen."
      }
    ]
  }
];

export default function FAQPage() {
  // Speichert den Index der aktuell geöffneten Frage im Format "KategorieIndex-FragenIndex"
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 w-full flex-grow mb-24">
        
        {/* Angepasster, linksbündiger Header (wie auf den anderen Seiten) - "Informationen > " entfernt */}
        <header className="mb-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Fragen & Antworten
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie detaillierte Antworten auf die häufigsten Fragen rund um die Einführung und Nutzung unserer neuen Smartmeter sowie allgemeine Themen.
          </p>
        </header>

        <div className="space-y-16">
          {faqs.map((category, catIndex) => (
            <section key={catIndex} className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Linke Spalte: Kategorie-Titel (Sticky) */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#0067B0] rounded-full hidden lg:block"></span>
                    {category.category}
                  </h2>
                </div>
              </div>

              {/* Rechte Spalte: Accordions */}
              <div className="lg:col-span-8 space-y-4">
                {category.items.map((faq, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  const isOpen = openItem === id;

                  return (
                    <div 
                      key={itemIndex} 
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isOpen ? 'border-[#0067B0] shadow-md' : 'border-slate-200 hover:border-[#0067B0]/50 hover:shadow-sm'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
                      >
                        <span className={`text-[17px] font-bold pr-4 transition-colors ${isOpen ? 'text-[#0067B0]' : 'text-slate-800'}`}>
                          {faq.question}
                        </span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-blue-50 text-[#0067B0]' : 'bg-slate-50 text-slate-400'
                        }`}>
                          <svg 
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 md:p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-1">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Support Box */}
        <div className="mt-20 relative overflow-hidden bg-gradient-to-br from-[#00346A] to-[#0067B0] rounded-3xl p-8 md:p-14 border border-blue-100 shadow-xl shadow-[#0067B0]/20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-white/5 rounded-full" />
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-sky-400/10 rounded-full" />
          </div>

          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-md text-white/90 text-xs font-semibold mb-5 border border-white/20 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Persönlicher Kontakt
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                Ihre Frage war nicht dabei?
              </h3>
              <p className="text-base md:text-lg text-blue-100 max-w-xl leading-relaxed">
                Kein Problem! Unser Kundenservice hilft Ihnen gerne persönlich bei Ihrem Anliegen weiter – telefonisch oder per E-Mail.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[280px]">
              <a
                href="tel:03379376860"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-white"
              >
                <span className="w-11 h-11 rounded-xl bg-blue-50 text-[#0067B0] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Telefon</span>
                  <span className="text-base font-bold text-[#0067B0] group-hover:text-[#004e87] transition-colors">(0 33 79) 37 68 60</span>
                </div>
              </a>

              <a
                href="mailto:info@waz-bm.de"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-lg shadow-black/15 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-white"
              >
                <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">E-Mail</span>
                  <span className="text-base font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">info@waz-bm.de</span>
                </div>
              </a>

              <a
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 mt-1 text-sm font-bold text-white/90 hover:text-white transition-colors focus:outline-none focus:underline"
              >
                Alle Kontaktdaten ansehen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
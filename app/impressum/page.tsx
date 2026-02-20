// app/impressum/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1000px] mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Impressum
          </h1>
        </header>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-12">
          
          {/* Angaben & Kontakt */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <address className="not-italic text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Wasser- und Abwasserzweckverband Blankenfelde-Mahlow</p>
                <p>Glasower Damm 92</p>
                <p>15827 Blankenfelde-Mahlow</p>
              </address>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Vertreten durch:</h3>
              <p className="text-slate-600">Antje Motz (Verbandsvorsteherin)</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span>Telefon:</span>
                  <a href="tel:+493379376860" className="font-semibold text-[#0067B0] hover:underline">+49 (0) 3379 3768-60</a>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span>Telefax:</span>
                  <span className="font-semibold text-slate-800">+49 (0) 3379 3768-03</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span>E-Mail:</span>
                  <a href="mailto:info@waz-bm.de" className="font-semibold text-[#0067B0] hover:underline">info@waz-bm.de</a>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Register & USt-IdNr & Datenschutz */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Registereintrag</h2>
                <p className="text-slate-600 leading-relaxed">
                  WAZ ist eine Körperschaft des öffentlichen Rechts und besitzt keine Registereinträge.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Umsatzsteuer</h2>
                <p className="text-slate-600 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <span className="font-semibold text-slate-800">DE167790524</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Datenschutz</h2>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Datenschutzbeauftragter des Wasser- und Abwasserzweckverbandes Blankenfelde-Mahlow:
              </p>
              <address className="not-italic text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Sebastian Hoffmann</p>
                <p>Glasower Damm 92</p>
                <p>15827 Blankenfelde-Mahlow</p>
                <p className="pt-3">
                  Tel: <a href="tel:033752568426" className="text-[#0067B0] hover:underline font-medium">03375-2568-426</a>
                </p>
                <p>FAX: 03375-295061</p>
                <p>
                  E-Mail: <a href="mailto:Datenschutz@DNWAB.de" className="text-[#0067B0] hover:underline font-medium">Datenschutz@DNWAB.de</a>
                </p>
              </address>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Rechtliche Hinweise */}
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Streitschlichtung</h2>
              <p className="text-slate-600 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Haftung für Inhalte</h2>
              <p className="text-slate-600 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Haftung für Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Urheberrecht</h2>
              <p className="text-slate-600 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="pt-4 text-sm text-slate-500">
              Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#0067B0]">https://www.e-recht24.de/impressum-generator.html</a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
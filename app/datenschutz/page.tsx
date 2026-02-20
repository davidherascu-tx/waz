// app/datenschutz/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-[1000px] mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Datenschutzerklärung
          </h1>
        </header>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-12">
          
          {/* Sektion 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Datenerfassung auf dieser Website</h3>
                <h4 className="font-semibold text-slate-700 mt-4 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                </p>

                <h4 className="font-semibold text-slate-700 mt-4 mb-1">Wie erfassen wir Ihre Daten?</h4>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h4 className="font-semibold text-slate-700 mt-4 mb-1">Wofür nutzen wir Ihre Daten?</h4>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="font-semibold text-slate-700 mt-4 mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p className="mt-2">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Analyse-Tools und Tools von Drittanbietern</h3>
                <p>
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="mt-2">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <address className="not-italic font-semibold text-slate-700 mb-4">
                  Wasser- und Abwasserzweckverbandes Blankenfelde-Mahlow<br />
                  Glasower Damm 92<br />
                  15827 Blankenfelde-Mahlow<br />
                  Telefon: 03375-2568426<br />
                  E-Mail: <a href="mailto:Datenschutz@DNWAB.de" className="text-[#0067B0] hover:underline">Datenschutz@DNWAB.de</a>
                </address>
                <p className="text-sm">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Datenschutzbeauftragter</h3>
                <address className="not-italic font-semibold text-slate-700">
                  Sebastian Hoffmann<br />
                  Glasower Damm 92<br />
                  15827 Blankenfelde-Mahlow<br />
                  Tel: 03375-2568426<br />
                  FAX: 03375-295061<br />
                  E-Mail: <a href="mailto:Datenschutz@DNWAB.de" className="text-[#0067B0] hover:underline">Datenschutz@DNWAB.de</a>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Speicherdauer</h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                <p>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
                <p>
                  Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              <div className="bg-slate-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                <p className="uppercase text-sm mb-4">
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                </p>
                <p className="uppercase text-sm">
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Recht auf Datenübertragbarkeit</h3>
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Auskunft, Löschung und Berichtigung</h3>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                <p>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p className="mt-2">
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              3. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Cookies</h3>
                <p>
                  Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                <p className="mt-2">
                  Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                <p className="mt-2">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                </p>
                <p className="mt-2">
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
                <p className="mt-2">
                  Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Server-Log-Dateien</h3>
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                <p className="mt-2">
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              4. Soziale Medien
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Facebook</h3>
                <p>
                  Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
                </p>
                <p className="mt-2">
                  Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
                </p>
                <p className="mt-2">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://de-de.facebook.com/privacy/explanation</a>.
                </p>
                <p className="mt-2">
                  Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
                </p>
                <p className="mt-2">
                  Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
                </p>
                <p className="mt-2">
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:<br/>
                  <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a><br/>
                  <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a><br/>
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://www.facebook.com/policy.php</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Twitter</h3>
                <p>
                  Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch die Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland.
                </p>
                <p className="mt-2">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Twitter-Server hergestellt. Twitter erhält dadurch Informationen über den Besuch dieser Website durch Sie. Durch das Benutzen von Twitter und der Funktion „Re-Tweet“ werden die von Ihnen besuchten Websites mit Ihrem Twitter-Account verknüpft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Twitter unter: <a href="https://twitter.com/de/privacy" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://twitter.com/de/privacy</a>.
                </p>
                <p className="mt-2">
                  Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
                </p>
                <p className="mt-2">
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>.
                </p>
                <p className="mt-2">
                  Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter <a href="https://twitter.com/account/settings" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://twitter.com/account/settings</a> ändern.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Instagram</h3>
                <p>
                  Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                </p>
                <p className="mt-2">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.
                </p>
                <p className="mt-2">
                  Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
                </p>
                <p className="mt-2">
                  Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
                </p>
                <p className="mt-2">
                  Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
                </p>
                <p className="mt-2">
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:<br/>
                  <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a><br/>
                  <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://help.instagram.com/519522125107875</a><br/>
                  <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a>.
                </p>
                <p className="mt-2">
                  Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://instagram.com/about/legal/privacy/</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Tumblr</h3>
                <p>
                  Diese Website nutzt Schaltflächen und sonstige Elemente des Dienstes Tumblr. Anbieter ist die Tumblr, Inc., 35 East 21st St, 10th Floor, New York, NY 10010, USA.
                </p>
                <p className="mt-2">
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Tumblr-Server hergestellt. Tumblr erhält dadurch Informationen über den Besuch dieser Website durch Sie.
                </p>
                <p className="mt-2">
                  Die Tumblr-Schaltflächen ermöglichen es Ihnen, einen Beitrag oder eine Seite bei Tumblr zu teilen oder dem Anbieter bei Tumblr zu folgen. Wenn Sie eine unserer Websites mit Tumblr-Button aufrufen, baut der Browser eine direkte Verbindung mit den Servern von Tumblr auf. Wir haben keinen Einfluss auf den Umfang der Daten, die Tumblr mit Hilfe dieses Plugins erhebt und übermittelt. Nach aktuellem Stand werden die IP-Adresse des Nutzers sowie die URL der jeweiligen Website übermittelt.
                </p>
                <p className="mt-2">
                  Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
                </p>
                <p className="mt-2">
                  Weitere Informationen hierzu finden sich in der Datenschutzerklärung von Tumblr unter: <a href="https://www.tumblr.com/privacy/de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://www.tumblr.com/privacy/de</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              5. Analyse-Tools und Werbung
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">WP Statistics</h3>
                <p>
                  Diese Website nutzt das Analysetool WP Statistics, um Besucherzugriffe statistisch auszuwerten. Anbieter ist Veronalabs, ARENCO Tower, 27th Floor, Dubai Media City, Dubai, Dubai 23816, UAE (<a href="https://veronalabs.com" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://veronalabs.com</a>).
                </p>
                <p className="mt-2">
                  Mit WP Statistics können wir die Nutzung unserer Website analysieren. WP Statistics erfasst dabei u. a. Logdateien (IP-Adresse, Referrer, verwendete Browser, Herkunft des Nutzers, verwendete Suchmaschine) und Aktionen, die die Websitebesucher auf der Seite getätigt haben (z. B. Klicks und Ansichten).
                </p>
                <p className="mt-2">
                  Die mit WP Statistics erfassten Daten werden ausschließlich auf unserem eigenen Server gespeichert.
                </p>
                <p className="mt-2">
                  Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot als auch unsere Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
              </div>
            </div>
          </section>

          {/* Sektion 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-100">
              6. Plugins und Tools
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">YouTube</h3>
                <p>
                  Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mt-2">
                  Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                </p>
                <p className="mt-2">
                  Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare Technologien zur Wiedererkennung verwenden (z. B. Device-Fingerprinting). Auf diese Weise kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen.
                </p>
                <p className="mt-2">
                  Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                </p>
                <p className="mt-2">
                  Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://policies.google.com/privacy?hl=de</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Google Fonts</h3>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="mt-2">
                  Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                </p>
                <p className="mt-2">
                  Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://policies.google.com/privacy?hl=de</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Font Awesome</h3>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6 Porter Road Apartment 3R, Cambridge, Massachusetts, USA.
                </p>
                <p className="mt-2">
                  Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte, Schriftarten und Symbole korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Font Awesome aufnehmen. Hierdurch erlangt Font Awesome Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                </p>
                <p className="mt-2">
                  Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerklärung von Font Awesome unter: <a href="https://fontawesome.com/privacy" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://fontawesome.com/privacy</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Google Maps</h3>
                <p>
                  Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mt-2">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="mt-2">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:<br/>
                  <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://privacy.google.com/businesses/gdprcontrollerterms/</a><br/>
                  <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline break-all">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
                </p>
                <p className="mt-2">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://policies.google.com/privacy?hl=de</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Google reCAPTCHA</h3>
                <p>
                  Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser Website. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mt-2">
                  Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.
                </p>
                <p className="mt-2">
                  Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.
                </p>
                <p className="mt-2">
                  Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="mt-2">
                  Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter folgenden Links: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://policies.google.com/privacy?hl=de</a> und <a href="https://policies.google.com/terms?hl=de" target="_blank" rel="noreferrer" className="text-[#0067B0] hover:underline">https://policies.google.com/terms?hl=de</a>.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" className="hover:underline">https://www.e-recht24.de</a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
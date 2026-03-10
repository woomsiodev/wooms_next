export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-8 md:px-20 lg:px-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <header className="mb-24">
          <h1 className="text-6xl font-light tracking-tight mb-4 uppercase text-[#01182D]">
            Datenschutzerklärung
          </h1>
          <p className="text-xl font-light opacity-50 italic text-[#01182D]">
            Schutz Ihrer persönlichen Daten ist uns wichtig
          </p>
        </header>

        {/* Content */}
        <div className="space-y-16 text-[#01182D]">

          {/* 1. Allgemeine Hinweise */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              1. Allgemeine Hinweise
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie unsere Website und unsere Apps besuchen bzw. nutzen. Personenbezogene Daten sind
                alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>
          </section>

          {/* 2. Datenerfassung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              2. Datenerfassung auf unserer Website und in unseren Apps
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p>
                Die Datenverarbeitung auf dieser Website und in unseren mobilen Anwendungen erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="font-medium opacity-90 pt-4">Wie erfassen wir Ihre Daten?</p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei der Registrierung für unsere
                Dienste angeben.
              </p>
              <p>
                Andere Daten werden automatisch beim Besuch der Website oder bei der Nutzung unserer Apps durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
                betreten oder unsere Apps verwenden.
              </p>
            </div>
          </section>

          {/* 3. Wofür nutzen wir Ihre Daten */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              3. Wofür nutzen wir Ihre Daten?
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website und unserer
                WMS-Anwendungen zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden, um unsere Dienste zu verbessern.
              </p>

              <p className="font-medium opacity-90 pt-4">Spezifische Datennutzung für WMS-Dienste:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Bereitstellung und Optimierung unserer Warehouse Management System (WMS) Funktionen</li>
                <li>Verbesserung der KI-gestützten Picking-Algorithmen</li>
                <li>Analyse der Lagerleistung und Effizienzsteigerung</li>
                <li>Synchronisation mit Shopify und anderen E-Commerce-Plattformen</li>
                <li>Retouren-Management und Qualitätskontrolle</li>
              </ul>
            </div>
          </section>

          {/* 4. Welche Rechte haben Sie */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              4. Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>
          </section>

          {/* 5. Verantwortliche Stelle */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              5. Verantwortliche Stelle
            </h2>
            <div className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website und in unseren Apps ist:
              </p>
              <p className="mb-4">
                <strong className="font-medium">wooms WMS GmbH</strong><br />
                Goerzallee 311<br />
                14167 Berlin<br />
                Deutschland
              </p>
              <p className="opacity-70 mb-2">
                Telefon:{' '}
                <a href="tel:+4917472118813" className="text-[#01182D] hover:text-[#D1B06B] transition-colors">
                  +49 174 721 18 13
                </a>
              </p>
              <p className="opacity-70 mb-6">
                E-Mail:{' '}
                <a
                  href="mailto:info@wooms.io"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors underline"
                >
                  info@wooms.io
                </a>
              </p>
              <p className="text-[16px] md:text-[18px] opacity-70">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen,
                E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>
          </section>

          {/* 6. Datenschutzbeauftragter */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              6. Datenschutzbeauftragter
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt.
              </p>
              <p className="font-medium opacity-90">
                Datenschutzbeauftragter<br />
                wooms WMS GmbH<br />
                E-Mail:{' '}
                <a
                  href="mailto:datenschutz@wooms.io"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors underline"
                >
                  datenschutz@wooms.io
                </a>
              </p>
            </div>
          </section>

          {/* 7. SSL-Verschlüsselung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </section>

          {/* 8. Server-Log-Dateien */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              8. Server-Log-Dateien
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
          </section>

          {/* 9. Kontaktformular */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              9. Kontaktformular
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf
                Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
                widerrufen.
              </p>
            </div>
          </section>

          {/* 10. Mobile App */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              10. Mobile App Datenverarbeitung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">Berechtigungen unserer mobilen WMS-App:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kamera: Zum Scannen von Barcodes und QR-Codes für Produktidentifikation</li>
                <li>Speicher: Zum lokalen Speichern von Lagerdaten für Offline-Zugriff</li>
                <li>Netzwerk: Für Synchronisation mit Cloud-Diensten und E-Commerce-Plattformen</li>
                <li>Standort (optional): Zur Optimierung der Lagerprozesse und Routenplanung</li>
              </ul>

              <p className="font-medium opacity-90 pt-4">Datenerhebung in der App:</p>
              <p>
                Unsere WMS-App erhebt folgende Daten zur Bereitstellung der Dienste:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Geräteinformationen (Modell, Betriebssystem, App-Version)</li>
                <li>Nutzungsdaten (Scan-Aktivitäten, Bearbeitungszeiten, Fehlerberichte)</li>
                <li>Lagerdaten (Produktinformationen, Bestandsmengen, Bewegungsdaten)</li>
                <li>Performance-Daten zur Optimierung der KI-Algorithmen</li>
              </ul>
            </div>
          </section>

          {/* 11. Integration Drittanbieter */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              11. Integration mit Drittanbieter-Diensten
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">Shopify Integration:</p>
              <p>
                Unsere WMS-Lösung integriert sich mit Shopify und anderen E-Commerce-Plattformen. Dabei werden
                Bestelldaten, Produktinformationen und Bestandsdaten synchronisiert. Die Datenübertragung erfolgt
                verschlüsselt und entspricht den jeweiligen Datenschutzbestimmungen der Plattformen.
              </p>

              <p className="font-medium opacity-90 pt-4">Cloud-Dienste:</p>
              <p>
                Wir nutzen sichere Cloud-Infrastrukturen für die Bereitstellung unserer Dienste. Alle Daten werden
                verschlüsselt übertragen und gespeichert. Unsere Cloud-Partner sind GDPR-konform und verfügen über
                entsprechende Zertifizierungen.
              </p>
            </div>
          </section>

          {/* 12. Analyse-Tools */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              12. Analyse-Tools und Werbung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">Google Analytics:</p>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc.,
                1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </p>
              <p>
                Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer
                gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
                Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server
                von Google in den USA übertragen und dort gespeichert.
              </p>
              <p>
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
                verhindern.
              </p>
            </div>
          </section>

          {/* 13. Speicherdauer */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              13. Speicherdauer von Daten
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben.
              </p>

              <p className="font-medium opacity-90 pt-4">Spezifische Aufbewahrungsfristen:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kontaktformular-Daten: 2 Jahre nach Bearbeitung der Anfrage</li>
                <li>App-Nutzungsdaten: 3 Jahre für Optimierungszwecke</li>
                <li>Lagerdaten: Nach Kundenvertrag oder gesetzlichen Aufbewahrungspflichten</li>
                <li>Server-Log-Dateien: 30 Tage</li>
              </ul>
            </div>
          </section>

          {/* 14. Datenübertragung Drittländer */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              14. Datenübertragung in Drittländer
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Soweit wir personenbezogene Daten in ein Drittland (außerhalb der EU/EWR) übertragen, erfolgt dies nur,
                wenn ein angemessenes Datenschutzniveau gewährleistet ist (z.B. durch Angemessenheitsbeschluss der
                EU-Kommission, geeignete Garantien oder genehmigte Verhaltensregeln) oder Ihre ausdrückliche
                Einwilligung vorliegt.
              </p>
            </div>
          </section>

          {/* 15. Datenschutz für Kinder */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              15. Datenschutz für Kinder
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Unsere Dienste richten sich nicht an Personen unter 16 Jahren. Wir erfassen nicht wissentlich
                personenbezogene Daten von Kindern unter 16 Jahren. Falls wir feststellen, dass wir personenbezogene
                Daten von Kindern unter 16 Jahren ohne elterliche Zustimmung gesammelt haben, werden wir Maßnahmen
                ergreifen, um diese Informationen von unseren Servern zu entfernen.
              </p>
            </div>
          </section>

          {/* 16. Google Play Store */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              16. Google Play Store Compliance
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Unsere mobile Anwendung entspricht den Google Play Store Richtlinien für Datenschutz und Sicherheit:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Transparente Offenlegung aller Datenerhebungs- und -verwendungspraktiken</li>
                <li>Sichere Übertragung sensibler Daten über moderne Kryptografie (TLS)</li>
                <li>Minimierung der Datenerhebung auf das für die App-Funktionalität erforderliche Maß</li>
                <li>Keine Verkauf von personenbezogenen Daten an Dritte</li>
                <li>Einhaltung der Children's Online Privacy Protection Act (COPPA) Bestimmungen</li>
              </ul>
            </div>
          </section>

          {/* 17. Ihre Rechte DSGVO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              17. Ihre Rechte nach der DSGVO
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="font-medium">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft
                  über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  <strong className="font-medium">Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht,
                  unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.
                </li>
                <li>
                  <strong className="font-medium">Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die
                  Löschung Sie betreffender personenbezogener Daten zu verlangen.
                </li>
                <li>
                  <strong className="font-medium">Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie haben das Recht, die
                  Einschränkung der Verarbeitung zu verlangen.
                </li>
                <li>
                  <strong className="font-medium">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht,
                  Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong className="font-medium">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der
                  Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
                </li>
              </ul>
            </div>
          </section>

          {/* 18. Kontakt */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              18. Kontakt bei Datenschutzfragen
            </h2>
            <div className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <p className="mb-4">
                Bei Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder Beschwerden wenden Sie sich bitte an:
              </p>
              <p className="mb-4">
                <strong className="font-medium">wooms WMS GmbH</strong><br />
                Datenschutzbeauftragter<br />
                Goerzallee 311<br />
                14167 Berlin<br />
                Deutschland
              </p>
              <p className="opacity-70 mb-2">
                E-Mail:{' '}
                <a
                  href="mailto:datenschutz@wooms.io"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors inline-flex items-center gap-2 group"
                >
                  datenschutz@wooms.io
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </p>
              <p className="opacity-70">
                Telefon:{' '}
                <a href="tel:+4917472118813" className="text-[#01182D] hover:text-[#D1B06B] transition-colors">
                  +49 174 721 18 13
                </a>
              </p>
              <p className="text-[16px] md:text-[18px] opacity-70 mt-6">
                Sie haben auch das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren.
              </p>
            </div>
          </section>

          {/* Stand */}
          <section className="pt-8 text-center">
            <p className="text-[14px] text-[#01182D]/40 font-light">
              Stand: Januar 2024 | Diese Datenschutzerklärung wurde zuletzt aktualisiert am 07.01.2024
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

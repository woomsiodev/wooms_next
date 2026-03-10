export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-8 md:px-20 lg:px-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <header className="mb-24">
          <h1 className="text-6xl font-light tracking-tight mb-4 uppercase text-[#01182D]">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl font-light opacity-50 italic text-[#01182D]">
            Gültig für die Nutzung der wooms WMS Software
          </p>
        </header>

        {/* Content */}
        <div className="space-y-16 text-[#01182D]">

          {/* 1. Geltungsbereich */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              1. Geltungsbereich
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der
                wooms WMS GmbH (nachfolgend "wooms" oder "wir") und ihren Kunden (nachfolgend "Kunde" oder "Sie")
                über die Bereitstellung und Nutzung der wooms Warehouse Management System Software und zugehörigen
                Dienstleistungen.
              </p>
              <p>
                Abweichende Geschäftsbedingungen des Kunden werden nicht anerkannt, es sei denn, wooms stimmt ihrer
                Geltung ausdrücklich schriftlich zu. Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen,
                auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
              </p>
            </div>
          </section>

          {/* 2. Vertragsgegenstand und Leistungsbeschreibung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              2. Vertragsgegenstand und Leistungsbeschreibung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">2.1 Software-as-a-Service (SaaS)</p>
              <p>
                wooms stellt dem Kunden eine cloudbasierte Warehouse Management System Software zur Verfügung,
                die über das Internet zugänglich ist. Die Software umfasst:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lagerverwaltung und Bestandsmanagement</li>
                <li>KI-gestützte Picking-Optimierung</li>
                <li>Integration mit E-Commerce-Plattformen (insbesondere Shopify)</li>
                <li>Mobile Apps für Android und iOS</li>
                <li>Barcode- und QR-Code-Scanning</li>
                <li>Retouren-Management</li>
                <li>Reporting und Analytics</li>
              </ul>

              <p className="font-medium opacity-90 pt-4">2.2 Verfügbarkeit</p>
              <p>
                wooms bemüht sich um eine Verfügbarkeit der Software von 99,5% im Jahresmittel. Geplante Wartungsarbeiten,
                die der Verbesserung der Software dienen, werden dem Kunden mindestens 24 Stunden im Voraus angekündigt.
              </p>

              <p className="font-medium opacity-90 pt-4">2.3 Support und Beratung</p>
              <p>
                Je nach gewähltem Tarif umfasst der Service technischen Support, Onboarding-Unterstützung und
                Beratungsleistungen zur optimalen Nutzung der Software.
              </p>
            </div>
          </section>

          {/* 3. Vertragsschluss und Registrierung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              3. Vertragsschluss und Registrierung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Der Vertrag kommt durch die Registrierung des Kunden auf der wooms-Plattform und die anschließende
                Bestätigung durch wooms zustande. Die Registrierung erfordert die Angabe vollständiger und
                wahrheitsgemäßer Daten.
              </p>
              <p>
                wooms behält sich das Recht vor, Registrierungen ohne Angabe von Gründen abzulehnen. Ein Anspruch
                auf Vertragsschluss besteht nicht.
              </p>
            </div>
          </section>

          {/* 4. Pflichten des Kunden */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              4. Pflichten des Kunden
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">4.1 Ordnungsgemäße Nutzung</p>
              <p>
                Der Kunde verpflichtet sich, die Software nur für die bestimmungsgemäßen Zwecke zu nutzen und alle
                geltenden Gesetze und Vorschriften zu beachten. Insbesondere ist es untersagt:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Die Software für rechtswidrige Zwecke zu nutzen</li>
                <li>Schädliche Software (Viren, Trojaner etc.) einzuschleusen</li>
                <li>Unbefugte Zugriffe auf die Software oder Daten Dritter zu versuchen</li>
                <li>Die Software zu dekompilieren, zu disassemblieren oder reverse zu engineeren</li>
                <li>Die Software oder Teile davon weiterzugeben oder zu vermieten</li>
              </ul>

              <p className="font-medium opacity-90 pt-4">4.2 Zugangsdaten</p>
              <p>
                Der Kunde ist für die vertrauliche Behandlung seiner Zugangsdaten verantwortlich und hat diese vor
                dem Zugriff Dritter zu schützen. Bei Verdacht auf Missbrauch sind die Zugangsdaten unverzüglich zu
                ändern und wooms zu informieren.
              </p>

              <p className="font-medium opacity-90 pt-4">4.3 Datensicherung</p>
              <p>
                Der Kunde ist verpflichtet, regelmäßig Sicherungskopien seiner Daten zu erstellen. wooms stellt
                hierfür entsprechende Export-Funktionen zur Verfügung.
              </p>
            </div>
          </section>

          {/* 5. Preise und Zahlungsbedingungen */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              5. Preise und Zahlungsbedingungen
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">5.1 Preise</p>
              <p>
                Die aktuellen Preise für die verschiedenen Tarife und Leistungen sind auf der Website von wooms
                einsehbar. Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
              </p>

              <p className="font-medium opacity-90 pt-4">5.2 Zahlungsmodalitäten</p>
              <p>
                Die Zahlung erfolgt monatlich oder jährlich im Voraus, je nach gewähltem Zahlungsintervall. Die
                Abrechnung erfolgt über die angegebene Zahlungsmethode (Kreditkarte, SEPA-Lastschrift, oder Rechnung
                bei Jahresverträgen).
              </p>

              <p className="font-medium opacity-90 pt-4">5.3 Preisanpassungen</p>
              <p>
                wooms ist berechtigt, die Preise mit einer Vorlaufzeit von 6 Wochen anzupassen. Der Kunde hat in
                diesem Fall das Recht zur außerordentlichen Kündigung zum Zeitpunkt des Inkrafttretens der
                Preiserhöhung.
              </p>

              <p className="font-medium opacity-90 pt-4">5.4 Zahlungsverzug</p>
              <p>
                Bei Zahlungsverzug ist wooms berechtigt, den Zugang zur Software zu sperren. Verzugszinsen werden
                in Höhe von 8 Prozentpunkten über dem Basiszinssatz berechnet.
              </p>
            </div>
          </section>

          {/* 6. Vertragslaufzeit und Kündigung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              6. Vertragslaufzeit und Kündigung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">6.1 Laufzeit</p>
              <p>
                Verträge werden je nach gewähltem Tarif auf unbestimmte Zeit oder mit einer Mindestlaufzeit von
                12 Monaten geschlossen. Die jeweiligen Konditionen werden bei Vertragsschluss angezeigt.
              </p>

              <p className="font-medium opacity-90 pt-4">6.2 Ordentliche Kündigung</p>
              <p>
                Bei Verträgen ohne Mindestlaufzeit kann jede Partei mit einer Frist von 30 Tagen zum Monatsende
                kündigen. Bei Verträgen mit Mindestlaufzeit kann zum Ende der Mindestlaufzeit mit einer Frist von
                30 Tagen gekündigt werden.
              </p>

              <p className="font-medium opacity-90 pt-4">6.3 Außerordentliche Kündigung</p>
              <p>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Wichtige Gründe sind
                insbesondere nachhaltige Störungen der Software, Zahlungsverzug oder Verstöße gegen diese AGB.
              </p>

              <p className="font-medium opacity-90 pt-4">6.4 Folgen der Beendigung</p>
              <p>
                Mit Beendigung des Vertrags erlischt das Nutzungsrecht an der Software. Der Kunde hat 30 Tage Zeit,
                seine Daten zu exportieren. Nach Ablauf dieser Frist werden die Daten unwiderruflich gelöscht.
              </p>
            </div>
          </section>

          {/* 7. Haftung und Gewährleistung */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              7. Haftung und Gewährleistung
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">7.1 Gewährleistung</p>
              <p>
                wooms gewährleistet, dass die Software im Wesentlichen entsprechend der Leistungsbeschreibung
                funktioniert. Geringfügige Abweichungen, die die Gebrauchstauglichkeit nicht wesentlich
                beeinträchtigen, begründen keine Gewährleistungsansprüche.
              </p>

              <p className="font-medium opacity-90 pt-4">7.2 Haftungsbeschränkung</p>
              <p>
                Die Haftung von wooms ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei leichter Fahrlässigkeit
                haftet wooms nur bei Verletzung wesentlicher Vertragspflichten und nur bis zur Höhe des vorhersehbaren,
                vertragstypischen Schadens.
              </p>

              <p className="font-medium opacity-90 pt-4">7.3 Datenverlust</p>
              <p>
                wooms haftet für Datenverlust nur, soweit dieser nicht durch angemessene Datensicherungsmaßnahmen
                des Kunden vermeidbar gewesen wäre.
              </p>

              <p className="font-medium opacity-90 pt-4">7.4 Höchsthaftung</p>
              <p>
                Die Gesamthaftung von wooms ist auf die Höhe der jährlichen Vergütung des jeweiligen Kunden begrenzt.
              </p>
            </div>
          </section>

          {/* 8. Immaterialgüterrechte */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              8. Immaterialgüterrechte
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">8.1 Rechte an der Software</p>
              <p>
                Alle Rechte an der wooms Software, einschließlich Urheberrechte, Markenrechte und sonstige
                Immaterialgüterrechte, verbleiben bei wooms oder den jeweiligen Rechteinhabern.
              </p>

              <p className="font-medium opacity-90 pt-4">8.2 Nutzungsrecht</p>
              <p>
                Der Kunde erhält ein nicht-exklusives, nicht übertragbares Recht zur Nutzung der Software im Rahmen
                des Vertrags. Dieses Recht erlischt mit Beendigung des Vertrags.
              </p>

              <p className="font-medium opacity-90 pt-4">8.3 Kundendaten</p>
              <p>
                Der Kunde behält alle Rechte an den von ihm in die Software eingegebenen Daten. wooms erhält das
                Recht, diese Daten zur Erbringung der vereinbarten Leistungen zu nutzen.
              </p>
            </div>
          </section>

          {/* 9. Datenschutz und Datensicherheit */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              9. Datenschutz und Datensicherheit
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">9.1 Datenschutz</p>
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt entsprechend der Datenschutz-Grundverordnung (DSGVO)
                und den geltenden Datenschutzbestimmungen. Details zur Datenverarbeitung finden sich in der
                Datenschutzerklärung von wooms.
              </p>

              <p className="font-medium opacity-90 pt-4">9.2 Datensicherheit</p>
              <p>
                wooms trifft angemessene technische und organisatorische Maßnahmen zum Schutz der Kundendaten vor
                unbefugtem Zugriff, Verlust oder Missbrauch. Dies umfasst insbesondere Verschlüsselung,
                Zugangskontrollen und regelmäßige Sicherheitsüberprüfungen.
              </p>

              <p className="font-medium opacity-90 pt-4">9.3 Auftragsverarbeitung</p>
              <p>
                Soweit wooms personenbezogene Daten im Auftrag des Kunden verarbeitet, wird ein entsprechender
                Auftragsverarbeitungsvertrag nach Art. 28 DSGVO abgeschlossen.
              </p>
            </div>
          </section>

          {/* 10. Höhere Gewalt */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              10. Höhere Gewalt
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                wooms ist von der Erfüllung ihrer Verpflichtungen befreit, soweit und solange sie durch höhere Gewalt
                (z.B. Naturkatastrophen, Krieg, Terrorismus, Pandemien, Cyberangriffe, Streiks oder behördliche
                Anordnungen) daran gehindert wird. In solchen Fällen werden die Vertragspartner die Leistungen nach
                Wegfall des Hinderungsgrundes wieder aufnehmen.
              </p>
            </div>
          </section>

          {/* 11. Vertraulichkeit */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              11. Vertraulichkeit
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p>
                Beide Vertragsparteien verpflichten sich, alle vertraulichen Informationen, die sie im Rahmen der
                Vertragsbeziehung erhalten, streng vertraulich zu behandeln und nur für die Zwecke dieses Vertrags
                zu verwenden. Diese Verpflichtung besteht auch nach Beendigung des Vertrags fort.
              </p>
            </div>
          </section>

          {/* 12. Änderungen der Software und AGB */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              12. Änderungen der Software und AGB
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">12.1 Software-Updates</p>
              <p>
                wooms ist berechtigt, die Software weiterzuentwickeln und zu verbessern. Updates, die die
                Funktionalität erweitern oder die Sicherheit erhöhen, werden automatisch eingespielt.
              </p>

              <p className="font-medium opacity-90 pt-4">12.2 Änderung der AGB</p>
              <p>
                wooms kann diese AGB mit einer Vorlaufzeit von 6 Wochen ändern. Der Kunde wird über Änderungen per
                E-Mail informiert. Widerspricht der Kunde nicht innerhalb von 4 Wochen nach Erhalt der
                Änderungsmitteilung, gelten die Änderungen als genehmigt.
              </p>
            </div>
          </section>

          {/* 13. Schlussbestimmungen */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              13. Schlussbestimmungen
            </h2>
            <div className="text-[16px] md:text-[18px] font-light leading-relaxed opacity-70 space-y-4">
              <p className="font-medium opacity-90">13.1 Anwendbares Recht</p>
              <p>
                Für alle Rechtsbeziehungen zwischen wooms und dem Kunden gilt deutsches Recht unter Ausschluss des
                UN-Kaufrechts.
              </p>

              <p className="font-medium opacity-90 pt-4">13.2 Gerichtsstand</p>
              <p>
                Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Berlin, sofern der
                Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen
                ist.
              </p>

              <p className="font-medium opacity-90 pt-4">13.3 Salvatorische Klausel</p>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der
                übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem
                wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>

              <p className="font-medium opacity-90 pt-4">13.4 Schriftformerfordernis</p>
              <p>
                Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Aufhebung des
                Schriftformerfordernisses.
              </p>
            </div>
          </section>

          {/* 14. Kontakt */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              14. Kontakt und weitere Informationen
            </h2>
            <div className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <p className="mb-4">
                <strong className="font-medium">wooms WMS GmbH</strong><br />
                Goerzallee 311<br />
                14167 Berlin<br />
                Deutschland
              </p>
              <p className="opacity-70 mb-2">
                E-Mail:{' '}
                <a
                  href="mailto:info@wooms.io"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors inline-flex items-center gap-2 group"
                >
                  info@wooms.io
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
                <a
                  href="tel:+4917472118813"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors"
                >
                  +49 174 721 18 13
                </a>
              </p>
              <p className="opacity-70 mt-4">
                Website:{' '}
                <a
                  href="https://wooms.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors underline"
                >
                  wooms.io
                </a>
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 text-[16px] md:text-[18px] opacity-50">
                <p>Handelsregister: HRB 279769 B</p>
                <p>Amtsgericht Charlottenburg, Berlin</p>
                <p>Geschäftsführer: Ansgar Sohn</p>
                <p>USt-IdNr.: DE457512094</p>
              </div>
            </div>
          </section>

          {/* Stand */}
          <section className="pt-8 text-center">
            <p className="text-[14px] text-[#01182D]/40 font-light">
              Stand: Januar 2024 | Diese AGB wurden zuletzt aktualisiert am 07.01.2024
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}

'use client';

import Header from "@/components/layout/Header";
import { ArrowUpRight, Mail } from 'lucide-react';

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-[200px] pb-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#F5F2ED] to-white">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[14px] md:text-[16px] font-light tracking-widest mb-6 text-[#01182D]/60 uppercase">
            Consulting & Implementation
          </p>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-tight text-[#01182D] mb-8">
            Partner, die Software nicht nur einführen. Sondern Betrieb skalierbar machen.
          </h1>
          <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#01182D]/70 font-light">
            Wenn Shopify wächst, muss das Lager mitwachsen. Unsere Partner machen genau das möglich.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-20">

          {/* Never Stop Section */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#01182D] mb-8">
              Never stop a running system.
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-[18px] md:text-[20px] leading-[1.8] text-[#01182D]/70 font-light">
              <p>Der gute alte Satz für Software.</p>
              <p>Stimmt schon. Solange alles läuft, fasst man ungern etwas an.</p>
              <p>
                Nur: Irgendwann läuft es eben nicht mehr <strong className="font-semibold text-[#01182D]">für dich</strong>,
                sondern nur noch <strong className="font-semibold text-[#01182D]">irgendwie weiter</strong>.
              </p>
              <p>
                Der Shopify-Store wächst. Neue Kanäle kommen dazu. Retouren steigen. B2B mischt mit rein.
                Im Lager wird improvisiert, im Support gesucht, im Einkauf nachtelefoniert. Und plötzlich hängt
                ein ganzes Business an Workarounds, Bauchgefühl und einzelnen Leuten, die „es halt wissen".
              </p>
              <p className="text-[#D1B06B] font-medium text-[22px]">
                Genau dort wird aus einem laufenden System ein bremsendes System.
              </p>
              <p>
                Was klein charmant war, wird groß anstrengend: fehlende Transparenz, doppelte Handgriffe,
                Medienbrüche, Packfehler, unklare Verantwortlichkeiten und Daten, die überall liegen –
                nur nicht dort, wo sie Entscheidungen besser machen.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-[#F5F2ED] p-10 md:p-12 rounded-3xl">
            <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.2] text-[#01182D] mb-6">
              Die gute Nachricht: So muss Wachstum nicht aussehen.
            </h3>
            <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.8] text-[#01182D]/70 font-light">
              <p>
                Mit wooms und den richtigen Consulting-Partnern wird aus operativem Lärm wieder ein sauberes System.
                Prozesse werden klar. Rollen werden eindeutig. Schnittstellen greifen sauber ineinander.
                Shopify, ERP, Carrier, Retouren, Pick & Pack und Reporting arbeiten nicht mehr gegeneinander, sondern zusammen.
              </p>
              <ul className="space-y-3 ml-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-[#D1B06B] mt-1">→</span>
                  <span>Automationen übernehmen das Wiederholbare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D1B06B] mt-1">→</span>
                  <span>Das Team arbeitet nach System statt nach Zuruf.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D1B06B] mt-1">→</span>
                  <span>Und du siehst in Echtzeit, was läuft, wo es hakt und was als Nächstes sinnvoll ist.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recognition Signs */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#01182D] mb-8">
              Woran du merkst, dass es Zeit ist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Mehr Bestellungen. Gleich viel Überblick.',
                'Schulungen dauern zu lange, weil jede:r anders arbeitet.',
                'Pick & Pack braucht Erfahrung statt Struktur.',
                'Shopify läuft, aber das Lager kommt nicht hinterher.',
                'Daten sind da, aber nicht verbunden.',
                'Wachstum fühlt sich nach Stress an statt nach Fortschritt.'
              ].map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-5 bg-white border border-[#01182D]/10 rounded-xl">
                  <span className="text-[#D1B06B] font-bold text-[18px] mt-1">—</span>
                  <span className="text-[17px] leading-[1.6] text-[#01182D]/80">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Section */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#01182D] mb-4">
              Nicht irgendeine Beratung.
            </h2>
            <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-[#D1B06B] mb-8">
              Sondern Umsetzung mit Lagerverstand.
            </h3>
            <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.8] text-[#01182D]/70 font-light">
              <p>Unsere wooms-Partner beraten nicht aus der Distanz. Sie gehen in Prozesse rein. In Wege. In Scanpunkte. In Rollen. In echte Abläufe.</p>
              <p>
                Sie schauen nicht nur, <strong className="font-semibold text-[#01182D]">welche Software du hast</strong>.
                Sie schauen, <strong className="font-semibold text-[#01182D]">wie dein Geschäft wirklich funktioniert</strong>.
              </p>
              <p className="text-[#01182D]/60 italic">
                Vom ersten Shopify-Store bis zum komplexen Multi-Channel-Setup.<br/>
                Vom kleinen Lager bis zum Fulfillment-Betrieb.<br/>
                Von den ersten Regeln bis zu individuellen Automationen.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-[#01182D] text-white p-10 md:p-12 rounded-3xl">
            <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-8">
              Sie helfen dir bei:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Setup und sauberer Einführung von wooms',
                'Shopify-Anbindung und Kanalstruktur',
                'Pick-, Pack- und Retourenprozessen',
                'Rollen, Workflows und Schulungen im Team',
                'ERP-, Carrier- und Maschinen-Integrationen',
                'Optimierungen im laufenden Betrieb',
                'individuellen Erweiterungen und Automationen'
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#D1B06B] font-bold text-[18px] mt-1">—</span>
                  <span className="text-[17px] leading-[1.6] text-white/90">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#01182D] mb-8">
              Wie wooms arbeitet, so arbeiten auch unsere Partner
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Klar in der Struktur',
                'Schnell in der Umsetzung',
                'Pragmatisch in Entscheidungen',
                'Sauber in Prozessen',
                'Nah am operativen Alltag',
                'Blick auf das, was wirklich skaliert'
              ].map((value, index) => (
                <div key={index} className="p-5 bg-[#F5F2ED] rounded-xl text-center">
                  <span className="text-[16px] md:text-[17px] font-medium text-[#01182D]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4 text-[18px] md:text-[20px] leading-[1.8] text-[#01182D]/70 font-light">
              <p>Keine PowerPoint-Beratung ohne Hallenluft. Keine Folienromantik. Keine Integrationen auf dem Papier, die in der Praxis hängen.</p>
              <p>
                Unsere Partner arbeiten wie wooms selbst: <strong className="font-semibold text-[#01182D]">hands-on, technisch stark, prozessorientiert</strong> und mit kurzer Linie ins Produktteam.
              </p>
              <p className="text-[#D1B06B] font-medium">
                Das heißt für dich: direktes Feedback, schnelle Abstimmung, praxisnahe Lösungen und Abkürzungen, die man nicht aus einem Handbuch lernt.
              </p>
            </div>
          </div>

          {/* Partner Intro */}
          <div className="border-t-2 border-[#D1B06B] pt-12">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#01182D] mb-6">
              Partner, denen wir vertrauen
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#01182D]/70 font-light mb-12">
              Unsere Consulting- und Implementation-Partner stehen mit wooms im engen Austausch.
              Sie kennen nicht nur die Oberfläche, sondern die Logik dahinter. Sie wissen, wie Lager ticken,
              wie Shopify-Prozesse sauber angebunden werden und wie man Systeme so einführt, dass Teams sie wirklich nutzen.
            </p>

            {/* Partner Cards */}
            <div className="space-y-8">

              {/* Fulfillment Kitchen */}
              <div className="border-2 border-[#01182D]/20 rounded-3xl p-8 md:p-10 hover:border-[#D1B06B] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-[#01182D]">
                    Fulfillment Kitchen
                  </h3>
                  <span className="px-4 py-1 bg-[#D1B06B]/10 text-[#D1B06B] text-[13px] font-medium rounded-full uppercase tracking-wider">
                    International
                  </span>
                </div>
                <p className="text-[16px] text-[#01182D]/60 mb-6 uppercase tracking-wider font-medium">
                  Setup · Consulting · Training · Integrations
                </p>
                <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#01182D]/70 font-light">
                  Spezialisiert auf das wooms-Onboarding von Fulfillment-Operations.
                  Mit Fokus auf Prozesse, skalierbare Lagerstrukturen, wooms-Extensions sowie die Integration von ERP, Maschinen und Robotik.
                </p>
              </div>

              {/* OstwaldONE */}
              <div className="border-2 border-[#01182D]/20 rounded-3xl p-8 md:p-10 hover:border-[#D1B06B] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-[#01182D]">
                    OstwaldONE Consulting
                  </h3>
                  <span className="px-4 py-1 bg-[#D1B06B]/10 text-[#D1B06B] text-[13px] font-medium rounded-full uppercase tracking-wider">
                    NRW & Remote
                  </span>
                </div>
                <p className="text-[16px] text-[#01182D]/60 mb-6 uppercase tracking-wider font-medium">
                  Setup · Configuration · Operational Support
                </p>
                <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#01182D]/70 font-light">
                  Unterstützt bei der wooms-Einrichtung und in den operativen Anwendungen – von Pick über Pack bis Retouren.
                  Ideal für Teams, die Prozesse sauber aufsetzen und im Alltag stabil fahren wollen.
                </p>
              </div>

              {/* netgenia */}
              <div className="border-2 border-[#01182D]/20 rounded-3xl p-8 md:p-10 hover:border-[#D1B06B] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-[#01182D]">
                    netgenia GmbH
                  </h3>
                  <span className="px-4 py-1 bg-[#D1B06B]/10 text-[#D1B06B] text-[13px] font-medium rounded-full uppercase tracking-wider">
                    International
                  </span>
                </div>
                <p className="text-[16px] text-[#01182D]/60 mb-6 uppercase tracking-wider font-medium">
                  Setup · Consulting · Shopify · Billbee
                </p>
                <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#01182D]/70 font-light">
                  Einrichtungsservice für wooms, Shopify und Billbee.
                  Von Account-Setup über Automationen bis zu konkreten Prozessfragen im E-Commerce-Alltag.
                </p>
              </div>

            </div>
          </div>

          {/* Become Partner CTA */}
          <div className="bg-gradient-to-br from-[#01182D] to-[#0a2540] text-white p-10 md:p-14 rounded-3xl">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] mb-6">
              Grow with wooms
            </h2>
            <p className="text-[20px] md:text-[22px] leading-[1.7] text-white/90 font-light mb-8">
              Wachse mit dem schnellsten SaaS-WMS mit echter AI.
            </p>
            <div className="space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-white/80 font-light mb-10">
              <p>
                Werde Teil unseres Partnernetzwerks und hilf Händlern und Fulfillern dabei, wooms sauber einzuführen,
                richtig aufzusetzen und nachhaltig zu skalieren.
              </p>
              <p>
                Du bringst Prozessverständnis, Integrationserfahrung und Umsetzungskraft mit.
                Wir liefern Produktnähe, Benchmarks, Daten, Automationen und kurze Wege.
              </p>
              <p className="text-[#D1B06B] font-medium text-[19px]">
                Klare Regeln. Saubere Attribution. Pünktliche Auszahlungen.
              </p>
            </div>
            <a
              href="mailto:partner@wooms.de"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#D1B06B] hover:bg-[#D1B06B]/90 text-white rounded-full text-[18px] font-semibold uppercase tracking-wider transition-all group"
            >
              <Mail size={24} />
              <span>Partner werden</span>
              <ArrowUpRight size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 md:py-20 px-8 md:px-16 lg:px-24 border-t border-[#01182D]/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[14px] text-[#01182D]/60">
            © 2026 wooms WMS GmbH · Berlin
          </p>
        </div>
      </footer>
    </main>
  );
}

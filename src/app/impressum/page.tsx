export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-8 md:px-20 lg:px-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <header className="mb-24">
          <h1 className="text-6xl font-light tracking-tight mb-4 uppercase text-[#01182D]">
            Impressum
          </h1>
          <p className="text-xl font-light opacity-50 italic text-[#01182D]">
            Angaben gemäß § 5 TMG
          </p>
        </header>

        {/* Content */}
        <div className="space-y-16 text-[#01182D]">

          {/* Firmenangaben */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Anschrift
            </h2>
            <div className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <strong className="block font-medium mb-2">wooms WMS GmbH</strong>
              Goerzallee 311<br />
              14167 Berlin<br />
              Deutschland
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Kontakt
            </h2>
            <div className="space-y-3 text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <p>
                <span className="text-xs uppercase tracking-[0.25em] font-medium opacity-50 block mb-1">Telefon</span>
                <a
                  href="tel:+4917472118813"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors inline-flex items-center gap-2 group"
                >
                  +49 174 721 18 13
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
              <p>
                <span className="text-xs uppercase tracking-[0.25em] font-medium opacity-50 block mb-1">E-Mail</span>
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
            </div>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Registereintrag
            </h2>
            <div className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <p className="mb-2">
                Handelsregister: <span className="font-medium">HRB 279769 B</span>
              </p>
              <p className="opacity-70">
                Amtsgericht Charlottenburg, Berlin
              </p>
            </div>
          </section>

          {/* USt-ID */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Umsatzsteuer-ID
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              <span className="font-medium">DE457512094</span>
            </p>
          </section>

          {/* Geschäftsführer */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Geschäftsführer
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5]">
              Ansgar Sohn
            </p>
          </section>

          {/* Streitschlichtung */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">
              Streitschlichtung
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] font-light leading-relaxed opacity-70">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01182D] hover:text-[#D1B06B] transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}

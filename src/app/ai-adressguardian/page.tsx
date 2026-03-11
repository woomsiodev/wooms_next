'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/layout/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Phase labels driven by scroll progress ────────────────────────────────────
const PHASE_LABELS = [
  'Bestellung eingegangen',
  'KI scannt die Adresse',
  '4 Fehler erkannt',
  'Korrekturen werden angewendet\u2026',
  'Adresse erfolgreich validiert',
];

// ── Main page ─────────────────────────────────────────────────────────────────
export default function AiAdressGuardianPage() {
  const [phase, setPhase] = useState(0);

  // Pinned section ref
  const pinnedRef = useRef<HTMLDivElement>(null);

  // Address line wrapper refs (4 lines)
  const lineWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Wrong span refs
  const wrongSpanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  // Right span refs
  const rightSpanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  // Indicator dot refs
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Scan beam ref
  const scanRef = useRef<HTMLDivElement>(null);
  // Verified badge ref
  const verifiedRef = useRef<HTMLDivElement>(null);
  // Address card container ref
  const addressCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!pinnedRef.current) return;

    // ── Initial GSAP states ──────────────────────────────────────────────────

    // Address card: starts invisible, below
    if (addressCardRef.current) {
      gsap.set(addressCardRef.current, { opacity: 0, y: 60 });
    }

    // Wrong spans visible, right spans invisible
    wrongSpanRefs.current.forEach(span => {
      if (span) gsap.set(span, { opacity: 1 });
    });
    rightSpanRefs.current.forEach(span => {
      if (span) gsap.set(span, { opacity: 0 });
    });

    // Scan beam: hidden at top
    if (scanRef.current) {
      gsap.set(scanRef.current, { opacity: 0, top: '0%' });
    }

    // Verified badge: hidden
    if (verifiedRef.current) {
      gsap.set(verifiedRef.current, { opacity: 0, scale: 0.8 });
    }

    // Dots: all start dim grey
    dotRefs.current.forEach(dot => {
      if (dot) gsap.set(dot, { backgroundColor: 'rgba(255,255,255,0.15)' });
    });

    // Line wrappers: start with no border color
    lineWrapperRefs.current.forEach(wrapper => {
      if (wrapper) gsap.set(wrapper, { borderLeftColor: 'rgba(255,255,255,0.08)' });
    });

    // ── Build the timeline ───────────────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinnedRef.current,
        start: 'top top',
        end: '+=5000',
        pin: true,
        scrub: 1.5,
        onUpdate: (self) => {
          const p = self.progress;
          let newPhase = 0;
          if (p >= 0.12) newPhase = 1;
          if (p >= 0.25) newPhase = 2;
          if (p >= 0.38) newPhase = 3;
          if (p >= 0.83) newPhase = 4;
          setPhase(newPhase);
        },
      },
    });

    // 0.00–0.12: Address card fades in from below
    tl.to(addressCardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.12,
      ease: 'power2.out',
    }, 0);

    // 0.12–0.25: Scan beam sweeps top to bottom
    tl.to(scanRef.current, {
      opacity: 1,
      duration: 0.02,
      ease: 'none',
    }, 0.12);

    tl.fromTo(scanRef.current,
      { top: '-2px' },
      {
        top: 'calc(100% + 2px)',
        duration: 0.13,
        ease: 'power1.inOut',
      },
      0.12,
    );

    tl.to(scanRef.current, {
      opacity: 0,
      duration: 0.02,
      ease: 'none',
    }, 0.24);

    // 0.25–0.38: All 4 lines turn red simultaneously
    lineWrapperRefs.current.forEach((wrapper, i) => {
      tl.to(wrapper, {
        borderLeftColor: '#ef4444',
        duration: 0.08,
        ease: 'none',
      }, 0.25 + i * 0.02);

      tl.to(dotRefs.current[i], {
        backgroundColor: '#ef4444',
        boxShadow: '0 0 8px #ef4444',
        duration: 0.08,
        ease: 'none',
      }, 0.25 + i * 0.02);

      // Wrong text turns red-ish
      tl.to(wrongSpanRefs.current[i], {
        color: '#f87171',
        duration: 0.08,
        ease: 'none',
      }, 0.25 + i * 0.02);
    });

    // 0.38–0.50: Line 0 (Name) corrects
    tl.to(wrongSpanRefs.current[0], {
      opacity: 0,
      y: -8,
      duration: 0.07,
      ease: 'power2.in',
    }, 0.38);
    tl.to(rightSpanRefs.current[0], {
      opacity: 1,
      y: 0,
      duration: 0.07,
      ease: 'power2.out',
    }, 0.41);
    tl.to(lineWrapperRefs.current[0], {
      borderLeftColor: '#D1B06B',
      duration: 0.06,
      ease: 'none',
    }, 0.43);
    tl.to(dotRefs.current[0], {
      backgroundColor: '#D1B06B',
      boxShadow: '0 0 12px #D1B06B88',
      duration: 0.06,
      ease: 'none',
    }, 0.43);

    // 0.50–0.62: Line 1 (Street) corrects
    tl.to(wrongSpanRefs.current[1], {
      opacity: 0,
      y: -8,
      duration: 0.07,
      ease: 'power2.in',
    }, 0.50);
    tl.to(rightSpanRefs.current[1], {
      opacity: 1,
      y: 0,
      duration: 0.07,
      ease: 'power2.out',
    }, 0.53);
    tl.to(lineWrapperRefs.current[1], {
      borderLeftColor: '#D1B06B',
      duration: 0.06,
      ease: 'none',
    }, 0.56);
    tl.to(dotRefs.current[1], {
      backgroundColor: '#D1B06B',
      boxShadow: '0 0 12px #D1B06B88',
      duration: 0.06,
      ease: 'none',
    }, 0.56);

    // 0.62–0.74: Line 2 (City) corrects
    tl.to(wrongSpanRefs.current[2], {
      opacity: 0,
      y: -8,
      duration: 0.07,
      ease: 'power2.in',
    }, 0.62);
    tl.to(rightSpanRefs.current[2], {
      opacity: 1,
      y: 0,
      duration: 0.07,
      ease: 'power2.out',
    }, 0.65);
    tl.to(lineWrapperRefs.current[2], {
      borderLeftColor: '#D1B06B',
      duration: 0.06,
      ease: 'none',
    }, 0.68);
    tl.to(dotRefs.current[2], {
      backgroundColor: '#D1B06B',
      boxShadow: '0 0 12px #D1B06B88',
      duration: 0.06,
      ease: 'none',
    }, 0.68);

    // 0.74–0.83: Line 3 (Country) corrects
    tl.to(wrongSpanRefs.current[3], {
      opacity: 0,
      y: -8,
      duration: 0.07,
      ease: 'power2.in',
    }, 0.74);
    tl.to(rightSpanRefs.current[3], {
      opacity: 1,
      y: 0,
      duration: 0.07,
      ease: 'power2.out',
    }, 0.77);
    tl.to(lineWrapperRefs.current[3], {
      borderLeftColor: '#D1B06B',
      duration: 0.06,
      ease: 'none',
    }, 0.80);
    tl.to(dotRefs.current[3], {
      backgroundColor: '#D1B06B',
      boxShadow: '0 0 12px #D1B06B88',
      duration: 0.06,
      ease: 'none',
    }, 0.80);

    // 0.83–1.00: All lines subtly green + verified badge appears
    lineWrapperRefs.current.forEach((wrapper, i) => {
      tl.to(wrapper, {
        borderLeftColor: '#22c55e',
        duration: 0.06,
        ease: 'none',
      }, 0.83 + i * 0.01);
      tl.to(dotRefs.current[i], {
        backgroundColor: '#22c55e',
        boxShadow: '0 0 10px #22c55e66',
        duration: 0.06,
        ease: 'none',
      }, 0.83 + i * 0.01);
    });

    tl.to(verifiedRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.1,
      ease: 'back.out(1.4)',
    }, 0.85);

  }, { scope: pinnedRef });

  // Address data: wrong → right
  const addressLines = [
    { label: 'Name', wrong: 'Max Mustermaan', right: 'Max Mustermann' },
    { label: 'Straße', wrong: 'Hauptstrase 45', right: 'Hauptstraße 45' },
    { label: 'Stadt', wrong: 'Münchn, 81669', right: 'München, 81669' },
    { label: 'Land', wrong: 'Germay', right: 'Germany' },
  ];

  return (
    <div className="bg-white text-[#01182D] font-sans overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#F5F2ED] overflow-hidden flex flex-col items-center text-center pt-[35vh] pb-[12vh] px-8">

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #01182D 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(209,176,107,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-[1100px] w-full">

          {/* Tag pill */}
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-[#D1B06B]/40 bg-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D1B06B] animate-pulse" />
            <span className="text-[#D1B06B] text-[11px] font-semibold tracking-[0.25em] uppercase">
              wooms AI — AdressGuardian
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-normal tracking-[-0.03em] leading-[0.92] text-[#01182D] mb-8"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
          >
            Adresse falsch?
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D1B06B 0%, #f0d595 45%, #D1B06B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nicht mehr.
            </span>
          </h1>

          {/* Subline */}
          <p
            className="font-light text-[#01182D]/55 max-w-[600px] mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(17px, 2vw, 22px)' }}
          >
            wooms AI erkennt Tippfehler in Lieferadressen automatisch und korrigiert sie
            in Echtzeit — bevor ein einziges Paket verloren geht.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              ['98%', 'Erkennungsrate'],
              ['<50ms', 'Reaktionszeit'],
              ['0', 'Manuelle Eingriffe'],
            ].map(([v, l]) => (
              <div
                key={l}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#01182D]/8 shadow-sm"
              >
                <span className="text-[18px] font-light text-[#01182D]">{v}</span>
                <span className="text-[11px] text-[#01182D]/40 tracking-[0.15em] uppercase font-medium">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator — animated line like home page */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#01182D]/30 font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-14 bg-[#01182D]/15 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-[#01182D]/60"
              style={{
                height: '100%',
                animation: 'scrollLine 2s cubic-bezier(0.76,0,0.24,1) infinite',
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollLine {
            0%   { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}</style>
      </section>

      {/* ── CINEMATIC PINNED SECTION ───────────────────────────────────────── */}
      <div
        ref={pinnedRef}
        className="relative h-screen overflow-hidden"
        style={{ backgroundColor: '#01182D' }}
      >
        {/* Subtle radial ambient light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(209,176,107,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />

        {/* Full-screen centered layout — pt clears the fixed navbar */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6" style={{ paddingTop: '110px' }}>

          {/* Phase label — changes per scroll phase */}
          <div className="mb-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#D1B06B' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.28em] uppercase"
                style={{ color: 'rgba(209,176,107,0.7)' }}
              >
                {PHASE_LABELS[phase]}
              </span>
            </div>
          </div>

          {/* Address card */}
          <div
            ref={addressCardRef}
            className="relative w-full max-w-[640px]"
          >
            {/* Scan beam — positioned absolute within card */}
            <div
              ref={scanRef}
              className="absolute left-0 right-0 pointer-events-none z-20"
              style={{
                height: '2px',
                top: '0',
                background: 'linear-gradient(90deg, transparent 0%, #D1B06B 20%, #f0d595 50%, #D1B06B 80%, transparent 100%)',
                boxShadow: '0 0 12px 4px rgba(209,176,107,0.5), 0 0 30px 10px rgba(209,176,107,0.15)',
              }}
            />

            {/* Address lines */}
            <div className="flex flex-col gap-0">
              {addressLines.map((line, i) => (
                <div
                  key={i}
                  ref={el => { lineWrapperRefs.current[i] = el; }}
                  className="flex items-center gap-5 px-6 py-5"
                  style={{
                    borderLeft: '3px solid rgba(255,255,255,0.08)',
                    borderBottom: i < addressLines.length - 1
                      ? '1px solid rgba(255,255,255,0.04)'
                      : 'none',
                  }}
                >
                  {/* Indicator dot */}
                  <div
                    ref={el => { dotRefs.current[i] = el; }}
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                    }}
                  />

                  {/* Label */}
                  <span
                    className="flex-shrink-0 w-16 text-[11px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    {line.label}
                  </span>

                  {/* Text stack: wrong on top, right underneath */}
                  <div
                    className="relative flex-1"
                    style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', lineHeight: '1.1' }}
                  >
                    {/* Wrong version */}
                    <span
                      ref={el => { wrongSpanRefs.current[i] = el; }}
                      className="absolute inset-0 font-light"
                      style={{ color: 'rgba(255,255,255,0.9)' }}
                    >
                      {line.wrong}
                    </span>
                    {/* Right version */}
                    <span
                      ref={el => { rightSpanRefs.current[i] = el; }}
                      className="absolute inset-0 font-light"
                      style={{
                        color: '#D1B06B',
                        textShadow: '0 0 20px rgba(209,176,107,0.4)',
                      }}
                    >
                      {line.right}
                    </span>
                    {/* Spacer to hold height */}
                    <span
                      className="invisible font-light"
                      style={{ display: 'block' }}
                    >
                      {line.wrong}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified badge */}
            <div
              ref={verifiedRef}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 px-8 py-4 rounded-full"
              style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.35)',
                boxShadow: '0 0 30px rgba(34,197,94,0.15)',
              }}
            >
              <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
              <span
                className="font-medium tracking-[0.08em] text-[14px]"
                style={{ color: '#22c55e' }}
              >
                Verified
              </span>
            </div>
          </div>

          {/* AI status bar */}
          <div className="mt-16 flex items-center gap-3">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: phase >= 4 ? '#22c55e' : '#D1B06B' }}
            />
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              wooms AI Processing
            </span>
            <span
              className="text-[11px] font-light"
              style={{ color: 'rgba(255,255,255,0.1)' }}
            >
              — Echtzeit Adressvalidierung
            </span>
          </div>
        </div>
      </div>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="py-[14vh] px-8 md:px-16 lg:px-24 bg-[#F5F2ED]">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#01182D]/35 mb-4">
              Was die KI erkennt
            </p>
            <h2
              className="font-light text-[#01182D] tracking-tight"
              style={{ fontSize: 'clamp(30px, 5vw, 60px)' }}
            >
              Vollständige Adressvalidierung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              [
                '✦',
                'Tippfehler-Erkennung',
                'Erkennt Tippfehler in Namen, Straßen und Städten — auch bei internationalen Adressen.',
              ],
              [
                '◈',
                'PLZ-Stadt-Validierung',
                'Prüft ob Postleitzahl und Stadt übereinstimmen. Korrigiert falsche Kombinationen.',
              ],
              [
                '⬡',
                'Sonderzeichen',
                'Ergänzt fehlende Umlaute ä, ö, ü, ß und internationale Sonderzeichen automatisch.',
              ],
              [
                '◎',
                'Länder-Erkennung',
                'Identifiziert das Zielland aus dem Kontext und korrigiert Länderbezeichnungen.',
              ],
              [
                '▣',
                'Fehlende Felder',
                'Erkennt unvollständige Adressen und fordert gezielt fehlende Informationen an.',
              ],
              [
                '◉',
                'Echtzeit',
                'Korrekturen vor dem Versand — keine Retouren durch falsche Adressen mehr.',
              ],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                className="group p-8 rounded-[24px] border border-[#01182D]/8 bg-white transition-all duration-300"
                style={{
                  // hover handled via tailwind group
                }}
              >
                <div
                  className="group-hover:border-[#D1B06B]/40 rounded-[20px] transition-all duration-300"
                >
                  <span className="text-[22px] text-[#D1B06B] mb-6 block">{icon}</span>
                  <h3 className="text-[17px] font-light text-[#01182D] mb-3 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-[13px] text-[#01182D]/50 font-light leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-[14vh] px-8 md:px-16 lg:px-24"
        style={{ backgroundColor: '#01182D' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/25 mb-6">
            Bereit?
          </p>
          <h2
            className="font-light text-white tracking-tight mb-6"
            style={{ fontSize: 'clamp(34px, 6vw, 78px)' }}
          >
            Schluss mit falschen<br />Lieferadressen.
          </h2>
          <p
            className="text-white/45 font-light mb-12 max-w-[480px] mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.8vw, 20px)' }}
          >
            AI Address Guardian ist in wooms WMS integriert — direkt verfügbar,
            kein Setup nötig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shopify"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(209,176,107,0.35)] hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #D1B06B 0%, #e8c87a 100%)',
                color: '#01182D',
                fontSize: 'clamp(14px, 1.4vw, 16px)',
              }}
            >
              Shopify App installieren
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/15 text-white/65 font-light transition-all duration-300 hover:border-white/40 hover:text-white"
              style={{ fontSize: 'clamp(14px, 1.4vw, 16px)' }}
            >
              Demo anfragen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

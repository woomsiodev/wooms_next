'use client';

import { useEffect, useRef, useState } from 'react';
import Header from "@/components/layout/Header";

export default function PreisePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = video.currentTime / video.duration;
      setVideoProgress(progress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  // Animation logic for the circle following the car
  const getCircleTransform = () => {
    // Start position: bottom-left, only 1/4 visible
    // Phase 1 (0-0.3): Circle follows the car from behind
    // Phase 2 (0.3-0.6): Circle moves to the right side of the car
    // Phase 3 (0.6-1): Circle stays on the right side as car continues

    if (videoProgress < 0.15) {
      // Initial position - 1/4 visible at bottom left
      const x = -20 + (videoProgress / 0.15) * 15; // -20% to -5%
      const y = 20 - (videoProgress / 0.15) * 10; // 20% to 10%
      return {
        left: `${x}%`,
        top: `${y}%`,
        opacity: 0.9 + (videoProgress / 0.15) * 0.1,
      };
    } else if (videoProgress < 0.35) {
      // Following the car from behind
      const relativeProgress = (videoProgress - 0.15) / 0.2;
      const x = -5 + relativeProgress * 30; // -5% to 25%
      const y = 10 + relativeProgress * 30; // 10% to 40%
      return {
        left: `${x}%`,
        top: `${y}%`,
        opacity: 1,
      };
    } else if (videoProgress < 0.65) {
      // Moving to the right side of the car
      const relativeProgress = (videoProgress - 0.35) / 0.3;
      const x = 25 + relativeProgress * 35; // 25% to 60%
      const y = 40 + relativeProgress * 5; // 40% to 45%
      return {
        left: `${x}%`,
        top: `${y}%`,
        opacity: 1,
      };
    } else {
      // Settled position on the right
      const relativeProgress = (videoProgress - 0.65) / 0.35;
      const x = 60 + relativeProgress * 5; // 60% to 65%
      const y = 45 - relativeProgress * 5; // 45% to 40%
      return {
        left: `${x}%`,
        top: `${y}%`,
        opacity: 1,
      };
    }
  };

  const circleStyle = getCircleTransform();

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Fullscreen Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/media/videos/guenstiges_WMS_wooms_Formel_E.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Glassmorphism Circle */}
      <div
        ref={circleRef}
        className="fixed w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 transition-all duration-1000 ease-out"
        style={{
          left: circleStyle.left,
          top: circleStyle.top,
          opacity: circleStyle.opacity,
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-xl" />

        {/* Main glass circle */}
        <div className="absolute inset-0 rounded-full backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl">
          {/* Inner gradient overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />

          {/* Subtle reflection effect */}
          <div className="absolute top-[15%] left-[20%] w-[60%] h-[30%] rounded-full bg-white/20 blur-2xl" />

          {/* Price text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white font-light tracking-tight" style={{ fontFamily: 'Lexend, sans-serif' }}>
                <span className="text-[56px] md:text-[72px] lg:text-[88px] leading-none">€</span>
                <span className="text-[72px] md:text-[96px] lg:text-[120px] font-extralight leading-none ml-2">0,09</span>
                <sup className="text-[28px] md:text-[36px] lg:text-[42px] font-extralight ml-1">5</sup>
              </div>
            </div>
          </div>
        </div>

        {/* Additional outer ring for depth */}
        <div className="absolute inset-[-8px] rounded-full border border-white/10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-end pb-16 md:pb-24 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-extralight leading-tight mb-6" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Transparente<br />Preise
              </h1>
              <p className="text-white/80 text-[18px] md:text-[22px] font-light leading-relaxed mb-8" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Bezahle nur für das, was du wirklich nutzt. <br />
                Keine versteckten Kosten, keine Überraschungen.
              </p>
              <a
                href="#details"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white/20 transition-all group"
              >
                <span className="text-[16px] md:text-[18px] font-light" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Mehr erfahren
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section id="details" className="relative z-10 bg-white py-20 md:py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#01182D] text-[40px] md:text-[56px] font-extralight mb-16 text-center" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Preisdetails
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Pro Transaktion */}
            <div className="bg-[#F5F3EF] rounded-3xl p-8 md:p-10">
              <div className="mb-6">
                <div className="text-[#01182D] text-[72px] font-extralight leading-none" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  € 0,09<sup className="text-[32px]">5</sup>
                </div>
                <div className="text-[#01182D]/60 text-[16px] mt-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  pro Transaktion
                </div>
              </div>
              <ul className="space-y-3 text-[#01182D]/80 text-[15px]" style={{ fontFamily: 'Lexend, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Alle Funktionen inklusive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Keine Grundgebühr</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Unbegrenzte Nutzer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>24/7 Support</span>
                </li>
              </ul>
            </div>

            {/* Volumen-Rabatt */}
            <div className="bg-[#01182D] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-[12px] font-light">
                Beliebt
              </div>
              <div className="mb-6">
                <div className="text-white text-[56px] font-extralight leading-none" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  € 0,07<sup className="text-[28px]">5</sup>
                </div>
                <div className="text-white/60 text-[16px] mt-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  ab 10.000 Transaktionen/Monat
                </div>
              </div>
              <ul className="space-y-3 text-white/80 text-[15px]" style={{ fontFamily: 'Lexend, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Alle Standard-Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Priority Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Dedizierter Account Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom Integrationen</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-[#F5F3EF] rounded-3xl p-8 md:p-10">
              <div className="mb-6">
                <div className="text-[#01182D] text-[56px] font-extralight leading-none" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Custom
                </div>
                <div className="text-[#01182D]/60 text-[16px] mt-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  für Enterprise
                </div>
              </div>
              <ul className="space-y-3 text-[#01182D]/80 text-[15px]" style={{ fontFamily: 'Lexend, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Individuelle Preisgestaltung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>White-Label Optionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>On-Premise Deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>SLA Garantien</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="mailto:hey@wooms.de"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#01182D] text-white rounded-full hover:bg-[#01182D]/90 transition-all group"
            >
              <span className="text-[18px] font-light" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Jetzt starten
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 bg-[#F5F3EF] py-20 md:py-32 px-8 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[#01182D] text-[40px] md:text-[56px] font-extralight mb-12 text-center" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Häufige Fragen
          </h2>

          <div className="space-y-6">
            <details className="group bg-white rounded-2xl p-6 md:p-8">
              <summary className="text-[#01182D] text-[18px] md:text-[20px] font-light cursor-pointer list-none flex justify-between items-center" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Was zählt als Transaktion?
                <span className="text-[#01182D]/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-[#01182D]/70 text-[15px] md:text-[16px] mt-4 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Eine Transaktion ist jeder Ein- oder Ausgang in Ihrem Lager. Das kann eine Bestellung, eine Retoure oder eine Lagerbewegung sein.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 md:p-8">
              <summary className="text-[#01182D] text-[18px] md:text-[20px] font-light cursor-pointer list-none flex justify-between items-center" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Gibt es eine Mindestlaufzeit?
                <span className="text-[#01182D]/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-[#01182D]/70 text-[15px] md:text-[16px] mt-4 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Nein, es gibt keine Mindestlaufzeit. Sie können jederzeit kündigen und zahlen nur für die tatsächlich genutzten Transaktionen.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 md:p-8">
              <summary className="text-[#01182D] text-[18px] md:text-[20px] font-light cursor-pointer list-none flex justify-between items-center" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Wie funktioniert die Abrechnung?
                <span className="text-[#01182D]/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-[#01182D]/70 text-[15px] md:text-[16px] mt-4 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
                Die Abrechnung erfolgt monatlich nachträglich basierend auf Ihrer tatsächlichen Nutzung. Sie erhalten eine transparente Rechnung per E-Mail.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

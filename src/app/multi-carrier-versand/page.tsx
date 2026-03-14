'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from '@/components/layout/Header';

const carriers = [
  { name: 'DHL', icon: '/media/icons/dhl.png', color: '#FFCC00' },
  { name: 'DPD', icon: '/media/icons/dpd.png', color: '#DC0032' },
  { name: 'FedEx', icon: '/media/icons/fedex.png', color: '#4D148C' },
  { name: 'GLS', icon: '/media/icons/gls.png', color: '#0C4C98' },
  { name: 'UPS', icon: '/media/icons/ups.png', color: '#351C15' }
];

export default function MultiCarrierVersandPage() {
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);

  // Scramble-Effekt Funktion
  const scramble = (element: HTMLElement | null, finalText: string, delay: number = 0) => {
    if (!element) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!%&*';
    const duration = 0.8;
    const fps = 30;
    const frames = Math.floor(duration * fps);

    setTimeout(() => {
      let frame = 0;
      const interval = setInterval(() => {
        if (frame >= frames) {
          clearInterval(interval);
          element.textContent = finalText;
          return;
        }

        const progress = frame / frames;
        const charsToShow = Math.floor(finalText.length * progress);
        let currentText = finalText.substring(0, charsToShow);

        if (charsToShow < finalText.length) {
          // Füge Zufallszeichen hinzu für den "Scramble"-Look
          for (let j = 0; j < 2; j++) {
            currentText += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = currentText;
        frame++;
      }, 1000 / fps);
    }, delay * 1000);
  };

  useGSAP(() => {
    // Scramble Effekte starten
    scramble(text1Ref.current, 'Einfach Verbinden,', 0.2);
    scramble(text2Ref.current, 'Versenden,', 0.5);
    scramble(text3Ref.current, 'Tracken', 0.8);
  }, []);

  useEffect(() => {
    // Verhindere normales Scrollen
    document.body.style.overflow = 'hidden';

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Akkumuliere Scroll-Delta
      setScrollAccumulator(prev => {
        const newValue = prev + e.deltaY;
        // Clamp zwischen 0 und maximaler Scroll-Distanz
        return Math.max(0, Math.min(newValue, (carriers.length - 1) * 800));
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Berechne aktuelle Karte und Progress basierend auf Scroll-Akkumulator
  const currentCardIndex = Math.min(Math.floor(scrollAccumulator / 800), carriers.length - 1);
  const cardProgress = (scrollAccumulator % 800) / 800;

  // Aktuelle Carrier-Farbe
  const currentCarrierColor = carriers[currentCardIndex]?.color || '#FFCC00';

  // Berechne Style für jede Karte
  const getCardStyle = (index: number) => {
    const diff = index - currentCardIndex;

    if (diff < 0) {
      // Bereits durchgescrollt - fliegt nach links raus
      return {
        transform: `translateX(-120%) rotate(-12deg) scale(0.9)`,
        opacity: 0,
        zIndex: index,
      };
    } else if (diff === 0) {
      // Aktuelle Karte - animiert beim Wegscrollen
      const rotation = -12 * cardProgress;
      const xOffset = -120 * cardProgress;
      const scale = 1 - (0.1 * cardProgress);
      const opacity = 1 - cardProgress;

      return {
        transform: `translateX(${xOffset}%) rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 100,
      };
    } else if (diff === 1) {
      // Nächste Karte - kommt von hinten nach vorne
      const rotation = 2 - (2 * cardProgress);
      const scale = 0.95 + (0.05 * cardProgress);
      const opacity = 0.7 + (0.3 * cardProgress);

      return {
        transform: `translateX(0) rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 50,
      };
    } else {
      // Weitere Karten dahinter
      return {
        transform: `translateX(0) rotate(${2 + (diff - 1)}deg) scale(${0.93 - ((diff - 1) * 0.02)})`,
        opacity: 0.4,
        zIndex: 50 - diff,
      };
    }
  };

  return (
    <main className="fixed inset-0 bg-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Fixed Content - Headline + Cards */}
      <div className="fixed inset-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
        <div className="absolute top-1/2 left-8 md:left-16 lg:left-24 -translate-y-1/2 z-10">
          <h1
            className="text-[#01182D] text-[40px] md:text-[56px] lg:text-[64px] font-extralight leading-[1.1] tracking-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            <span ref={text1Ref} className="block"></span>
            <span ref={text2Ref} className="block"></span>
            <span ref={text3Ref} className="block"></span>
          </h1>
        </div>

        {/* Card Stack - rechts */}
        <div className="relative w-[90vw] max-w-[500px] aspect-square">
          {carriers.map((carrier, index) => (
            <div
              key={carrier.name}
              className="absolute inset-0"
              style={{
                ...getCardStyle(index),
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                className="w-full h-full rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center"
                style={{ backgroundColor: carrier.color }}
              >
                <div className="relative w-1/2 h-1/2">
                  <Image
                    src={carrier.icon}
                    alt={carrier.name}
                    fill
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#01182D]/40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="text-[12px] font-light" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Scroll zum Durchblättern
          </span>
        </div>
      </div>
    </main>
  );
}

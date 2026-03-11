'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const woomsData = [
  { letter: 'W', word: 'Warehouse', startX: '-120vw', startY: '-60vh', startRotate: -30 },
  { letter: 'O', word: 'Operational', startX: '110vw', startY: '-50vh', startRotate: 25 },
  { letter: 'O', word: 'Optimized', startX: '-100vw', startY: '70vh', startRotate: -20 },
  { letter: 'M', word: 'Machine Learning', startX: '90vw', startY: '80vh', startRotate: 15 },
  { letter: 'S', word: 'Sustainable', startX: '30vw', startY: '-110vh', startRotate: -10 },
];

export default function WoomsAcronym() {
  const container = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
  const wordLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const finalWordRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const letters = lettersRef.current.filter(Boolean) as HTMLDivElement[];
    const wordLabels = wordLabelsRef.current.filter(Boolean) as HTMLSpanElement[];

    // Set initial scattered positions
    letters.forEach((letter, i) => {
      gsap.set(letter, {
        x: woomsData[i].startX,
        y: woomsData[i].startY,
        rotation: woomsData[i].startRotate,
        opacity: 0,
        scale: 1.8,
      });
    });

    // Hide word labels initially
    wordLabels.forEach(label => {
      gsap.set(label, { opacity: 0, y: 10 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1.5,
      }
    });

    // Phase 1: Letters fly in from all directions to center, staggered
    letters.forEach((letter, i) => {
      tl.to(letter, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
      }, i * 0.3);
    });

    // Phase 2: Word labels fade in after letters settle
    wordLabels.forEach((label, i) => {
      tl.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, 2.5 + i * 0.15);
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative bg-white h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#01182D 1px, transparent 1px), linear-gradient(90deg, #01182D 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex items-end gap-2 md:gap-4 lg:gap-6">
        {woomsData.map((item, i) => (
          <div
            key={i}
            ref={el => { lettersRef.current[i] = el; }}
            className="flex flex-col items-center"
          >
            {/* The big letter */}
            <span
              className="font-light leading-none select-none"
              style={{
                fontSize: 'clamp(80px, 14vw, 200px)',
                color: i % 2 === 0 ? '#01182D' : '#D1B06B',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-geist-sans, sans-serif)',
              }}
            >
              {item.letter.toLowerCase()}
            </span>

            {/* The word label */}
            <span
              ref={el => { wordLabelsRef.current[i] = el; }}
              className="text-center font-light tracking-widest uppercase mt-2"
              style={{
                fontSize: 'clamp(8px, 1.2vw, 14px)',
                color: '#01182D',
                opacity: 0.5,
                letterSpacing: '0.2em',
                maxWidth: '120px',
                lineHeight: 1.3,
              }}
            >
              {item.word}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div
        className="absolute bottom-16 left-0 right-0 text-center"
        style={{ opacity: 0.3 }}
      >
        <p
          className="font-light tracking-[0.4em] uppercase text-[#01182D]"
          style={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }}
        >
          More than a WMS
        </p>
      </div>
    </section>
  );
}

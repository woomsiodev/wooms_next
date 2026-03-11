'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeamHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero Title Animation - Split word reveal
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.1
    });

    // Subtitle fade in
    tl.from('.hero-subtitle', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.6');

    // Scroll indicator
    tl.from('.scroll-indicator', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen bg-gradient-to-br from-[#01182D] via-[#01182D] to-[#0a2540] flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D1B06B] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] w-full mx-auto text-center relative z-10">

        {/* Main Title */}
        <div className="mb-12 overflow-hidden">
          <h1 className="hero-title text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold leading-[0.9] tracking-[-0.04em] text-white uppercase">
            Das Team
          </h1>
        </div>

        <div className="mb-8 overflow-hidden">
          <h1 className="hero-title text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold leading-[0.9] tracking-[-0.04em] text-[#D1B06B] uppercase">
            hinter wooms
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[800px] mx-auto">
          <p className="hero-subtitle text-[20px] md:text-[24px] lg:text-[28px] font-light leading-[1.6] text-white/80">
            KI-first denken. Lagerboden verstehen. Zukunft bauen.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#D1B06B] rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}

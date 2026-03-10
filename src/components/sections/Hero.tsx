'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const scramble = (element: HTMLElement | null, finalText: string, delay: number = 0) => {
    if (!element) return;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!%&*';
    const duration = 1.5;
    const obj = { value: 0 };

    gsap.to(obj, {
      value: finalText.length,
      duration: duration,
      delay: delay,
      ease: 'none',
      onUpdate: () => {
        const i = Math.floor(obj.value);
        let currentText = finalText.substring(0, i);
        
        if (i < finalText.length) {
          // Füge Zufallszeichen hinzu für den "Scramble"-Look
          for (let j = 0; j < 2; j++) {
            currentText += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        element.innerText = currentText;
      }
    });
  };

  useGSAP(() => {
    // Reveal Animation für den gesamten Block
    gsap.from('.reveal-container', {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Scramble Effekte starten
    scramble(text1Ref.current, 'Gemeinsam, Lager', 0.2);
    scramble(text2Ref.current, 'weiter entwickeln.', 0.5);

    // Video Animation
    gsap.to('.reveal-video', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden font-sans">
      {/* Headline - Noto Sans Regular 400 mit Scramble Animation */}
      <div className="reveal-container z-10 text-center w-full pt-[35vh] pb-[10vh] px-4">
        <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-normal tracking-[-0.03em] leading-[0.85] text-[#01182D]">
          <div className="overflow-hidden inline-block min-h-[1.1em]">
            <span ref={text1Ref} className="block"></span>
          </div>
          <br />
          <div className="overflow-hidden inline-block min-h-[1.1em]">
            <span ref={text2Ref} className="block"></span>
          </div>
        </h1>
      </div>

      {/* Video Container */}
      <div className="w-full px-4 md:px-12 pb-32 mt-[10px] reveal-video opacity-0 translate-y-20">
        <div className="relative aspect-[21/9] w-full rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl bg-gray-50 group">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/Shopify-Return-Handling.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#01182D]/10 group-hover:bg-transparent transition-colors duration-700" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1.2px] h-20 bg-[#01182D]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#01182D]/80 animate-scroll-indicator" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2.5s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </section>
  );
}

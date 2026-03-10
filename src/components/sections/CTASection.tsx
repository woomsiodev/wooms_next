'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animation für die gebogenen Zeilen
    const lines = gsap.utils.toArray('.reveal-line');
    
    lines.forEach((line: any) => {
      gsap.fromTo(line, 
        { 
          y: '100%', 
          rotateX: -40, // Der "gebogene" Effekt beim Reinkommen
          opacity: 0,
          transformOrigin: 'top center'
        },
        {
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1,
          },
          y: 0,
          rotateX: 0,
          opacity: 1,
          ease: 'power3.out',
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#F5F2ED] py-[20vh] px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        <div ref={headlineRef} className="flex flex-col items-start space-y-2 mb-4">
          
          <div className="overflow-hidden py-2">
            <h2 className="reveal-line text-[10vw] md:text-[9vw] lg:text-[8.5vw] font-normal leading-[0.9] tracking-[-0.03em] text-[#01182D] uppercase">
              More than a WMS
            </h2>
          </div>

          <div className="overflow-hidden py-2">
            <h2 className="reveal-line text-[10vw] md:text-[9vw] lg:text-[8.5vw] font-normal leading-[0.9] tracking-[-0.03em] text-[#01182D] uppercase">
              The AI Powered
            </h2>
          </div>

          <div className="overflow-hidden py-2">
            <h2 className="reveal-line text-[10vw] md:text-[9vw] lg:text-[8.5vw] font-normal leading-[0.9] tracking-[-0.03em] text-[#01182D] uppercase">
              OS for warehouses
            </h2>
          </div>

        </div>

        {/* Bereich: Buttons links, Text rechts (Platzierung wie About Section) */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-4 gap-12 lg:gap-16 max-w-[90%] mx-auto w-full" style={{ paddingLeft: '55px' }}>

          {/* Buttons links gestapelt (Kugelsicher gegen Zerdrücken) */}
          <div className="flex flex-col gap-6 lg:mt-12 shrink-0">
            <a
              href="https://register.wooms.io/"
              className="group inline-flex items-center gap-16 px-12 py-6 rounded-full border border-[#D1B06B] hover:border-[#01182D] transition-all duration-700 whitespace-nowrap"
            >
              <span className="text-[16px] font-medium text-[#01182D] uppercase tracking-[0.25em]">START SETUP</span>
              <ArrowUpRight size={28} strokeWidth={1.5} className="text-[#01182D] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
            </a>

            <a
              href="https://apps.shopify.com/wooms-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-16 px-12 py-6 rounded-full border border-[#D1B06B] hover:border-[#01182D] transition-all duration-700 whitespace-nowrap"
            >
              <span className="text-[16px] font-medium text-[#01182D] uppercase tracking-[0.25em]">SHOPIFY APP STORE</span>
              <ArrowUpRight size={28} strokeWidth={1.5} className="text-[#01182D] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
            </a>
          </div>
          {/* Subline Text rechts */}
          <div className="max-w-[550px] shrink-1 lg:ml-auto lg:mr-[5%]">
            <div className="space-y-8">
              <p className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5] text-[#01182D]/70">
                Die wooms Architektur wurde von Grund auf für die Cloud-native Logistik entwickelt. Als erstes Betriebssystem seiner Art verbindet es physische Prozesse mit digitaler Intelligenz in Echtzeit. Es ermöglicht eine nahtlose Skalierung über mehrere Standorte hinweg, ohne dass zusätzliche Infrastruktur vor Ort benötigt wird.
              </p>
              <p className="text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5] text-[#01182D]/70">
                Durch die nahtlose Integration in das Shopify-Ecosystem entfällt komplexe Middleware. Ihr Lager wird zu einem reaktionsschnellen Knotenpunkt, der autonom auf Marktanforderungen reagiert. Dies reduziert Fehlerquoten drastisch und steigert die Durchlaufgeschwindigkeit Ihrer Bestellungen um bis zu 40%, während gleichzeitig die Betriebskosten sinken.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

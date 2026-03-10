'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Software() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.reveal-about', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-[20vh] px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Block 1: Große Headline (zentriert auf 1200px max-width, Blockbreite 90%, Text linksbündig) */}
        <div className="w-full mb-4">
          <h2 className="reveal-about text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.5] text-[#01182D] tracking-[-0.02em] max-w-[90%] mx-auto text-left">
            Fullservice-Software, die Dein Shopify Fulfillment / E-Commerce-Lager Schritt für Schritt weiterbringt – mit Beratung von unseren Partnern und echten Warehouse-Experten.
          </h2>
        </div>

        {/* Block 2: Unterer Bereich (Button links, Subline rechts) */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-4 gap-12 lg:gap-16 max-w-[90%] mx-auto w-full" style={{ paddingLeft: '55px' }}>

          {/* Button links (Kugelsicher gegen Zerdrücken) */}
          <div className="reveal-about lg:mt-12 shrink-0">
            <a
              href="https://apps.shopify.com/wooms-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-16 px-12 py-6 rounded-full border border-[#D1B06B] hover:border-[#01182D] transition-all duration-700 whitespace-nowrap"
            >
              <span className="text-[16px] font-medium text-[#01182D] uppercase tracking-[0.25em]">PARTNERSHIP</span>
              <ArrowUpRight size={28} strokeWidth={1.5} className="text-[#01182D] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
            </a>
          </div>

          {/* Subline rechts */}
          <div className="max-w-[550px] shrink-1 lg:ml-auto lg:mr-[5%]">
            <p className="reveal-about text-[18px] md:text-[22px] lg:text-[26px] leading-[1.5] text-[#01182D]/70 font-light">
              Flexibilität bedeutet, sich den Gegebenheiten anpassen zu können. Jede Infrastruktur ist anders – deshalb arbeiten wir zahlenbasiert und prozessorientiert. Von der Annahme bis zur Retour: Jeder Klick wird getrackt. Denn während veraltete Systeme Ihr Budget verbrennen und Fehlerquoten steigen lassen, liefert wooms die Datenbasis für nachhaltigen Erfolg. Das ist die wooms Vision: Eine Software, die Shopify-Händler reibungslos durch den gesamten Fulfillment-Prozess begleitet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import IcebergAnimation from '@/components/animations/IcebergAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeamStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Timeline for story sections
    const sections = gsap.utils.toArray('.story-section');

    sections.forEach((section: any, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        ease: 'power2.out',
      });
    });

    // Animate the accent line
    gsap.from('.accent-line', {
      scrollTrigger: {
        trigger: '.accent-line',
        start: 'top 80%',
      },
      scaleX: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-[20vh] px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <p className="text-[14px] md:text-[16px] font-light tracking-widest mb-4 text-[#01182D]/60 uppercase">
            Unsere Geschichte
          </p>
          <div className="accent-line w-24 h-1 bg-[#D1B06B] origin-left"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-16">

          {/* First Paragraph */}
          <div className="story-section max-w-[900px]">
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.2] mb-8 text-[#01182D]">
              KI-first Warehouse Management aus Berlin
            </h2>
            <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] text-[#01182D]/70 font-light">
              wooms WMS GmbH ist ein KI-first Warehouse-Management-System aus Berlin – gebaut für schnell wachsende E-Commerce-Lager und Fulfillment-Teams. Wir verbinden Shop und Lager in Echtzeit: Bestellungen, Bestände und Tracking laufen automatisiert, während mobile Scanner-Workflows Wareneingang, Picking, Packing, Versand und Retouren sicher führen.
            </p>
          </div>

          {/* Second Paragraph - Grid Layout */}
          <div className="story-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.3] mb-6 text-[#D1B06B]">
                Die Gründer
              </h3>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-[#01182D]/70 font-light">
                Gegründet wurde wooms von <strong className="font-semibold text-[#01182D]">Ansgar Sohn</strong>, der seit den 2010er-Jahren Software- und Logistikprojekte unternehmerisch vorantreibt und seit 2017 tief in der E‑Commerce‑Lagerpraxis steckt.
              </p>
            </div>

            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-[#01182D]/70 font-light">
                An seiner Seite steht <strong className="font-semibold text-[#01182D]">Abbas Dhebar</strong>, Co‑Founder und Full‑Stack‑Engineer. Mit einem Bachelor of Engineering an der Gujarat Technological University (GTU) und einem starken Fokus auf moderner Produktentwicklung bringt er Geschwindigkeit in Plattform, Integrationen und UX.
              </p>
            </div>

          </div>

          {/* Third Paragraph */}
          <div className="story-section max-w-[900px] bg-[#F5F2ED] p-8 md:p-12 rounded-3xl">
            <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.3] mb-6 text-[#01182D]">
              5 Jahre Innovation: Von reaktiv zu prädiktiv
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-[#01182D]/70 font-light mb-6">
              Seit fünf Jahren entwickeln wir gemeinsam Lösungen an der Schnittstelle von Code und Lagerboden: nicht nur messbare KPIs, sondern prädiktive Analysen die zeigen, was unter der Oberfläche passiert – bevor es zum Problem wird.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-[#01182D]/70 font-light">
              Unser <strong className="font-semibold text-[#D1B06B]">AI‑Schwarmkonzept Sofarew</strong> orchestriert spezialisierte Modelle für Prediction, Pattern Recognition und autonome Entscheidungsfindung. Das Ergebnis: Dein Lager antizipiert Engpässe, optimiert Routen in Echtzeit und skaliert automatisch – ohne dass du eingreifen musst.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export function IcebergSection() {
  const [icebergPos, setIcebergPos] = useState({ x: 0, y: 0, rotation: 0 });

  const handlePositionUpdate = (x: number, y: number, rotation: number) => {
    setIcebergPos({ x, y, rotation });
  };

  return (
    <section className="relative">
      {/* Iceberg Animation Fullscreen */}
      <IcebergAnimation onPositionUpdate={handlePositionUpdate} />

      {/* Overlay Text - synced with iceberg movement */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{
          marginTop: '-350px',
          transform: `translate(${(icebergPos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.3}px, ${icebergPos.y * 0.3}px) rotate(${icebergPos.rotation}rad)`
        }}
      >
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] text-white mb-8 drop-shadow-2xl">
            Mehr AI-Prediction. Volle Transparenz über das, was unter dem Eisberg passiert.
          </h3>
          <p className="text-[18px] md:text-[22px] lg:text-[24px] text-white/90 font-semibold leading-[1.7] max-w-[800px] mx-auto drop-shadow-xl" style={{ marginTop: '250px' }}>
            Die meisten Lager sehen nur die Spitze des Eisbergs – wir zeigen dir, was darunter liegt: Engpässe bevor sie entstehen, Muster die sich wiederholen, und Optimierungen die dein System selbst vorschlägt.
          </p>
        </div>
      </div>
    </section>
  );
}

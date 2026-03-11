'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeamVision() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate vision text with parallax
    gsap.from('.vision-text', {
      scrollTrigger: {
        trigger: '.vision-text',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      ease: 'power2.out',
    });

    // Animate stats
    const stats = gsap.utils.toArray('.stat-item');
    stats.forEach((stat: any, index) => {
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: 'power3.out',
      });
    });

    // Animate CTA button
    gsap.from('.cta-button', {
      scrollTrigger: {
        trigger: '.cta-button',
        start: 'top 90%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative bg-gradient-to-br from-[#01182D] to-[#0a2540] py-[20vh] px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#D1B06B] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#D1B06B] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Vision Statement */}
        <div className="vision-text mb-20">
          <p className="text-[14px] md:text-[16px] font-light tracking-widest mb-6 text-white/60 uppercase">
            Unsere Vision
          </p>
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] text-white mb-12 max-w-[900px]">
            Die Zukunft der Logistik ist autonom, intelligent und menschenzentriert
          </h2>
          <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] text-white/80 font-light max-w-[800px]">
            Wir bauen nicht nur Software – wir erschaffen ein Ökosystem, in dem KI und Menschen zusammenarbeiten, um die komplexesten logistischen Herausforderungen zu lösen. Jede Zeile Code, jeder Algorithmus, jede Entscheidung ist darauf ausgerichtet, Lager effizienter, resilient und zukunftssicher zu machen.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-[48px] md:text-[56px] font-bold text-[#D1B06B] mb-3">
              5+
            </div>
            <p className="text-[16px] md:text-[18px] text-white/70 font-light">
              Jahre intensive Entwicklung an der Schnittstelle von Code und Lagerboden
            </p>
          </div>

          <div className="stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-[48px] md:text-[56px] font-bold text-[#D1B06B] mb-3">
              100%
            </div>
            <p className="text-[16px] md:text-[18px] text-white/70 font-light">
              KI-first Ansatz – von Grund auf für autonome Warehouse-Intelligence gebaut
            </p>
          </div>

          <div className="stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-[48px] md:text-[56px] font-bold text-[#D1B06B] mb-3">
              24/7
            </div>
            <p className="text-[16px] md:text-[18px] text-white/70 font-light">
              Echtzeit-Orchestrierung für kontinuierliche Prozessoptimierung
            </p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block cta-button">
            <a
              href="https://register.wooms.io/"
              className="group inline-flex items-center gap-8 px-16 py-8 rounded-full bg-[#D1B06B] hover:bg-[#D1B06B]/90 transition-all duration-500 shadow-2xl hover:shadow-[#D1B06B]/20"
            >
              <span className="text-[18px] md:text-[20px] font-bold text-white uppercase tracking-[0.2em]">
                Teil des Teams werden
              </span>
              <ArrowUpRight
                size={32}
                strokeWidth={2.5}
                className="text-white transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
              />
            </a>
          </div>

          <p className="mt-8 text-[14px] md:text-[16px] text-white/50 font-light">
            Wir suchen talentierte Engineers, Designer und Logistik-Enthusiasten
          </p>
        </div>

      </div>
    </section>
  );
}

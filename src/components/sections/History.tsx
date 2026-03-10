'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  { year: '1917', title: 'Der erste Gabelstapler', description: 'Maschinen heben, bewegen und stapeln. Lager werden vertikal – und skalierbar.', video: '/media/warehouse_evolution/1917_Gabelstapler.mp4' },
  { year: '1950er', title: 'Papierbasierte Lagerverwaltung', description: 'Picklisten, Zuruf, Erfahrung. Das Lager funktioniert – solange es klein bleibt.', video: '/media/warehouse_evolution/1950_Papier_Lagerverwaltung.mp4' },
  { year: '1956', title: 'Containerisierung', description: 'Standardisierung senkt Umschlagzeiten und Kosten. Supply Chains werden weltweit planbar.', video: '/media/warehouse_evolution/1956_Erste_Containerbewegung_.mp4' },
  { year: '1974', title: 'Barcode (UPC)', description: 'Ware bekommt eine maschinenlesbare Identität. Scanning wird Basis für Bestandsführung.', video: '/media/warehouse_evolution/1974_Barcode_Scan_Kasse.mp4' },
  { year: '1979', title: 'EDI (Electronic Data Interchange)', description: 'Bestellungen, Lieferscheine und Statusmeldungen laufen digital zwischen Unternehmen.', video: '/media/warehouse_evolution/1979_EDI.mp4' },
  { year: '1980er', title: 'Erste IT-gestützte Lagerverwaltung / WMS', description: 'Lagerlogik wird Software: Plätze, Bewegungen, Bestände. Meist starr, regelbasiert, oft ohne Echtzeit.', video: '/media/warehouse_evolution/1980_Lagersoftware.mp4' },
  { year: '2012', title: 'Mobile Lagerrobotik skaliert', description: 'Roboterflotten reduzieren Laufwege und erhöhen Output. Automatisierung wird wirtschaftlich skalierbar.', video: '/media/warehouse_evolution/2012Lagerroboter_Ware-zum_Mann.mp4' },
  { year: 'Heute', title: 'wooms AI', description: 'KI-first WMS: lernende Flows statt starrer Workflows. Orchestrierung, Automatisierung und Echtzeit-Entscheidungen.', isHighlight: true },
  { year: '2030+', title: 'Selbstoptimierende Lager', description: 'Autonome Orchestrierung von Flotten, Wegen, Prioritäten und Kapazitäten – das Lager denkt mit.', video: '/media/warehouse_evolution/2030_Future_Warehouse.mp4' }
];

export default function History() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.history-card');

    if (horizontalRef.current && sections.length > 0) {
      const scrollWidth = horizontalRef.current.scrollWidth - window.innerWidth;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${scrollWidth}`,
        }
      });
    }
  }, { scope: container, dependencies: [] });

  return (
    <section ref={container} className="relative bg-[#01182D] overflow-hidden" style={{ height: '100vh' }}>

      {/* Header */}
      <div className="absolute top-8 md:top-16 left-8 md:left-16 z-20 text-white">
        <p className="text-[14px] md:text-[16px] font-light tracking-wider mb-2 text-white/60 uppercase">
          Ein Blick zurück
        </p>
        <h2 className="text-[48px] md:text-[64px] lg:text-[84px] font-bold leading-[1] tracking-tight">
          HISTORIE
        </h2>
        <div className="mt-4 w-24 h-1 bg-[#D1B06B]"></div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={horizontalRef} className="flex h-full items-center">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="history-card flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="max-w-[900px] w-full">

              {/* Year Badge */}
              <div className={`inline-block px-6 py-2 rounded-full border-2 mb-8 ${
                item.isHighlight
                  ? 'border-[#D1B06B] bg-[#D1B06B]/10'
                  : 'border-white/30 bg-white/5'
              }`}>
                <span className={`text-[18px] md:text-[22px] font-bold tracking-wider ${
                  item.isHighlight ? 'text-[#D1B06B]' : 'text-white'
                }`}>
                  {item.year}
                </span>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Video or Icon */}
                <div className="relative">
                  {item.video ? (
                    <div
                      className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border-2 border-white/10 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) video.play();
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm video-overlay pointer-events-none transition-opacity">
                        <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#D1B06B] to-[#01182D] flex items-center justify-center border-2 border-[#D1B06B]">
                      <svg width="120" height="120" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="white" opacity="0.2" />
                        <circle cx="50" cy="50" r="20" fill="white" opacity="0.4" />
                        <circle cx="50" cy="50" r="10" fill="white" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="text-white">
                  <h3 className={`text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.1] mb-6 ${
                    item.isHighlight ? 'text-[#D1B06B]' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-[18px] md:text-[22px] leading-[1.6] text-white/80 font-light">
                    {item.description}
                  </p>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {timelineData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === 0 ? 'bg-[#D1B06B] w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

    </section>
  );
}

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Ecosystem() {
  const container = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(circleRef.current, {
      scrollTrigger: {
        trigger: circleRef.current,
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white pt-[20vh] pb-0 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center">

        {/* Goldener Kreis mit Text - unten abgeschnitten */}
        <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
          <div
            ref={circleRef}
            className="relative w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] lg:w-[60vw] lg:h-[60vw] max-w-[800px] max-h-[800px] rounded-full border-2 border-[#D1B06B] flex items-center justify-center p-12 md:p-16 lg:p-20 mx-auto"
          >
            <div className="text-center max-w-[85%]" style={{ marginTop: 'calc(-25% - 25px)' }}>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-normal leading-[1.4] text-[#01182D] tracking-[-0.02em]">
                Shopify & wooms bilden das perfekte Ecosystem.
              </h2>
              <p className="mt-4 text-[18px] md:text-[22px] lg:text-[26px] font-light leading-[1.5] text-[#01182D]/70">
                Ob für Fulfillment-Kunden, Fulfiller oder größere E-Commerce Stores mit Support Teams – perfekt abgestimmt.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

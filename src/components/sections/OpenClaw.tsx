'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OpenClaw() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-16 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        <div ref={contentRef} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* Logo auf der linken Seite */}
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] relative">
              <Image
                src="/assets/openclaw-logo.png"
                alt="OPENCLAW Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text auf der rechten Seite */}
          <div className="flex-1">
            <h3 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-[#01182D] tracking-tight mb-4">
              OPENCLAW
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.7] text-[#01182D]/70">
              It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control.
              The Gateway is just the control plane — the product is the assistant.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

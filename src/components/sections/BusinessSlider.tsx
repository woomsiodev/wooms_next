'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const businessAreas = [
  {
    id: 1,
    title: 'Versand',
    image: '/assets/slider/Versand_Software_Shopify_DHL-DPD-GLS-Fedex-UPS.png',
    label: 'VERSAND'
  },
  {
    id: 2,
    title: 'Kunden',
    image: '/assets/slider/Fulfillment_Login_Shopify_App_Dashboard.png',
    label: 'KUNDEN'
  },
  {
    id: 3,
    title: 'Branding',
    image: '/assets/slider/white-label_WMS_Login_shopify.png',
    label: 'BRANDING'
  },
  {
    id: 4,
    title: 'AI',
    image: '/assets/slider/shopify_AI_WMS_Scanner.png',
    label: 'AI'
  },
  {
    id: 5,
    title: 'Retouren',
    image: '/assets/slider/shopify_AI_WMS_Scanner.png',
    label: 'RETOUREN'
  }
];

export default function BusinessSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(sliderRef.current, {
      scrollTrigger: {
        trigger: sliderRef.current,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % businessAreas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + businessAreas.length) % businessAreas.length);
  };

  return (
    <section ref={container} className="relative bg-white -mt-[15vh] pb-[10vh] px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Navigation Buttons - Positioned in top left */}
        <div className="absolute top-[120px] left-8 md:left-16 lg:left-24 z-20">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-[106px] h-[106px] md:w-[132px] md:h-[132px] rounded-full border-2 border-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:border-white hover:bg-white/10"
              aria-label="Previous slide"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[106px] h-[106px] md:w-[132px] md:h-[132px] rounded-full border-2 border-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:border-white hover:bg-white/10"
              aria-label="Next slide"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-white text-2xl font-light">
            <span className="text-[#D1B06B]">{currentSlide + 1}</span>
            <span className="text-white/60">|{businessAreas.length}</span>
          </div>
        </div>

        {/* Slider Container - Full Width */}
        <div ref={sliderRef} className="relative w-screen h-screen overflow-hidden -mx-8 md:-mx-16 lg:-mx-24">
          {businessAreas.map((area, index) => (
            <div
              key={area.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <h2 className="text-[64px] md:text-[96px] lg:text-[120px] font-bold tracking-tight !text-white">
                  {area.title}
                </h2>
                <button className="mt-12 px-12 py-4 border-2 border-white rounded-full text-sm uppercase tracking-[0.2em] font-semibold transition-all hover:bg-white hover:text-[#01182D] flex items-center gap-3 text-white">
                  MEHR DAZU
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Tabs */}
        <div className="relative -mt-[80px] z-20 flex justify-center">
          <div className="bg-white/95 backdrop-blur-md rounded-full border-2 border-[#D1B06B] px-8 md:px-12 py-6 flex gap-6 md:gap-10 shadow-xl">
            {businessAreas.map((area, index) => (
              <button
                key={area.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-sm md:text-base font-semibold tracking-[0.15em] transition-all flex items-center gap-2 ${
                  index === currentSlide
                    ? 'text-[#D1B06B]'
                    : 'text-[#01182D]/50 hover:text-[#01182D]'
                }`}
              >
                {area.label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={index === currentSlide ? 'opacity-100' : 'opacity-0'}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

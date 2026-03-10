'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

export default function ShopifyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-label', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-video', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.6');
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#959574] pt-[360px] pb-20 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Label */}
        <div className="hero-label mb-12 flex justify-center">
          <Image
            src="/media/logos/Shopify Logo_Monotone_White_PNG.PNG"
            alt="Shopify Logo"
            width={200}
            height={60}
            className="h-auto"
          />
        </div>

        {/* Headline */}
        <div className="hero-title mb-20 text-center">
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-light leading-[1.1] text-white tracking-tight">
            Verbunden mit Leidenschaft.<br />
            Getrieben von AI.
          </h1>
        </div>

        {/* Video */}
        <div className="hero-video w-full">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/media/shopify/shopify_app_wooms_fulfillment.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}

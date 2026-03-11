'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShopifyCTA() {
  const container = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnPrimaryRef = useRef<HTMLAnchorElement>(null);
  const btnSecondaryRef = useRef<HTMLAnchorElement>(null);
  const decorLeft = useRef<HTMLDivElement>(null);
  const decorRight = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Initial hidden states
    gsap.set([badgeRef.current, starsRef.current], { opacity: 0, y: -20 });
    gsap.set(headlineRef.current, { opacity: 0, y: 60, scale: 0.95 });
    gsap.set(subRef.current, { opacity: 0, y: 30 });
    gsap.set([btnPrimaryRef.current, btnSecondaryRef.current], { opacity: 0, y: 20, scale: 0.95 });
    gsap.set(decorLeft.current, { opacity: 0, x: -80, scale: 0.8 });
    gsap.set(decorRight.current, { opacity: 0, x: 80, scale: 0.8 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(decorLeft.current, { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, 0)
      .to(decorRight.current, { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, 0)
      .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.1)
      .to(starsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.2)
      .to(headlineRef.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }, 0.3)
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.55)
      .to(btnPrimaryRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, 0.75)
      .to(btnSecondaryRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, 0.88);

    // Subtle floating animation on the primary button (continuous)
    gsap.to(btnPrimaryRef.current, {
      y: -6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    });

    // Slow drift on decor blobs
    gsap.to(decorLeft.current, {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(decorRight.current, {
      y: -20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative bg-[#01182D] overflow-hidden py-[18vh] px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center"
    >
      {/* Decorative blobs */}
      <div
        ref={decorLeft}
        className="absolute top-[-80px] left-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(209,176,107,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        ref={decorRight}
        className="absolute bottom-[-80px] right-[-120px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(209,176,107,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto">

        {/* Shopify badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#D1B06B]/30 bg-[#D1B06B]/10"
        >
          {/* Shopify bag icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 5H8.5L6 19h12L15.5 5Z" stroke="#D1B06B" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M9 9c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#D1B06B" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[#D1B06B] text-[13px] font-medium tracking-[0.15em] uppercase">
            Shopify App Store
          </span>
        </div>

        {/* Stars / social proof */}
        <div ref={starsRef} className="flex items-center justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#D1B06B">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="ml-2 text-white/50 text-[14px] font-light">Free to install</span>
        </div>

        {/* Headline */}
        <div ref={headlineRef}>
          <h2
            className="font-light text-white leading-[1] tracking-tight mb-6"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
          >
            Get the{' '}
            <span
              className="font-light"
              style={{
                background: 'linear-gradient(135deg, #D1B06B 0%, #f0d090 50%, #D1B06B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              wooms
            </span>
            {' '}App
          </h2>
        </div>

        {/* Subline */}
        <p
          ref={subRef}
          className="text-white/60 font-light leading-relaxed mb-12 max-w-[580px] mx-auto"
          style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}
        >
          Verbinde deinen Shopify-Store mit dem KI-gestützten Warehouse Management System — kostenlos, in einem Klick.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            ref={btnPrimaryRef}
            href="https://apps.shopify.com/wooms-wms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-[#01182D] font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(209,176,107,0.5)] hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #D1B06B 0%, #e8c87a 100%)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 5H8.5L6 19h12L15.5 5Z" stroke="#01182D" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M9 9c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#01182D" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Jetzt installieren
          </a>

          <a
            ref={btnSecondaryRef}
            href="#demo"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-white/20 text-white/80 font-light transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5"
            style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}
          >
            Demo ansehen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-white/30 text-[13px] font-light tracking-widest uppercase">
          Über 230 Shopify-Stores · Kostenlos · KI-gestützt
        </p>

      </div>
    </section>
  );
}

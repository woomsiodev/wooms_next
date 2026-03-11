'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedRisingLineBackground from '@/components/animations/AnimatedRisingLineBackground';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShopifyStats() {
  const container = useRef<HTMLDivElement>(null);
  const [installations, setInstallations] = useState(0);
  const [orders, setOrders] = useState(0);
  const [uptime, setUptime] = useState(0);

  useGSAP(() => {
    if (!container.current) return;

    // ── Set initial hidden states ──────────────────────────────────────────
    gsap.set('.stats-title, .stats-subtitle', { opacity: 0, y: 40 });
    gsap.set('.stat-card', { opacity: 0, y: 60 });
    gsap.set('.feature-badge', { opacity: 0, y: 30 });

    // ── Title + subtitle ──────────────────────────────────────────────────
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top 75%',
      onEnter: () => {
        gsap.to('.stats-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
        gsap.to('.stats-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.15, ease: 'power3.out' });
      },
      onLeaveBack: () => {
        gsap.to('.stats-title, .stats-subtitle', { opacity: 0, y: 40, duration: 0.5, ease: 'power2.in' });
      },
    });

    // ── Stat cards — ScrollTrigger.batch fires per element reliably ───────
    gsap.set('.stat-card', { opacity: 0, y: 60 });

    ScrollTrigger.batch('.stat-card', {
      start: 'top 88%',
      onEnter: (els) => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: true,
        });
      },
      onLeaveBack: (els) => {
        gsap.to(els, {
          opacity: 0,
          y: 60,
          duration: 0.5,
          ease: 'power2.in',
          overwrite: true,
        });
      },
    });

    // ── Counters — tied to card visibility ────────────────────────────────
    ScrollTrigger.create({
      trigger: '.stat-card',
      start: 'top 88%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: 230, duration: 2.5, ease: 'power2.out',
          onUpdate: function () { setInstallations(Math.floor(this.targets()[0].val)); },
        });
        gsap.to({ val: 0 }, {
          val: 125000, duration: 3, ease: 'power2.out',
          onUpdate: function () { setOrders(Math.floor(this.targets()[0].val)); },
        });
        gsap.to({ val: 0 }, {
          val: 99.9, duration: 2, ease: 'power2.out',
          onUpdate: function () { setUptime(this.targets()[0].val); },
        });
      },
      onLeaveBack: () => {
        setInstallations(0);
        setOrders(0);
        setUptime(0);
      },
    });

    // ── Feature badges ────────────────────────────────────────────────────
    ScrollTrigger.batch('.feature-badge', {
      start: 'top 92%',
      onEnter: (els) => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          overwrite: true,
        });
      },
      onLeaveBack: (els) => {
        gsap.to(els, {
          opacity: 0,
          y: 30,
          duration: 0.4,
          ease: 'power2.in',
          overwrite: true,
        });
      },
    });

    // ── Background (continuous) ───────────────────────────────────────────
    gsap.to('.bg-circle-1', { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
    gsap.to('.bg-circle-2', { rotation: -360, duration: 25, repeat: -1, ease: 'none' });
    gsap.to('.wooms-pulse', { scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  }, { scope: container });

  return (
    <section ref={container} className="relative isolate bg-[#F5F2ED] py-[20vh] px-8 md:px-16 lg:px-24 overflow-hidden">

      <AnimatedRisingLineBackground
        className="opacity-50"
        strokeColor="#D1B06B"
        glowColor="rgba(209, 176, 107, 0.35)"
        gridColor="rgba(209, 176, 107, 0.15)"
        fillColor="rgba(209, 176, 107, 0.12)"
        speed={1.5}
        lineWidth={3}
        opacity={0.8}
      />

      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-circle-1 rounded-full bg-[#D1B06B]/10" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-circle-2 rounded-full bg-[#D1B06B]/10" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="stats-title text-[40px] md:text-[50px] lg:text-[60px] font-light text-[#01182D] tracking-tight mb-6">
            Zahlen, die für sich sprechen
          </h2>
          <p className="stats-subtitle text-[20px] md:text-[24px] text-[#01182D]/60 font-light">
            Über <span className="wooms-pulse inline-block font-medium text-[#D1B06B]">230 Shopify-Stores</span> vertrauen auf wooms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">01</div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {installations}+
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">Shopify Installationen</h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                Und es werden täglich mehr – wooms wächst mit deinem Business
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">02</div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {orders.toLocaleString('de-DE')}+
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">Bestellungen verarbeitet</h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                Pro Monat. KI-gesteuert, fehlerfrei und in Echtzeit synchronisiert
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">03</div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {uptime.toFixed(1)}%
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">System Uptime</h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                24/7 verfügbar. Dein Lager schläft nie – und wooms auch nicht
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

        </div>

        {/* Feature Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Webhooks', sub: 'Unbegrenzt' },
            { label: 'Sync', sub: 'Echtzeit' },
            { label: 'AI', sub: 'KI-Powered' },
            { label: 'Security', sub: 'Enterprise' },
          ].map((item) => (
            <div key={item.label} className="feature-badge text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-[28px] font-medium text-[#D1B06B] mb-2">{item.label}</div>
              <p className="text-[14px] text-[#01182D]/70 font-light">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

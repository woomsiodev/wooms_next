'use client';

import { useRef, useState, useEffect } from 'react';
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
    // Counter Animations mit ScrollTrigger
    gsap.to('.stat-number', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        onEnter: () => {
          // Installationen Counter
          gsap.to({ val: 0 }, {
            val: 230,
            duration: 2.5,
            ease: 'power2.out',
            onUpdate: function() {
              setInstallations(Math.floor(this.targets()[0].val));
            }
          });

          // Bestellungen Counter
          gsap.to({ val: 0 }, {
            val: 125000,
            duration: 3,
            ease: 'power2.out',
            onUpdate: function() {
              setOrders(Math.floor(this.targets()[0].val));
            }
          });

          // Uptime Counter
          gsap.to({ val: 0 }, {
            val: 99.9,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              setUptime(this.targets()[0].val);
            }
          });
        }
      }
    });

    // Title Animation
    gsap.from('.stats-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Floating Cards Animation
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
      y: 100,
      opacity: 0,
      rotation: 5,
      stagger: 0.2,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)'
    });

    // Pulsing wooms text
    gsap.to('.wooms-pulse', {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Rotating circles in background
    gsap.to('.bg-circle-1', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    gsap.to('.bg-circle-2', {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'none'
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative isolate bg-[#F5F2ED] py-[20vh] px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Animated Rising Line Background */}
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

      {/* Animated Background Circles */}
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-circle-1 rounded-full bg-[#D1B06B]/10"></div>
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-circle-2 rounded-full bg-[#D1B06B]/10"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="stats-title text-[40px] md:text-[50px] lg:text-[60px] font-light text-[#01182D] tracking-tight mb-6">
            Zahlen, die für sich sprechen
          </h2>
          <p className="text-[20px] md:text-[24px] text-[#01182D]/60 font-light">
            Über <span className="wooms-pulse inline-block font-medium text-[#D1B06B]">230 Shopify-Stores</span> vertrauen auf wooms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Stat Card 1 - Installationen */}
          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">
              01
            </div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {installations}+
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">
                Shopify Installationen
              </h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                Und es werden täglich mehr – wooms wächst mit deinem Business
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Stat Card 2 - Bestellungen */}
          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">
              02
            </div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {orders.toLocaleString('de-DE')}+
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">
                Bestellungen verarbeitet
              </h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                Pro Monat. KI-gesteuert, fehlerfrei und in Echtzeit synchronisiert
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Stat Card 3 - Uptime */}
          <div className="stat-card group relative bg-white rounded-[40px] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-8 right-8 text-[100px] font-bold text-[#D1B06B]/10 leading-none">
              03
            </div>
            <div className="relative z-10">
              <div className="text-[60px] md:text-[70px] font-normal text-[#01182D] mb-4 stat-number">
                {uptime.toFixed(1)}%
              </div>
              <h3 className="text-[24px] font-light text-[#01182D] mb-3">
                System Uptime
              </h3>
              <p className="text-[16px] text-[#01182D]/60 font-light leading-relaxed">
                24/7 verfügbar. Dein Lager schläft nie – und wooms auch nicht
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D1B06B] to-[#01182D] rounded-b-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-[28px] font-medium text-[#D1B06B] mb-2">Webhooks</div>
            <p className="text-[14px] text-[#01182D]/70 font-light">Unbegrenzt</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-[28px] font-medium text-[#D1B06B] mb-2">Sync</div>
            <p className="text-[14px] text-[#01182D]/70 font-light">Echtzeit</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-[28px] font-medium text-[#D1B06B] mb-2">AI</div>
            <p className="text-[14px] text-[#01182D]/70 font-light">KI-Powered</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-[28px] font-medium text-[#D1B06B] mb-2">Security</div>
            <p className="text-[14px] text-[#01182D]/70 font-light">Enterprise</p>
          </div>
        </div>

      </div>
    </section>
  );
}

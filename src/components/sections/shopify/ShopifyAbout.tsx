'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Physics2DPlugin);
}

export default function ShopifyAbout() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const combinations = [
    'Shopify x wooms x weclapp',
    'Shopify x wooms x easybill',
    'Shopify x wooms x Lexware',
    'Shopify x wooms x sevdesk',
    'Shopify x wooms x pathway',
  ];

  useGSAP(() => {
    gsap.from('.reveal-shopify-about', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: container });

  useEffect(() => {
    if (!textRef.current) return;

    gsap.set(textRef.current, { opacity: 1 });
    const chars = textRef.current.querySelectorAll('.char');
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % combinations.length);
        }, 100);
      }
    });

    // Elastic in animation
    tl.from(chars, {
      duration: 1,
      y: 100,
      rotation: 90,
      opacity: 0,
      ease: 'elastic',
      stagger: 0.03
    });

    // Explosion with Physics2D
    tl.to(chars, {
      duration: 2.5,
      opacity: 0,
      rotation: () => gsap.utils.random(-2000, 2000),
      physics2D: {
        angle: () => gsap.utils.random(240, 320),
        velocity: () => gsap.utils.random(300, 600),
        gravity: 800
      },
      stagger: 0.015
    }, '+=2');

  }, [currentIndex]);

  return (
    <section ref={container} className="bg-white py-[20vh] px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col">

        {/* Block 1: Große Headline (zentriert auf 1200px max-width, Blockbreite 90%, Text linksbündig) */}
        <div className="w-full mb-4">
          <h2 className="reveal-shopify-about text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.5] text-[#01182D] tracking-[-0.02em] max-w-[90%] mx-auto text-left">
            Die perfekte Symbiose aus{' '}
            <span
              ref={textRef}
              className="inline-block relative"
              style={{ minWidth: '500px', minHeight: '60px', opacity: 0 }}
            >
              {combinations[currentIndex].split('').map((char, i) => (
                <span
                  key={`${currentIndex}-${i}`}
                  className="char inline-block"
                  style={{ position: 'relative' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            {' '}verbindet dein E-Commerce mit KI-gestützter Lagerintelligenz, perfekter Bestandsübersicht in Echtzeit und automatisierten Webhooks für nahtlose Prozesse.
          </h2>
        </div>

        {/* Block 2: Unterer Bereich (Button links, Subline rechts) */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-4 gap-12 lg:gap-16 max-w-[90%] mx-auto w-full" style={{ paddingLeft: '55px' }}>

          {/* Shopify Badge links */}
          <div className="reveal-shopify-about lg:mt-12 shrink-0" style={{ marginLeft: '20px', marginTop: '50px' }}>
            <a
              href="https://apps.shopify.com/wooms-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover-float"
            >
              <Image
                src="/media/logos/badge-shopify-app-store-dark.png"
                alt="Available on Shopify App Store"
                width={288}
                height={86}
                className="h-auto"
              />
            </a>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .hover-float {
              animation: float 3s ease-in-out infinite;
            }
            .hover-float:hover {
              animation-play-state: paused;
              transform: translateY(-5px);
              transition: transform 0.3s ease;
            }
          `}</style>

          {/* Subline rechts */}
          <div className="max-w-[550px] shrink-1 lg:ml-auto lg:mr-[5%]">
            <p className="reveal-shopify-about text-[18px] md:text-[22px] lg:text-[26px] leading-[1.5] text-[#01182D]/70 font-light">
              wooms ist die Brücke zwischen Shopify und deiner gesamten Business-Software. Als First-Source-Lösung direkt an Shopify angebunden, synchronisiert wooms Bestellungen, Bestände und Versandprozesse in Echtzeit mit deiner Warenwirtschaft – egal ob weclapp, Lexware, sevdesk, easybill oder pathway.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

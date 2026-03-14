'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';

const screenshots = [
  { id: 1, src: '/media/images/shopify_app_dashboard_order_WMS.webp', alt: 'Scanner App Dashboard' },
  { id: 2, src: '/media/images/shopify_Barcode-Scanner_app.webp', alt: 'Barcode Scanner Interface' },
  { id: 3, src: '/media/images/shopify_picklist_app.webp', alt: 'Kommissionierung' },
  { id: 4, src: '/media/images/shopify_Scanner_app.webp', alt: 'Scanner App' }
];

export default function ScannerAppPage() {
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const text1Ref = useRef<HTMLSpanElement>(null);

  // Scramble-Effekt Funktion
  const scramble = (element: HTMLElement | null, finalText: string, delay: number = 0) => {
    if (!element) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!%&*';
    const duration = 0.8;
    const fps = 30;
    const frames = Math.floor(duration * fps);

    setTimeout(() => {
      let frame = 0;
      const interval = setInterval(() => {
        if (frame >= frames) {
          clearInterval(interval);
          element.textContent = finalText;
          return;
        }

        const progress = frame / frames;
        const charsToShow = Math.floor(finalText.length * progress);
        let currentText = finalText.substring(0, charsToShow);

        if (charsToShow < finalText.length) {
          for (let j = 0; j < 2; j++) {
            currentText += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = currentText;
        frame++;
      }, 1000 / fps);
    }, delay * 1000);
  };

  useGSAP(() => {
    scramble(text1Ref.current, 'Scanner App für Shopify Fulfillment', 0.2);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollAccumulator(prev => {
        const newValue = prev + e.deltaY;
        const maxScroll = screenshots.length * 800;
        // Endlosschleife: Modulo verwenden
        return ((newValue % maxScroll) + maxScroll) % maxScroll;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const currentScreenshotIndex = Math.floor(scrollAccumulator / 800) % screenshots.length;
  const screenProgress = (scrollAccumulator % 800) / 800;

  const getScreenshotStyle = (index: number) => {
    // Berechne die Differenz mit Wrap-around für Endlosschleife
    let diff = index - currentScreenshotIndex;

    // Normalisiere die Differenz für Endlosschleife
    if (diff > screenshots.length / 2) {
      diff -= screenshots.length;
    } else if (diff < -screenshots.length / 2) {
      diff += screenshots.length;
    }

    if (diff < 0) {
      return {
        transform: `translateX(-120%) rotate(-12deg) scale(0.9)`,
        opacity: 0,
        zIndex: index,
      };
    } else if (diff === 0) {
      const rotation = -12 * screenProgress;
      const xOffset = -120 * screenProgress;
      const scale = 1 - (0.1 * screenProgress);
      const opacity = 1 - screenProgress;

      return {
        transform: `translateX(${xOffset}%) rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 100,
      };
    } else if (diff === 1) {
      const rotation = 2 - (2 * screenProgress);
      const scale = 0.95 + (0.05 * screenProgress);
      const opacity = 0.7 + (0.3 * screenProgress);

      return {
        transform: `translateX(0) rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 50,
      };
    } else {
      return {
        transform: `translateX(0) rotate(${2 + (diff - 1)}deg) scale(${0.93 - ((diff - 1) * 0.02)})`,
        opacity: 0.4,
        zIndex: 50 - diff,
      };
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Scanner App für Shopify Fulfillment | Barcode Scanner App Shopify | wooms</title>
        <meta name="description" content="Professionelle Shopify Scanner App für Barcode-Scanning, Kommissionierung und Lagerverwaltung. WMS Scanner App für effizientes Shopify Fulfillment." />
        <meta name="keywords" content="Shopify Scanner App, Barcode Scanner App Shopify, Lager Scanner App, Scanner App Fulfillment, Kommissionierung App, Barcode Scanner Lager, WMS Scanner App, Lagerverwaltung Shopify" />
      </head>

      {/* Header - AUSSERHALB des fixed containers */}
      <Header />

      {/* Fixed Content - mit niedrigerem z-index als Header */}
      <div className="fixed inset-0 bg-white overflow-hidden z-0">
        <div className="fixed inset-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
          <div className="absolute top-1/2 left-8 md:left-16 lg:left-24 -translate-y-1/2 z-10">
            <h1
              className="text-[#01182D] text-[40px] md:text-[56px] lg:text-[64px] font-extralight leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              <span ref={text1Ref} className="block"></span>
            </h1>

            {/* Store Badges */}
            <div className="mt-12 flex items-start gap-6">
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=de.woomspwa.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>

              {/* Apple App Store Badge - Coming Soon */}
              <div className="relative">
                <div className="opacity-30 cursor-not-allowed">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#01182D] text-white px-3 py-1 rounded-full text-[11px] font-medium tracking-tight shadow-lg" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Stack - rechts */}
          <div className="relative w-[35vw] max-w-[320px] aspect-[9/16]">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="absolute inset-0"
                style={{
                  ...getScreenshotStyle(index),
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="w-full h-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-white flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#01182D]/40">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce" style={{ animationDelay: '150ms' }}>
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
            <span className="text-[12px] font-light" style={{ fontFamily: 'Lexend, sans-serif' }}>
              Endlos scrollen
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

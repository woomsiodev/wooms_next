'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const showcaseData = [
  {
    title: 'Shopify App Store',
    subtitle: 'SHOPIFY.COM',
    description: 'Die wooms WMS App nahtlos in deinen Shopify-Store integrieren. Ein Klick – und dein Lager wird intelligent.',
    bgColor: '#FFFFFF', // Weiß nach Guidelines
    type: 'solid' as const,
    hasSearchAnimation: true
  },
  {
    title: 'Automatische Synchronisation',
    subtitle: 'Immer in Sync',
    description: 'Webhooks triggern sofortige Updates. Neue Bestellung in Shopify? wooms weiß es in Millisekunden.',
    media: '/media/shopify/sync.mp4',
    type: 'video' as const,
    color: '#01182D'
  },
  {
    title: 'Intelligente Kommissionierung',
    subtitle: 'KI-optimierte Wege',
    description: 'Unser AI-Algorithmus plant die schnellsten Routen durchs Lager. Weniger Laufwege, mehr Picks pro Stunde.',
    media: '/media/shopify/picking.mp4',
    type: 'video' as const,
    color: '#D1B06B'
  },
  {
    title: 'Multi-Channel Ready',
    subtitle: 'Ein System, alle Kanäle',
    description: 'Shopify, Amazon, eBay – wooms orchestriert alle Channels in einem einzigen Fulfillment-Hub.',
    media: '/media/shopify/multichannel.mp4',
    type: 'video' as const,
    color: '#01182D'
  }
];

export default function ShopifyShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorProgress, setCursorProgress] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showScreenshot, setShowScreenshot] = useState(false);
  const searchPillRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const hasTyped = useRef(false);

  // Typing Animation - Scroll-based with PIN
  useGSAP(() => {
    if (!container.current) return;

    const fullText = 'wooms WMS Shopify App';

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: '+=2000', // 2000px scroll distance for typing
      pin: true, // PIN the section while scrolling
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        const charCount = Math.round(self.progress * fullText.length);
        const text = fullText.substring(0, charCount);
        setSearchText(text);

        // Show cursor when typing is complete
        if (self.progress >= 1 && !showCursor) {
          setShowCursor(true);
        }
      }
    });
  }, { scope: container });

  // Cursor Animation - starts after typing is complete
  useGSAP(() => {
    if (!showCursor) return;

    // Animate cursor progress from 0 to 1 over 1.5 seconds
    gsap.to({ progress: 0 }, {
      progress: 1,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        setCursorProgress(this.targets()[0].progress);
      },
      onComplete: () => {
        // Trigger button click when cursor reaches the button
        setButtonClicked(true);

        // Show screenshot after a short delay
        setTimeout(() => {
          setShowScreenshot(true);
        }, 300);
      }
    });
  }, { dependencies: [showCursor] });

  // Screenshot Animation - fades in after button click
  useGSAP(() => {
    if (!showScreenshot || !screenshotRef.current) return;

    gsap.fromTo(screenshotRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }, { dependencies: [showScreenshot] });

  // TEMPORARILY DISABLED - Testing typing animation only
  // useGSAP(() => {
  //   const sections = gsap.utils.toArray('.showcase-panel');

  //   if (horizontalRef.current && sections.length > 0) {
  //     const scrollWidth = horizontalRef.current.scrollWidth - window.innerWidth;

  //     // Horizontal Scroll
  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: container.current,
  //         pin: true,
  //         scrub: 1.5,
  //         start: 'top top',
  //         snap: {
  //           snapTo: 1 / (sections.length - 1),
  //           duration: 0.5,
  //           ease: 'power2.inOut'
  //         },
  //         end: () => `+=${scrollWidth * 1.5}`,
  //         onUpdate: (self) => {
  //           const index = Math.round(self.progress * (sections.length - 1));
  //           setCurrentIndex(index);
  //         }
  //       }
  //     });

  //     // Parallax effect for media
  //     sections.forEach((section: any, i) => {
  //       const media = section.querySelector('.showcase-media');
  //       if (media) {
  //         gsap.to(media, {
  //           scale: 1.1,
  //           ease: 'none',
  //           scrollTrigger: {
  //             trigger: section,
  //             containerAnimation: gsap.to(sections, {
  //               xPercent: -100 * (sections.length - 1),
  //               ease: 'none'
  //             }),
  //             start: 'left right',
  //             end: 'right left',
  //             scrub: true
  //           }
  //         });
  //       }
  //     });
  //   }
  // }, { scope: container });

  return (
    <section ref={container} className="relative bg-[#F5F2ED] overflow-hidden h-screen">

      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-8 -translate-y-1/2 z-50 flex flex-col gap-3">
        {showcaseData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#D1B06B] h-8'
                : 'bg-[#01182D]/30'
            }`}
          />
        ))}
      </div>

      {/* Only show first panel for now - testing typing animation */}
      <div ref={horizontalRef} className="h-screen">
        {showcaseData.slice(0, 1).map((item, index) => (
          <div
            key={index}
            className="showcase-panel w-full h-screen relative overflow-hidden"
          >
            {/* Fullscreen Background */}
            <div className="absolute inset-0 showcase-media">
              {item.type === 'solid' ? (
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: item.bgColor }}
                />
              ) : item.type === 'video' ? (
                <>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.media} type="video/mp4" />
                  </video>
                  {/* Overlay Gradient nur bei Videos */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </>
              ) : (
                <>
                  <img
                    src={item.media}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </>
              )}
            </div>

            {/* Search Animation (only on first panel) */}
            {index === 0 && item.hasSearchAnimation && (
              <>
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div
                    ref={searchPillRef}
                    className="relative bg-white/95 backdrop-blur-xl shadow-2xl flex items-center px-8 border border-[#01182D]/10"
                    style={{
                      width: '600px',
                      height: '80px',
                      borderRadius: '40px'
                    }}
                  >
                    {/* Text */}
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[22px] font-light text-[#01182D] whitespace-nowrap">
                        {searchText}
                        {searchText && searchText.length < 21 && (
                          <span className="animate-pulse ml-1">|</span>
                        )}
                      </span>

                      {/* Install Button - immer sichtbar */}
                      <button
                        className={`install-button ml-4 px-8 py-3 bg-[#D1B06B] text-white rounded-full text-[16px] font-medium shadow-lg flex-shrink-0 pointer-events-auto transition-all duration-200 ${
                          buttonClicked ? 'scale-95 shadow-md' : 'scale-100'
                        }`}
                      >
                        Install
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated Cursor */}
                {showCursor && index === 0 && (() => {
                  const button = searchPillRef.current?.querySelector('.install-button');
                  if (!button) return null;

                  const buttonRect = button.getBoundingClientRect();
                  // Start position: left side of screen, vertically centered
                  const startX = window.innerWidth * 0.3;
                  const startY = window.innerHeight * 0.5;
                  // End position: center of Install button
                  const endX = buttonRect.left + buttonRect.width / 2;
                  const endY = buttonRect.top + buttonRect.height / 2;

                  // Create a curved path using a quadratic bezier curve
                  // Control point is above the midpoint for an arc effect
                  const midX = (startX + endX) / 2;
                  const midY = (startY + endY) / 2 - 100; // 100px above midpoint for arc

                  // Quadratic bezier formula: B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
                  const t = cursorProgress;
                  const currentX = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * midX + Math.pow(t, 2) * endX;
                  const currentY = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * midY + Math.pow(t, 2) * endY;

                  return (
                    <>
                      <div
                        ref={cursorRef}
                        className="fixed z-50 pointer-events-none"
                        style={{
                          left: `${currentX}px`,
                          top: `${currentY}px`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#01182D" stroke="white" strokeWidth="1.5">
                          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                        </svg>
                      </div>

                      {/* Click ripple effect when button is clicked */}
                      {buttonClicked && (
                        <div
                          className="fixed z-50 pointer-events-none"
                          style={{
                            left: `${endX}px`,
                            top: `${endY}px`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className="absolute w-8 h-8 bg-[#D1B06B]/30 rounded-full animate-ping"></div>
                          <div className="absolute w-8 h-8 bg-[#D1B06B]/20 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* Screenshot - appears after button click */}
                {showScreenshot && (
                  <div
                    ref={screenshotRef}
                    className="absolute inset-0 z-30 flex items-center justify-center p-16 pointer-events-none"
                    style={{ paddingTop: 'calc(4rem + 95px)' }}
                  >
                    <img
                      src="/media/screenshots/Shopify_App_Store_Screenshot_wooms_WMS_Kunden_Fulfillment_Dashboard.png"
                      alt="wooms WMS Dashboard"
                      className="max-w-[80%] max-h-[75vh] rounded-3xl shadow-2xl border-4 border-white/20"
                    />
                  </div>
                )}
              </>
            )}

            {/* Animated Cursor */}
            {showCursor && index === 0 && (() => {
              const button = searchPillRef.current?.querySelector('.install-button');
              if (!button) return null;

              const buttonRect = button.getBoundingClientRect();
              // Start position: left side of screen, vertically centered
              const startX = window.innerWidth * 0.3;
              const startY = window.innerHeight * 0.5;
              // End position: center of Install button
              const endX = buttonRect.left + buttonRect.width / 2;
              const endY = buttonRect.top + buttonRect.height / 2;

              // Create a curved path using a quadratic bezier curve
              // Control point is above the midpoint for an arc effect
              const midX = (startX + endX) / 2;
              const midY = (startY + endY) / 2 - 100; // 100px above midpoint for arc

              // Quadratic bezier formula: B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
              const t = cursorProgress;
              const currentX = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * midX + Math.pow(t, 2) * endX;
              const currentY = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * midY + Math.pow(t, 2) * endY;

              return (
                <>
                  <div
                    ref={cursorRef}
                    className="fixed z-50 pointer-events-none"
                    style={{
                      left: `${currentX}px`,
                      top: `${currentY}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#01182D" stroke="white" strokeWidth="1.5">
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                  </div>

                  {/* Click ripple effect when button is clicked */}
                  {buttonClicked && (
                    <div
                      className="fixed z-50 pointer-events-none"
                      style={{
                        left: `${endX}px`,
                        top: `${endY}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute w-8 h-8 bg-[#D1B06B]/30 rounded-full animate-ping"></div>
                      <div className="absolute w-8 h-8 bg-[#D1B06B]/20 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                    </div>
                  )}
                </>
              );
            })()}

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
              {index === 0 ? (
                /* Erstes Slide - Clean, nur für Animation */
                <div className="max-w-[900px] w-full text-center">
                  {/* Platz für Search Animation */}
                </div>
              ) : (
                /* Andere Slides - Altes Design */
                <div className="max-w-[800px] w-full">
                  <p className="text-[16px] md:text-[18px] font-medium text-[#D1B06B] mb-4 uppercase tracking-[0.3em]">
                    {item.subtitle}
                  </p>
                  <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-light text-white leading-[0.95] tracking-tight mb-6">
                    {item.title}
                  </h2>
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] text-white/90 font-light leading-[1.5] max-w-[600px]">
                    {item.description}
                  </p>
                  <div className="mt-12 inline-flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D1B06B] flex items-center justify-center">
                      <span className="text-[20px] font-bold text-[#01182D]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="h-[2px] w-24 bg-white/30" />
                    <span className="text-white/60 text-[14px] font-light">
                      {showcaseData.length} Features
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Element */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
              style={{ backgroundColor: item.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

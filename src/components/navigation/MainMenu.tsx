'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  // Bestimme Hintergrundfarbe basierend auf der aktuellen Seite
  const getBackgroundColor = () => {
    if (pathname === '/shopify') return 'bg-[#ddddd2]';
    return 'bg-white';
  };
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        '.menu-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.menu-item',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.submenu-item',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, delay: 0.4, ease: 'power3.out' }
      );
    }
  }, { dependencies: [isOpen] });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div className={`menu-overlay fixed inset-0 ${getBackgroundColor()} z-50 overflow-y-auto`}>
      <div className="h-full flex flex-col">
        <div className="max-w-[1400px] w-full mx-auto px-12 lg:px-20 py-8 flex-1 flex flex-col min-h-0">

          {/* Header */}
          <div className="flex items-center justify-center mb-12 flex-shrink-0 relative">
            {/* Logo - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/assets/wooms_WMS_GmbH_Logo.svg"
                alt="wooms WMS GmbH Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-5 group ml-auto"
            >
              <div className="w-[70px] h-[70px] rounded-full border-2 border-[#01182D] flex items-center justify-center transition-all group-hover:bg-[#01182D]/5 flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#01182D" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <span className="text-[22px] font-light text-[#01182D] tracking-tight whitespace-nowrap">Schließen</span>
            </button>
          </div>

          {/* Menu Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 flex-1 min-h-0">

          {/* Left Column - Main Navigation */}
          <div className="flex flex-col justify-between lg:pl-[300px]">
            <nav>
              <ul className="space-y-4">
                <li
                  className="menu-item"
                  onMouseEnter={() => setActiveMenuItem('home')}
                >
                  <a
                    href="/"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 block ${
                      pathname === '/' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'home' ? 'translate-x-4' : ''}`}
                  >
                    Home
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => {
                    setHoveredItem('ueber-uns');
                    setActiveMenuItem('ueber-uns');
                  }}
                >
                  <a
                    href="/ueber-uns"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 flex items-center gap-3 ${
                      pathname === '/ueber-uns' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'ueber-uns' ? 'translate-x-4' : ''}`}
                  >
                    Über uns
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      className={`transition-all ${
                        hoveredItem === 'ueber-uns' ? 'translate-x-1' : ''
                      } ${activeMenuItem === 'ueber-uns' ? 'stroke-[#D1B06B]' : 'stroke-current'}`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => setActiveMenuItem('shopify')}
                >
                  <a
                    href="/shopify"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 block ${
                      pathname === '/shopify' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'shopify' ? 'translate-x-4' : ''}`}
                  >
                    Shopify
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => setActiveMenuItem('verantwortung')}
                >
                  <a
                    href="/verantwortung"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 block ${
                      pathname === '/verantwortung' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'verantwortung' ? 'translate-x-4' : ''}`}
                  >
                    Verantwortung
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => {
                    setHoveredItem('ai-funktionen');
                    setActiveMenuItem('ai-funktionen');
                  }}
                >
                  <a
                    href="/ai-funktionen"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 flex items-center gap-3 ${
                      pathname === '/ai-funktionen' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'ai-funktionen' ? 'translate-x-4' : ''}`}
                  >
                    AI Funktionen
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      className={`transition-all ${
                        hoveredItem === 'ai-funktionen' ? 'translate-x-1' : ''
                      } ${activeMenuItem === 'ai-funktionen' ? 'stroke-[#D1B06B]' : 'stroke-current'}`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => {
                    setHoveredItem('loesungen');
                    setActiveMenuItem('loesungen');
                  }}
                >
                  <a
                    href="/loesungen"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 flex items-center gap-3 ${
                      pathname === '/loesungen' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'loesungen' ? 'translate-x-4' : ''}`}
                  >
                    Lösungen
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      className={`transition-all ${
                        hoveredItem === 'loesungen' ? 'translate-x-1' : ''
                      } ${activeMenuItem === 'loesungen' ? 'stroke-[#D1B06B]' : 'stroke-current'}`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => setActiveMenuItem('preise')}
                >
                  <a
                    href="/preise"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-all duration-300 block ${
                      pathname === '/preise' ? 'font-bold' : 'font-normal'
                    } ${activeMenuItem === 'preise' ? 'translate-x-4' : ''}`}
                  >
                    Preise
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom Links */}
            <div className="mt-auto space-y-3 pb-6">
              <a
                href="/kontakt"
                className="menu-item text-[18px] text-[#01182D]/60 hover:text-[#01182D] transition-colors block"
                onMouseEnter={() => {
                  setHoveredItem('kontakt');
                  setActiveMenuItem('kontakt');
                }}
              >
                Kontakt
              </a>
              <a href="/presse" className="menu-item text-[18px] text-[#01182D]/60 hover:text-[#01182D] transition-colors block">
                Presse
              </a>
              <a href="/newsletter" className="menu-item text-[18px] text-[#01182D]/60 hover:text-[#01182D] transition-colors block">
                Newsletter
              </a>
            </div>
          </div>

          {/* Right Column - Submenu */}
          <div className="lg:pl-12 lg:border-l border-[#01182D]/10 flex flex-col justify-between">
            {hoveredItem === 'ueber-uns' && (
              <div>
                <h4 className="text-[20px] font-semibold text-[#D1B06B] mb-6 uppercase tracking-wider">
                  Unternehmensprofil
                </h4>
                <ul className="space-y-3">
                  <li className="submenu-item">
                    <a href="/team" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Team
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/friends" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Freunde
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/partner" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Partner
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/geschichte" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Geschichte
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {hoveredItem === 'loesungen' && (
              <div>
                <h4 className="text-[20px] font-semibold text-[#D1B06B] mb-6 uppercase tracking-wider">
                  Unsere Lösungen
                </h4>
                <ul className="space-y-3">
                  <li className="submenu-item">
                    <a href="/scanner-app" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Scanner-App
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/haendler-dashboard" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Händler-Dashboard
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/retourenmanagement" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Retourenmanagement
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/multi-carrier-versand" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Multi-Carrier-Versand
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/personal-tracking" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Personal-Tracking
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {hoveredItem === 'ai-funktionen' && (
              <div>
                <h4 className="text-[20px] font-semibold text-[#D1B06B] mb-6 uppercase tracking-wider">
                  KI-gestützte Features
                </h4>
                <ul className="space-y-3">
                  <li className="submenu-item">
                    <a href="/ai-adressguardian" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      AI-Adressguardian
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/ai-fullfiller" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      AI-Fullfiller
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/ai-report" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      AI-Report
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/cloudbot" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Cloudbot
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/ai-empty-bin" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      AI-Empty-Bin
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/dronefly" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      DroneFly (BETA)
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {hoveredItem === 'kontakt' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-[20px] font-semibold text-[#D1B06B] mb-4 uppercase tracking-wider">
                    Kontakt
                  </h4>
                  <div className="w-full h-[200px] bg-[#01182D]/5 rounded-lg overflow-hidden border border-[#01182D]/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1699707991717!2d13.2724663!3d52.4114348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85be1300ea131%3A0x4e93fe2bdfc86048!2swooms%20WMS%20GmbH!5e0!3m2!1sde!2sde!4v1234567890!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <img
                        src="/media/logos/Digital_Glyph_Dark_Green.png"
                        alt="WhatsApp"
                        className="h-[32px] w-auto"
                      />
                      <a
                        href="tel:+4917472118113"
                        className="text-[17px] text-[#01182D] hover:text-[#D1B06B] transition-colors font-medium"
                      >
                        0174 721 18 13
                      </a>
                    </div>
                    <a
                      href="https://calendly.com/start-wooms/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-[#01182d] text-white rounded-full text-[14px] font-medium hover:bg-[#D1B06B] transition-colors"
                    >
                      Termin buchen
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Links - immer unten */}
            <div className="mt-auto space-y-2 pb-6">
              <a href="/impressum" className="submenu-item text-[14px] text-[#01182D]/50 hover:text-[#01182D] transition-colors block">
                Impressum
              </a>
              <a href="/datenschutz" className="submenu-item text-[14px] text-[#01182D]/50 hover:text-[#01182D] transition-colors block">
                Datenschutz
              </a>
              <a href="/agb" className="submenu-item text-[14px] text-[#01182D]/50 hover:text-[#01182D] transition-colors block">
                AGB
              </a>
            </div>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}

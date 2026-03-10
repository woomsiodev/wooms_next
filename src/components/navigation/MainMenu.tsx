'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
                <li className="menu-item">
                  <a
                    href="/"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li
                  className="menu-item"
                  onMouseEnter={() => setHoveredItem('ueber-uns')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href="/ueber-uns"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors flex items-center gap-3 ${
                      pathname === '/ueber-uns' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Über uns
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${
                        hoveredItem === 'ueber-uns' ? 'translate-x-1' : ''
                      }`}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/shopify"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/shopify' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Shopify
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/verantwortung"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/verantwortung' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Verantwortung
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/ai-funktionen"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/ai-funktionen' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    AI Funktionen
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/social-wall"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/social-wall' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Social Wall
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/karriere"
                    className={`text-[36px] leading-tight text-[#01182D] hover:text-[#D1B06B] transition-colors block ${
                      pathname === '/karriere' ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    Karriere
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom Links */}
            <div className="mt-auto space-y-3 pb-6">
              <a href="/kontakt" className="menu-item text-[18px] text-[#01182D]/60 hover:text-[#01182D] transition-colors block">
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

          {/* Right Column - Submenu (nur beim Hover auf Über uns) */}
          <div className="lg:pl-12 lg:border-l border-[#01182D]/10 flex flex-col justify-between">
            {hoveredItem === 'ueber-uns' && (
              <div>
                <h4 className="text-[20px] font-semibold text-[#D1B06B] mb-6 uppercase tracking-wider">
                  Unternehmensprofil
                </h4>
                <ul className="space-y-3">
                  <li className="submenu-item">
                    <a href="/stiftungsrat" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Stiftungsrat
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/vorstand" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Vorstand
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="/team" className="text-[17px] text-[#01182D]/80 hover:text-[#01182D] transition-colors block">
                      Team
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

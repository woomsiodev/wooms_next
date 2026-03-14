'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MessageSquare, ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import MainMenu from '@/components/navigation/MainMenu';
import AIChat from '@/components/chat/AIChat';

export default function Header() {
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll-Listener für Shopify-Seite, Team-Seite, Preise-Seite und DroneFly-Seite
  useEffect(() => {
    if (pathname !== '/shopify' && pathname !== '/team' && pathname !== '/preise' && pathname !== '/dronefly') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Liste der Seiten mit transparentem Header
  const transparentPages = ['/shopify', '/team', '/preise', '/dronefly', '/presse'];
  const isTransparentPage = transparentPages.includes(pathname);

  // Liste der Seiten ohne Pill (nur Inhalt sichtbar)
  const noPillPages = ['/scanner-app', '/multi-carrier-versand'];
  const isNoPillPage = noPillPages.includes(pathname);

  // Bestimme Header-Hintergrund basierend auf der aktuellen Seite und Scroll-Position
  const getHeaderBackground = () => {
    if (isTransparentPage) {
      return scrolled ? 'bg-white/70' : 'bg-transparent';
    }
    return 'bg-white/70';
  };

  // Bestimme ob Shadow und Border angezeigt werden sollen
  const getHeaderStyles = () => {
    if (isTransparentPage) {
      return scrolled
        ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-white/20'
        : 'shadow-none border-transparent';
    }
    return 'shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-white/20';
  };

  // Bestimme Textfarbe basierend auf der aktuellen Seite und Scroll-Position
  const getTextColor = () => {
    if (isTransparentPage) {
      return scrolled ? 'text-[#01182D]' : 'text-white';
    }
    return 'text-[#01182D]';
  };

  // Bestimme Icon-Farbe basierend auf der aktuellen Seite und Scroll-Position
  const getIconColor = () => {
    if (isTransparentPage) {
      return scrolled ? '#01182D' : '#FFFFFF';
    }
    return '#01182D';
  };

  // Bestimme Border-Farbe für Menü-Button
  const getMenuBorderColor = () => {
    if (isTransparentPage) {
      return scrolled ? 'border-[#01182D]' : 'border-white';
    }
    return 'border-[#01182D]';
  };

  useGSAP(() => {
    if (isLangOpen) {
      gsap.fromTo(dropdownRef.current, 
        { opacity: 0, y: -10, display: 'none' },
        { opacity: 1, y: 0, display: 'block', duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(dropdownRef.current, { 
        opacity: 0, y: -10, duration: 0.2, ease: 'power2.in',
        onComplete: () => {
          if (dropdownRef.current) dropdownRef.current.style.display = 'none';
        }
      });
    }
  }, [isLangOpen]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Die Glas-Pille */}
      <header className={`${isNoPillPage ? '' : `${getHeaderBackground()} ${getHeaderStyles()} ${isTransparentPage && !scrolled ? '' : 'backdrop-blur-xl'} rounded-full border`} px-12 py-5 flex items-center justify-between w-full max-w-[1500px] transition-all duration-500 ease-in-out`}>
        
        {/* Logo - linke Sektion, Position beibehalten durch pl-10 */}
        <div className="flex-1 pl-10">
          <Link href="/">
            <Image
              src="/assets/wooms_WMS_GmbH_Logo.svg"
              alt="wooms WMS GmbH Logo"
              width={180}
              height={40}
              className={`h-auto transition-all duration-500 ${isTransparentPage && !scrolled ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>
        </div>

        {/* Chat - exakt mittig */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setIsChatOpen(true)}
            className={`flex items-center gap-4 text-[21px] font-light ${getTextColor()} hover:opacity-60 transition-all duration-500`}
          >
            <MessageSquare size={26} strokeWidth={1.2} style={{ color: getIconColor() }} className="transition-all duration-500" />
            <span className="tracking-wide">Chat</span>
          </button>
        </div>

        {/* Menü & Sprache - rechte Sektion, Position beibehalten durch pr-10 */}
        <div className="flex-1 flex items-center justify-end gap-10 pr-10">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 text-[22px] font-light ${getTextColor()} hover:opacity-70 transition-all duration-500`}
            >
              <ChevronDown
                size={18}
                strokeWidth={2}
                style={{ color: getIconColor() }}
                className={`transition-all duration-500 ${isLangOpen ? 'rotate-180' : ''}`}
              />
              <span className="tracking-tight">DE</span>
            </button>

            {/* Dropdown Menu */}
            <div 
              ref={dropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hidden"
            >
              <div className="bg-[#01182D] px-6 py-4 flex items-center justify-between text-white cursor-default">
                <span className="text-[20px] font-light">DE</span>
                <Check size={18} strokeWidth={2.5} />
              </div>
              <button 
                className="w-full px-6 py-4 text-left text-[20px] font-light text-[#01182D] hover:bg-gray-50 transition-colors"
                onClick={() => setIsLangOpen(false)}
              >
                EN
              </button>
            </div>
          </div>

          {/* Menü Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-6 group"
          >
            <div className={`w-[84px] h-[84px] rounded-full border ${getMenuBorderColor()} ${getTextColor()} flex flex-col items-center justify-center gap-[6px] ${isTransparentPage && !scrolled ? 'group-hover:bg-white group-hover:text-[#01182D]' : 'group-hover:bg-[#01182D] group-hover:text-white'} transition-all duration-500`}>
              <div className="w-10 h-[2.5px] bg-current rounded-full"></div>
              <div className="w-10 h-[2.5px] bg-current rounded-full"></div>
              <div className="w-10 h-[2.5px] bg-current rounded-full"></div>
            </div>
            <span className={`text-[24px] font-light ${getTextColor()} tracking-tight transition-all duration-500`}>Menü</span>
          </button>
        </div>
      </header>

      {/* Main Menu */}
      <MainMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* AI Chat */}
      <AIChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}

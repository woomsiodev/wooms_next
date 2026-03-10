'use client';

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CTASection from "@/components/sections/CTASection";
import Software from "@/components/sections/Software";
import Ecosystem from "@/components/sections/Ecosystem";
import BusinessSlider from "@/components/sections/BusinessSlider";
import OpenClaw from "@/components/sections/OpenClaw";
import History from "@/components/sections/History";
import Social from "@/components/sections/Social";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section mit Video oben */}
      <Hero />

      {/* 2. About Section (Textblock) unter dem Video */}
      <About />

      {/* 3. CTA Section mit Muted Sand Background */}
      <CTASection />

      {/* 4. Software Section (weißer Hintergrund) */}
      <Software />

      {/* 5. Ecosystem Section mit Kreis */}
      <Ecosystem />

      {/* 6. Business Slider unter dem Kreis */}
      <BusinessSlider />

      {/* 7. OpenClaw Section */}
      <OpenClaw />

      {/* 8. History Section */}
      <History />

      {/* 9. Social Section */}
      <Social />

      <footer className="bg-white py-16 md:py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          {/* Logo Section */}
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <h3 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#01182D]">
                wooms
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#01182D]/60 tracking-wider">
                WMS GmbH
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            <a href="/impressum" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors">
              Datenschutz
            </a>
            <a href="/compliance" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors">
              Compliance
            </a>

            {/* Menu Button */}
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-[60px] h-[60px] rounded-full border-2 border-[#01182D] flex items-center justify-center transition-all group-hover:bg-[#01182D]/5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01182D" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              <span className="text-[13px] text-[#01182D]/60">Menü</span>
            </button>

            <a href="https://newsletter.wooms.de" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors flex items-center gap-2">
              Newsletter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/wooms" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors flex items-center gap-2">
              LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="https://youtube.com/@wooms" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors flex items-center gap-2">
              Youtube
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
              aria-label="Back to top"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01182D"
                strokeWidth="2"
                className="transition-transform group-hover:-translate-y-1"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>

        </div>
      </footer>
    </main>
  );
}

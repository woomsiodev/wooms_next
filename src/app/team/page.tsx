'use client';

import Image from "next/image";
import Header from "@/components/layout/Header";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamStory, { IcebergSection } from "@/components/sections/team/TeamStory";
import TeamMembers from "@/components/sections/team/TeamMembers";
import TeamVision from "@/components/sections/team/TeamVision";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with Pill Animation */}
      <Header />

      {/* Team Hero Section */}
      <TeamHero />

      {/* Team Story Section */}
      <TeamStory />

      {/* Iceberg Fullscreen Section */}
      <IcebergSection />

      {/* Team Members Section */}
      <TeamMembers />

      {/* Team Vision Section */}
      <TeamVision />

      <footer className="bg-white py-16 md:py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          {/* Logo Section */}
          <div className="flex justify-center mb-12 ml-[10px]">
            <div className="text-center">
              <h3 className="text-[20px] font-light tracking-tight text-[#01182D]" style={{ fontFamily: 'Lexend, sans-serif' }}>
                wooms WMS GmbH
              </h3>
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
            <a href="/agb" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors">
              AGB
            </a>
            <a href="https://newsletter.wooms.de" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors flex items-center gap-2">
              Newsletter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/wooms-wms-gmbh/" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-[#01182D]/60 hover:text-[#01182D] transition-colors flex items-center gap-2">
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

          {/* Back to Top Button with Logos */}
          <div className="relative flex justify-center items-center">
            <div className="flex items-center gap-4 md:gap-8">
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=de.woomspwa.io"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-[36px] md:h-[40px] w-auto"
                />
              </a>

              {/* DE KI Verband Logo */}
              <a
                href="https://ki-verband.de"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/media/logos/DE_KI Verband Logo.png"
                  alt="DE KI Verband"
                  width={96}
                  height={48}
                  className="h-[40px] md:h-[48px] w-auto"
                />
              </a>

              {/* Back to Top Button */}
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

              {/* AWS Logo */}
              <a
                href="https://aws.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS"
                  width={80}
                  height={40}
                  className="h-[32px] md:h-[40px] w-auto"
                />
              </a>

              {/* Shopify Partner Logo */}
              <a
                href="https://www.shopify.com/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="https://partners.shopify.com/cdn/shopifycloud/partners/assets/partners-logo-5JfUcYvw.svg"
                  alt="Shopify Partner"
                  width={120}
                  height={40}
                  className="h-[32px] md:h-[40px] w-auto"
                />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}

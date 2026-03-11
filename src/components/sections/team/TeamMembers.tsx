'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    name: 'Ansgar Sohn',
    role: 'Founder & CEO',
    bio: 'Treibt seit den 2010ern Software- und Logistikprojekte voran. Seit 2017 tief in der E-Commerce-Lagerpraxis. Vision: KI-gestützte Warehouse-Intelligence.',
    image: '/media/images/Ansgar_LinkedIn.jpeg',
    linkedin: 'https://de.linkedin.com/in/ansgar-wooms-wms',
    email: 'ansgar@wooms.de',
    color: '#D1B06B'
  },
  {
    name: 'Abbas Dhebar',
    role: 'Co-Founder & CTO',
    bio: 'Full-Stack-Engineer mit Bachelor of Engineering (GTU). Bringt Geschwindigkeit in Plattform, Integrationen und UX. Fokus: moderne Produktentwicklung.',
    image: '/media/images/Abbas_LinkedIn.jpeg',
    linkedin: 'https://in.linkedin.com/in/abbas-dhebar-113a91152',
    email: 'abbas@wooms.de',
    color: '#01182D'
  }
];

export default function TeamMembers() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    // Animate team cards on scroll
    const cards = gsap.utils.toArray('.team-card');

    cards.forEach((card: any, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        rotateX: -15,
        transformPerspective: 1000,
        ease: 'power2.out',
      });
    });

    // Parallax effect on hover
    cards.forEach((card: any) => {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(cardElement, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-[#F5F2ED] py-[20vh] px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-[14px] md:text-[16px] font-light tracking-widest mb-4 text-[#01182D]/60 uppercase">
            Die Köpfe
          </p>
          <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1] tracking-tight text-[#01182D] uppercase">
            Meet the Team
          </h2>
          <div className="mt-6 w-24 h-1 bg-[#D1B06B] mx-auto"></div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card relative group"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">

                {/* Image Section */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Name overlay */}
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-[32px] md:text-[42px] font-bold text-white leading-[1.1] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[16px] md:text-[18px] font-light text-[#D1B06B] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10">
                  <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#01182D]/70 font-light mb-8">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#01182D] hover:bg-[#01182D] transition-all duration-300"
                    >
                      <Linkedin size={20} className="text-[#01182D] group-hover/btn:text-white transition-colors" />
                      <span className="text-[14px] font-medium text-[#01182D] group-hover/btn:text-white transition-colors uppercase tracking-wider">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="group/btn flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#D1B06B] hover:bg-[#D1B06B] transition-all duration-300"
                    >
                      <Mail size={20} className="text-[#D1B06B] group-hover/btn:text-white transition-colors" />
                      <span className="text-[14px] font-medium text-[#D1B06B] group-hover/btn:text-white transition-colors uppercase tracking-wider">
                        E-Mail
                      </span>
                    </a>
                  </div>
                </div>

                {/* Decorative accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)`
                  }}
                ></div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

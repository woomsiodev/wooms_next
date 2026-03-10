'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const socialPosts = [
  {
    id: 1,
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7410306688387555328?collapsed=1',
    platform: 'linkedin'
  },
  {
    id: 2,
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7409160093231030272?collapsed=1',
    platform: 'linkedin'
  },
  {
    id: 3,
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7411720461295714304?collapsed=1',
    platform: 'linkedin'
  }
];

export default function Social() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(sliderRef.current, {
      scrollTrigger: {
        trigger: sliderRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialPosts.length) % socialPosts.length);
  };

  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % socialPosts.length;
      posts.push(socialPosts[index]);
    }
    return posts;
  };

  return (
    <section ref={container} className="bg-[#F5F5F0] py-16 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Navigation Buttons - Top Center */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={prevSlide}
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-[#D1B06B] flex items-center justify-center transition-all hover:bg-[#D1B06B]/10"
            aria-label="Previous slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D1B06B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-[#D1B06B] flex items-center justify-center transition-all hover:bg-[#D1B06B]/10"
            aria-label="Next slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D1B06B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Social Posts Grid */}
        <div ref={sliderRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {getVisiblePosts().map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* LinkedIn Embed or Image */}
              {post.embedUrl ? (
                <div className="relative h-[670px] bg-gray-100">
                  <iframe
                    src={post.embedUrl}
                    height="670"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="LinkedIn Embedded Post"
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <>
                  {/* Post Image */}
                  <div className="relative h-[400px] md:h-[450px] bg-gray-100">
                    <Image
                      src={post.image}
                      alt={`Social post ${post.id}`}
                      fill
                      className="object-cover"
                    />
                    {/* LinkedIn Icon Overlay */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#0A66C2"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Post Text */}
                  <div className="p-6">
                    <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#01182D]/80">
                      {post.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

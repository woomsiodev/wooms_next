'use client';

import Header from '@/components/layout/Header';

export default function PressePage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#092C4C' }}>
      {/* Header */}
      <Header />

      {/* Spotify Embed - zentriert */}
      <div className="fixed inset-0 flex items-center justify-center">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/1lLNeT2fuFvTUmWIUJGdOz?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="max-w-[600px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        />
      </div>
    </main>
  );
}

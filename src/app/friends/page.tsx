'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';

interface Comment {
  id: number;
  username: string;
  text: string;
  x: number;
  y: number;
  delay: number;
}

interface Emoji {
  id: number;
  emoji: string;
  x: number;
  y: number;
  delay: number;
}

export default function FriendsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const commentIdRef = useRef(0);
  const emojiIdRef = useRef(0);

  const commentTexts = [
    { username: '@lisa_mueller', text: 'Wow, das sieht super aus! 🔥' },
    { username: '@max_logistics', text: 'Endlich ein WMS das funktioniert!' },
    { username: '@anna_shop', text: 'Wann können wir das testen?' },
    { username: '@tomberlin', text: 'Die KI-Features sind der Hammer 🚀' },
    { username: '@julia_ecom', text: 'Genau das brauchen wir!' },
    { username: '@markus_fulfillment', text: 'Game changer für unser Lager' },
    { username: '@sarah_retail', text: 'Impressive! 👏' },
    { username: '@david_warehouse', text: 'Love the prediction features!' },
    { username: '@emma_logistics', text: 'Das wird alles verändern ⚡' },
    { username: '@felix_tech', text: 'Beste Lösung die ich gesehen habe' },
  ];

  const emojiTypes = ['❤️', '🔥', '👏', '🚀', '⚡', '💯', '✨', '🎉', '👍', '💪'];

  useEffect(() => {
    // Generate comments
    const commentInterval = setInterval(() => {
      const randomComment = commentTexts[Math.floor(Math.random() * commentTexts.length)];
      const newComment: Comment = {
        id: commentIdRef.current++,
        username: randomComment.username,
        text: randomComment.text,
        x: Math.random() * 60 + 5, // 5% to 65% from left
        y: Math.random() * 70 + 10, // 10% to 80% from top
        delay: 0,
      };

      setComments(prev => [...prev, newComment]);

      // Remove comment after animation
      setTimeout(() => {
        setComments(prev => prev.filter(c => c.id !== newComment.id));
      }, 4000);
    }, 2000); // New comment every 2 seconds

    // Generate emojis (hearts and reactions)
    const emojiInterval = setInterval(() => {
      const randomEmoji = emojiTypes[Math.floor(Math.random() * emojiTypes.length)];
      const newEmoji: Emoji = {
        id: emojiIdRef.current++,
        emoji: randomEmoji,
        x: Math.random() * 15 + 80, // 80% to 95% from left (right side)
        y: 100, // Start from bottom
        delay: Math.random() * 0.5,
      };

      setEmojis(prev => [...prev, newEmoji]);

      // Remove emoji after animation
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
      }, 3000);
    }, 500); // New emoji every 500ms

    return () => {
      clearInterval(commentInterval);
      clearInterval(emojiInterval);
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Video Container - Full screen, no crop, maintains original format */}
      <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <video
          ref={videoRef}
          className="object-contain"
          style={{
            width: 'auto',
            height: '330vh',
            maxWidth: 'none',
            clipPath: 'inset(0 0 100px 0)'
          }}
          src="/media/videos/wooms_Friends.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Instagram Live Style Overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <div className="relative w-auto h-screen max-w-full" style={{ aspectRatio: '9/16' }}>

            {/* Top Bar - Live Indicator */}
            <div className="absolute top-20 left-0 right-0 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm">LIVE</span>
            </div>
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-semibold text-sm">👀 {Math.floor(Math.random() * 500 + 1200)}</span>
            </div>
          </div>
        </div>

        {/* Comments floating in */}
        {comments.map(comment => (
          <div
            key={comment.id}
            className="absolute bg-black/70 backdrop-blur-md text-white px-4 py-3 rounded-2xl max-w-[300px] animate-fadeInUp shadow-xl"
            style={{
              left: `${comment.x}%`,
              top: `${comment.y}%`,
              animationDelay: `${comment.delay}s`,
            }}
          >
            <p className="text-xs font-bold text-blue-400 mb-1">{comment.username}</p>
            <p className="text-sm font-medium">{comment.text}</p>
          </div>
        ))}

        {/* Emojis/Hearts floating up on the right side */}
        {emojis.map(emoji => (
          <div
            key={emoji.id}
            className="absolute text-4xl animate-floatUp"
            style={{
              left: `${emoji.x}%`,
              bottom: '0%',
              animationDelay: `${emoji.delay}s`,
            }}
          >
            {emoji.emoji}
          </div>
        ))}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          10% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
        }

        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0.5);
          }
          10% {
            opacity: 1;
            transform: translateY(-50px) translateX(10px) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-300px) translateX(-20px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-600px) translateX(30px) scale(0.8);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 4s ease-out forwards;
        }

        .animate-floatUp {
          animation: floatUp 3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

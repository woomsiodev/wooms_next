'use client';

import Image from 'next/image';
import Header from "@/components/layout/Header";

export default function DroneFlyPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Fullscreen Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/media/images/Dronen_AI_Leer-Bin_Project_wooms_WMS_GmbH.png"
          alt="DroneFly AI Leer-Bin Project"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </main>
  );
}

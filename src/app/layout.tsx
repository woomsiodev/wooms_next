import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Header from "@/components/layout/Header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "wooms AI",
  description: "Wir. Für mehr Lebensqualität",
  icons: {
    icon: [
      { url: '/media/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/media/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/media/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/media/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/media/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/media/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/media/favicon/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${notoSans.variable} antialiased bg-white text-black font-sans`}>
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

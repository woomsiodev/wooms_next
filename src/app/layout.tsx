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

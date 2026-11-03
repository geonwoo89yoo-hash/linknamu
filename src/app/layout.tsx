import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: `${profile.name}의 모든 링크를 한 곳에서`,
};

export const viewport: Viewport = {
  themeColor: "#ebe7e1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${greatVibes.variable} ${cormorant.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}

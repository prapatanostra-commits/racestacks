import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RaceStacks",
  description: "The On-Chain Tapping Game",
  other: {
    "talentapp:project_verification": "3a849710b4d40f72d67762641b56b6f7387ad0bb07fc87dc7cb6cc52a72db17cf1a62cbcb5921140e6b416f84c97acd28360bb607132169e618c106677adf4cf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
// internal sync 45 at Jum 17 Apr 2026 13:29:18 WIB
// internal sync 23 at Sab 18 Apr 2026 10:58:43 WIB

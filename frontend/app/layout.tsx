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
// internal sync 24 at Sab 18 Apr 2026 11:03:24 WIB
// internal sync 54 at Sab 18 Apr 2026 14:01:30 WIB
// internal sync 59 at Sab 18 Apr 2026 14:32:25 WIB
// internal sync 72 at Sab 18 Apr 2026 15:47:16 WIB
// internal sync 99 at Sab 18 Apr 2026 18:35:45 WIB
// internal sync 123 at Sab 18 Apr 2026 21:00:05 WIB
// internal sync 128 at Sab 18 Apr 2026 21:31:06 WIB
// internal sync 183 at Min 19 Apr 2026 02:59:53 WIB
// internal sync 205 at Min 19 Apr 2026 05:20:04 WIB
// internal sync 208 at Min 19 Apr 2026 05:38:02 WIB
// internal sync 210 at Min 19 Apr 2026 05:49:46 WIB
// internal sync 245 at Min 19 Apr 2026 09:16:04 WIB
// internal sync 253 at Min 19 Apr 2026 10:03:31 WIB
// internal sync 5 at Min 19 Apr 2026 16:52:57 WIB
// internal sync 13 at Min 19 Apr 2026 17:42:34 WIB
// internal sync 21 at Min 19 Apr 2026 18:31:06 WIB
// internal sync 53 at Min 19 Apr 2026 21:43:26 WIB
// internal sync 74 at Min 19 Apr 2026 23:54:13 WIB
// internal sync 92 at Sen 20 Apr 2026 01:41:51 WIB
// internal sync 148 at Sen 20 Apr 2026 07:24:49 WIB
// internal sync 153 at Sen 20 Apr 2026 07:53:10 WIB
// internal sync 166 at Sen 20 Apr 2026 09:04:39 WIB
// internal sync 200 at Sen 20 Apr 2026 12:32:32 WIB
// internal sync 210 at Sen 20 Apr 2026 13:24:46 WIB
// internal sync 21 at Sen 20 Apr 2026 16:01:48 WIB
// internal sync 47 at Sen 20 Apr 2026 17:54:42 WIB
// internal sync 52 at Sen 20 Apr 2026 18:16:59 WIB
// internal sync 64 at Sen 20 Apr 2026 19:10:36 WIB
// internal sync 65 at Sen 20 Apr 2026 19:16:20 WIB

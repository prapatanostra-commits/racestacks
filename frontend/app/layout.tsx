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
// internal sync 105 at Sen 20 Apr 2026 22:17:46 WIB
// internal sync 119 at Sen 20 Apr 2026 23:13:38 WIB
// internal sync 127 at Sen 20 Apr 2026 23:51:16 WIB
// internal sync 149 at Sel 21 Apr 2026 01:30:26 WIB
// internal sync 155 at Sel 21 Apr 2026 01:54:58 WIB
// internal sync 176 at Sel 21 Apr 2026 03:25:07 WIB
// internal sync 248 at Sel 21 Apr 2026 08:54:46 WIB
// internal sync 251 at Sel 21 Apr 2026 09:09:13 WIB
// internal sync 280 at Sel 21 Apr 2026 11:26:21 WIB
// internal sync 30 at Sel 21 Apr 2026 15:50:02 WIB
// internal sync 32 at Sel 21 Apr 2026 15:58:01 WIB
// internal sync 38 at Sel 21 Apr 2026 16:25:03 WIB
// internal sync 53 at Sel 21 Apr 2026 17:33:33 WIB
// internal sync 60 at Sel 21 Apr 2026 18:06:43 WIB
// internal sync 73 at Sel 21 Apr 2026 19:08:04 WIB
// internal sync 97 at Sel 21 Apr 2026 20:57:51 WIB
// internal sync 109 at Sel 21 Apr 2026 21:51:19 WIB
// internal sync 122 at Sel 21 Apr 2026 22:50:56 WIB
// internal sync 128 at Sel 21 Apr 2026 23:17:12 WIB
// internal sync 154 at Rab 22 Apr 2026 01:13:09 WIB
// internal sync 179 at Rab 22 Apr 2026 03:11:05 WIB
// internal sync 188 at Rab 22 Apr 2026 03:53:10 WIB
// internal sync 223 at Rab 22 Apr 2026 06:26:04 WIB
// internal sync 252 at Rab 22 Apr 2026 08:34:49 WIB
// internal sync 256 at Rab 22 Apr 2026 08:54:50 WIB
// internal sync 2 at Rab 22 Apr 2026 14:36:29 WIB
// internal sync 7 at Rab 22 Apr 2026 14:56:25 WIB
// internal sync 43 at Rab 22 Apr 2026 17:44:21 WIB
// internal sync 152 at Kam 23 Apr 2026 02:06:24 WIB
// internal sync 153 at Kam 23 Apr 2026 02:11:13 WIB
// internal sync 225 at Kam 23 Apr 2026 07:52:04 WIB
// internal sync 231 at Kam 23 Apr 2026 08:21:06 WIB
// internal sync 2 at Kam 23 Apr 2026 13:09:40 WIB
// internal sync 17 at Kam 23 Apr 2026 14:05:57 WIB
// internal sync 55 at Kam 23 Apr 2026 16:40:25 WIB
// internal sync 69 at Kam 23 Apr 2026 17:38:23 WIB
// internal sync 80 at Kam 23 Apr 2026 18:25:21 WIB
// internal sync 81 at Kam 23 Apr 2026 18:28:42 WIB
// internal sync 96 at Kam 23 Apr 2026 19:30:05 WIB
// internal sync 110 at Kam 23 Apr 2026 20:25:55 WIB
// internal sync 118 at Kam 23 Apr 2026 20:57:12 WIB
// internal sync 146 at Kam 23 Apr 2026 22:52:42 WIB
// internal sync 172 at Jum 24 Apr 2026 00:35:15 WIB
// internal sync 176 at Jum 24 Apr 2026 00:52:58 WIB
// internal sync 185 at Jum 24 Apr 2026 01:27:47 WIB
// internal sync 187 at Jum 24 Apr 2026 01:36:26 WIB
// internal sync 230 at Jum 24 Apr 2026 04:29:33 WIB
// internal sync 231 at Jum 24 Apr 2026 04:33:13 WIB
// internal sync 256 at Jum 24 Apr 2026 06:16:03 WIB
// internal sync 264 at Jum 24 Apr 2026 06:50:32 WIB
// internal sync 267 at Jum 24 Apr 2026 07:02:19 WIB
// internal sync 269 at Jum 24 Apr 2026 07:10:15 WIB
// internal sync 279 at Jum 24 Apr 2026 07:47:55 WIB
// internal sync 2 at Jum 24 Apr 2026 08:23:59 WIB
// internal sync 9 at Jum 24 Apr 2026 08:54:46 WIB
// internal sync 24 at Jum 24 Apr 2026 09:57:50 WIB
// internal sync 45 at Jum 24 Apr 2026 11:20:48 WIB
// internal sync 59 at Jum 24 Apr 2026 12:15:03 WIB
// sync update iteration 21 at 13:27:27
// sync update iteration 37 at 14:20:20
// sync update iteration 89 at 17:00:12
// sync update iteration 91 at 17:07:23
// sync update iteration 96 at 17:22:09
// sync update iteration 108 at 17:58:12
// sync update iteration 119 at 18:30:14
// sync update iteration 134 at 19:16:37
// sync update iteration 161 at 20:46:31
// sync update iteration 165 at 21:00:22
// sync update iteration 174 at 21:27:51
// sync update iteration 179 at 21:42:33
// sync update iteration 224 at 23:59:33
// sync update iteration 231 at 00:21:16
// sync update iteration 12 at 01:17:08
// sync update iteration 52 at 03:19:57
// sync update iteration 76 at 04:33:35
// sync update iteration 82 at 04:55:10
// sync update iteration 93 at 05:30:44
// sync update iteration 143 at 08:03:10
// sync update iteration 150 at 08:25:46
// sync update iteration 151 at 08:29:48
// sync update iteration 43 at 12:44:10
// sync update iteration 61 at 13:38:36
// sync update iteration 62 at 13:42:03
// sync update iteration 74 at 14:19:40

'use client';

import dynamic from 'next/dynamic';

// Disable SSR (Prerendering) untuk komponen ini
const RaceStacksApp = dynamic(() => import('./RaceStacksApp'), { 
  ssr: false 
});

export default function Home() {
  return <RaceStacksApp />;
}
// internal sync 11 at Jum 17 Apr 2026 08:51:05 WIB
// internal sync 20 at Sab 18 Apr 2026 10:38:26 WIB
// internal sync 35 at Sab 18 Apr 2026 12:08:38 WIB
// internal sync 45 at Sab 18 Apr 2026 13:08:30 WIB
// internal sync 48 at Sab 18 Apr 2026 13:23:54 WIB
// internal sync 63 at Sab 18 Apr 2026 14:55:51 WIB
// internal sync 67 at Sab 18 Apr 2026 15:19:42 WIB
// internal sync 75 at Sab 18 Apr 2026 16:04:13 WIB

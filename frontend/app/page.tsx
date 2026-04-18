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

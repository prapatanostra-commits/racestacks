'use client';

import dynamic from 'next/dynamic';

// Disable SSR (Prerendering) untuk komponen ini
const RaceStacksApp = dynamic(() => import('./RaceStacksApp'), { 
  ssr: false 
});

export default function Home() {
  return <RaceStacksApp />;
}

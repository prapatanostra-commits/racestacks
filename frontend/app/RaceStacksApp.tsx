// File: frontend/app/RaceStacksApp.tsx
'use client';

import { useEffect, useState } from 'react';
import { AppConfig, UserSession, showConnect, openContractCall } from '@stacks/connect';
import { STACKS_MAINNET } from '@stacks/network';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

// GANTI INI DENGAN ALAMAT WALLET MAINNET LU NANTI
const contractAddress = 'SP_WALLET_LU_DISINI'; 
const contractName = 'racestacks';

export default function RaceStacksApp() {
  const [userData, setUserData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Pastikan komponen hanya dirender saat browser siap
    try {
      if (userSession.isSignInPending()) {
        userSession.handlePendingSignIn().then((data) => {
          setUserData(data);
        });
      } else if (userSession.isUserSignedIn()) {
        setUserData(userSession.loadUserData());
      }
    } catch (error) {
      console.error("Gagal memuat sesi wallet:", error);
    }
  }, []);

  // Cegah render sebelum mounted (mencegah error dari object window/localStorage)
  if (!mounted) return null;

  const connectWallet = () => {
    showConnect({
      appDetails: {
        name: 'RaceStacks',
        icon: window.location.origin + '/favicon.ico',
      },
      redirectTo: '/',
      onFinish: () => {
        setUserData(userSession.loadUserData());
      },
      userSession,
    });
  };

  const tapButton = async () => {
    await openContractCall({
      network: STACKS_MAINNET,
      contractAddress,
      contractName,
      functionName: 'tap',
      functionArgs: [], 
      appDetails: {
        name: 'RaceStacks',
        icon: window.location.origin + '/favicon.ico',
      },
      onFinish: (data) => {
        console.log('TX ID:', data.txId);
        alert('Mantap! Transaksi Tap lu sedang diproses di jaringan. Cek Explorer!');
      },
    });
  };

  // AMAN DARI CRASH: Baca address dengan optional chaining dan sediakan fallback
  const walletAddress = userData?.profile?.stxAddress?.mainnet || userData?.profile?.stxAddress?.testnet || '';
  const displayAddress = walletAddress ? `${walletAddress.slice(0, 8)}...${walletAddress.slice(-4)}` : 'Format Wallet Tidak Dikenali';

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-black mb-8 tracking-tighter">🏎️ RACESTACKS</h1>
      
      <p className="mb-12 text-gray-400 text-lg">The On-Chain Tapping Game</p>

      {!userData ? (
        <button
          onClick={connectWallet}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-center flex flex-col items-center">
          <p className="mb-8 text-gray-400 bg-gray-800 px-4 py-2 rounded-full text-sm">
            Wallet: {displayAddress}
          </p>
          
          <button
            onClick={tapButton}
            className="bg-green-500 hover:bg-green-400 text-white font-black py-6 px-16 rounded-full text-4xl shadow-[0_0_40px_rgba(34,197,94,0.4)] active:scale-95 active:shadow-none transition-all"
          >
            TAP!
          </button>
        </div>
      )}
    </div>
  );
}
// internal sync 3 at Jum 17 Apr 2026 09:24:59 WIB
// internal sync 21 at Jum 17 Apr 2026 11:12:12 WIB
// internal sync 36 at Jum 17 Apr 2026 12:36:52 WIB
// internal sync 47 at Jum 17 Apr 2026 13:42:39 WIB
// internal sync 71 at Sab 18 Apr 2026 15:42:46 WIB
// internal sync 81 at Sab 18 Apr 2026 16:49:19 WIB
// internal sync 83 at Sab 18 Apr 2026 17:00:00 WIB
// internal sync 92 at Sab 18 Apr 2026 17:48:55 WIB
// internal sync 102 at Sab 18 Apr 2026 18:55:46 WIB
// internal sync 115 at Sab 18 Apr 2026 20:13:17 WIB
// internal sync 117 at Sab 18 Apr 2026 20:22:44 WIB
// internal sync 124 at Sab 18 Apr 2026 21:08:08 WIB
// internal sync 125 at Sab 18 Apr 2026 21:16:05 WIB
// internal sync 154 at Min 19 Apr 2026 00:04:50 WIB
// internal sync 160 at Min 19 Apr 2026 00:42:48 WIB
// internal sync 169 at Min 19 Apr 2026 01:38:56 WIB
// internal sync 187 at Min 19 Apr 2026 03:26:24 WIB
// internal sync 270 at Min 19 Apr 2026 11:47:17 WIB
// internal sync 284 at Min 19 Apr 2026 13:21:59 WIB
// internal sync 285 at Min 19 Apr 2026 13:26:24 WIB
// internal sync 286 at Min 19 Apr 2026 13:32:20 WIB
// internal sync 9 at Min 19 Apr 2026 17:17:16 WIB
// internal sync 15 at Min 19 Apr 2026 17:53:45 WIB
// internal sync 20 at Min 19 Apr 2026 18:25:23 WIB
// internal sync 47 at Min 19 Apr 2026 21:03:50 WIB
// internal sync 97 at Sen 20 Apr 2026 02:09:49 WIB
// internal sync 104 at Sen 20 Apr 2026 02:56:45 WIB
// internal sync 106 at Sen 20 Apr 2026 03:06:33 WIB
// internal sync 126 at Sen 20 Apr 2026 05:05:10 WIB
// internal sync 136 at Sen 20 Apr 2026 06:07:34 WIB
// internal sync 158 at Sen 20 Apr 2026 08:18:52 WIB
// internal sync 178 at Sen 20 Apr 2026 10:17:12 WIB
// internal sync 201 at Sen 20 Apr 2026 12:37:38 WIB
// internal sync 211 at Sen 20 Apr 2026 13:30:04 WIB
// internal sync 219 at Sen 20 Apr 2026 14:19:44 WIB
// internal sync 14 at Sen 20 Apr 2026 15:26:50 WIB
// internal sync 32 at Sen 20 Apr 2026 16:47:37 WIB
// internal sync 50 at Sen 20 Apr 2026 18:08:08 WIB
// internal sync 62 at Sen 20 Apr 2026 19:02:34 WIB
// internal sync 68 at Sen 20 Apr 2026 19:29:41 WIB
// internal sync 83 at Sen 20 Apr 2026 20:38:28 WIB
// internal sync 144 at Sel 21 Apr 2026 01:10:01 WIB
// internal sync 146 at Sel 21 Apr 2026 01:18:29 WIB
// internal sync 157 at Sel 21 Apr 2026 02:03:40 WIB
// internal sync 287 at Sel 21 Apr 2026 12:00:06 WIB
// internal sync 28 at Sel 21 Apr 2026 15:38:57 WIB
// internal sync 56 at Sel 21 Apr 2026 17:48:30 WIB
// internal sync 57 at Sel 21 Apr 2026 17:53:20 WIB
// internal sync 70 at Sel 21 Apr 2026 18:51:02 WIB
// internal sync 71 at Sel 21 Apr 2026 18:56:53 WIB
// internal sync 82 at Sel 21 Apr 2026 19:48:21 WIB
// internal sync 84 at Sel 21 Apr 2026 19:57:36 WIB
// internal sync 95 at Sel 21 Apr 2026 20:45:59 WIB
// internal sync 104 at Sel 21 Apr 2026 21:28:34 WIB
// internal sync 124 at Sel 21 Apr 2026 22:59:43 WIB
// internal sync 134 at Sel 21 Apr 2026 23:42:06 WIB
// internal sync 145 at Rab 22 Apr 2026 00:34:45 WIB
// internal sync 149 at Rab 22 Apr 2026 00:51:56 WIB
// internal sync 151 at Rab 22 Apr 2026 01:00:37 WIB
// internal sync 205 at Rab 22 Apr 2026 05:09:05 WIB
// internal sync 216 at Rab 22 Apr 2026 05:53:08 WIB
// internal sync 229 at Rab 22 Apr 2026 06:50:53 WIB
// internal sync 242 at Rab 22 Apr 2026 07:47:01 WIB
// internal sync 249 at Rab 22 Apr 2026 08:23:00 WIB
// internal sync 61 at Rab 22 Apr 2026 19:07:40 WIB
// internal sync 66 at Rab 22 Apr 2026 19:31:27 WIB
// internal sync 77 at Rab 22 Apr 2026 20:20:15 WIB
// internal sync 79 at Rab 22 Apr 2026 20:30:29 WIB
// internal sync 115 at Rab 22 Apr 2026 23:19:03 WIB
// internal sync 117 at Rab 22 Apr 2026 23:27:16 WIB
// internal sync 121 at Rab 22 Apr 2026 23:44:55 WIB
// internal sync 125 at Kam 23 Apr 2026 00:02:26 WIB
// internal sync 128 at Kam 23 Apr 2026 00:17:53 WIB
// internal sync 129 at Kam 23 Apr 2026 00:23:53 WIB
// internal sync 131 at Kam 23 Apr 2026 00:33:37 WIB
// internal sync 134 at Kam 23 Apr 2026 00:47:01 WIB
// internal sync 176 at Kam 23 Apr 2026 04:02:43 WIB
// internal sync 177 at Kam 23 Apr 2026 04:06:32 WIB
// internal sync 203 at Kam 23 Apr 2026 06:08:35 WIB
// internal sync 220 at Kam 23 Apr 2026 07:30:40 WIB
// internal sync 227 at Kam 23 Apr 2026 08:03:48 WIB
// internal sync 232 at Kam 23 Apr 2026 08:25:21 WIB
// internal sync 21 at Kam 23 Apr 2026 10:03:34 WIB
// internal sync 22 at Kam 23 Apr 2026 10:06:59 WIB
// internal sync 29 at Kam 23 Apr 2026 10:33:36 WIB
// internal sync 41 at Kam 23 Apr 2026 11:20:48 WIB
// internal sync 46 at Kam 23 Apr 2026 11:42:48 WIB
// internal sync 59 at Kam 23 Apr 2026 12:35:52 WIB
// internal sync 19 at Kam 23 Apr 2026 14:14:32 WIB
// internal sync 25 at Kam 23 Apr 2026 14:40:29 WIB
// internal sync 43 at Kam 23 Apr 2026 15:51:31 WIB
// internal sync 117 at Kam 23 Apr 2026 20:53:43 WIB
// internal sync 140 at Kam 23 Apr 2026 22:24:09 WIB
// internal sync 145 at Kam 23 Apr 2026 22:48:14 WIB
// internal sync 156 at Kam 23 Apr 2026 23:31:58 WIB
// internal sync 162 at Kam 23 Apr 2026 23:54:51 WIB
// internal sync 170 at Jum 24 Apr 2026 00:27:51 WIB
// internal sync 210 at Jum 24 Apr 2026 03:04:53 WIB
// internal sync 222 at Jum 24 Apr 2026 03:56:15 WIB
// internal sync 246 at Jum 24 Apr 2026 05:32:49 WIB
// internal sync 249 at Jum 24 Apr 2026 05:45:43 WIB
// internal sync 250 at Jum 24 Apr 2026 05:50:39 WIB
// internal sync 255 at Jum 24 Apr 2026 06:12:02 WIB
// internal sync 282 at Jum 24 Apr 2026 08:00:43 WIB
// internal sync 4 at Jum 24 Apr 2026 08:32:15 WIB
// internal sync 12 at Jum 24 Apr 2026 09:07:38 WIB
// internal sync 14 at Jum 24 Apr 2026 09:15:29 WIB
// internal sync 37 at Jum 24 Apr 2026 10:49:42 WIB
// internal sync 50 at Jum 24 Apr 2026 11:41:17 WIB
// internal sync 57 at Jum 24 Apr 2026 12:07:55 WIB
// sync update iteration 14 at 13:06:01
// sync update iteration 29 at 13:54:43
// sync update iteration 55 at 15:16:19
// sync update iteration 62 at 15:38:02
// sync update iteration 69 at 16:00:08
// sync update iteration 126 at 18:52:53
// sync update iteration 145 at 19:51:33
// sync update iteration 155 at 20:25:36
// sync update iteration 175 at 21:30:07
// sync update iteration 180 at 21:45:15
// sync update iteration 203 at 22:57:28
// sync update iteration 2 at 00:45:50
// sync update iteration 28 at 02:05:14
// sync update iteration 39 at 02:41:05
// sync update iteration 54 at 03:26:17

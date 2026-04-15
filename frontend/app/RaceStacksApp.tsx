// File: frontend/app/RaceStacksApp.tsx
'use client';

import { useEffect, useState } from 'react';
import { AppConfig, UserSession, showConnect, openContractCall } from '@stacks/connect';
import { STACKS_MAINNET } from '@stacks/network';

// Setup koneksi Stacks
const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

// GANTI INI DENGAN ALAMAT WALLET MAINNET LU
const contractAddress = 'SP_WALLET_LU_DISINI'; 
const contractName = 'racestacks';

export default function RaceStacksApp() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

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
      functionArgs: [], // Fungsi tap lu nggak butuh argumen
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
            Wallet: {userData.profile.stxAddress.mainnet.slice(0, 8)}...{userData.profile.stxAddress.mainnet.slice(-4)}
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

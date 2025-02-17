import React, { useState } from 'react';
import { authorize } from '@sky-mavis/waypoint';

export function RoninConnectButton() {
  const [connectedAddress, setConnectedAddress] = useState<string>('');

  async function handleConnect() {
    try {
      const result = await authorize({
        mode: 'popup',
        clientId: process.env.NEXT_PUBLIC_RONIN_WAYPOINT_CLIENT_ID || '',
        scopes: ['openid','wallet','profile','email'],
      });
      console.log('Ronin connect result:', result);
      if (result.address) {
        setConnectedAddress(result.address);
      }
    } catch (error) {
      console.error('Error connecting to Ronin:', error);
    }
  }

  return (
    <div>
      {connectedAddress ? (
        <div className="text-white text-sm">
          Connected as: {connectedAddress}
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Ronin Connect
        </button>
      )}
    </div>
  );
}
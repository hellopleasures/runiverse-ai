import React, { useState } from 'react';
import { authorize } from '@sky-mavis/waypoint';

interface Props {
  onConnect: () => void;
}

export const RoninConnectButton: React.FC<Props> = ({ onConnect }) => {
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
        onConnect();
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
          className="uppercase text-white text-[16px] font-['MekMono'] bg-[#004de5] px-3 py-1 rounded-md"
        >
          Ronin Connect
        </button>
      )}
    </div>
  );
}
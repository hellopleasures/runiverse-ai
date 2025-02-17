import React, { useState } from 'react';

declare global {
  interface Window {
    ronin?: {
      isRonin?: boolean;
      enable?: () => Promise<string[]>;
      request?: (args: { method: string; params?: any[] }) => Promise<any>;
      send?: (
        args: { method: string; params?: any[] },
        callback: (err: any, result?: { result?: any[] }) => void
      ) => void;
      on?: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

export function RoninExtensionConnectButton() {
  const [address, setAddress] = useState<string>('');

  async function handleConnect() {
    if (typeof window === 'undefined' || !window.ronin) {
      alert('Ronin Wallet extension not detected. Please install or enable it.');
      return;
    }

    try {
      let accounts: string[] | undefined;

      // 1) If request function is available, use it:
      if (typeof window.ronin.request === 'function') {
        const result = await window.ronin.request({ method: 'eth_requestAccounts' });
        accounts = result;
      }
      // 2) Otherwise, if enable is available, use it:
      else if (typeof window.ronin.enable === 'function') {
        accounts = await window.ronin.enable();
      }
      // 3) Otherwise, fallback to the older .send(...) usage:
      else if (typeof window.ronin.send === 'function') {
        accounts = await new Promise((resolve, reject) => {
          window.ronin?.send(
            { method: 'eth_requestAccounts', params: [] },
            (err: any, response?: { result?: string[] }) => {
              if (err) {
                return reject(err);
              }
              if (response && Array.isArray(response.result)) {
                resolve(response.result);
              } else {
                reject(new Error('No accounts received from ronin.send.'));
              }
            }
          );
        });
      }
      // 4) If none of the above exist, error out:
      else {
        throw new Error('Ronin extension is present but no method to request accounts.');
      }

      // If we got accounts, set them:
      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        console.log('Connected with address:', accounts[0]);
      } else {
        console.warn('No accounts found from Ronin extension');
      }
    } catch (error) {
      console.error('Failed to connect to Ronin extension:', error);
      alert('Connection to Ronin extension failed. See console for details.');
    }
  }

  return (
    <div>
      {address ? (
        <span className="text-white">Connected: {address}</span>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-[#1e90ff] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Connect Ronin Wallet
        </button>
      )}
    </div>
  );
}
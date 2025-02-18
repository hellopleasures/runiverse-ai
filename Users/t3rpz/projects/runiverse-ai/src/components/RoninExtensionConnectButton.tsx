import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { SiweMessage } from 'siwe';

declare global {
  interface Window {
    ronin?: {
      isRonin?: boolean;
      provider?: {
        request?: (args: { method: string; params?: any[] }) => Promise<any>;
      };
      enable?: () => Promise<string[]>;
      request?: (args: { method: string; params?: any[] }) => Promise<any>;
      /**
       * Merged callback type for both 'eth_requestAccounts' (string[]) and 'personal_sign' (string).
       */
      send?: (
        args: { method: string; params?: any[] },
        callback: (err: any, result?: { result?: string | string[] }) => void
      ) => void;
      on?: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

export function RoninExtensionConnectButton() {
  const [address, setAddress] = useState<string>('');
  const [signature, setSignature] = useState<string>('');
  const [connecting, setConnecting] = useState<boolean>(false);
  const [signing, setSigning] = useState<boolean>(false);

  async function handleConnect() {
    if (typeof window === 'undefined' || !window.ronin) {
      alert('Ronin Wallet extension not detected. Please install or enable it.');
      return;
    }

    setConnecting(true);
    try {
      let accounts: string[] | undefined;

      // 1) If the new EIP-1193 provider is available:
      if (window.ronin.provider?.request) {
        accounts = await window.ronin.provider.request({ method: 'eth_requestAccounts' });
      }
      // 2) If older .enable is available:
      else if (typeof window.ronin.enable === 'function') {
        accounts = await window.ronin.enable();
      }
      // 3) If older .request is available:
      else if (typeof window.ronin.request === 'function') {
        accounts = await window.ronin.request({ method: 'eth_requestAccounts' });
      }
      // 4) Otherwise, fallback to the older .send(...) usage:
      else if (typeof window.ronin.send === 'function') {
        accounts = await new Promise((resolve, reject) => {
          const send = window.ronin!.send!;
          send(
            { method: 'eth_requestAccounts', params: [] },
            (err: any, response?: { result?: string | string[] }) => {
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
      // 5) If none of the above exist, error out:
      else {
        throw new Error('Ronin extension is present but no method to request accounts.');
      }

      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        console.log('Connected with address:', accounts[0]);
      } else {
        console.warn('No accounts found from Ronin extension');
      }
    } catch (error) {
      console.error('Failed to connect to Ronin extension:', error);
      alert('Connection to Ronin extension failed. See console for details.');
    } finally {
      setConnecting(false);
    }
  }

  async function handleSignIn() {
    try {
      if (!address) {
        alert('Please connect to the Ronin Wallet first.');
        return;
      }
      setSigning(true);

      const domain = window.location.host;
      const uri = window.location.origin;
      const message = new SiweMessage({
        domain,
        address,
        statement: 'Sign in with Ronin Wallet to access the app',
        uri,
        version: '1',
        chainId: 2020, // or 2021 if using testnet
        nonce: Math.floor(Math.random() * 1e16).toString()
      });

      const msgToSign = message.prepareMessage();

      // Attempt to sign via the new EIP-1193 provider or fallback
      let sig: string | undefined;
      if (window.ronin?.provider?.request) {
        sig = await window.ronin.provider.request({
          method: 'personal_sign',
          params: [msgToSign, address],
        });
      } else if (typeof window.ronin?.request === 'function') {
        sig = await window.ronin.request({
          method: 'personal_sign',
          params: [msgToSign, address],
        });
      } else if (typeof window.ronin?.send === 'function') {
        // legacy fallback
        sig = await new Promise((resolve, reject) => {
          const send = window.ronin!.send!;
          send(
            { method: 'personal_sign', params: [msgToSign, address] },
            (err: any, response?: { result?: string | string[] }) => {
              if (err) {
                return reject(err);
              }
              if (response?.result && typeof response.result === 'string') {
                resolve(response.result);
              } else {
                reject(new Error('No signature received from ronin.send.'));
              }
            }
          );
        });
      } else {
        throw new Error('No suitable method to sign the message found.');
      }

      if (!sig) {
        alert('No signature returned.');
        setSigning(false);
        return;
      }

      setSignature(sig);

      // NextAuth sign in
      const result = await signIn('credentials', {
        message: JSON.stringify(message),
        signature: sig,
        redirect: false,
      });

      if (result && result.ok) {
        console.log('Successfully signed in with Ronin.');
      } else {
        console.error('Sign in failed:', result);
        alert('Sign in failed. See console for details.');
      }
    } catch (err) {
      console.error('Error signing in with Ronin:', err);
      alert('Sign in error. See console for details.');
    } finally {
      setSigning(false);
    }
  }

  return (
    <div>
      {!address ? (
        <button
          onClick={handleConnect}
          className="bg-[#1e90ff] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          disabled={connecting}
        >
          {connecting ? 'Connecting...' : 'Connect Ronin Wallet'}
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <span className="text-white">Connected: {address}</span>

          {!signature && (
            <button
              onClick={handleSignIn}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              disabled={signing}
            >
              {signing ? 'Signing...' : 'Sign in with Ronin'}
            </button>
          )}

          {signature && (
            <div className="text-white break-all">
              <strong>Signature:</strong> {signature}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
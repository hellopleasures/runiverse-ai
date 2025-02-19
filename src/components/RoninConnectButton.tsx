import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import { useWallet } from '../context/WalletContext';

declare global {
  interface Window {
    ronin?: {
      isRonin?: boolean;
      provider?: {
        request?: (args: { method: string; params?: any[] }) => Promise<any>;
      };
      enable?: () => Promise<string[]>;
      request?: (args: { method: string; params?: any[] }) => Promise<any>;
      send?: (
        args: { method: string; params?: any[] },
        callback: (err: any, result?: { result?: string | string[] }) => void
      ) => void;
      on?: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

interface Props {
  onConnect?: () => void;
}

export function RoninConnectButton({ onConnect }: Props) {
  const [address, setAddress] = useState<string>('');
  const [signature, setSignature] = useState<string>('');
  const [connecting, setConnecting] = useState<boolean>(false);
  const [signing, setSigning] = useState<boolean>(false);
  const { setConnection } = useWallet();

  async function handleConnect() {
    if (typeof window === 'undefined') {
      alert('Window is undefined');
      return;
    }
    const r = window.ronin;
    if (!r) {
      alert('Ronin Wallet extension not detected. Please install or enable it.');
      return;
    }

    setConnecting(true);
    try {
      let accounts: string[] | undefined;
      if (r.provider && r.provider.request) {
        accounts = await r.provider.request({ method: 'eth_requestAccounts' });
      } else if (r.enable) {
        accounts = await r.enable();
      } else if (r.request) {
        accounts = await r.request({ method: 'eth_requestAccounts' });
      } else if (r.send) {
        accounts = await new Promise((resolve, reject) => {
          r.send?.(
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
      } else {
        throw new Error('Ronin extension is present but no method to request accounts.');
      }

      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        setConnection(true, accounts[0]); // <--- store in WalletContext
        console.log('Connected with address:', accounts[0]);
        onConnect?.();
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
    if (typeof window === 'undefined') {
      alert('Window is undefined');
      return;
    }
    const r = window.ronin;
    if (!r) {
      alert('Ronin Wallet extension not detected. Please install or enable it.');
      return;
    }
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
        chainId: 2020,
        nonce: Math.floor(Math.random() * 1e16).toString()
      });

      const msgToSign = message.prepareMessage();

      let sig: string | undefined;
      if (r.provider && r.provider.request) {
        sig = await r.provider.request({
          method: 'personal_sign',
          params: [msgToSign, address],
        });
      } else if (r.request) {
        sig = await r.request({
          method: 'personal_sign',
          params: [msgToSign, address],
        });
      } else if (r.send) {
        sig = await new Promise((resolve, reject) => {
          r.send?.(
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
          className="text-white text-[16px] font-['MekMono'] uppercase bg-[#004de5] px-3 py-1 rounded-md"
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
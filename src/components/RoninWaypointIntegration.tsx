import React, { useEffect, useState } from 'react';
import { authorize, parseRedirectUrl, WaypointProvider } from '@sky-mavis/waypoint';
import { ethers, parseEther } from 'ethers';
import type { ExternalProvider } from '@ethersproject/providers';
import { Web3Provider } from '@ethersproject/providers';

interface RoninWaypointProps {
  /**
   * Called when the user successfully authorizes with Waypoint.
   * This passes the retrieved token back up to the parent.
   */
  onAuthorize?: (token: string) => void;
}

const RONIN_CHAIN_ID = 2021; // use 2020 for mainnet, 2021 for Saigon testnet
const clientId = process.env.NEXT_PUBLIC_RONIN_WAYPOINT_CLIENT_ID || '';

export function RoninWaypointIntegration({ onAuthorize }: RoninWaypointProps) {
  const [address, setAddress] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // On mount, parse redirect URL (if mode=redirect) and check localStorage for a token.
  useEffect(() => {
    const parsed = parseRedirectUrl();
    if (parsed && parsed.token) {
      setToken(parsed.token);
      setAddress(parsed.address || null);
      localStorage.setItem('ronin_token', parsed.token);
      onAuthorize?.(parsed.token);
    } else {
      const stored = localStorage.getItem('ronin_token');
      if (stored) {
        setToken(stored);
      }
    }
  }, [onAuthorize]);

  async function handleAuthorizeWaypoint() {
    try {
      const result = await authorize({
        clientId,
        mode: 'popup', // or 'redirect'
        scopes: ['openid', 'wallet'],
      });
      console.log('authorize result:', result);

      if (result.token) {
        setToken(result.token);
        localStorage.setItem('ronin_token', result.token);
        onAuthorize?.(result.token);
      }
      setAddress(result.address || null);
    } catch (error) {
      console.error('Authorization error:', error);
    }
  }

  async function handleConnectWallet() {
    try {
      if (!clientId) {
        throw new Error('No Ronin Waypoint CLIENT ID found in env.');
      }
      if (!token) {
        throw new Error('No token found. Please authorize first.');
      }

      const waypointProvider = WaypointProvider.create({
        clientId,
        chainId: RONIN_CHAIN_ID,
        scopes: ['openid', 'wallet'],
      });

      const result = await waypointProvider.connect();
      console.log('Connected address:', result.address);
      setAddress(result.address || null);

      // Use the directly imported Web3Provider
      const web3Provider = new Web3Provider(
        waypointProvider as unknown as ExternalProvider
      );
      const signer = web3Provider.getSigner();

      // Example: sign a message
      const signature = await signer.signMessage('Hello from Ronin Waypoint!');
      console.log('Signature:', signature);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }

  async function handleTransactionExample() {
    try {
      if (!clientId) {
        throw new Error('No Ronin Waypoint CLIENT ID found in env.');
      }
      if (!token) {
        throw new Error('No token found. Please authorize first.');
      }

      const waypointProvider = WaypointProvider.create({
        clientId,
        chainId: RONIN_CHAIN_ID,
        scopes: ['openid', 'wallet'],
      });
      await waypointProvider.connect();

      const web3Provider = new Web3Provider(
        waypointProvider as unknown as ExternalProvider
      );
      const signer = web3Provider.getSigner();
      const to = '0x0000000000000000000000000000000000000001';

      const tx = await signer.sendTransaction({
        to,
        value: parseEther('0.01'),
      });
      console.log('Transaction sent:', tx.hash);
      const receipt = await tx.wait();
      console.log('Transaction mined:', receipt);
    } catch (error) {
      console.error('Transaction error:', error);
    }
  }

  return (
    <div
      style={{
        padding: '1rem',
        color: '#fff',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <h1>Ronin Waypoint Integration</h1>
      <p>Address: {address || 'Not connected'}</p>
      <p>
        Token:{' '}
        {token
          ? token.length > 20
            ? token.slice(0, 20) + '...'
            : token
          : 'None'}
      </p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleAuthorizeWaypoint} style={{ marginRight: '0.5rem' }}>
          Authorize
        </button>
        <button onClick={handleConnectWallet} style={{ marginRight: '0.5rem' }}>
          Connect Wallet
        </button>
        <button onClick={handleTransactionExample}>Transaction</button>
      </div>
    </div>
  );
}
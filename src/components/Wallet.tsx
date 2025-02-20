import React, { useEffect, useState } from 'react';
import { useMoralis } from '../moralis/useMoralis';
import { RNS } from '@roninnetwork/rnsjs';
import { JsonRpcProvider } from '@ethersproject/providers';

// If you want to use RNS on mainnet: chainId = 2020 (Ronin mainnet) or 2021 (Saigon testnet).
// Make sure you have an API key for the RPC, e.g. Skymavis RPC with your key
// If you do not have that, you can omit or set a public one. 
// Example: https://api-gateway.skymavis.com/rpc?apikey=YOUR_KEY
const RNS_PROVIDER_URL = process.env.NEXT_PUBLIC_RNS_PROVIDER || 'https://api-gateway.skymavis.com/rpc?apikey=YOUR_KEY';
const RNS_CHAIN_ID = 2020; // Ronin mainnet example

const provider = new JsonRpcProvider(RNS_PROVIDER_URL);
const rnsInstance = new RNS();

export default function Wallet() {
  const { address, nfts, isLoading, error } = useMoralis();
  const [rnsName, setRnsName] = useState<string>('');

  useEffect(() => {
    async function resolveRNS() {
      try {
        await rnsInstance.setProvider(provider, RNS_CHAIN_ID);
        // If address is 0x..., attempt reverse resolution
        // If found, show that name. Otherwise, show partial address.
        if (address) {
          const result = await rnsInstance.getName(address);
          if (result?.name) {
            setRnsName(result.name);
          } else {
            // no RNS name set
            setRnsName('');
          }
        }
      } catch (e) {
        console.error('Error setting RNS provider or resolving RNS name:', e);
      }
    }

    resolveRNS();
  }, [address]);

  if (isLoading) {
    return (
      <div className="text-white p-4">
        <p>Loading your wallet data from Moralis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white p-4">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="text-white p-2 overflow-y-auto" style={{ maxHeight: '100%' }}>
      <h2 className="text-xl font-bold mb-4">Your Wallet</h2>
      {!address && (
        <p className="mb-4">
          No connected wallet found. Please connect or store in localStorage as “connected_address”.
        </p>
      )}

      {address && (
        <div className="mb-4">
          <p className="font-semibold">Address:</p>
          <p className="break-all text-yellow-400">
            {rnsName ? `${rnsName} (${address})` : address}
          </p>
        </div>
      )}

      <h3 className="text-lg font-bold mb-2">NFTs:</h3>
      {nfts.length === 0 ? (
        <p>No NFTs found in your wallet.</p>
      ) : (
        <ul className="space-y-2">
          {nfts.map((nft, idx) => (
            <li key={idx} className="border p-2 rounded">
              <p><span className="font-semibold">Name:</span> {nft.name || 'N/A'}</p>
              <p><span className="font-semibold">Token Address:</span> {nft.tokenAddress}</p>
              <p><span className="font-semibold">Token ID:</span> {nft.tokenId}</p>
              <p><span className="font-semibold">Symbol:</span> {nft.symbol}</p>
              {nft.tokenUri && <p><span className="font-semibold">URI:</span> {nft.tokenUri}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
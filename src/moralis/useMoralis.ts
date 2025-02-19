import { useEffect, useState } from 'react';
import Moralis from 'moralis';

// This hook manages fetching the user’s wallet address and NFTs from Moralis
// Replace placeholders with your actual Moralis setup or environment variables.

export function useMoralis() {
  const [address, setAddress] = useState<string>('');
  const [nfts, setNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Optional: Provide your Moralis API key via environment variable
  // e.g., process.env.NEXT_PUBLIC_MORALIS_API_KEY
  const MORALIS_API_KEY = process.env.NEXT_PUBLIC_MORALIS_API_KEY || '';

  // Initialize Moralis
  useEffect(() => {
    if (!MORALIS_API_KEY) {
      console.warn('No Moralis API key found. Please set NEXT_PUBLIC_MORALIS_API_KEY in .env.');
      return;
    }

    Moralis.start({
      apiKey: MORALIS_API_KEY,
    });
  }, [MORALIS_API_KEY]);

  // For now, we assume user is connected via some wallet extension, or they can specify an address here.
  // Modify this logic to align with your actual login/connection flow.
  useEffect(() => {
    async function fetchAddressAndNFTs() {
      try {
        setIsLoading(true);
        // For demonstration, we assume the user has some address in localStorage or window. You may have your own logic.
        const foundAddress = localStorage.getItem('connected_address') || '';
        if (foundAddress) {
          setAddress(foundAddress);

          // Example: fetch NFTs from Moralis EVM API
          // Adjust chain parameter to the chain you want to support. 
          // If you have multi-chain setup, you'll want to adapt accordingly.
          // For demonstration, we use Ethereum chain = '0x1'. For Ronin, you'd adapt as needed if supported.
          const chain = '0x1'; // example mainnet
          const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address: foundAddress,
            chain,
          });
          const result = response.result;
          setNfts(result.map((n: any) => ({
            tokenAddress: n.tokenAddress?.checksum,
            tokenId: n.tokenId,
            name: n.name,
            symbol: n.symbol,
            tokenUri: n.tokenUri,
          })));
        } else {
          // No address found
          setAddress('');
          setNfts([]);
        }
      } catch (e: any) {
        console.error('Error fetching from Moralis:', e);
        setError(e?.message || 'Error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchAddressAndNFTs();
  }, []);

  return {
    address,
    nfts,
    isLoading,
    error,
  };
}
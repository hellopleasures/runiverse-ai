import React, { createContext, useContext, useState } from 'react';

interface WalletContextValue {
  isConnected: boolean;
  address: string;
  setConnection: (connected: boolean, addr?: string) => void;
}

const WalletContext = createContext<WalletContextValue>({
  isConnected: false,
  address: '',
  setConnection: () => {}
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  function setConnection(connected: boolean, addr?: string) {
    setIsConnected(connected);
    if (addr) {
      setAddress(addr);
      // optionally store in localStorage or so:
      localStorage.setItem('connected_address', addr);
    } else if (!connected) {
      setAddress('');
      localStorage.removeItem('connected_address');
    }
  }

  return (
    <WalletContext.Provider value={{ isConnected, address, setConnection }}>
      {children}
    </WalletContext.Provider>
  );
};

export function useWallet() {
  return useContext(WalletContext);
}
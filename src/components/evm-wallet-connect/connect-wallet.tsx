import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    ethereum: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

const EvmWalletConnect = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeWallet = async () => {
      try {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
          const accounts = await ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
          setInitialized(true);
          setError(null);
        } else {
          setError('MetaMask not detected');
          setInitialized(true);
        }
      } catch (err) {
        setError('Failed to connect wallet');
        setInitialized(true);
      }
    };

    if (!initialized) {
      initializeWallet();
    }
  }, [initialized]);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setError(null);
      } else {
        setError('MetaMask not detected');
      }
    } catch (err: any) {
      if (err.code === 4001) {
        setError('User rejected the connection request');
      } else {
        setError('Failed to connect wallet');
      }
    }
  };

  return (
    <div>
      {account ? (
        <div className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
          <p>Connected account: {account}</p>
        </div>
      ) : (
        <button className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EvmWalletConnect;

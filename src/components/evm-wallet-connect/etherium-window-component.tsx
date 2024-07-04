import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';

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
      } catch (err: any) {
        console.error('Failed to connect wallet:', err);
        setError('Failed to connect wallet');
        setInitialized(true);
      }
    };

    if (!initialized) {
      initializeWallet();
    }
  }, [initialized]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts: any = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new Web3Provider(window.ethereum);

        console.log('provider loggg', provider);
        console.log('account data log', accounts);
      } catch (error: any) {
        if (error.code === 4001) {
          console.log('User rejected the request.');
          alert('Please connect to the wallet to proceed.');
        } else {
          console.error(error);
        }
      }
    } else {
      alert('MetaMask is not installed. Please install it to proceed.');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setError(null);
  };

  const forceConnectWallet = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      connectWallet();
    } else {
      setError('MetaMask not detected');
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <div className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
            <p>Connected account: {account}</p>
          </div>
          <button className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" onClick={forceConnectWallet}>
          Connect Wallet using EVM window
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EvmWalletConnect;

import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const EvmWalletConnect = () => {
   const [account, setAccount] = useState<string | null>(null);
   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkWalletConnection = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } else {
        setError('MetaMask not detected');
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      setError(null);
    } catch (err) {
      setError('Failed to connect wallet');
    }
  };

  return (
    <div>
      {account ? (
        <div className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
          <p>Connected account: {account}</p>
        </div>
      ) : (
        <button className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" onClick={connectWallet}>Connect Wallet</button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EvmWalletConnect;

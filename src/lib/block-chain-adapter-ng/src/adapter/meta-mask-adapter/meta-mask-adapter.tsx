  /* eslint-disable react-hooks/exhaustive-deps */
  import React, { useState, useEffect, useCallback } from 'react';

  // Define wallet names and their detection status
  const WALLETS = [
    {
      name: 'MetaMask',
      condition: () => window.ethereum && window.ethereum.isMetaMask,
    },
    {
      name: 'Coinbase Wallet',
      condition: () => window.ethereum && window.ethereum.isCoinbaseWallet,
    },
    {
      name: 'Brave Wallet',
      condition: () => window.ethereum && window.ethereum.isBraveWallet,
    },
    {
      name: 'Phantom',
      condition: () => window.ethereum && window.ethereum.isPhantom,
    },
    {
      name: 'Trust Wallet',
      condition: () => window.ethereum && window.ethereum.isTrust,
    },
    {
      name: 'MathWallet',
      condition: () => window.ethereum && window.ethereum.isMathWallet,
    },
    { name: 'Binance Chain Wallet', condition: () => window.BinanceChain },
    {
      name: 'Frame',
      condition: () => window.ethereum && window.ethereum.isFrame,
    },
  ];

  const MetaWMaskWalletConnect: React.FC = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [availableWallets, setAvailableWallets] = useState<string[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

    useEffect(() => {
      const detectWallets = () => {
        const detectedWallets = WALLETS.filter((wallet) =>
          wallet.condition()
        ).map((wallet) => wallet.name);
        setAvailableWallets(detectedWallets);
        console.log(detectedWallets);
      };

      detectWallets();
    }, []);

    const connectWallet = useCallback(async () => {
      try {
        setLoading(true);
        if (
          selectedWallet === 'Phantom' &&
          window.ethereum &&
          window.ethereum.isPhantom
        ) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setError(null);
            console.log('Connected account:', accounts[0]);
          } else {
            setError('No accounts found');
            console.error('No accounts found');
          }
        } else if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setError(null);
            console.log('Connected account:', accounts[0]);
          } else {
            setError('No accounts found');
            console.error('No accounts found');
          }
        } else {
          setError(
            'Ethereum provider not found. Please install a wallet extension.'
          );
          console.error('Ethereum provider not found.');
        }
      } catch (error: any) {
        if (error.code === 4001) {
          setError('User rejected the request. Please try again.');
          console.error('User rejected the request.');
        } else {
          setError('An error occurred. Check console for details.');
          console.error('An error occurred:', error.message);
          console.error('Error code:', error.code);
          console.error('Stack trace:', error.stack);
        }
      } finally {
        setLoading(false);
      }
    }, [selectedWallet]);

    const disconnectWallet = () => {
      setAccount(null);
      setError(null);
    };

    const handleWalletSelection = (walletName: string) => {
      setSelectedWallet(walletName);
    };

    useEffect(() => {
      if (selectedWallet) {
        connectWallet();
      }
    }, [connectWallet, selectedWallet]);

    useEffect(() => {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log('Account changed:', accounts[0]);
        } else {
          setAccount(null);
          console.log('Please connect to a wallet.');
        }
      };

      if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
      }

      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener(
            'accountsChanged',
            handleAccountsChanged
          );
        }
      };
    }, []);

    return (
      <div>
        {account ? (
          <div>
            <div className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
              <p>Connected account: {account}</p>
            </div>
            <button
              className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <div>
            <p>Select a wallet to connect:</p>
            {availableWallets.length > 0 ? (
              availableWallets.map((wallet) => (
                <button
                  key={wallet}
                  className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
                  onClick={() => handleWalletSelection(wallet)}
                  disabled={loading}
                >
                  {loading
                    ? `Connecting to ${wallet}...`
                    : `Connect with ${wallet}`}
                </button>
              ))
            ) : (
              <p>
                No supported wallets detected. Please install MetaMask, Phantom,
                or another wallet extension.
              </p>
            )}
            {error && <p>{error}</p>}
          </div>
        )}
      </div>
    );
  };

export default MetaWMaskWalletConnect;
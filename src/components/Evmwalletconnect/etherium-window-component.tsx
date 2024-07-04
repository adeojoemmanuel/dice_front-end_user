import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const EvmWalletConnect = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function connectWallet() {
        try {
            setLoading(true);
            let  provider: any;
            if (window.ethereum) {
                provider = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Wallet connected');
              } else {
                console.log('No wallet found');
              }
            if (provider) {
                const accounts = await provider.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setError(null);  // Clear any previous errors
                console.log('Ethereum provider detected and accounts accessed.');
            } else {
                setError('Please install MetaMask!');
                console.error('Please install MetaMask!');
            }
        } catch (error: any) {
            if (error.code === 4001) {
                setError('User rejected the request. Please try again.');
                console.error('User rejected the request.');
            } else {
                setError('An error occurred. Check console for details.');
                console.error('An error occurred:', error);
            }
        } finally {
            setLoading(false);
        }
    }

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

    const checkInitialConnection = async () => {
        const provider: any = await detectEthereumProvider();
        if (provider) {
            const accounts = await provider.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            }
        }
    };    

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                console.log('Account changed:', accounts[0]);
            } else {
                setAccount(null);
                console.log('Please connect to MetaMask.');
            }
        };

        checkInitialConnection();

        window.ethereum?.on('accountsChanged', handleAccountsChanged);

        return () => {
            window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        };
    }, []);

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
                <button
                    className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
                    onClick={forceConnectWallet}
                    disabled={loading}
                >
                    {loading ? 'Connecting...' : 'Connect Using Windows Etherium'}
                </button>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default EvmWalletConnect;

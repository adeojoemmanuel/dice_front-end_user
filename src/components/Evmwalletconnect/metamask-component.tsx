import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskWalletButton = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function connectWallet() {
        try {
            const provider: any = await detectEthereumProvider();
            if (provider) {
                await provider.request({ method: 'eth_requestAccounts' });
                console.log('Ethereum provider detected and accounts accessed.');
            } else {
                setError('Please install MetaMask!');
                console.error('Please install MetaMask!');
            }
        } catch (error: any) {
            if (error.code === 4001) {
                setError('User rejected the request.');
                console.error('User rejected the request.');
            } else {
                setError('An error occurred. Check console for details.');
                console.error('An error occurred:', error);
            }
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
                <button className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated" onClick={forceConnectWallet}>
                    Connect Wallet using EVM window
                </button>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default MetaMaskWalletButton;

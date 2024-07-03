import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskWalletButton = () => {
    const [account, setAccount] = useState(null);
    const [error, setError] = useState<string | null>(null);

    const connectWallet = async () => {
        try {
            const provider:any = await detectEthereumProvider();
            if (provider) {
                const accounts = await provider.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                console.log('Connected account:', accounts[0]);
            } else {
                alert('MetaMask not detected. Please install MetaMask to use this feature.');
            }
        } catch (error: any) {
            if (error.code === 4001) {
                console.log('User rejected the request.');
                alert('Wallet connection was rejected. Please try again and accept the request.');
            } else {
                console.error('An unexpected error occurred:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
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
    

    useEffect(() => {
        const handleAccountsChanged = (accounts: any) => {
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
                Connect Wallet MetaMaskPlugin
                </button>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default MetaMaskWalletButton;

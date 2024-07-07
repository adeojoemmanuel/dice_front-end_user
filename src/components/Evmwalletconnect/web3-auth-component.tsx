import React, { useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/web3auth';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base';
import '@web3auth/modal';

const clientId = process.env.REACT_APP_WEB3AUTH_CLIENT as string;

const EvmWeb3Auth = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3authInstance = new Web3Auth({
          clientId,
          chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: '0x1' },
        });
        await web3authInstance.initModal(); 
        setWeb3auth(web3authInstance);
      } catch (error) {
        console.error('Failed to initialize Web3Auth', error);
      }
    };

    initWeb3Auth();
  }, []);

  const connectWallet = async () => {
    if (!web3auth) {
      console.error('Web3Auth not initialized');
      return;
    }
  
    try {
      const connectedProvider = await web3auth.connect() as SafeEventEmitterProvider;
      setProvider(connectedProvider);
      console.log('Wallet connected:', connectedProvider);
    } catch (error) {
      console.error('Failed to connect wallet', error);
    }
  };
  

  return (
    <button onClick={connectWallet} disabled={!web3auth}>
      {provider ? 'Wallet Connected' : 'Connect Wallet'}
    </button>
  );
};

export default EvmWeb3Auth;

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Web3Auth } from '@web3auth/web3auth';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

const clientId = process.env.REACT_APP_WEB3AUTH_CLIENT;
if (!clientId) {
  throw new Error('REACT_APP_WEB3AUTH_CLIENT environment variable is not set');
}

const Web3AuthLoginButton: React.FC = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    const initWeb3Auth = async () => {
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: { chainNamespace: 'eip155', chainId: '0x1' },
      });

      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          network: 'mainnet',
          clientId,
        },
      });

      web3auth.configureAdapter(openloginAdapter as unknown as any);
      await web3auth.initModal();

      setWeb3auth(web3auth);
    };

    initWeb3Auth();
  }, []);

  const login = async () => {
    if (web3auth) {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);

      if (web3authProvider) {
        const web3 = new Web3(web3authProvider as any);
        const accounts = await web3.eth.getAccounts();
        console.log('Connected accounts:', accounts);
      }
    }
  };

  const disconnectWallet = async () => {
    if (web3auth && provider) {
      await web3auth.logout();
      setProvider(null);
      console.log('Wallet disconnected');
    }
  };

  return (
    <div>
      {provider ? (
        <button
          className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
          onClick={disconnectWallet}
        >
          Disconnect Wallet
        </button>
      ) : (
        <button
          className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
          onClick={login}
        >
          Login with Web3Auth
        </button>
      )}
    </div>
  );
};

export default Web3AuthLoginButton;

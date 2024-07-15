import React from 'react';
import { Web3AuthLoginButton, SolanaConnect } from './provider';
import AppContent from './AppContent';

import {
  browserWindowConnect,
  CustomPhantomAdapter,
  EvmWalletConnect,
  MetaWMaskWalletConnect,
} from './lib/block-chain-adapter-ng/alpha-sync/adapter';

export {
  browserWindowConnect,
  EvmWalletConnect,
  CustomPhantomAdapter,
  MetaWMaskWalletConnect,
  Web3AuthLoginButton,
};

function App() {
  return (
    <div>
      <>
        <React.StrictMode>
          <SolanaConnect>
            <AppContent />
          </SolanaConnect>
          <br />
          <br />
          <EvmWalletConnect />
        </React.StrictMode>
        <Web3AuthLoginButton />
      </>
    </div>
  );
}

export default App;

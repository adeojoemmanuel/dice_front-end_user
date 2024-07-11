import React from "react";
import { EvmWeb3Auth, SolanaConnect } from "./provider";
import AppContent from './AppContent';
 
import { 
  browserWindowConnect, 
  CustomPhantomAdapter, 
  EvmWalletConnect, 
  MetaWMaskWalletConnect 
} from './lib/block-chain-adapter-ng/src/adapter'

export { 
  browserWindowConnect, 
  EvmWalletConnect, 
  CustomPhantomAdapter, 
  MetaWMaskWalletConnect, 
  EvmWeb3Auth 
};

function App() {
  return (
    <div>
      <br/>
      <React.StrictMode>
        <SolanaConnect>
          <AppContent />
        </SolanaConnect>
        <br />
        <br/>
        <EvmWalletConnect />
      </React.StrictMode>
      <EvmWeb3Auth />
    </div>
  );
}


export default App;


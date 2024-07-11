import React from "react";
import { Web3AuthConnect, SolanaConnect } from "./provider";
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
  Web3AuthConnect 
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
      <Web3AuthConnect />
    </div>
  );
}


export default App;


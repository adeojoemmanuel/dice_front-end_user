import React from "react";
import { SolanaConnect } from "./provider";
import AppContent from './AppContent';
import { EvmWalletConnect, MetaMaskConnect, EvmWeb3Auth } from './components/Evmwalletconnect';

function App() {
  return (
    <div>
      <React.StrictMode>
        <SolanaConnect>
          <AppContent />
        </SolanaConnect>
        <EvmWalletConnect />
        <MetaMaskConnect />
      </React.StrictMode>
      <EvmWeb3Auth />
    </div>
  );
}

export default App;
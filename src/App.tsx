import React from "react";
import { SolanaConnect } from "./provider";
import AppContent from './AppContent';
import { EvmWalletConnect, MetaMaskConnect, EvmWeb3Auth } from './components/Evmwalletconnect';

function App() {
  return (
    <div>
      <SolanaConnect>
        <AppContent />
      </SolanaConnect>
      <EvmWalletConnect />
      <MetaMaskConnect />
      <EvmWeb3Auth />
    </div>
  );
}

export default App;
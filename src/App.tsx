import React from "react";
import { SolanaConnect, EvmWalletConnect, MetaMaskConnect } from "./provider";
import AppContent from './AppContent';

function App() {
  return (
    <div>
      <SolanaConnect>
        <AppContent />
      </SolanaConnect>
      <>
        <EvmWalletConnect />
      </>
      <>
        <MetaMaskConnect />
      </>
    </div>
  );
}

export default App;
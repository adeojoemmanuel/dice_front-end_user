/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import styles from './wallet-button.module.scss';
import {
  WalletAdapter,
  WalletAdapterNetwork,
} from '@solana/wallet-adapter-base';
import {
  SolflareWalletAdapter,
  TorusWalletAdapter,
  CoinbaseWalletAdapter,
  TrustWalletAdapter,
  PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import ConnectWalletTaskBox from './component/multi-chain-wallet-adapters/connect-task-bar';
import WrongWalletTaskBox from './component/multi-chain-wallet-adapters/wrong-wallet-state';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletConnectProps, UserWalletItem } from './types/wallet-types';
import { CustomWalletAdapter } from './custom-wallet-adapter/custom-phantom-wallet-adapter';

require('@solana/wallet-adapter-react-ui/styles.css');

export enum TASK_STATUS {
  STARTED = 'started',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

const network = WalletAdapterNetwork.Devnet;
const rpcEndPoint = clusterApiUrl(network);

const BlockchainWalletAdapterComponent: React.FC<WalletConnectProps> = ({
  user,
  TaskBoxTypes,
  isTaskCompleted,
  refetchProfile,
  selectedWallet,
  onWalletSelect,
  wallets,
  adapter,
  handleWalletSelection,
}) => {
  const { wallet, connected, publicKey, disconnect } = useWallet();
  const [walletAddress, setWalletAddress] = useState<UserWalletItem[]>(
    user.userWallet || []
  );
  const [publicKeyStore, setPublicKeyStore] = useState<string | null>(null);

  const resetWalletConnection = async () => {
    if (connected) {
      await disconnect();
    }
    setWalletAddress([]);
    setPublicKeyStore(null);
  };

  const onClickDeleteWallet = async () => {
    await resetWalletConnection();
  };

  useEffect(() => {
    if (publicKey?.toBase58()) {
      console.log(
        'anything you want the component do if the publick key changed '
      );
    }

    if (wallet?.adapter) {
      wallet.adapter.on('connect', () =>
        setPublicKeyStore(user?.wallet?.publicKey?.toString() || null)
      );
      wallet.adapter.on('disconnect', () => setPublicKeyStore(null));
    }

    if (walletAddress) {
      console.log(walletAddress);
    }

    if (publicKey) {
      console.log(publicKeyStore);
    }
  }, [user, wallet]);

  if (!wallet) {
    return (
      <>
        <WrongWalletTaskBox
          type={TaskBoxTypes}
          points={0}
          completed={false}
          onClickConnect={() => {}}
          buttonText="Action Not Supported"
        />
      </>
    );
  }

  return (
    <ConnectWalletTaskBox
      type={TaskBoxTypes}
      points={0}
      completed={false}
      buttonText="Connect Your Wallet"
    />
  );
};

const BlockchainWalletAdapter: React.FC<WalletConnectProps> = ({
  user,
  TaskBoxTypes,
  isTaskCompleted,
  refetchProfile,
  selectedWallet,
  onWalletSelect,
  wallets,
  adapter,
}) => {
  const supportedWallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new TrustWalletAdapter(),
      new PhantomWalletAdapter(),
      new CustomWalletAdapter(),
    ],
    []
  );

  const [selectedWallets, setSelectedWallets] = useState<WalletAdapter[]>([]);

  const handleWalletSelection = useCallback((wallets: WalletAdapter[]) => {
    setSelectedWallets(wallets);
    console.log(selectedWallets);
  }, []);

  return (
    <div className={styles.customButtonWrapper}>
      <ConnectionProvider endpoint={rpcEndPoint}>
        <WalletProvider wallets={supportedWallets} autoConnect>
          <WalletModalProvider className="wallet-modal-top">
            <BlockchainWalletAdapterComponent
              user={user}
              TaskBoxTypes={TaskBoxTypes}
              isTaskCompleted={isTaskCompleted}
              refetchProfile={refetchProfile}
              selectedWallet={selectedWallet}
              onWalletSelect={onWalletSelect}
              wallets={wallets}
              adapter={adapter}
              handleWalletSelection={handleWalletSelection}
            />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default BlockchainWalletAdapter;

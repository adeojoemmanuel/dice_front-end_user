/// <reference types="react-scripts" />
interface Window {
  ethereum: {
    isPhantom: {
      isCoinbaseWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isBraveWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isMetaMask?: boolean;
      solana?: any;
      phantom?: any;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isTrust: {
      isCoinbaseWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isBraveWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isMetaMask?: boolean;
      solana?: any;
      phantom?: any;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isMathWallet: {
      isCoinbaseWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isBraveWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isMetaMask?: boolean;
      solana?: any;
      phantom?: any;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isFrame: {
      isCoinbaseWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isBraveWallet: {
        isMetaMask?: boolean;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
        on: (event: string, callback: (...args: any[]) => void) => void;
        removeListener: (
          event: string,
          callback: (...args: any[]) => void
        ) => void;
      };
      isMetaMask?: boolean;
      solana?: any;
      phantom?: any;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isCoinbaseWallet: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isBraveWallet: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        callback: (...args: any[]) => void
      ) => void;
    };
    isMetaMask?: boolean;
    solana?: any;
    phantom?: any;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: (...args: any[]) => void) => void;
    removeListener: (event: string, callback: (...args: any[]) => void) => void;
  };
  BinanceChain: any;
}

interface SolanaWindow extends Window {
  solana?: {
    isPhantom?: boolean;
    connect: () => Promise<void>;
    publicKey: {
      toString: () => string;
    };
  };
}

declare var window: SolanaWindow;

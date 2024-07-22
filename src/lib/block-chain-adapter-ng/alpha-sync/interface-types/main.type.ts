import { CHAIN_NAMESPACES } from '@web3auth/base';


export interface OpenloginAdapterConfig {
  adapterSettings: {
    clientId: string;
    network: "testnet" | "mainnet";
    uxMode: "popup" | "redirect";
    whiteLabel?: {
      name: string;
      logoLight: string;
      logoDark: string;
      defaultLanguage: string;
      dark: boolean;
    };
    loginConfig: {
      google?: {
        name: string;
        verifier: string;
        typeOfLogin: "google";
        clientId: string;
      };
    };
  };
  loginSettings?: {
    mfaLevel?: "optional" | "mandatory";
  };
} 

export interface Web3AuthConfig {
  chainId: string,
  rpcTarget: string;
  chainNamespace: string;
  displayName: string;
  blockExplorerUrl: string;
  ticker: string;
  tickerName: string;
  logo: string;
  blockExplorer:string;
};

export interface ChainConfig {
  chainId: string;
  rpcTarget: string;
  chainNamespace: typeof CHAIN_NAMESPACES[keyof typeof CHAIN_NAMESPACES];
  displayName: string;
  blockExplorerUrl: string;
  ticker: string;
  tickerName: string;
  logo: string;
  blockExplorer: string;
}

export interface UIConfig {
  appName: string;
  theme: any;
  mode: "light" | "dark" | "auto";
  loginMethodsOrder: string[];
  logoLight: string;
  logoDark: string;
  defaultLanguage: string;
  loginGridCol: number;
  primaryButton: "externalLogin" | "socialLogin" | "emailLogin";
}

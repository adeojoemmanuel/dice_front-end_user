import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base"; 
import { LANGUAGE_TYPE } from './wallet.enum';

export type TaskBoxTypesType = any;

interface OpenloginAdapterConfig {
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

interface c {
  appName: string;
  mode: "light" | "dark" | "auto";
  loginMethodsOrder: string[];
  logoLight: string;
  logoDark: string;
  defaultLanguage: string;
  loginGridCol: number;
  primaryButton: "externalLogin" | "socialLogin" | "emailLogin";
}

// web3 auth export

interface ChainConfig {
  chainNamespace: typeof CHAIN_NAMESPACES[keyof typeof CHAIN_NAMESPACES];
  chainId: string;
  rpcTarget: string;
}

interface UIConfig {
  appName: string;
  mode: "light" | "dark" | "auto";
  loginMethodsOrder: string[];
  logoLight: string;
  logoDark: string;
  defaultLanguage: string;
  loginGridCol: number;
  primaryButton: "externalLogin" | "socialLogin" | "emailLogin";
};
    
interface Web3AuthConfig {
  clientId: string;
  web3AuthNetwork: typeof WEB3AUTH_NETWORK[keyof typeof WEB3AUTH_NETWORK];
  uiConfig: UIConfig;
  chainConfig: any;
  modalZIndex: string;
}

export { 
  ChainConfig, 
  Web3AuthConfig, 
  UIConfig, 
  OpenloginAdapterConfig,
  LANGUAGE_TYPE
}

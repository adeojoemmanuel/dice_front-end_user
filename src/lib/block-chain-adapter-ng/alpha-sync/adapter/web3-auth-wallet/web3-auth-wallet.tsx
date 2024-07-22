/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { CHAIN_NAMESPACES, ChainNamespaceType, IProvider, WEB3AUTH_NETWORK, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthConfig, UIConfig } from './../../interface-types/'

import "./../../styles.css";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getEnvVar } from './../../utils/'; 

const clientId = getEnvVar('REACT_APP_WEB3AUTH_CLIENT');

const chainConfig = {
  chainId: getEnvVar('REACT_APP_CHAINID'),  
  rpcTarget: getEnvVar('REACT_APP_RPC_TARGET'),
  chainNamespace: CHAIN_NAMESPACES.EIP155 as ChainNamespaceType,
  displayName: getEnvVar('REACT_APP_DISPLAY_NAME'),
  blockExplorerUrl: getEnvVar('REACT_APP_BLOCKER_EXPLORER'),
  ticker: getEnvVar('REACT_APP_TICKER'),
  tickerName: getEnvVar('REACT_APP_TICKER_NAME'),
  logo: getEnvVar('REACT_APP_LOGO'),
  blockExplorer: getEnvVar('REACT_APP_BLOCKER_EXPLORER'),
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
}); 

const web3AuthOptions: Web3AuthOptions = {
  clientId,
  chainConfig,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider: privateKeyProvider as any,
  uiConfig: {
    appName: getEnvVar('REACT_APP_DISPLAY_NAME'),
    theme: {
      primary: getEnvVar('REACT_APP_THEME'),
    },
    mode: "auto",
    logoLight: getEnvVar('REACT_APP_LOGO_LIGHT'),
    logoDark: getEnvVar('REACT_APP_LOGO_DARK'),
    defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
    loginGridCol: parseInt(getEnvVar('REACT_APP_LOGIN_GRID_COL')) as 2 | 3 | undefined,
    primaryButton: "externalLogin", // "externalLogin" | "socialLogin" | "emailLogin"
  }
};


const web3auth = new Web3Auth(web3AuthOptions);


function Web3AuthLoginButton() {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);
        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };
    console.log(provider);

    init();
  }, []);

  const login = async () => {
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      if (web3auth.connected) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Error connecting with Web3Auth:", error);
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
      uiConsole("Logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
    console.log(...args);
  }

  const loggedInView = (
    <div>
      <button onClick={logout} className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
        Log Out
      </button>
    </div>
  );

  const unloggedInView = (
    <button onClick={login} className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
      Login
    </button>
  );  

  return (
    <>
      {loggedIn ? loggedInView : unloggedInView}
    </>
  );
}

export default Web3AuthLoginButton;

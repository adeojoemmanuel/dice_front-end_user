/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { Web3AuthConfig } from './../../interface-types/index'
import Web3 from "web3";

import "./../../styles.css";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getEnvVar } from './../../utils/';

const clientId = getEnvVar('REACT_APP_WEB3AUTH_CLIENT');

const chainConfig:Web3AuthConfig  = {
  chainId: getEnvVar('REACT_APP_CHAINID'),
  rpcTarget: getEnvVar('REACT_APP_RPC_TARGET'),
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: getEnvVar('REACT_APP_DISPLAY_NAME'),
  blockExplorerUrl: getEnvVar('REACT_APP_BLOCKER_EXPLORER'),
  ticker: getEnvVar('REACT_APP_TICKER'),
  tickerName: getEnvVar('REACT_APP_TICKER_NAME'),
  logo: getEnvVar('REACT_APP_LOGO'),
  blockExplorer: getEnvVar('REACT_APP_BLOCKER_EXPLORER'),
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider: privateKeyProvider as any,
})

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

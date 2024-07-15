/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import Web3 from "web3";

import "./App.css";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const clientId = process.env.REACT_APP_WEB3AUTH_CLIENT || '';


const chainConfig = {
  chainId: "0x1",
  rpcTarget: "https://rpc.ankr.com/eth",
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://images.toruswallet.io/eth.svg",
  blockExplorer: "https://etherscan.io/",
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

  const getUserInfo = async () => {
    try {
      const user = await web3auth.getUserInfo();
      uiConsole(user);
    } catch (error) {
      console.error("Error getting user info:", error);
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

  const getAccounts = async () => {
    try {
      if (!provider) {
        uiConsole("Provider not initialized yet");
        return;
      }
      const web3 = new Web3(provider as any);
      const address = await web3.eth.getAccounts();
      uiConsole("Accounts:", address);
    } catch (error) {
      console.error("Error getting accounts:", error);
    }
  };

  const getBalance = async () => {
    try {
      if (!provider) {
        uiConsole("Provider not initialized yet");
        return;
      }
      const web3 = new Web3(provider as any);
      const address = (await web3.eth.getAccounts())[0];
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address),
        "ether"
      );
      uiConsole("Balance:", balance, "ETH");
    } catch (error) {
      console.error("Error getting balance:", error);
    }
  };

  const signMessage = async () => {
    try {
      if (!provider) {
        uiConsole("Provider not initialized yet");
        return;
      }
      const web3 = new Web3(provider as any);
      const fromAddress = (await web3.eth.getAccounts())[0];
      const originalMessage = "MESSAGE_TO_BE_Encrypted";
      const signedMessage = await web3.eth.personal.sign(
        originalMessage,
        fromAddress,
        'test password!'
      );
      uiConsole("Signed message:", signedMessage);
    } catch (error) {
      console.error("Error signing message:", error);
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

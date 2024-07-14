import React, { Component } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

interface State {
  account: string | null;
  error: string | null;
}

class browserWindowConnect extends Component<{}, State> {
  state: State = {
    account: null,
    error: null,
  };

  async componentDidMount() {
    await this.checkWalletConnection();
  }

  checkWalletConnection = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length > 0) {
        this.setState({ account: accounts[0] });
      }
    } else {
      this.setState({ error: 'MetaMask not detected' });
    }
  };

  connectWallet = async () => {
    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.setState({ account: accounts[0], error: null });
    } catch (err) {
      this.setState({ error: 'Failed to connect wallet' });
    }
  };

  render() {
    const { account, error } = this.state;

    return (
      <div>
        {account ? (
          <div className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated">
            <p>Connected account: {account}</p>
          </div>
        ) : (
          <button
            className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
            onClick={this.connectWallet}
          >
            Connect Wallet
          </button>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default browserWindowConnect;

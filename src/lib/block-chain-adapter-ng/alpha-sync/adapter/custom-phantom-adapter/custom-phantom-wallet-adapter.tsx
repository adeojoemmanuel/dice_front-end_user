import { EventEmitter } from 'events';
import {
  clusterApiUrl,
  PublicKey,
  SystemProgram,
  Transaction,
  Keypair,
  VersionedTransaction,
} from '@solana/web3.js';
import bs58 from 'bs58';
import { Buffer } from 'buffer';
import nacl from 'tweetnacl';
import {
  BaseMessageSignerWalletAdapter,
  WalletName,
  WalletReadyState,
  WalletAdapterNetwork,
  SupportedTransactionVersions,
} from '@solana/wallet-adapter-base';
// import crypto from 'crypto';
import crypto from 'crypto-browserify';

import { routes } from '../../interface-types/routes';

global.Buffer = global.Buffer || Buffer;

const network = WalletAdapterNetwork.Devnet;
const NETWORK = clusterApiUrl(network);

const handleNavigation = (url: string) => {
  window.location.href = url;
};

const createRedirectLink = (url: string, label: string) => {
  return `<a href="${url}" onClick={() => handleNavigation("${url}")}">${label}</a>`;
};

const onConnectRedirectLink = createRedirectLink('/connect', 'On Connect');
const onDisconnectRedirectLink = createRedirectLink(
  '/disconnect',
  'On Disconnect'
);
const onSignAndSendTransactionRedirectLink = createRedirectLink(
  '/sign-and-send-transaction',
  'Sign and Send Transaction'
);
const onSignTransactionRedirectLink = createRedirectLink(
  '/sign-transaction',
  'Sign Transaction'
);
const onSignMessageRedirectLink = createRedirectLink(
  '/sign-message',
  'Sign Message'
);

const useUniversalLinks = false;

const buildUrl = (path: string, params: URLSearchParams) =>
  `${useUniversalLinks ? 'https://phantom.app/ul/' : 'phantom://'}v1/${path}?${params.toString()}`;

const decryptPayload = (
  data: string,
  nonce: string,
  sharedSecret?: Uint8Array
) => {
  if (!sharedSecret) throw new Error('missing shared secret');

  const decryptedData = nacl.box.open.after(
    bs58.decode(data),
    bs58.decode(nonce),
    sharedSecret
  );
  if (!decryptedData) {
    throw new Error('Unable to decrypt data');
  }
  return JSON.parse(Buffer.from(decryptedData).toString('utf8'));
};

const encryptPayload = (payload: any, sharedSecret?: Uint8Array) => {
  if (!sharedSecret) throw new Error('missing shared secret');

  const nonce = nacl.randomBytes(24);

  const encryptedPayload = nacl.box.after(
    Buffer.from(JSON.stringify(payload)),
    nonce,
    sharedSecret
  );

  return [nonce, encryptedPayload];
};

const computeToken = (secret: string): string => {
  const hash = crypto.createHash('sha256');
  hash.update(secret);
  return hash.digest('hex');
};

const _createDeeplink = (path: string, params: URLSearchParams): string => {
  const baseUrl = useUniversalLinks ? 'https://phantom.app/ul/' : 'phantom://';
  return `${baseUrl}v1/${path}?${params.toString()}`;
};

const PHANTOM_WALLET_NAME = 'Phantom' as WalletName<'Phantom'>;

export class CustomPhantomAdapter extends BaseMessageSignerWalletAdapter<string> {
  name!: WalletName<string>;
  url!: string;
  icon!: string;
  supportedTransactionVersions?: SupportedTransactionVersions;
  private _publicKey: PublicKey | null;
  private _readyState: WalletReadyState;
  private _connecting: boolean;
  private _dappEncryptionPublicKey: PublicKey;
  private _eventEmitter: EventEmitter;

  private state: {
    deepLink: string;
    logs: string[];
    dappKeyPair: nacl.BoxKeyPair;
    sharedSecret: Uint8Array | undefined;
    session: any;
    phantomWalletPublicKey: PublicKey | undefined;
    phantomEncryptionPublicKey: PublicKey | undefined;
  };

  connection: any;

  constructor() {
    super();
    const keypair = Keypair.generate();
    this._publicKey = keypair.publicKey;
    this._readyState = WalletReadyState.Installed;
    this._connecting = false;
    this._dappEncryptionPublicKey = keypair.publicKey;
    this._eventEmitter = new EventEmitter();
    this.name = 'phantom' as WalletName<string>;
    this.url = 'https://phantom.app/';
    this.icon = 'https://avatars.githubusercontent.com/u/124594793?s=200&v=4';

    this.state = {
      deepLink: '',
      logs: [],
      dappKeyPair: nacl.box.keyPair(),
      sharedSecret: undefined,
      session: undefined,
      phantomWalletPublicKey: undefined,
      phantomEncryptionPublicKey: undefined,
    };
  }

  private addLog = (log: string) => {
    this.state.logs.push('> ' + log);
  };

  private clearLog = () => {
    this.state.logs = [];
  };

  handleDeepLink = ({ url }: { url: string }) => {
    this.state.deepLink = url;
  };

  componentDidUpdate(_: any, prevState: { deepLink: string }) {
    if (this.state.deepLink !== prevState.deepLink) {
      this.handleInboundLink(this.state.deepLink);
    }
  }

  private handleInboundLink = (deepLink: string) => {
    if (!deepLink) return;

    const url = new URL(deepLink);
    const params = url.searchParams;

    if (params.get('errorCode')) {
      this.addLog(JSON.stringify(Object.fromEntries([...params]), null, 2));
      return;
    }

    if (/onConnect/.test(url.pathname || url.host)) {
      const sharedSecretDapp = nacl.box.before(
        bs58.decode(params.get('phantom_encryption_public_key')!),
        this.state.dappKeyPair.secretKey
      );

      const connectData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        sharedSecretDapp
      );

      this.state.sharedSecret = sharedSecretDapp;
      this.state.session = connectData.session;
      this.state.phantomWalletPublicKey = new PublicKey(connectData.public_key);
      this.state.phantomEncryptionPublicKey = new PublicKey(
        params.get('phantom_encryption_public_key')!
      );

      this.addLog(JSON.stringify(connectData, null, 2));
    } else if (/onDisconnect/.test(url.pathname || url.host)) {
      this.addLog('Disconnected!');
    } else if (/onSignAndSendTransaction/.test(url.pathname || url.host)) {
      const signAndSendTransactionData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        this.state.sharedSecret
      );

      this.addLog(JSON.stringify(signAndSendTransactionData, null, 2));
    } else if (/onSignAllTransactions/.test(url.pathname || url.host)) {
      const signAllTransactionsData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        this.state.sharedSecret
      );

      const decodedTransactions = signAllTransactionsData.transactions.map(
        (t: string) => Transaction.from(bs58.decode(t))
      );

      this.addLog(JSON.stringify(decodedTransactions, null, 2));
    } else if (/onSignTransaction/.test(url.pathname || url.host)) {
      const signTransactionData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        this.state.sharedSecret
      );

      const decodedTransaction = Transaction.from(
        bs58.decode(signTransactionData.transaction)
      );

      this.addLog(JSON.stringify(decodedTransaction, null, 2));
    } else if (/onSignMessage/.test(url.pathname || url.host)) {
      const signMessageData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        this.state.sharedSecret
      );

      this.addLog(JSON.stringify(signMessageData, null, 2));
    }
  };

  private createTransferTransaction = async () => {
    const { phantomWalletPublicKey } = this.state;
    if (!phantomWalletPublicKey)
      throw new Error('missing public key from user');
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: phantomWalletPublicKey,
        toPubkey: phantomWalletPublicKey,
        lamports: 100,
      })
    );
    transaction.feePayer = phantomWalletPublicKey;
    this.addLog('Getting recent blockhash');
    const anyTransaction: any = transaction;
    anyTransaction.recentBlockhash = (
      await this.connection.getLatestBlockhash()
    ).blockhash;
    return transaction;
  };

  connect = async (): Promise<void> => {
    const { dappKeyPair } = this.state;
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      cluster: 'mainnet-beta',
      app_url: 'https://phantom.app',
      redirect_link: onConnectRedirectLink,
    });

    const url = _createDeeplink('connect', params);
    handleNavigation(url);
  };

  async disconnect(): Promise<void> {
    const params = new URLSearchParams({
      redirect_link: onDisconnectRedirectLink,
    });

    const url = _createDeeplink('disconnect', params);
    handleNavigation(url);
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    const { session, sharedSecret, dappKeyPair } = this.state;

    const payload = {
      session,
      message: bs58.encode(message),
    };

    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onSignMessageRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });

    this.addLog('Signing message...');
    const url = _createDeeplink('signMessage', params);
    handleNavigation(url);

    return new Promise((resolve, reject) => {
      const handleMessageSigned = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        const data = JSON.parse(event.data);
        if (data.type === 'signMessage' && data.success) {
          window.removeEventListener('message', handleMessageSigned);
          resolve(new Uint8Array(Buffer.from(data.result, 'base64')));
        } else if (data.type === 'signMessage' && !data.success) {
          window.removeEventListener('message', handleMessageSigned);
          reject(new Error(data.error));
        }
      };

      window.addEventListener('message', handleMessageSigned);
    });
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T> {
    const { session, sharedSecret, dappKeyPair } = this.state;

    const serializedTransaction =
      (transaction as any) instanceof VersionedTransaction
        ? bs58.encode(transaction.serialize())
        : bs58.encode(
            (transaction as any).serialize({ requireAllSignatures: false })
          );

    const payload = {
      session,
      transaction: serializedTransaction,
    };

    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair!.publicKey),
      cluster: network,
      nonce: bs58.encode(nonce),
      app_url: `${origin}`,
      redirect_link: `${origin}/${routes.dashboard.path}`,
      payload: bs58.encode(encryptedPayload),
    });

    this.addLog('Signing transaction...');
    const url = _createDeeplink('signTransaction', params);
    handleNavigation(url);

    return new Promise((resolve, reject) => {
      const handleTransactionSigned = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        const data = JSON.parse(event.data);
        if (data.type === 'signTransaction' && data.success) {
          window.removeEventListener('message', handleTransactionSigned);
          const signedTransaction = Transaction.from(
            Buffer.from(data.result, 'base64')
          );
          resolve(signedTransaction as T);
        } else if (data.type === 'signTransaction' && !data.success) {
          window.removeEventListener('message', handleTransactionSigned);
          reject(new Error(data.error));
        }
      };

      window.addEventListener('message', handleTransactionSigned);
    });
  }

  async signAndSendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<string> {
    const { session, sharedSecret, dappKeyPair } = this.state;

    const serializedTransaction =
      (transaction as any) instanceof VersionedTransaction
        ? bs58.encode(transaction.serialize())
        : bs58.encode(
            (transaction as any).serialize({ requireAllSignatures: false })
          );

    const payload = {
      session,
      transaction: serializedTransaction,
    };

    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onSignAndSendTransactionRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });

    this.addLog('Signing and sending transaction...');
    const url = _createDeeplink('signAndSendTransaction', params);
    handleNavigation(url);

    return new Promise((resolve, reject) => {
      const handleTransactionSent = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        const data = JSON.parse(event.data);
        if (data.type === 'signAndSendTransaction' && data.success) {
          window.removeEventListener('message', handleTransactionSent);
          resolve(data.result);
        } else if (data.type === 'signAndSendTransaction' && !data.success) {
          window.removeEventListener('message', handleTransactionSent);
          reject(new Error(data.error));
        }
      };

      window.addEventListener('message', handleTransactionSent);
    });
  }

  get publicKey() {
    return this._publicKey;
  }

  get connecting() {
    return this._connecting;
  }

  get readyState() {
    return this._readyState;
  }
}

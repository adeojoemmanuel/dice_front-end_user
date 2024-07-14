import React from 'react';

interface WalletAdapterProps {
  message: string;
}

const WalletAdapter: React.FC<WalletAdapterProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default WalletAdapter;

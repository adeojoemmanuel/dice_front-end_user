import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../connection-box/task-box';
import styles from './wallet-button.module.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { DisConnectWalletTaskBoxProps } from '../../types/wallet-types';

const formatWalletAddressFunc = (address: string): string => {
  if (typeof address !== 'string' || address.length === 0) {
    return '';
  }
  const start = address.slice(0, 7);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

const DisConnectWalletTaskBox: React.FC<DisConnectWalletTaskBoxProps> = ({
  tasks,
  type,
  points,
  completed,
  onClickCopyWalletAddress,
  onClickDeleteWallet,
  onClickDisconnect,
  buttonText,
  user,
}) => (
  <TaskBox type={type} points={0} completed={false}  className={styles.walletTaskBox}>
    <>{buttonText}</>
    {user?.userWallet?.map(({ key, value }: { key: string; value: string }, index: number) => {
      const formatted = formatWalletAddressFunc(value);
      return (
        <div key={key} className={styles.walletAddressContainer}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid black' }}>
            <span className={styles.walletAddress}>{formatted}</span>
            <span className={styles.copyIcon}>
              <ContentCopyIcon
                style={{ width: 20, height: 20, opacity: 0.85 }}
                onClick={() => console.log('triggeredClick')}
              />
            </span>
          </div>
          <span className={styles.endIcon}>
            <DeleteIcon style={{ width: 20, height: 20, opacity: 0.85 }} onClick={() => console.log('')} />
          </span>
        </div>
      );
    })}
  </TaskBox>
);

DisConnectWalletTaskBox.propTypes = {
  type: PropTypes.any.isRequired,
  points: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onClickCopyWalletAddress: PropTypes.func.isRequired,
  onClickDeleteWallet: PropTypes.func.isRequired,
  onClickDisconnect: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default DisConnectWalletTaskBox;

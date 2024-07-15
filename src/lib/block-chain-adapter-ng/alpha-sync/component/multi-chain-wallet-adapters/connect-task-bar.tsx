import React, { FC } from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../connection-box/task-box';
import styles from './wallet-button.module.scss';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectWalletTaskBoxProps } from '../../interface-types/wallet-types';
type TaskBoxTypes = any;

const ConnectWalletTaskBox: React.FC<ConnectWalletTaskBoxProps> = ({
  type,
  points,
  buttonText,
  completed,
}) => (
  <>
    <TaskBox
      type={type}
      points={points}
      completed={completed}
      className={styles.walletTaskBox}
    >
      <WalletMultiButton
        className={styles.customWalletMultiButton}
        style={{ backgroundColor: 'transparent', fontSize: '22px' }}
      >
        {buttonText}
      </WalletMultiButton>
    </TaskBox>
  </>
);

ConnectWalletTaskBox.propTypes = {
  type: PropTypes.any.isRequired,
  points: PropTypes.any.isRequired,
  completed: PropTypes.bool.isRequired,
  buttonText: PropTypes.any.isRequired,
};

export default ConnectWalletTaskBox;

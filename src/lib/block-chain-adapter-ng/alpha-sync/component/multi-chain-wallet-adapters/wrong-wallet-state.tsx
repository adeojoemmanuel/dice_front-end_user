import React, { FC } from 'react';
import PropTypes from 'prop-types';
import TaskBox from '../connection-box/task-box';
import styles from './wallet-button.module.scss';
import { WrongWalletTaskBoxProps } from '../../interface-types/wallet-types';

const WrongWalletTaskBox: React.FC<WrongWalletTaskBoxProps> = ({
  type,
  points,
  buttonText,
}) => (
  <>
    <TaskBox type={type} points={points} completed={false}>
      <div
        className={styles.customWalletMultiButton}
        style={{ backgroundColor: 'transparent', fontSize: '22px' }}
      >
        {buttonText}
      </div>
    </TaskBox>
  </>
);

WrongWalletTaskBox.propTypes = {
  type: PropTypes.any.isRequired,
  points: PropTypes.any.isRequired,
  completed: PropTypes.bool.isRequired,
  onClickConnect: PropTypes.func.isRequired,
  buttonText: PropTypes.any.isRequired,
};

export default WrongWalletTaskBox;

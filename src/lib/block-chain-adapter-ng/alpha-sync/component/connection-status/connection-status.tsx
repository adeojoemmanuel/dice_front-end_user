'use client';
import styles from './connection-status.module.scss';

import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import CheckIcon from '@mui/icons-material/Check';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const inconsolata = '';

export default function ConnectionStatus({
  completed,
  points,
  isLoading,
}: {
  completed: boolean;
  points: number;
  isLoading?: boolean;
}) {
  return completed ? (
    <div className={`${styles.container} ${styles.complete}`}>
      <div className={`${styles.container} ${styles.inner}`}>
        <PanToolAltIcon className={styles.finger} />
        <div className={`${styles.points} ${inconsolata}`}>{points}</div>
      </div>
      <CheckIcon className={styles.check} />
    </div>
  ) : (
    <div
      className={`${styles.container} ${styles.incomplete} ${isLoading ? styles.disabled : ''}`}
    >
      {isLoading ? (
        <HourglassBottomIcon height={17} width={17} />
      ) : (
        <PanToolAltIcon className={styles.finger} />
      )}
      <div className={`${styles.points} ${inconsolata}`}>{points}</div>
    </div>
  );
}

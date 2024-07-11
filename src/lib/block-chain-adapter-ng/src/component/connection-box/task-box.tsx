'use client';
import styles from './task-box.module.scss';
import TaskPill from '../connection-status/connection-status';
const golos_text = '';
export const TaskBoxTypes = {
  Simple: 0,
  Header_Large: 1,
  Header_Small: 2,
  Simple_NoBox: 3,
  Simple_NoBox_Interactive: 4,
  Simple_NoBox_Social: 5,
  Simple_NoBox_Social_Interactive: 6,
};

const typeClasses = {
  [TaskBoxTypes.Simple]: styles.simple,
  [TaskBoxTypes.Header_Large]: styles.headerLarge,
  [TaskBoxTypes.Header_Small]: styles.headerSmall,
  [TaskBoxTypes.Simple_NoBox]: styles.simpleNoBox,
  [TaskBoxTypes.Simple_NoBox_Social]: styles.simpleNoBoxSocial,
  [TaskBoxTypes.Simple_NoBox_Interactive]: styles.simpleNoBoxInteractive,
  [TaskBoxTypes.Simple_NoBox_Social_Interactive]:
    styles.simpleNoBoxSocialInteractive,
};

interface TaskBoxProps {
  type?: number;
  points: number;
  completed: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  maxWidth?: string;
  isLoadingAction?: boolean;
  isInteractive?: boolean;
  className?: string;
}

export default function TaskBox({
  type = TaskBoxTypes.Simple,
  points,
  completed,
  header,
  footer,
  children,
  maxWidth = '100%',
  isLoadingAction,
  onClick,
  isInteractive = false,
}: TaskBoxProps) {
  let content = (
    <>
      {children}
      <TaskPill completed={completed} points={points} />
    </>
  );

  if (type === TaskBoxTypes.Header_Large) {
    content = (
      <>
        <div
          className={
            header ? styles.topOverlay : footer ? styles.bottomOverlay : ''
          }
        ></div>
        <div className={styles.header}>{header}</div>
        <div className={styles.lr}>
          <div className={styles.l}>{children}</div>
          <div className={styles.r}>
            <TaskPill
              completed={completed}
              points={points}
              isLoading={isLoadingAction}
            />
          </div>
        </div>
        <div className={styles.footer}>{footer}</div>
      </>
    );
  } else if (type == TaskBoxTypes.Header_Small) {
    content = (
      <>
        <div className={styles.overlay}></div>
        <div className={styles.headerSm}>{header}</div>
        <div className={styles.tb}>
          {children}
          <TaskPill
            completed={completed}
            points={points}
            isLoading={isLoadingAction}
          />
        </div>
      </>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${typeClasses[type]} ${golos_text}`}
      style={{
        maxWidth: maxWidth,
        cursor: isInteractive ? 'pointer' : 'default',
      }}
    >
      {content}
    </div>
  );
}

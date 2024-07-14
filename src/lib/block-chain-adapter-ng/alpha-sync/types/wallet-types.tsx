import { ReactNode } from 'react';

export type TaskBoxTypesType = any;

export type InnerValue = {
  key: string;
  value: string;
};

export const enum PERMISSIONS {
  USER = 'user',
  ADMIN = 'admin',
  ANONYMOUS = 'anonymous',
}

export interface DisConnectWalletTaskBoxProps {
  tasks?: TasksObject;
  type?: TaskBoxTypesType;
  points?: number;
  completed?: boolean;
  onClickCopyWalletAddress?: (address: string) => void;
  onClickDeleteWallet?: (address: string) => void;
  onClickDisconnect?: () => void;
  buttonText?: string;
  user?: any;
}

export type UserWalletItem = {
  key: string;
  value: InnerValue;
};

export interface AddWalletTaskBoxProps {
  buttonText: string;
  children?: React.ReactNode;
}

export interface WalletConnecActiontProps {
  user: Record<string, any>;
  TaskBoxTypes: Record<string, any>;
  tasks: Record<string, any>;
  isTaskCompleted: boolean;
  refetchProfile: () => void;
}

export interface ConnectWalletTaskBoxProps {
  type: any;
  points: number;
  completed: boolean;
  buttonText: string;
  user?: Record<string, any>;
  refetchProfile?: () => void;
}

export interface WalletProviderProps extends WalletConnecActiontProps {
  children?: ReactNode;
}

export interface TasksObject {
  [key: string]: any;
}

export interface WalletConnectProps {
  user: Record<string, any>;
  TaskBoxTypes?: Record<string, any>;
  task?: any;
  isTaskCompleted?: boolean;
  refetchProfile?: () => void;
  selectedWallet?: any;
  onWalletSelect?: (wallet: any) => void;
  connected?: boolean;
  wallets?: any;
  adapter?: any;
  handleWalletSelection?: any;
}

export type AddWalletActionProps = {
  type: TaskBoxTypesType;
  user: Record<string, any>;
  points: number;
  buttonText: string;
  isTaskCompleted: boolean;
  TaskBoxTypes: Record<string, any>;
  tasks: TasksObject;
  children?: React.ReactNode;
  refetchProfile?: () => void;
};

export interface WrongWalletTaskBoxProps {
  type: TaskBoxTypesType;
  points: number;
  completed: boolean;
  onClickConnect: () => void;
  buttonText: string;
}

export type Route = {
  path: string;
  isNavigationItem?: boolean;
  isProtected?: boolean;
  label?: string;
  permissions?: string[];
};

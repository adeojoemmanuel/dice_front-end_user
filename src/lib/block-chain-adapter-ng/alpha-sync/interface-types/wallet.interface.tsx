import { TaskBoxTypesType, TasksObject } from './wallet-types'

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



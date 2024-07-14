import React, { useState, useEffect, PropsWithChildren } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { SERVER_URL } from './../../constant/env';

export interface SocketInterface {
  curSocket: Socket | null;
}

const mockSocket: Partial<Socket> = {
  on: (event, callback) => {
    if (event === 'someEvent') {
      callback({ mockData: 'Hello from mock!' });
      console.debug({ event, callback });
    }
    console.debug({ event, callback });
    return mockSocket as Socket;
  },
  emit: (event, data) => {
    console.debug({ event, data });
    return mockSocket as Socket;
  },
};

export const SocketContext = React.createContext<SocketInterface>({
  curSocket: null,
});

export const SocketContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [curSocket, setCurSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const TEST_MODE = process.env.REACT_APP_TEST_MODE === 'true';
    let socket: Socket | null = null;

    if (TEST_MODE) {
      socket = mockSocket as Socket;
      setCurSocket(socket);
    } else {
      socket = socketIOClient(SERVER_URL);
      setCurSocket(socket);
    }

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        curSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

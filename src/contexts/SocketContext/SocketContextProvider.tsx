import React, { useState, useEffect, PropsWithChildren } from "react";
import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../../constant/env";

export interface SocketInterface {
  curSocket: any;
}

// Mock Socket Object for Testing
const mockSocket = {
  on: (event: string, callback: Function) => {
    if (event === "someEvent") {
      callback({ mockData: "Hello from mock!" });
      console.debug({ event, callback });
    }
    console.debug({ event, callback });
  },
  emit: (event: string, data: any) => {
    console.debug({ event, data });
  },
};

export const SocketContext = React.createContext<SocketInterface>({
  curSocket: null,
});

export const SocketContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [curSocket, setCurSocket] = useState<any>(null);

  useEffect(() => {
    const TEST_MODE = true;
    if (TEST_MODE) {
      setCurSocket(mockSocket);
    } else {
      const socket = socketIOClient(SERVER_URL);
      setCurSocket(socket);
    }
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

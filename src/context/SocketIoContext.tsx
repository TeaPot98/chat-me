import { createContext, useState, useEffect, useContext } from "react";
import { io, Socket } from "socket.io-client";

import { UserContext } from "./UserContext";

const initialValue = null;

export const SocketIoContext = createContext<Socket | null>(initialValue);

export const SocketIoProvider = ({ children }: React.PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    console.log("user token:", loggedUser?.token);
    const newSocket = io(`http://192.168.88.109:3001`, {
      withCredentials: true,
      auth: {
        token: loggedUser?.token,
      },
    });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to socket with ID:", newSocket.id);
    });

    newSocket.on("connection-error", (err) => {
      console.error(err);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected from socket due to ", reason);
    });

    return () => {
      newSocket.off("connect");
      newSocket.off("disconnect");
    };
  }, []);

  return (
    <SocketIoContext.Provider value={socket}>
      {children}
    </SocketIoContext.Provider>
  );
};

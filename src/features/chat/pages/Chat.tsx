import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "api";
import models from "models";
import { LoadingIndicator } from "components";
import { Messages } from "../components/Messages";
import { UserContext, SocketIoContext } from "context";
import { ChatContainer, ChatTopBar, MessageField } from "../components";

export const Chat = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  const navigate = useNavigate();
  const { id: chatId } = useParams();
  const socket = useContext(SocketIoContext);
  const { loggedUser } = useContext(UserContext);
  const [messages, setMessages] = useState<models.Message[]>([]);
  const { isLoading, data, refetch } = useQuery(
    ["chats", chatId],
    () => {
      api.chats.setToken(loggedUser!.token);
      return api.chats.getById(chatId!);
    },
    {
      onError: (error: AxiosError) => {
        const statusCode = error?.response?.status;
        if (statusCode && [400, 403, 404].includes(statusCode))
          navigate("/chats");
      },
      retry: false,
    }
  );

  useEffect(() => {
    socket?.on("message", (message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });

    socket?.emit("getMessages");

    return () => {
      console.log("end");
    };
  }, []);

  if (!data) return <></>;

  return (
    <ChatContainer {...props}>
      {isLoading ? (
        <LoadingIndicator style={{ alignSelf: "center" }} />
      ) : (
        <>
          <ChatTopBar chat={data} />
          <Messages messages={messages} />
          <MessageField chatId={chatId!} refetchMessages={refetch} />
        </>
      )}
    </ChatContainer>
  );
};

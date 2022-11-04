import uuid from "react-uuid";
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

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const Chat = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  const navigate = useNavigate();
  const { id: chatId } = useParams();
  const socket = useContext(SocketIoContext);
  const { loggedUser } = useContext(UserContext);
  const [messages, setMessages] = useState<models.Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { isLoading, data } = useQuery(
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
      onSuccess: (data) => {
        setMessages(data.messages);
      },
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: twentyFourHoursInMs,
    }
  );

  useEffect(() => {
    socket?.on("message", (message) => {
      console.log("message received:", message);
      setMessages((oldMessages) => [...oldMessages, message]);
    });

    socket?.on("message-sent", (sentMessage) => {
      console.log("message sent:", sentMessage);
      setMessages((oldMessages) => {
        return oldMessages.filter((m) =>
          m.id !== sentMessage.oldId ? m : sentMessage
        );
      });
    });

    return () => {
      socket?.off("message");
      socket?.off("message-sent");
    };
  }, []);

  const handleMessageFieldChange = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setNewMessage(e.currentTarget.value);
  };

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    const newMessageObject = {
      senderId: loggedUser!.id,
      chatId: chatId!,
      content: newMessage,
      id: uuid(),
      timestamp: new Date(),
    };
    setMessages((oldMessages) => [...oldMessages, newMessageObject]);
    socket?.emit("message", newMessageObject);
    setNewMessage("");
  };

  if (!data) return <></>;

  return (
    <ChatContainer {...props}>
      {isLoading ? (
        <LoadingIndicator style={{ alignSelf: "center" }} />
      ) : (
        <>
          <ChatTopBar chat={data} />
          <Messages messages={messages} />
          <MessageField
            onChange={handleMessageFieldChange}
            onSend={sendMessage}
            value={newMessage}
          />
        </>
      )}
    </ChatContainer>
  );
};

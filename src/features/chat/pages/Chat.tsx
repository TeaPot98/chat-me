import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import api from "api";
import { LoadingIndicator } from "components";
import { UserContext } from "context/UserContext";
import { ChatContainer, ChatTopBar, MessageField } from "../components";
import { Messages } from "../components/Messages";
import { AxiosError } from "axios";

export const Chat = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  const navigate = useNavigate();
  const { loggedUser } = useContext(UserContext);
  const { id: chatId } = useParams();
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

  if (!data) return <></>;

  return (
    <ChatContainer {...props}>
      {isLoading ? (
        <LoadingIndicator style={{ alignSelf: "center" }} />
      ) : (
        <>
          <ChatTopBar chat={data} />
          <Messages messages={data.messages} />
          <MessageField chatId={chatId!} refetchMessages={refetch} />
        </>
      )}
    </ChatContainer>
  );
};

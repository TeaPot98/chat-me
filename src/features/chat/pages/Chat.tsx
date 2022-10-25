import { useQuery } from "@tanstack/react-query";
import api from "api";
import { useParams } from "react-router-dom";
import { ChatContainer, ChatTopBar, MessageField } from "../components";
import { Messages } from "../components/Messages";

export const Chat = ({ children, ...props }: JSX.IntrinsicElements["div"]) => {
  const { id: chatId } = useParams();
  const { isLoading, isError, error, data, refetch } = useQuery(
    ["chats", chatId],
    () => api.chats.getById(chatId!)
  );

  if (isLoading) return <div>is Loading</div>;

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) return <></>;

  return (
    <ChatContainer {...props}>
      <ChatTopBar chat={data} />
      <Messages messages={data.messages} />
      <MessageField chatId={chatId!} refetchMessages={refetch} />
    </ChatContainer>
  );
};

import { useQuery } from "@tanstack/react-query";
import api from "api";
import { LoadingIndicator } from "components";
import { useParams } from "react-router-dom";
import { ChatContainer, ChatTopBar, MessageField } from "../components";
import { Messages } from "../components/Messages";

export const Chat = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  const { id: chatId } = useParams();
  const { isLoading, isError, data, refetch } = useQuery(
    ["chats", chatId],
    () => api.chats.getById(chatId!)
  );

  if (isLoading)
    return (
      <ChatContainer {...props}>
        <LoadingIndicator style={{ alignSelf: "center" }} />
      </ChatContainer>
    );

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

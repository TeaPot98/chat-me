import { ChatContainer, ChatTopBar, MessageField } from "../components";
import { Messages } from "../components/Messages";

export const Chat = ({ children, ...props }: JSX.IntrinsicElements["div"]) => {
  return (
    <ChatContainer {...props}>
      <ChatTopBar />
      <Messages />
      <MessageField />
    </ChatContainer>
  );
};

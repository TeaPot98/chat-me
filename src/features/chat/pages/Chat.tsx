import { ChatContainer, ChatTopBar, MessageField } from "../components";

export const Chat = ({ children, ...props }: JSX.IntrinsicElements["div"]) => {
  return (
    <ChatContainer {...props}>
      <ChatTopBar />
      {children}
      <MessageField />
    </ChatContainer>
  );
};

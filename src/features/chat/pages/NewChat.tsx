import { useContext } from "react";
import { useParams } from "react-router-dom";

import api from "api";
import { Button } from "components";
import { UserContext } from "context/UserContext";
import { ChatContainer } from "../components";

export const NewChat = () => {
  const { loggedUser } = useContext(UserContext);
  const { id: receiverId } = useParams();

  const initializeConversation = async () => {
    const newConversation = await api.chats.create({
      participants: [loggedUser!.id, receiverId!],
    });
    window.location.assign(`/chats/${newConversation.id}`);
  };

  return (
    <ChatContainer>
      <Button style={{ alignSelf: "center" }} onClick={initializeConversation}>
        Start conversation
      </Button>
    </ChatContainer>
  );
};

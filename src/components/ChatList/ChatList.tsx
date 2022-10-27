import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import api from "api";
import { LoadingIndicator, SearchField } from "components";
import { makeBEM } from "utils";
import { ChatListItem } from "./ChatListItem";
import models from "models";
import { UserContext } from "context/UserContext";

const bem = makeBEM("chat-list");

export const ChatList = () => {
  const { "*": chatId } = useParams();
  const { loggedUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [users, setUsers] = useState<models.User[]>([]);
  const {
    isLoading,
    isError,
    data: chats,
  } = useQuery(["chats"], () => {
    api.chats.setToken(loggedUser!.token);
    return api.chats.getAll();
  });

  if (isLoading)
    return (
      <div
        className={bem()}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingIndicator />
      </div>
    );

  if (isError) {
    return <div>Error</div>;
  }

  if (!chats) return <></>;

  const handleSearch = async (event: React.FormEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
    if (event.currentTarget.value.trim() !== "") {
      api.users.setToken(loggedUser!.token);
      const foundUsers = await api.users.findByName(
        event.currentTarget.value.trim()
      );
      setUsers(
        foundUsers.filter((u) => {
          if (u.id === loggedUser!.id) return false;
          for (let i = 0; i < chats.length; i++) {
            if (chats[i].participants.includes(u.id)) return false;
          }
          return true;
        })
      );
    } else {
      setUsers([]);
    }
  };

  const openNewConversation = (userId: string) => {
    setSearchString("");
    setUsers((prevState) =>
      prevState.filter((foundUser) => foundUser.id === userId)
    );
    navigate(`/chats/new/${userId}`);
  };

  const openConversation = (chatId: string) => {
    navigate(`/chats/${chatId}`);
  };

  return (
    <div className={bem()}>
      <div className={bem("header")}>
        <SearchField
          style={{ display: "block", margin: "auto" }}
          value={searchString}
          onChange={handleSearch}
        />
      </div>
      <div className={bem("body")}>
        {users.map(({ id, name, surname, avatar }) => (
          <ChatListItem
            key={id}
            title={`${name} ${surname}`}
            description="dummy"
            status="seen"
            time="11:23"
            active={`new/${id.toString()}` === chatId}
            avatar={avatar}
            onClick={() => openNewConversation(id)}
          />
        ))}
        {chats.map(({ id, name, avatar }) => (
          <ChatListItem
            key={id}
            title={name}
            description="dummy"
            status="seen"
            time="11:23"
            active={id.toString() === chatId}
            avatar={avatar}
            onClick={() => openConversation(id)}
          />
        ))}
      </div>
    </div>
  );
};

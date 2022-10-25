import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import api from "api";
import { SearchField } from "components";
import { makeBEM } from "utils";
import { ChatListItem } from "./ChatListItem";
import models from "models";

const bem = makeBEM("chat-list");

export const ChatList = () => {
  const { "*": chatId } = useParams();
  const [searchString, setSearchString] = useState("");
  const [users, setUsers] = useState<models.User[]>([]);
  const {
    isLoading,
    isError,
    data: chats,
  } = useQuery(["chats"], api.chats.getAll);

  if (isLoading) return <div>is Loading</div>;

  if (isError) {
    return <div>Error</div>;
  }

  if (!chats) return <></>;

  const handleSearch = async (event: React.FormEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
    if (event.currentTarget.value.trim() !== "") {
      const foundUsers = await api.users.findByName(
        event.currentTarget.value.trim()
      );
      setUsers(
        foundUsers.filter((u) => {
          for (let i = 0; i < chats.length; i++) {
            if (u.chats.includes(chats[i].id)) return false;
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
  };

  return (
    <div className={bem()}>
      <SearchField value={searchString} onChange={handleSearch} />
      {users.map(({ id, name, surname, avatar }) => (
        <Link
          key={id}
          to={`/chats/new/${id}`}
          onClick={() => openNewConversation(id)}
        >
          <ChatListItem
            title={`${name} ${surname}`}
            description="dummy"
            status="seen"
            time="11:23"
            active={`new/${id.toString()}` === chatId}
            avatar={avatar}
          />
        </Link>
      ))}
      {chats.map(({ id, name, avatar }) => (
        <Link key={id} to={`/chats/${id}`}>
          <ChatListItem
            title={name}
            description="dummy"
            status="seen"
            time="11:23"
            active={id.toString() === chatId}
            avatar={avatar}
          />
        </Link>
      ))}
    </div>
  );
};

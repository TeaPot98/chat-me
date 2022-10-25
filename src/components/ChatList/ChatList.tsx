import api from "api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { makeBEM } from "utils";
import { ChatListItem, ChatListItemProps } from "./ChatListItem";

const chats = [
  {
    id: 1,
    title: "John Doe",
    subtitle: "some message",
    status: "unseen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    id: 2,
    title: "John Doe",
    subtitle: "some message",
    time: "11:14",
  },
  {
    id: 3,
    title: "John Doe",
    subtitle: "some message",
    status: "seen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    id: 4,
    title: "John Doe",
    subtitle: "some message",
    status: "unseen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    id: 5,
    title: "John Doe",
    subtitle: "some message",
    status: "seen" as ChatListItemProps["status"],
    time: "11:14",
  },
];

const bem = makeBEM("chat-list");

export const ChatList = () => {
  const { "*": chatId } = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["chats"],
    api.chats.getAll
  );

  if (isLoading) return <div>is Loading</div>;

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) return <></>;

  return (
    <div className={bem()}>
      {data.map(({ id, name, avatar }, i) => (
        <Link key={id} to={`/chats/${id}`}>
          <ChatListItem
            title={name}
            description="dummy"
            status="seen"
            time="11: 23"
            active={id.toString() === chatId}
            avatar={avatar}
          />
        </Link>
      ))}
    </div>
  );
};

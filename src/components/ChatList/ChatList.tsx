import { Link, useParams, useLocation } from "react-router-dom";

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

  return (
    <div className={bem()}>
      {chats.map(({ id, title, subtitle, status, time }, i) => (
        <Link key={id} to={`/chats/${id}`}>
          <ChatListItem
            title={title}
            description={subtitle}
            status={status}
            time={time}
            active={id.toString() === chatId}
            avatar={
              <img
                alt=""
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          />
        </Link>
      ))}
    </div>
  );
};

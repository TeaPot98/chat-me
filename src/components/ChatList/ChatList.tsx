import { makeBEM } from "utils";
import { ChatListItem, ChatListItemProps } from "./ChatListItem";

const chats = [
  {
    title: "John Doe",
    subtitle: "some message",
    status: "unseen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    title: "John Doe",
    subtitle: "some message",
    time: "11:14",
  },
  {
    title: "John Doe",
    subtitle: "some message",
    status: "seen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    title: "John Doe",
    subtitle: "some message",
    status: "unseen" as ChatListItemProps["status"],
    time: "11:14",
  },
  {
    title: "John Doe",
    subtitle: "some message",
    status: "seen" as ChatListItemProps["status"],
    time: "11:14",
  },
];

const bem = makeBEM("chat-list");

export const ChatList = () => {
  return (
    <div className={bem()}>
      {chats.map(({ title, subtitle, status, time }, i) => (
        <ChatListItem
          key={i}
          title={title}
          subtitle={subtitle}
          status={status}
          time={time}
          avatar={
            <img
              alt=""
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          }
        />
      ))}
    </div>
  );
};

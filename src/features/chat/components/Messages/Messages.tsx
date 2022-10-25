import { useContext } from "react";

import classNames from "classnames";
import { MessageBubble } from "components";
import models from "models";
import { makeBEM } from "utils";
import { UserContext } from "context/UserContext";

const bem = makeBEM("messages");

interface MessagesProps {
  className?: string;
  messages: models.Message[];
}

export const Messages = ({
  className,
  messages,
  ...props
}: MessagesProps & JSX.IntrinsicElements["div"]) => {
  const { userId } = useContext(UserContext);

  return (
    <div className={classNames(bem(), className)} {...props}>
      {messages.map((m, i) => (
        <MessageBubble key={i} isSent={m.senderId === userId}>
          {m.content}
        </MessageBubble>
      ))}
    </div>
  );
};

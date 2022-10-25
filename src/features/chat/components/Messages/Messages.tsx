import classNames from "classnames";
import { MessageBubble } from "components";
import models from "models";
import { makeBEM } from "utils";

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
  return (
    <div className={classNames(bem(), className)} {...props}>
      {messages.map((m, i) => (
        <MessageBubble key={i} isSent={i % 3 === 0}>
          {m.content}
        </MessageBubble>
      ))}
    </div>
  );
};

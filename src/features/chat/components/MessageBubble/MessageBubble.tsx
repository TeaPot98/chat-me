import classNames from "classnames";

import { makeBEM } from "utils";

interface MessageBubbleProps {
  className?: string;
  isSent?: boolean;
}

const bem = makeBEM("message-bubble");

export const MessageBubble = ({
  className,
  isSent,
  children,
}: MessageBubbleProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={classNames(
        className,
        bem(null, [], {
          sent: isSent,
        })
      )}
    >
      {children}
    </div>
  );
};

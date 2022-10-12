import classNames from "classnames";

import { makeBEM } from "utils";

interface MessageBubbleProps {
  className?: string;
}

const bem = makeBEM("message-bubble");

export const MessageBubble = ({
  className,
  children,
}: MessageBubbleProps & JSX.IntrinsicElements["div"]) => {
  return <div className={classNames(className, bem())}>{children}</div>;
};

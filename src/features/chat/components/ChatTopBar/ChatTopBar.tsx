import classNames from "classnames";

import { makeBEM } from "utils";

const bem = makeBEM("chat-top-bar");

interface ChatTopBarProps {
  className?: string;
}

export const ChatTopBar = ({
  className,
  ...props
}: ChatTopBarProps & JSX.IntrinsicElements["div"]) => {
  return <div className={classNames(bem(), className)} {...props}></div>;
};

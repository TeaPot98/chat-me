import classNames from "classnames";
import { Avatar, IconButton } from "components";
import { KebabMenuIcon, LayoutIcon, MessageIcon, PhoneIcon } from "svg";

import { makeBEM } from "utils";

const bem = makeBEM("chat-top-bar");

interface ChatTopBarProps {
  className?: string;
}

export const ChatTopBar = ({
  className,
  ...props
}: ChatTopBarProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      <Avatar />
      <div className={bem("right")}>
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <KebabMenuIcon />
        </IconButton>
        <IconButton>
          <LayoutIcon />
        </IconButton>
      </div>
    </div>
  );
};

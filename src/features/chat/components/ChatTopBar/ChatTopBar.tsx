import classNames from "classnames";
import { Avatar, IconButton } from "components";
import models from "models";
import { KebabMenuIcon, LayoutIcon, MessageIcon, PhoneIcon } from "svg";

import { makeBEM } from "utils";

const bem = makeBEM("chat-top-bar");

interface ChatTopBarProps {
  className?: string;
  chat: models.Chat;
}

export const ChatTopBar = ({
  className,
  chat,
  ...props
}: ChatTopBarProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      <div className={bem("left")}>
        <Avatar name={chat.name} image={chat.avatar} />
      </div>
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

import classNames from "classnames";
import { Avatar } from "components";
import { DoubleCheckIcon, CheckIcon } from "svg";
import { makeBEM } from "utils";

export interface ChatListItemProps {
  className?: string;
  title: string;
  description?: string;
  avatar?: React.ReactNode;
  status?: "unseen" | "seen" | undefined;
  time?: string;
  active?: boolean;
}

const bem = makeBEM("chat-list-item");

export const ChatListItem = ({
  className,
  title,
  description,
  avatar,
  status,
  active = false,
  time,
  ...props
}: ChatListItemProps & Omit<JSX.IntrinsicElements["div"], "prefix">) => {
  return (
    <div
      className={classNames(
        className,
        bem(null, [], {
          active,
        })
      )}
      {...props}
    >
      <Avatar />
      <div className={bem("status")}>
        <div>
          {status === "unseen" ? (
            <CheckIcon width="1rem" />
          ) : status === "seen" ? (
            <DoubleCheckIcon width="1rem" />
          ) : (
            <></>
          )}
        </div>
        <div className={bem("time")}>{time}</div>
      </div>
    </div>
  );
};

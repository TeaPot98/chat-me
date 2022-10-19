import classNames from "classnames";
import { DoubleCheck, Check } from "svg";
import { makeBEM } from "utils";

export interface ChatListItemProps {
  className?: string;
  title: string;
  subtitle?: string;
  avatar?: React.ReactNode;
  status?: "unseen" | "seen" | undefined;
  time?: string;
  active?: boolean;
}

const bem = makeBEM("chat-list-item");

export const ChatListItem = ({
  className,
  title,
  subtitle,
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
      <div className={bem("content")}>
        <div className={bem("avatar")}>{avatar}</div>
        <div className={bem("title")}>{title}</div>
        <div className={bem("subtitle")}>{subtitle}</div>
      </div>
      <div className={bem("status")}>
        <div>
          {status === "unseen" ? (
            <Check width="1rem" />
          ) : status === "seen" ? (
            <DoubleCheck width="1rem" />
          ) : (
            <></>
          )}
        </div>
        <div className={bem("time")}>{time}</div>
      </div>
    </div>
  );
};

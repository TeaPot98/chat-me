import classNames from "classnames";
import { makeBEM } from "utils";

interface ChatContainerProps {
  className?: string;
}

const bem = makeBEM("chat-container");

export const ChatContainer = ({
  className,
  children,
  ...props
}: ChatContainerProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      {children}
    </div>
  );
};

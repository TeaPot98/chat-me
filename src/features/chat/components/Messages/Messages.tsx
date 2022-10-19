import classNames from "classnames";
import { MessageBubble } from "components";
import { makeBEM } from "utils";

const bem = makeBEM("messages");

interface MessagesProps {
  className?: string;
}

export const Messages = ({
  className,
  ...props
}: MessagesProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      {Array.from({ length: 20 }).map((m, i) => (
        <MessageBubble key={i} isSent={i % 3 === 0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolorum pariatur libero eos, unde non cupiditate totam omnis
          consequatur dignissimos nisi quia quaerat qui doloribus. Corporis enim
          iste accusantium quaerat.
        </MessageBubble>
      ))}
    </div>
  );
};

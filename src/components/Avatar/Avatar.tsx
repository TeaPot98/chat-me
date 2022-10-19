import classNames from "classnames";
import { makeBEM } from "utils";

interface AvatarProps {
  className?: string;
}

const bem = makeBEM("avatar");

export const Avatar = ({
  className,
  ...props
}: AvatarProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      <div className={bem("image")}>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
        />
      </div>
      <div className={bem("content")}>
        <span className={bem("name")}>John Doe</span>
        <span className={bem("description")}>online</span>
      </div>
    </div>
  );
};

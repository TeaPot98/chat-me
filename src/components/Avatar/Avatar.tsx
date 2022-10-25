import classNames from "classnames";
import { makeBEM } from "utils";

interface AvatarProps {
  className?: string;
  image: string;
  name: string;
  description?: string;
}

const bem = makeBEM("avatar");

export const Avatar = ({
  className,
  image,
  name,
  description,
  ...props
}: AvatarProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), className)} {...props}>
      <div className={bem("image")}>
        <img alt="" src={image} />
      </div>
      <div className={bem("content")}>
        <span className={bem("name")}>{name}</span>
        <span className={bem("description")}>{description}</span>
      </div>
    </div>
  );
};

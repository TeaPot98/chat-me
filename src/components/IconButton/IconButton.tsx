import classNames from "classnames";
import { makeBEM } from "utils";

export interface ButtonProps {
  className?: string;
}

const bem = makeBEM("icon-button");

export const IconButton = ({
  className,
  children,
  ...props
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return (
    <button className={classNames(className, bem())} {...props}>
      {children}
    </button>
  );
};

import classNames from "classnames";
import { makeBEM } from "utils";

interface ButtonProps {
  className?: string;
}

const bem = makeBEM("button");

export const Button = ({
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

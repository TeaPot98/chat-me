import classNames from "classnames";
import { makeBEM } from "utils";

interface ButtonProps {
  className?: string;
  color?: "primary" | "white" | "outlined";
}

const bem = makeBEM("button");

export const Button = ({
  className,
  children,
  color = "primary",
  ...props
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return (
    <button className={classNames(className, bem(null, [color]))} {...props}>
      {children}
    </button>
  );
};

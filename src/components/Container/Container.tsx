import { makeBEM } from "utils";

const bem = makeBEM("container");

export const Container = ({
  children,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={bem()} {...props}>
      {children}
    </div>
  );
};

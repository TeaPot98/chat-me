import classNames from "classnames";

interface LoadingIndicatorProps {
  className?: string;
}

export const LoadingIndicator = ({
  className,
  ...props
}: LoadingIndicatorProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames("lds-roller", className)} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

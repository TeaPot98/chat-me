import classNames from "classnames";

import { makeBEM } from "utils";

interface SearchFieldProps {
  className?: string;
}

const bem = makeBEM("search-field");

export const SearchField = ({
  className,
  ...props
}: SearchFieldProps & JSX.IntrinsicElements["input"]) => {
  return (
    <input type="search" className={classNames(bem(), className)} {...props} />
  );
};

import React from "react";

import classNames from "classnames";
import { makeBEM } from "utils";

interface InputProps {
  className?: string;
}

type Ref = HTMLInputElement;

const bem = makeBEM("input");

export const Input = React.forwardRef<
  Ref,
  InputProps & JSX.IntrinsicElements["input"]
>(
  (
    { className, ...props }: InputProps & JSX.IntrinsicElements["input"],
    ref
  ) => {
    return (
      <input className={classNames(bem(), className)} {...props} ref={ref} />
    );
  }
);

Input.displayName = "Input";

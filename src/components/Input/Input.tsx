import React from "react";

import classNames from "classnames";
import { makeBEM } from "utils";

interface InputProps {
  className?: string;
  label: React.ReactNode;
}

type Ref = HTMLInputElement;

const bem = makeBEM("input");

export const Input = React.forwardRef<
  Ref,
  InputProps & JSX.IntrinsicElements["input"]
>(
  (
    { className, label, ...props }: InputProps & JSX.IntrinsicElements["input"],
    ref
  ) => {
    return (
      <div className={classNames(bem(), className)}>
        <input className={bem("field")} {...props} ref={ref} />
        <label className={bem("label")}>{label}</label>
      </div>
    );
  }
);

Input.displayName = "Input";

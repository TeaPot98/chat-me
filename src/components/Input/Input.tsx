import React, { useState } from "react";

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
    const [isFilled, setIsFilled] = useState(false);
    const updateContainerState = (e: React.ChangeEvent<HTMLInputElement>) =>
      setIsFilled(!!e.target.value);

    return (
      <div
        className={classNames(
          bem(null, null, {
            filled: isFilled,
          }),
          className
        )}
      >
        <input
          className={bem("field")}
          {...props}
          ref={ref}
          onInput={updateContainerState}
        />
        <label className={bem("label")}>{label}</label>
      </div>
    );
  }
);

Input.displayName = "Input";

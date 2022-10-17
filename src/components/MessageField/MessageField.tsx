import { useState, useRef, useCallback } from "react";

import classNames from "classnames";

import { IconButton } from "components";
import { Plane } from "svg";
import { makeBEM } from "utils";

interface MessageFieldProps {
  className?: string;
  onChange?: (event: React.SyntheticEvent) => void;
}

const bem = makeBEM("message-field");

export const MessageField = ({
  className,
  onChange = () => null,
  ...props
}: MessageFieldProps & JSX.IntrinsicElements["div"]) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
    autoResize();
    onChange(event);
  };

  const autoResize = () => {
    const $textAreaEl = textAreaRef.current;

    if ($textAreaEl) {
      // $textAreaEl.style.height = "20px";
      $textAreaEl.style.height = `${$textAreaEl.scrollHeight}px`;
    }
  };

  return (
    <div className={classNames(className, bem())} {...props}>
      <textarea
        ref={textAreaRef}
        onChange={handleChange}
        value={message}
        placeholder="Type something..."
        className={bem("input")}
      />
      <IconButton>
        <Plane />
      </IconButton>
    </div>
  );
};

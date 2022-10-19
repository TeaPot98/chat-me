import { useState, useRef, useEffect } from "react";

import classNames from "classnames";

import { IconButton } from "components";
import { PlaneIcon } from "svg";
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
    onChange(event);
  };

  useEffect(() => {
    const $textAreaEl = textAreaRef.current;
    if (!$textAreaEl) return;

    $textAreaEl.style.boxSizing = "border-box";
    const offset = $textAreaEl.offsetHeight - $textAreaEl.clientHeight;

    const autoResize = (event: any) => {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + offset + "px";
    };

    $textAreaEl.addEventListener("input", autoResize);
    $textAreaEl.removeAttribute("data-autoresize");

    return () => {
      $textAreaEl.removeEventListener("input", autoResize);
    };
  }, []);

  return (
    <div className={classNames(className, bem())} {...props}>
      <div className={bem("input-wrapper")}>
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          value={message}
          placeholder="Type something..."
          className={bem("input")}
        />
      </div>
      <IconButton>
        <PlaneIcon />
      </IconButton>
    </div>
  );
};

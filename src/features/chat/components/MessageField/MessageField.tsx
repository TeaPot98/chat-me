import { useRef, useEffect } from "react";

import classNames from "classnames";

import { IconButton } from "components";
import { PlaneIcon } from "svg";
import { makeBEM } from "utils";

interface MessageFieldProps {
  className?: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onSend?: () => void;
}

const bem = makeBEM("message-field");

export const MessageField = ({
  className,
  value,
  onSend = () => null,
  onChange = () => null,
  ...props
}: MessageFieldProps & Omit<JSX.IntrinsicElements["div"], "onChange">) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const $textAreaEl = textAreaRef.current;
    if (!$textAreaEl) return;

    $textAreaEl.style.boxSizing = "border-box";
    const offset = $textAreaEl.offsetHeight - $textAreaEl.clientHeight;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className={bem("wrapper")}>
      <div className={classNames(className, bem())} {...props}>
        <div className={bem("input-wrapper")}>
          <textarea
            ref={textAreaRef}
            onChange={onChange}
            value={value}
            placeholder="Type something..."
            className={bem("input")}
          />
        </div>
        <IconButton onClick={onSend}>
          <PlaneIcon />
        </IconButton>
      </div>
    </div>
  );
};

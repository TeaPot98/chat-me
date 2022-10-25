import { useState, useRef, useEffect, useContext } from "react";

import classNames from "classnames";

import { IconButton } from "components";
import { PlaneIcon } from "svg";
import { makeBEM } from "utils";
import api from "api";
import { UserContext } from "context/UserContext";

interface MessageFieldProps {
  className?: string;
  chatId: string;
  refetchMessages: () => void;
  onChange?: (event: React.SyntheticEvent) => void;
}

const bem = makeBEM("message-field");

export const MessageField = ({
  className,
  chatId,
  refetchMessages,
  onChange = () => null,
  ...props
}: MessageFieldProps & JSX.IntrinsicElements["div"]) => {
  const { userId } = useContext(UserContext);
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

  const sendMessage = async () => {
    await api.messages.send({
      senderId: userId,
      chatId: chatId,
      content: message,
    });
    refetchMessages();
    setMessage("");
  };

  return (
    <div className={bem("wrapper")}>
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
        <IconButton onClick={sendMessage}>
          <PlaneIcon />
        </IconButton>
      </div>
    </div>
  );
};

import classNames from "classnames";
import { Chat, NewChat } from "features/chat/pages";
import { Routes, Route } from "react-router-dom";

import { makeBEM } from "utils";

const bem = makeBEM("container");

export const Container = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={classNames(bem(), "blurred-background")} {...props}>
      <Routes>
        <Route path="new/:id" element={<NewChat />} />
        <Route path=":id" element={<Chat />} />
      </Routes>
    </div>
  );
};

import { Chat } from "features/chat/pages";
import { Routes, Route } from "react-router-dom";

import { makeBEM } from "utils";

const bem = makeBEM("container");

export const Container = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={bem()} {...props}>
      <Routes>
        <Route path=":id" element={<Chat />} />
      </Routes>
    </div>
  );
};

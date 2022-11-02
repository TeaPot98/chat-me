import { useState } from "react";

import { Container, SideMenu, ChatList } from "components";
import { makeBEM } from "utils";

const bem = makeBEM("layout");

export const Layout = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={bem()} {...props}>
      <SideMenu isOpen={menuIsOpen} setOpen={setMenuIsOpen}>
        <ChatList onMenuOpen={setMenuIsOpen} />
      </SideMenu>
      <div className="layout__container">
        <Container />
      </div>
    </div>
  );
};

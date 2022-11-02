import classNames from "classnames";
import { useState } from "react";

import { IconButton } from "components";
import { BackArrowIcon } from "svg";

import { makeBEM } from "utils";
import { HamburgerButton } from "./HamburgerButton";
import { AppLogo } from "components/AppLogo/AppLogo";

const bem = makeBEM("side-menu");

interface SideMenuProps {
  className?: string;
  setOpen: (value: boolean) => void;
  isOpen: boolean;
}

export const SideMenu = ({
  className,
  children,
  setOpen,
  isOpen,
  ...props
}: SideMenuProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={classNames(bem(null, null, { open: isOpen }), className)}
      {...props}
    >
      <div className={bem("header")}>
        <AppLogo />
        <HamburgerButton onClick={() => setOpen(!isOpen)} />
        <IconButton onClick={() => setOpen(false)}>
          <BackArrowIcon />
        </IconButton>
      </div>
      <div className={bem("content")}>{children}</div>
      <div className={bem("footer")}></div>
    </div>
  );
};

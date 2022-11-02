import classNames from "classnames";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import { HamburgerIcon } from "svg";
import { IconButton } from "components";

export const HamburgerButton = (props: JSX.IntrinsicElements["button"]) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);

    return () => setDomReady(false);
  }, []);

  // Checking if DOM is loaded, then displaying the teleported element in DOM tree
  return domReady ? (
    ReactDOM.createPortal(
      <IconButton className={classNames(props.className)} {...props}>
        <HamburgerIcon />
      </IconButton>,
      document.querySelector("#hamburger-container")!
    )
  ) : (
    <span></span>
  );
};

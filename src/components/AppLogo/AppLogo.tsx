import { makeBEM } from "utils";

const bem = makeBEM("app-logo");

export const AppLogo = () => {
  return (
    <h1 className={bem()}>
      Chat<mark>Me</mark>
    </h1>
  );
};

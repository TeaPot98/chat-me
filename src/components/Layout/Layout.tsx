import { Container } from "components";
import { ChatList } from "components/ChatList";
import { makeBEM } from "utils";

const bem = makeBEM("layout");

export const Layout = ({ ...props }: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={bem()} {...props}>
      <ChatList />
      <div className="layout__container">
        <Container />
      </div>
    </div>
  );
};

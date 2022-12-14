import { ComponentStory } from "@storybook/react";

import { IconButton } from "./IconButton";
import { PlaneIcon } from "svg";

export default {
  component: IconButton,
  title: "Atoms/IconButton",
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  children: <PlaneIcon />,
};

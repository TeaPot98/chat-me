import { ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Press me",
};

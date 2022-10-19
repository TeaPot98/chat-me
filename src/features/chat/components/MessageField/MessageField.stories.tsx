import { ComponentStory } from "@storybook/react";

import { MessageField } from "./MessageField";

export default {
  component: MessageField,
  title: "Molecules/MessageField",
};

const Template: ComponentStory<typeof MessageField> = (args) => (
  <MessageField {...args} />
);

export const Default = Template.bind({});

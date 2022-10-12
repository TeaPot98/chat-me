import { ComponentStory } from "@storybook/react";
import { MessageBubble } from "./MessageBubble";

export default {
  component: MessageBubble,
  title: "Atoms/Message Bubble",
};

const Template: ComponentStory<typeof MessageBubble> = (args) => (
  <MessageBubble {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

import { ComponentStory } from "@storybook/react";

import { ChatListItem } from "./ChatListItem";

export default {
  component: ChatListItem,
  title: "Molecules/ChatListItem",
};

const Template: ComponentStory<typeof ChatListItem> = (args) => (
  <ChatListItem {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  title: "Andy",
  description: "Here is some",
  avatar:
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

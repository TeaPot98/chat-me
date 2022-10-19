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
  avatar: (
    <img
      alt=""
      src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />
  ),
};

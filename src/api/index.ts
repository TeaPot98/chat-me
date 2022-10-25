export { default as axios } from "./axios";
import * as chats from "./chats";
import * as users from "./users";
import * as messages from "./messages";

const api = {
  chats,
  users,
  messages,
};

export default api;

export { default as axios } from "./axios";
import * as chats from "./chats";
import * as users from "./users";
import * as messages from "./messages";
import * as auth from "./auth";

const api = {
  chats,
  users,
  messages,
  auth,
};

export default api;

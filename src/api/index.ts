export { default as axios } from "./axios";
import * as chats from "./chats";
import * as users from "./users";

const api = {
  chats,
  users,
};

export default api;

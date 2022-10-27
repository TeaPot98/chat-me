import models from "models";
import { axios } from "api";

let token: string | null = null;

export const setToken = (newToken: string) => {
  token = newToken;
};

export const getAll = async () => {
  const response = await axios.get<models.Chat[]>(`/chats`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getById = async (chatId: string) => {
  const response = await axios.get<models.Chat>(`/chats/${chatId}`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const create = async (newChat: { [participants: string]: string[] }) => {
  const response = await axios.post("/chats", newChat, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
};

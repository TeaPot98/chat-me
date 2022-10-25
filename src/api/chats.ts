import models from "models";
import { axios } from "api";

export const getAll = async () => {
  const response = await axios.get<models.Chat[]>(`/chats`, {
    headers: {
      "user-id": "6356a322024dc7eaa5c89e99",
    },
  });

  return response.data;
};

export const getById = async (chatId: string) => {
  const response = await axios.get<models.Chat>(`/chats/${chatId}`, {
    headers: {
      "user-id": "6356a322024dc7eaa5c89e99",
    },
  });

  return response.data;
};

export const create = async (newChat: models.Chat) => {
  const response = await axios.post("/chats", newChat);

  return response.data;
};

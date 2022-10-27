import { axios } from "api";
import models from "models";

let token: string | null = null;

export const setToken = (newToken: string) => {
  token = newToken;
};

export const send = async (
  newMessage: Omit<models.Message, "id" | "timestamp">
) => {
  const response = await axios.post("/messages", newMessage, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
};

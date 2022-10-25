import { axios } from "api";
import models from "models";

export const send = async (
  newMessage: Omit<models.Message, "id" | "timestamp">
) => {
  const response = await axios.post("/messages", newMessage);

  return response.data;
};

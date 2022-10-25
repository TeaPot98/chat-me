import { axios } from "api";

export const getAll = async () => {
  const response = await axios.get(`/chats`, {
    headers: {
      "user-id": "6356a322024dc7eaa5c89e99",
    },
  });

  return response;
};

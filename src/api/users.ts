import { axios } from "api";
import models from "models";

let token: string | null = null;

export const setToken = (newToken: string) => {
  token = newToken;
};

export const findByName = async (name: string) => {
  const response = await axios.get<models.User[]>(`/users/?search=${name}`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
};

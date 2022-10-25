import { axios } from "api";
import models from "models";

export const findByName = async (name: string) => {
  const response = await axios.get<models.User[]>(`/users/?search=${name}`);

  return response.data;
};

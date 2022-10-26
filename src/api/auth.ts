import { axios } from "api";

import models from "models";

export const register = async (user: models.RegistrationUser) => {
  const response = await axios.post<models.User>("/users", user);

  return response.data;
};

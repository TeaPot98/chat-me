import React, { useState, useEffect } from "react";

import models from "models";

const initialContext: models.User = {
  id: "",
  name: "",
  surname: "",
  username: "",
  avatar: "",
  token: "",
  chats: [],
};

export const UserContext = React.createContext(initialContext);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [loggedUser, setLoggedUser] = useState(initialContext);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) setLoggedUser(JSON.parse(loggedUserJSON));
  }, []);

  return (
    <UserContext.Provider value={loggedUser}>{children}</UserContext.Provider>
  );
};

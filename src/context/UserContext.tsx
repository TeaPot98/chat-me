import React, { useState } from "react";

import models from "models";

const initialContext: models.UserContext = {
  updateLoggedUser: () => null,
  loggedUser: null,
};

export const UserContext = React.createContext(initialContext);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  const [loggedUser, setLoggedUser] = useState<models.LoggedUser | null>(
    loggedUserJSON ? JSON.parse(loggedUserJSON) : null
  );

  const updateLoggedUser = (newUser: models.LoggedUser) => {
    window.localStorage.setItem("loggedUser", JSON.stringify(newUser));
    setLoggedUser(newUser);
  };

  console.log("context loggedUser", loggedUser);

  return (
    <UserContext.Provider value={{ loggedUser, updateLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

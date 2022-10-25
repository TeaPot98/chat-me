import React from "react";

export const UserContext = React.createContext({
  userId: "6356a322024dc7eaa5c89e99",
});

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <UserContext.Provider
      value={{
        userId: "6356a322024dc7eaa5c89e99",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

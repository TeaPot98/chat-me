import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "components";
import { UserContextProvider } from "context/UserContext";
import { AuthPage } from "features/auth/pages/AuthPage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/chats" />} />
          <Route path="login" element={<AuthPage />} />
          {/* <Route path="/chats">
          <Route path=":id" element={<Layout />} />
        </Route> */}
          <Route path="/chats/*" element={<Layout />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

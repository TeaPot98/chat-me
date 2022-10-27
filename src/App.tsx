import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "components";
import { UserContext } from "context/UserContext";
import { AuthPage } from "features/auth/pages/AuthPage";

function App() {
  const { loggedUser } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        {loggedUser !== null ? (
          <>
            <Route path="/" element={<Navigate to="/chats" />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="/chats/*" element={<Layout />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

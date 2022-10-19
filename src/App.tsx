import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/chats" />} />
        {/* <Route path="/chats">
          <Route path=":id" element={<Layout />} />
        </Route> */}
        <Route path="/chats/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;

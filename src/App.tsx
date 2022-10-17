import { MessageField } from "components";
import React from "react";

function App() {
  return (
    <div
      style={{
        // background: "rgb(230,233,241)",
        height: "80vh",
        background:
          "linear-gradient(0deg, rgba(230,233,241,1) 0%, rgba(233,199,225,1) 54%, rgba(246,223,210,1) 100%)",
      }}
      className="App"
    >
      <MessageField />
    </div>
  );
}

export default App;

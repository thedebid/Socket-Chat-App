import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login">
          <div className="input">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Room..." />
          </div>
          <button>Enter Chat</button>
        </div>
      ) : (
        <h1>Your are Logged In</h1>
      )}
    </div>
  );
}

export default App;

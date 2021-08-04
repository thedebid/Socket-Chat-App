import React, { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

let socket;
const CONNECTION_PORT = "localhost:3002/";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  const connectToRoom = () => {
    socket.emit("join_room", room);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login">
          <div className="input">
            <input
              type="text"
              placeholder="Name..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room..."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <h1>Your are Logged In</h1>
      )}
    </div>
  );
}

export default App;

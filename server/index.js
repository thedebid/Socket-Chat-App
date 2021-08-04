const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.json());

const server = app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User Joined Room: " + data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

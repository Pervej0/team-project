import React, { useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:4000/");
const ChitChat = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  const handleJoinRoom = (e) => {
    e.preventDefault();
    console.log(user, room);
    socket.emit("join_room", room);
  };

  return (
    <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 sm:mx-auto w-full mx-4 my-12 border">
      <h1 className="text-2xl text-center py-4">Chit-Chat</h1>
      <div className="w-3/5 mx-auto border">
        <form onSubmit={handleJoinRoom}>
          <input
            type="text"
            className="py-2 block border border-black w-full px-2 mb-3"
            value={user}
            placeholder="User"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            type="text"
            className="py-2 block border border-black w-full px-2"
            value={room}
            placeholder="Room id"
            onChange={(e) => setRoom(e.target.value)}
            required
          />
          <button
            className="uppercase my-3 px-5 py-1 bg-gray-800 text-white rounded border"
            type="submit"
          >
            Join In Room
          </button>
        </form>
      </div>
      <Chat socket={socket} room={room} user={user} />
    </div>
  );
};

export default ChitChat;

import React from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import Chat from "./Chat";

const socket = io.connect("http://localhost:4000/");
const ChitChat = () => {
  // const [room, setRoom] = useState("");
  const { user } = useAuth();
  const { email } = useParams();

  socket.emit("join_room", email || user.email);
  return (
    <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 sm:mx-auto w-full mx-4 my-12 border">
      <h1 className="text-2xl text-center py-4">Chit-Chat</h1>
      <Chat
        socket={socket}
        userName={user.displayName}
        room={email || user.email}
      />
    </div>
  );
};

export default ChitChat;

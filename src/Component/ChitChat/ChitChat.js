import React from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import Chat from "./Chat";

const socket = io.connect("https://serene-spire-70074.herokuapp.com/");
const ChitChat = () => {
  // const [room, setRoom] = useState("");
  const { user } = useAuth();
  const { roomId, email } = useParams();

  socket.emit("join_room", roomId);
  return (
    <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 sm:mx-auto w-full mx-4 my-12 border">
      <h1 className="text-2xl text-center py-4">Chit-Chat</h1>
      <Chat
        socket={socket}
        userName={user.displayName}
        userEmail={email}
        room={roomId}
      />
    </div>
  );
};

export default ChitChat;

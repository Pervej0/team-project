import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Chat = ({ socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isSend, setIsSend] = useState(false);
  const { user } = useAuth();
  console.log(room);
  useEffect(() => {
    socket.on("received_message", (data) => {
      // setMessageList((prev) => [...prev, data]);
      fetch("https://polar-tor-73503.herokuapp.com/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
    });
    fetch(`https://polar-tor-73503.herokuapp.com/chat/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setMessageList(data);
          setIsSend(true);
        }
      });
  }, [socket]);

  const handleMessageSend = async (e) => {
    e.preventDefault();
    let local = new Date().toLocaleString();
    if (userName === "" || room === "") {
      alert("Please input your name and join a room");
      setCurrentMessage("");
      return;
    } else {
      const messageData = {
        room,
        author: userName,
        message: currentMessage,
        time: local.split(",")[1],
      };
      fetch("https://polar-tor-73503.herokuapp.com/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(messageData),
      });
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="mt-16">
      <div className="border w-4/6 mx-auto p-4 relative">
        <div className="h-60 overflow-scroll overflow-x-hidden mb-12">
          {messageList.map((messageInfo, index) => (
            <div key={index}>
              <div
                className={`${
                  userName === messageInfo.author
                    ? "text-black text-left"
                    : "text-green-600 text-right"
                } border border-gray-200 mb-2 p-1 px-3`}
              >
                <h3 className="text-lg m-0 leading-0">{messageInfo.message}</h3>
                <small className="text-xs">
                  From {messageInfo.author} &nbsp;at&nbsp;{messageInfo.time}
                </small>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSend}>
          <div className="mt-8 flex items-center w-full absolute bottom-0 left-0">
            <div className="w-full">
              <input
                type="text"
                className="border border-black w-full py-2 px-2 rounded"
                value={currentMessage}
                placeholder="Enter your message"
                required
                onChange={(e) => setCurrentMessage(e.target.value)}
              />
            </div>
            <div>
              <button className="uppercase my-3 px-5 py-2 bg-green-700 text-white rounded border">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;

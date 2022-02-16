import React, { useEffect, useState } from "react";

const Chat = ({ socket, user, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const handleMessageSend = async (e) => {
    e.preventDefault();
    console.log(user, room);
    if (user === "" || room === "") {
      alert("Please input your name and join a room");
      setCurrentMessage("");
      return;
    } else {
      const messageData = {
        room,
        author: user,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="mt-16">
      <h1 className="mb-14 mt-4 font-semibold text-center">Chat box</h1>
      <div className="border w-4/6 mx-auto p-4 h-60 overflow-scroll overflow-x-hidden  relative">
        {messageList.map((messageInfo, index) => (
          <div key={index}>
            <div
              className={
                user === messageInfo.author
                  ? "text-black text-left"
                  : "text-green-600 text-right"
              }
            >
              <h3 className="text-lg m-0 leading-0">{messageInfo.message}</h3>
              <small className="text-xs">
                From {messageInfo.author} &nbsp;at&nbsp;{messageInfo.time}
              </small>
            </div>
          </div>
        ))}
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

import React, { useEffect } from "react";
import { socket } from "../../socket";
import Header from "components/Header";
import Video from "components/Video";
import Chat from "components/chat";

function Room() {
  useEffect(() => {
    function onConnect() {
      console.log("socket connected");
    }

    socket.on("connection", onConnect);

    return () => {
      socket.off("connection");
    };
  }, []);
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex flex-row h-[93dvh] p-[2rem]">
        <Video />
        <Chat />
      </div>
    </div>
  );
}

export default Room;

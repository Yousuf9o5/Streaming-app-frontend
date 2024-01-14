import React, { useEffect } from "react";
import { socket } from "../socket";

function Stream() {
  useEffect(() => {
    function onConnect() {
      console.log("socket connected");
    }

    socket.on("connection", onConnect);

    return () => {
      socket.off("connection");
    };
  }, []);
  return <div></div>;
}

export default Stream;

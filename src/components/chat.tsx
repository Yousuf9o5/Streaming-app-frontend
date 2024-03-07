import { Button } from "@nextui-org/react";
import useChatTransition from "hooks/useChatTransition";
import React, { useEffect, useState } from "react";
import Members from "./Members";
import ChatBox from "./ChatBox";
import ChatControllers from "./ChatControllers";
import { jwtDecode } from "jwt-decode";
import socket from "../socket";
import { useRouter } from "next/router";

function Chat() {
  const { query, isReady } = useRouter();
  const { chat, setChat, chatRef, membersRef } = useChatTransition();
  const [membersId, setMembersId] = useState<string[]>([]);

  useEffect(() => {
    if (!isReady) return;
    const token = localStorage.getItem("token")!;

    const tokenDecoded: { id: string } = jwtDecode(token);

    socket.emit("join room", query.id, tokenDecoded.id);

    const newMemberCallback = (data: string[]) => {
      setMembersId([...data]);
    };

    socket.on("joined members", newMemberCallback);

    return () => {
      socket.emit("disconnect", query.id, tokenDecoded.id);
      socket.disconnect();
    };
  }, [isReady]);

  return (
    <div className="flex flex-col gap-4 w-[min(750px,_100%)]">
      <div className="w-full flex justify-between gap-4">
        <ChatControllers chat={chat} setChat={setChat} />
      </div>
      <div className="relative rounded-xl h-full">
        <Members ref={membersRef} data={membersId} />
        <ChatBox ref={chatRef} data={[]} />
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          className="flex-1 bg-secondary-theme rounded-lg shadow-medium px-2 !outline-none"
        />
        <Button>send</Button>
      </div>
    </div>
  );
}

export default Chat;

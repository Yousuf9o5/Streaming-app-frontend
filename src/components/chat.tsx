import { Badge, Button } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { div } from "types/elements.types";

function Chat() {
  const [chat, setChat] = useState(true);
  const chatRef = useRef<div>(null);
  const membersRef = useRef<div>(null);

  useEffect(() => {
    const { current: chatCurrent } = chatRef;
    const { current: membersCurrent } = membersRef;
    if (chat) {
      chatCurrent?.classList.replace("opacity-0", "opacity-1");
      membersCurrent?.classList.replace("opacity-1", "opacity-0");
      setTimeout(() => {}, 250);
    } else {
      membersCurrent?.classList.replace("opacity-0", "opacity-1");
      chatCurrent?.classList.replace("opacity-1", "opacity-0");
    }
  }, [chat]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between gap-4">
        <Button
          onClick={() => setChat(false)}
          className="flex-1"
          color={chat ? "default" : "secondary"}
        >
          <Badge content="5" color="primary" className="translate-x-6">
            members
          </Badge>
        </Button>
        <Button
          onClick={() => setChat(true)}
          className="flex-1"
          color={chat ? "secondary" : "default"}
        >
          <Badge content="5" color="primary" className="translate-x-6">
            Chat
          </Badge>
        </Button>
      </div>
      <div className="relative rounded-xl h-full">
        <div
          ref={membersRef}
          className="bg-secondary-theme opacity-0 transition-opacity absolute inset-0 flex flex-col gap-4 h-full rounded-xl shadow-medium"
        >
          <h2 className="w-full h-full text-text-gray-500 p-4">
            No members for now
          </h2>
        </div>
        <div
          ref={chatRef}
          className="bg-secondary-theme opacity-1 transition-opacity relative flex flex-col gap-4 h-full rounded-xl shadow-medium"
        >
          {/* chats */}
          <h2 className="w-full h-full text-text-gray-500 p-4">
            No Chatting for now
          </h2>
        </div>
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

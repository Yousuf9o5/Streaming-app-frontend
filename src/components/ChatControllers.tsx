import { Badge, Button } from "@nextui-org/react";
import React from "react";
import { setBoolean } from "types/react.types";

type Props = {
  chat: boolean;
  setChat: setBoolean;
};

function ChatControllers({ chat, setChat }: Props) {
  return (
    <>
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
    </>
  );
}

export default ChatControllers;

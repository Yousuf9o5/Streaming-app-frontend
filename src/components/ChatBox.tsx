import React from "react";
import Message from "./Message";
import { msgAttributes } from "types/response.types";

type Props = {
  data: msgAttributes[];
};

const ChatBox = React.forwardRef(function ChatBox(
  { data }: Props,
  ref: React.LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="bg-secondary-theme opacity-1 transition-opacity relative flex flex-col gap-4 h-full rounded-xl shadow-medium p-4"
    >
      {/* {data.map((msg) => (
        <Message name={msg.} date="2020/1/2" msg="hello world" />
      ))} */}
    </div>
  );
});

export default ChatBox;

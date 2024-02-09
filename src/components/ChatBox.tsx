import React from "react";

type Props = {
  data?: any[];
};

const ChatBox = React.forwardRef(function ChatBox(
  { data }: Props,
  ref: React.LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="bg-secondary-theme opacity-1 transition-opacity relative flex flex-col gap-4 h-full rounded-xl shadow-medium"
    >
      {data?.map((msg) => (
        <div>{msg}</div>
      ))}
    </div>
  );
});

export default ChatBox;

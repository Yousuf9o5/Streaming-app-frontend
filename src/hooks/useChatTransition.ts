import React, { useEffect, useRef, useState } from "react";
import { div } from "types/elements.types";

function useChatTransition() {
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

  return { chat, setChat, chatRef, membersRef };
}

export default useChatTransition;

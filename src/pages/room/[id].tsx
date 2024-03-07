import React, { useEffect, useState } from "react";
// import { socket } from "../../socket";
import Header from "components/Header";
import Video from "components/Video";
import Chat from "components/Chat";
import useSetupRoom from "hooks/useSetupRoom";
import { useRouter } from "next/router";
import socket from "../../socket";
import useGetTokenData from "hooks/useGetTokenData";

function Room() {
  const { query, isReady } = useRouter();
  const { movieId, party, public: isPublic, userId, id } = useSetupRoom();
  const [isOwner, setIsOwner] = useState(false);
  const tokenData = useGetTokenData();

  useEffect(() => {
    if (!isReady) return;
    if (tokenData.id === userId) setIsOwner(true);

    socket.connect();
    socket.emit("setup", query.id);

    return () => {
      socket.disconnect();
      socket.emit("setup", query.id);
    };
  }, [isReady, userId]);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      <Header />
      <div className="video-and-chat">
        <Video movieId={movieId} isOwner={isOwner} />
        <Chat />
      </div>
    </div>
  );
}

export default Room;

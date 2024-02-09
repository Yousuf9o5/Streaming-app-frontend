import { GetMoviesById } from "api/movie";
import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { MovieAttributes } from "types/response.types";
import socket from "../socket";
import { useRouter } from "next/router";
import { Video as VideoElement } from "types/elements.types";
import useGet from "hooks/useGet";
import URLS from "api/URLS";

type Props = {
  movieId: string;
  isOwner: boolean;
};

function Video({ movieId, isOwner }: Props) {
  const { query } = useRouter();
  const videoRef = useRef<VideoElement>(null);
  const video = useGet<MovieAttributes>(movieId, URLS.GetMovieById);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const { current } = videoRef;
    // if (isOwner) return;
    if (!current) return;

    const getVideoTime = (time: number) => {
      setIsPlaying(false);
      current.currentTime = time;
    };

    const isPlay = async (play: boolean) => {
      if (play) {
        await current.play();
        // current.muted = false;
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
        // current.muted = true;
        current.pause();
      }
    };

    socket.on("play it", isPlay);
    socket.on("get video time", getVideoTime);

    return () => {
      socket.off("get video time", getVideoTime);
      socket.off("play it", isPlay);
    };
  }, [video?.url, isPlaying]);

  const onTimeUpdate: ReactEventHandler<VideoElement> = (e) => {
    if (!isOwner) return;
    const { currentTime } = e.target as VideoElement;
    socket.emit("video timeline", query.id, currentTime, isPlaying);
  };

  const onPlay = () => {
    if (!isOwner) return;
    socket.emit("play video", query.id, true);
    setIsPlaying(true);
  };

  const onPause = () => {
    if (!isOwner) return;
    socket.emit("play video", query.id, false);
    setIsPlaying(false);
  };

  return (
    <div className="col-span-3">
      {video?.url && (
        <video
          ref={videoRef}
          controls={isOwner}
          className="rounded-xl"
          onTimeUpdate={onTimeUpdate}
          onPlay={onPlay}
          onPause={onPause}
          playsInline={true}
        >
          <source src={video?.url} />
        </video>
      )}
      <div className="py-5">
        <h2 className="text-h2">{video?.name}</h2>
        <p>{video?.desc}</p>
      </div>
    </div>
  );
}

export default Video;

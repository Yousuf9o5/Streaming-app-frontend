import { CreateRoom } from "api/room";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Nodes } from "types/react.types";
import MovieCardLink from "./MovieCardLink";
import { Video } from "types/elements.types";
import ReactPlayer from "react-player";

type Props = {
  roomId?: string | null;
  movieId?: string;
  url: string;
  name: string;
  desc: string;
};

function MovieCard(props: Props) {
  const { roomId, desc, movieId, name, url } = props;

  const videoRef = useRef<ReactPlayer>(null);
  const [seek, setSeek] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (!seek) {
      setSeek((prev) => prev + 10);
      return;
    }
    const { current } = videoRef;
    const videoDuration = current?.getDuration()!;

    const interval = setInterval(
      () => setSeek((prev) => (prev + 10) % videoDuration),
      1500
    );

    current?.seekTo(seek, "seconds");

    return () => {
      clearInterval(interval);
    };
  }, [seek, playing]);

  const onMouseEnter = () => {
    setPlaying(true);
  };
  const onMouseLeave = () => {
    setPlaying(false);
    videoRef.current?.seekTo(0, "seconds");
    setSeek(0);
  };

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="rounded-2xl bg-secondary-theme shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 overflow-hidden"
    >
      <MovieCardLink movieId={movieId} roomId={roomId}>
        <div>
          <ReactPlayer
            ref={videoRef}
            width="100%"
            height="50%"
            className="rounded"
            url={url}
            playing={playing}
            loop
          />
        </div>
        <div className="p-3 text-left">
          <h2 className="text-slate-700 font-bold text-large">{name}</h2>
          <p className="mt-1 text-sm text-slate-400">{desc}</p>
        </div>
      </MovieCardLink>
    </article>
  );
}

export default MovieCard;

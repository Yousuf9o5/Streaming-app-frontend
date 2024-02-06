import { CreateRoom } from "api/room";
import Link from "next/link";
import React, { useRef, useState } from "react";
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

  const onMouseEnter = () => {
    // const { current } = videoRef;

    setPlaying(!playing);
    // let time = current?.play();
    // console.log(time);

    // current?.seekTo(5000, "seconds");
    console.log(playing);
  };

  return (
    <article
      onMouseEnter={onMouseEnter}
      className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-secondary-theme"
    >
      <MovieCardLink>
        <div className="mt-1 p-2">
          <ReactPlayer
            ref={videoRef}
            width="100%"
            height="50%"
            className="rounded"
            url={url}
            playing
            loop
          />
          <h2 className="text-slate-700">{name}</h2>
          <p className="mt-1 text-sm text-slate-400">{desc}</p>
        </div>
      </MovieCardLink>
    </article>
  );
}

export default MovieCard;

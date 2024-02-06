import { CreateRoom } from "api/room";
import Link from "next/link";
import { Nodes } from "types/react.types";

type Props = {
  roomId?: string;
  movieId?: string;
  children: Nodes;
};

function MovieCardLink(props: Props) {
  const { children, movieId, roomId } = props;

  /** @Yousuf9o5 create room function */
  const onClick = () => {
    CreateRoom(movieId!)
      .then((res) => {
        console.log(res.msg);
      })
      .catch(() => console.log("Error Creating Room"))
      .finally(() => {});
  };

  if (!roomId) {
    return (
      <button className="bg-secondary-theme w-full h-full" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={`/room/${roomId}`} className="w-full h-full">
      {children}
    </Link>
  );
}

export default MovieCardLink;

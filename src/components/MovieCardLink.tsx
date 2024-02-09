import { CreateRoom } from "api/room";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nodes } from "types/react.types";

type Props = {
  roomId?: string | null;
  movieId?: string;
  children: Nodes;
};

function MovieCardLink(props: Props) {
  const { children, movieId, roomId } = props;
  const router = useRouter();

  /** @Yousuf9o5 create room function */
  const onClick = () => {
    CreateRoom(movieId!)
      .then((res) => {
        router.push("/room/" + res.data.id);
      })
      .catch(() => console.log("Error Creating Room"))
      .finally(() => {});
  };

  if (!roomId) {
    return (
      <button
        className="bg-secondary-theme w-full h-full p-0"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={`/room/${roomId}`}
      className="block bg-secondary-theme w-full h-full !p-0"
    >
      {children}
    </Link>
  );
}

export default MovieCardLink;

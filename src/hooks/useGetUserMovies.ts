import { GetUserMovies } from "api/movie";
import { useEffect, useState } from "react";
import { MovieAttributes } from "types/response.types";

function useGetUserMovies() {
  const [movies, setMovies] = useState<MovieAttributes[]>([]);

  useEffect(() => {
    GetUserMovies()
      .then((res) => setMovies([...res.data]))
      .catch(() => console.log("Error Getting User Movies"));
  }, []);

  return { movies };
}

export default useGetUserMovies;

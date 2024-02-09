import { getRoomById } from "api/room";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RoomAttributes } from "types/response.types";

function useSetupRoom(): RoomAttributes {
  const { query, isReady } = useRouter();
  const [data, setData] = useState<RoomAttributes>({
    id: "",
    movieId: "",
    party: false,
    public: false,
    userId: "",
  });

  useEffect(() => {
    if (!query.id) return;

    getRoomById(query.id as string)
      .then((res) => setData({ ...res.data }))
      .catch(() => console.log("Error While Fetching Room"));
  }, [isReady]);

  return data;
}

export default useSetupRoom;

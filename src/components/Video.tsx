import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  videoUrl?: string;
  videoInf?: { name: string; desc: string };
};

function Video({ videoInf, videoUrl }: Props) {
  const { query } = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "get",
      url: "/movies/" + query.id,
    };
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  return (
    <div className="min-w-[70dvw] w-full px-4">
      <video width="320" height="240" controls className="w-full rounded-xl">
        <source
          src="https://www.youtube.com/watch?v=zWh3CShX_do"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Video;

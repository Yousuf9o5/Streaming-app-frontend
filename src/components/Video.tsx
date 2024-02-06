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

  useEffect(() => {}, []);

  return (
    <div className="min-w-[70dvw] w-full px-4 flex flex-col gap-4">
      <video width="320" height="240" controls className="w-full rounded-xl">
        <source
          src="https://www.youtube.com/watch?v=zWh3CShX_do"
          type="video/mp4"
        />
      </video>

      <h2 className="text-h2">Lorem, ipsum dolor sit amet ?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A animi
        quisquam, autem et, debitis minus alias dolorem officia quidem omnis
        similique dignissimos rerum facere molestias unde quasi eos, blanditiis
        esse.
      </p>
    </div>
  );
}

export default Video;

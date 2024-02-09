import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { ObjRes } from "types/response.types";

function useGet<T extends any>(id: string, url: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    if (!id) return;

    const config: AxiosRequestConfig = {
      url: url + id,
    };

    const onSuccess: ObjRes<T> = (res) => {
      setData(res.data.data);
    };

    axios(config)
      .then(onSuccess)
      .catch(() => {
        console.log("Error While Fetching");
      });
  }, [id]);

  return data;
}

export default useGet;

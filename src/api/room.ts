import axios, { AxiosRequestConfig } from "axios";
import URLS from "./URLS";
import { ObjRes } from "types/response.types";

/** @param id movie id */
export async function CreateRoom(id: string) {
  const config: AxiosRequestConfig = {
    method: "POST",
    data: { movieId: id },
    url: URLS.CreateRoom,
  };

  const callback: ObjRes<null> = (res) => res.data;

  return axios(config).then(callback);
}

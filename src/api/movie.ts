import axios, { AxiosRequestConfig } from "axios";
import URLS from "./URLS";
import { ArrRes, MovieAttributes } from "types/response.types";

export async function GetUserMovies() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: URLS.GetUserMovies,
  };

  const callback: ArrRes<MovieAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

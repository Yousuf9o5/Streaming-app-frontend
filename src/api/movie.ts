import axios, { AxiosRequestConfig } from "axios";
import URLS from "./URLS";
import { ArrRes, MovieAttributes, ObjRes } from "types/response.types";

export async function GetUserMovies() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: URLS.GetUserMovies,
  };

  const callback: ArrRes<MovieAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

export async function GetMoviesById(id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: URLS.GetMovieById + id,
  };

  const callback: ObjRes<MovieAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

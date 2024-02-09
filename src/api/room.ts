import axios, { AxiosRequestConfig } from "axios";
import URLS from "./URLS";
import {
  ArrRes,
  ObjRes,
  RoomAttributes,
  UserAttributes,
} from "types/response.types";

/** @param id movie id */
export async function CreateRoom(id: string) {
  const config: AxiosRequestConfig = {
    method: "POST",
    data: { movieId: id },
    url: URLS.CreateRoom,
  };

  const callback: ObjRes<RoomAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

/** @param id movie id */
export async function getRoomById(id: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: URLS.GetRoomById + id,
  };

  const callback: ObjRes<RoomAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

/** @param memberId members id */
export async function getRoomMembers(membersId: string[]) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: URLS.GetRoomMembers,
    data: { members: membersId },
  };

  const callback: ArrRes<UserAttributes> = (res) => res.data;

  return axios(config).then(callback);
}

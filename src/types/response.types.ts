import { AxiosError, AxiosResponse } from "axios";

export interface BetterResponse<T> extends AxiosResponse {
  status: number;
  data: T[];
  msg: string;
}

export interface Response<T extends any> {
  status: number;
  data: T;
  msg: string;
}

export interface ErrorResponse {
  status: number;
  msg: string;
}

export type ObjRes<T> = (res: AxiosResponse<Response<T>>) => Response<T>;

export type ArrRes<T> = (res: AxiosResponse<Response<T[]>>) => Response<T[]>;

export type AxiosErr<T> = (err: AxiosError<ErrorResponse>) => ErrorResponse;

export type ProfileAttributes = {
  fullname: string;
  email: string;
  image: string;
};

export type MovieAttributes = {
  id: string;
  name: string;
  desc: string;
  url: string;
  filename: string;
  userId: string;
  roomId: string | null;
};

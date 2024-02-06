import axios, { AxiosRequestConfig } from "axios";
import URLS from "./URLS";
import { ObjRes, ProfileAttributes } from "types/response.types";

export async function LoginApi(data: any) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: URLS.login,
    data,
  };

  return await axios(config).then((res) => res.data);
}

export async function SignUp(data: any) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: URLS.signup,
    data,
  };

  return await axios(config).then((res) => res.data);
}

export async function GetUserData() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: URLS.UserInformation,
  };

  const callback: ObjRes<ProfileAttributes> = (res) => res.data;

  return await axios(config).then(callback);
}

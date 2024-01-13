import axios, { AxiosRequestConfig } from "axios";
import { Apis } from ".";

export async function LoginApi(data: any) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: Apis.login,
    data,
  };

  return await axios(config).then((res) => res.data);
}

export async function signUp(data: any) {
  const config: AxiosRequestConfig = {
    method: "post",
    url: Apis.signup,
    data,
  };

  return await axios(config).then((res) => res.data);
}

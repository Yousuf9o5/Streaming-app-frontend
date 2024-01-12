import axios, { AxiosRequestConfig } from "axios";
import { Apis } from "./apis";

export async function LoginApi(data: any) {
  const config: AxiosRequestConfig = {
    method: "",
    url: Apis.login,
    data,
  };

  return await axios(config).then((res) => res.data);
}

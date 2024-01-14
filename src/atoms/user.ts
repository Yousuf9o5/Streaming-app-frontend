import { atom } from "recoil";
import Cookies from "js-cookie";

export const userState = atom({
  key: "userState",
  default: null,
});

export const tokenState = atom({
  key: "tokenState",
  default: Cookies.get("token") || "",
});

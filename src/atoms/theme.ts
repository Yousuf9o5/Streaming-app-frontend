import { atom } from "recoil";

export const themeState = atom<"" | "dark" | "light">({
  key: "themeAtomState",
  default: "",
});

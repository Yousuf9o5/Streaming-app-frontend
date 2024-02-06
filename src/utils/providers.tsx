"use client";

import { NextUIProvider } from "@nextui-org/react";
import URLS from "api/URLS";
import axios from "axios";
import Container from "layouts/Container";
import { RecoilRoot } from "recoil";
import Theme from "./theme";
import Cookies from "js-cookie";

let token = "";

if (typeof window != "undefined") {
  token = localStorage.getItem("token") as string;
}

//defaults
axios.defaults.baseURL = URLS.baseUrlV1;
axios.defaults.headers.common.Authorization = "Bearer " + token;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Container className="min-h-screen min-w-screen !grid place-items-center">
      <NextUIProvider>
        <RecoilRoot>
          <Theme>{children}</Theme>
        </RecoilRoot>
      </NextUIProvider>
    </Container>
  );
}

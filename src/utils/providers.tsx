"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Apis } from "api/index";
import axios from "axios";
import Container from "layouts/Container";
import { RecoilRoot } from "recoil";
import Theme from "./theme";

/**
 * @axios defaults
 */
axios.defaults.baseURL = Apis.baseUrlV1;
// axios.defaults.headers.common.Authorization = `Bearer ${
//   localStorage.getItem("token") ?? ""
// }`;

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

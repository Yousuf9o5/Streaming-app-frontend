"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Apis } from "api/apis";
import axios from "axios";
import Container from "layouts/Container";
import { RecoilRoot } from "recoil";

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
        <RecoilRoot>{children}</RecoilRoot>
      </NextUIProvider>
    </Container>
  );
}

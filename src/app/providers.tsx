"use client";

import { NextUIProvider } from "@nextui-org/react";
import { apis } from "api/apis";
import axios from "axios";
import { RecoilRoot } from "recoil";

/**
 * @axios defaults
 */
axios.defaults.baseURL = apis.baseUrlV1;
axios.defaults.headers.common.Authorization = `Bearer ${
  localStorage.getItem("token") ?? ""
}`;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </NextUIProvider>
  );
}

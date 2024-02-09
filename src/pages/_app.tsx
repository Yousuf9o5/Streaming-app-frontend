import "style/main.css";
import { Providers } from "utils/providers";
import { AppProps } from "next/app";
import Authentication from "utils/authentication";
import { useEffect } from "react";
import socket from "../socket";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  return (
    <Providers>
      {/* <Head></Head> */}
      <Authentication>
        <Component {...pageProps} />
      </Authentication>
    </Providers>
  );
}

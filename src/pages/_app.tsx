import "style/main.css";
import { Providers } from "utils/providers";
import { AppProps } from "next/app";
import Authentication from "utils/authentication";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      {/* <Head></Head> */}
      <Authentication>
        <Component {...pageProps} />
      </Authentication>
    </Providers>
  );
}

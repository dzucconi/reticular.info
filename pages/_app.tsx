import type { AppProps } from "next/app";
import { GlobalStyles } from "../components/GlobalStyles";

function Reticular({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default Reticular;

import { CssBaseline, GeistProvider } from "@geist-ui/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themeType="light">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { ThemeContext } from "@/lib/store/theme";
import { theme, nightTheme } from "@/theme/theme";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // NightModeに切り替えるステート
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isNightMode ? nightTheme : theme}>
      <ThemeContext.Provider value={{ isNightMode, setIsNightMode }}>
        <Head>
          <title>YUIS</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="description"
            content="YUISは、UIコンポーネントライブラリを作成するための基盤です。あなただけのUIライブラリを育成して、世界中のライバルとバトルしよう!!"
          />
          <meta property="og:title" content="YUIS -Yakkun UI System-" />
          <meta
            property="og:description"
            content="あなただけのUIライブラリを育成して、世界中のライバルとバトルしよう!!"
          />
          <meta
            property="og:image"
            content={`https://yuis.vercel.app/images/card_large_yuis.png`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

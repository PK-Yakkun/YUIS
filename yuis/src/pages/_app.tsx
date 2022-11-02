import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { ThemeContext } from "@/lib/store/theme";
import { theme, nightTheme } from "@/theme/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // NightModeに切り替えるステート
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
    // <ThemeProvider theme={isNightMode ? nightTheme : theme}>
    <ThemeProvider theme={isNightMode ? nightTheme : theme}>
      <ThemeContext.Provider value={{ isNightMode, setIsNightMode }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

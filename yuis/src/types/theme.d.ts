import "@emotion/react";
import { theme } from "../theme/theme";

type MyTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}

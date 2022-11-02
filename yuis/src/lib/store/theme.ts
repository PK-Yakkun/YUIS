import { createContext } from "react";

export const ThemeContext = createContext(
  {} as {
    isNightMode: Object;
    setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

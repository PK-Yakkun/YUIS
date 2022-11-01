import { Box } from "@/components/atoms/Box/Box";
import { Toggle } from "@/components/molecules/Toggle";
import { ThemeContext } from "@/lib/store/theme";
import { useContext } from "react";

export const ThemeToggle = () => {
  const { isNightMode, setIsNightMode } = useContext(ThemeContext);
  return (
    <Box onClick={() => setIsNightMode(!isNightMode)}>
      <Toggle />
    </Box>
  );
};

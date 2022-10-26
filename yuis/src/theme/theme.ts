import { palette, nightPalette } from "./settings/palettes";
import { fonts } from "./settings/fonts";
import { breakpoints } from "./settings/breakpoints";
import { spacings } from "./settings/spacings";

export const theme = {
  color: palette,
  font: fonts,
  breakpoint: breakpoints,
  spacing: spacings,
};

export const nightTheme = {
  color: nightPalette,
  font: fonts,
  breakpoint: breakpoints,
  spacing: spacings,
};

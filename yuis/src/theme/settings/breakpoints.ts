import { css } from "@emotion/react";

export const breakpoints = {
  sm: (sm: any) => sm != null && css({ "@media (max-width: 899px)": sm }),
  md: (md: any) => md != null && css({ "@media (min-width: 899px)": md }),
};

import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "@/types/responsive";
import { createResponsiveStyle } from "@/lib/responsive";

export type OpacityProps = {
  opacity: CSS.Property.Opacity | BreakPointProps;
};

export const opacityMixin = ({ opacity }: Partial<OpacityProps>) => {
  return css(
    opacity != null && typeof opacity === "string"
      ? { opacity: `${opacity}` }
      : typeof opacity === "object" &&
          createResponsiveStyle("width", opacity.sm, opacity.md)
  );
};

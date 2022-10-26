import * as CSS from "csstype";
import { css } from "@emotion/react";

export type OpacityProps = {
  opacity: CSS.Property.Opacity;
};

export const opacityMixin = ({ opacity }: Partial<OpacityProps>) => {
  return css(opacity != null && `opacity: ${opacity};`);
};

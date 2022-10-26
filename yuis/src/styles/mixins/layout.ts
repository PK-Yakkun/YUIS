import * as CSS from "csstype";
import { css } from "@emotion/react";

export type Size = string | number;

export type LayoutProps = {
  w: Size;
  h: Size;
  maxW: Size;
  maxH: Size;
  display: CSS.Property.Display;
  overflow: CSS.Property.Overflow;
  overflowX: CSS.Property.OverflowX;
  overflowY: CSS.Property.OverflowY;
};

export const layoutMixin = ({
  w,
  h,
  maxW,
  maxH,
  display,
  overflow,
  overflowX,
  overflowY,
}: Partial<LayoutProps>) => {
  return css(
    w != null && `width: ${w};`,
    h != null && `height: ${h};`,
    maxW != null && `max-width: ${maxW};`,
    maxH != null && `max-height: ${maxH};`,
    display != null && `display: ${display};`,
    overflow != null && `overflow: ${overflow}`,
    overflowX != null && `overflowX: ${overflowX}`,
    overflowY != null && `overflowY: ${overflowY}`
  );
};

import * as CSS from "csstype";
import { css } from "@emotion/react";
import { BreakPointProps } from "@/types/responsive";
import { createResponsiveStyle } from "@/lib/responsive";

export type Size = string | number | BreakPointProps;

export type LayoutProps = {
  w: Size;
  h: Size;
  maxW: Size;
  maxH: Size;
  display: CSS.Property.Display | BreakPointProps;
  overflow: CSS.Property.Overflow | BreakPointProps;
  overflowX: CSS.Property.OverflowX | BreakPointProps;
  overflowY: CSS.Property.OverflowY | BreakPointProps;
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
    w != null && typeof w === "string"
      ? `width: ${w};`
      : typeof w === "object" && createResponsiveStyle("width", w.sm, w.md),
    h != null && typeof h === "string"
      ? `height: ${h};`
      : typeof h === "object" && createResponsiveStyle("height", h.sm, h.md),
    maxW != null && typeof maxW === "string"
      ? `max-width: ${maxW};`
      : typeof maxW === "object" &&
          createResponsiveStyle("maxWidth", maxW.sm, maxW.md),
    maxH != null && typeof maxH === "string"
      ? `maxHeight: ${maxH};`
      : typeof maxH === "object" &&
          createResponsiveStyle("maxHeight", maxH.sm, maxH.md),
    display != null && typeof display === "string"
      ? `display: ${display};`
      : typeof display === "object" &&
          createResponsiveStyle("display", display.sm, display.md),
    overflow != null && typeof overflow === "string"
      ? `overflow: ${overflow}`
      : typeof overflow === "object" &&
          createResponsiveStyle("overflow", overflow.sm, overflow.md),
    overflowX != null && typeof overflowX === "string"
      ? `overflowX: ${overflowX}`
      : typeof overflowX === "object" &&
          createResponsiveStyle("overflowX", overflowX.sm, overflowX.md),
    overflowY != null && typeof overflowY === "string"
      ? `overflowY: ${overflowY}`
      : typeof overflowY === "object" &&
          createResponsiveStyle("overflowY", overflowY.sm, overflowY.md)
  );
};

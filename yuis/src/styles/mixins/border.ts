import * as CSS from "csstype";
import { css } from "@emotion/react";
import { createResponsiveStyle } from "@/lib/responsive";
import { BreakPointProps } from "@/types/responsive";

export type BorderProps = {
  border: CSS.Property.Border | BreakPointProps;
  borderWidth: CSS.Property.BorderWidth | BreakPointProps;
  borderStyle: CSS.Property.BorderStyle | BreakPointProps;
  borderColor: CSS.Property.BorderColor | BreakPointProps;
  borderRadius: CSS.Property.BorderRadius | BreakPointProps;
  rounded: CSS.Property.BorderRadius | BreakPointProps;
  borderTop: CSS.Property.BorderTop | BreakPointProps;
  borderRight: CSS.Property.BorderRight | BreakPointProps;
  borderBottom: CSS.Property.BorderBottom | BreakPointProps;
  borderLeft: CSS.Property.BorderLeft | BreakPointProps;
  borderX: CSS.Property.Border | BreakPointProps;
  borderY: CSS.Property.Border | BreakPointProps;
  borderTopRightRadius: CSS.Property.BorderTopRightRadius | BreakPointProps;
  borderBottomRightRadius:
    | CSS.Property.BorderBottomRightRadius
    | BreakPointProps;
  borderBottomLeftRadius: CSS.Property.BorderBottomLeftRadius | BreakPointProps;
  borderTopLeftRadius: CSS.Property.BorderTopLeftRadius | BreakPointProps;
};

export const borderMixin = ({
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  rounded,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderX,
  borderY,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
}: Partial<BorderProps>) => {
  return css(
    border != null && typeof border === "string"
      ? { border: `${border}` }
      : typeof border === "object" &&
          createResponsiveStyle("border", border.sm, border.md),
    borderWidth != null && typeof borderWidth === "string"
      ? { borderWidth: `${borderWidth}` }
      : typeof borderWidth === "object" &&
          createResponsiveStyle("borderWidth", borderWidth.sm, borderWidth.md),
    borderStyle != null && typeof borderStyle === "string"
      ? { borderStyle: `${borderStyle}` }
      : typeof borderStyle === "object" &&
          createResponsiveStyle("borderStyle", borderStyle.sm, borderStyle.md),
    borderColor != null && typeof borderColor === "string"
      ? { borderColor: `${borderColor}` }
      : typeof borderColor === "object" &&
          createResponsiveStyle("borderColor", borderColor.sm, borderColor.md),
    borderRadius != null && typeof borderRadius === "string"
      ? { borderRadius: `${borderRadius}` }
      : typeof borderRadius === "object" &&
          createResponsiveStyle(
            "borderRadius",
            borderRadius.sm,
            borderRadius.md
          ),
    rounded != null && typeof rounded === "string"
      ? `rounded: ${rounded};`
      : typeof rounded === "object" &&
          createResponsiveStyle("rounded", rounded.sm, rounded.md),
    borderTop != null && typeof borderTop === "string"
      ? { borderTop: `${borderTop}` }
      : typeof borderTop === "object" &&
          createResponsiveStyle("borderTop", borderTop.sm, borderTop.md),
    borderRight != null && typeof borderRight === "string"
      ? { borderRight: `${borderRight}` }
      : typeof borderRight === "object" &&
          createResponsiveStyle("borderRight", borderRight.sm, borderRight.md),
    borderBottom != null && typeof borderBottom === "string"
      ? { borderBottom: `${borderBottom}` }
      : typeof borderBottom === "object" &&
          createResponsiveStyle(
            "borderBottom",
            borderBottom.sm,
            borderBottom.md
          ),
    borderLeft != null && typeof borderLeft === "string"
      ? { borderLeft: `${borderLeft}` }
      : typeof borderLeft === "object" &&
          createResponsiveStyle("borderLeft", borderLeft.sm, borderLeft.md),
    borderX != null && typeof borderX === "string"
      ? { borderTop: `${borderX}`, borderBottom: `${borderX}` }
      : typeof borderX === "object" &&
          createResponsiveStyle(
            ["borderTop", "borderBottom"],
            borderX.sm,
            borderX.md
          ),
    borderY != null && typeof borderY === "string"
      ? { borderLeft: `${borderY}`, borderRight: `${borderY}` }
      : typeof borderY === "object" &&
          createResponsiveStyle(
            ["borderRight", "borderLeft"],
            borderY.sm,
            borderY.md
          ),
    borderTopRightRadius != null && typeof borderTopRightRadius === "string"
      ? { borderTopRightRadius: `${borderTopRightRadius}` }
      : typeof borderTopRightRadius === "object" &&
          createResponsiveStyle(
            "borderTopRightRadius",
            borderTopRightRadius.sm,
            borderTopRightRadius.md
          ),
    borderBottomRightRadius != null &&
      typeof borderBottomRightRadius === "string"
      ? { borderBottomRightRadius: `${borderBottomRightRadius}` }
      : typeof borderBottomRightRadius === "object" &&
          createResponsiveStyle(
            "borderBottomRightRadius",
            borderBottomRightRadius.sm,
            borderBottomRightRadius.md
          ),
    borderBottomLeftRadius != null && typeof borderBottomLeftRadius === "string"
      ? { borderBottomLeftRadius: `${borderBottomLeftRadius}` }
      : typeof borderBottomLeftRadius === "object" &&
          createResponsiveStyle(
            "borderBottomLeftRadius",
            borderBottomLeftRadius.sm,
            borderBottomLeftRadius.md
          ),
    borderTopLeftRadius != null && typeof borderTopLeftRadius === "string"
      ? { borderTopLeftRadius: `${borderTopLeftRadius}` }
      : typeof borderTopLeftRadius === "object" &&
          createResponsiveStyle(
            "borderTopLeftRadius",
            borderTopLeftRadius.sm,
            borderTopLeftRadius.md
          )
  );
};

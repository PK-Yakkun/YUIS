import * as CSS from "csstype";
import { css } from "@emotion/react";

export type BorderProps = {
  border: CSS.Property.Border;
  borderWidth: CSS.Property.BorderWidth;
  borderStyle: CSS.Property.BorderStyle;
  borderColor: CSS.Property.BorderColor;
  borderRadius: CSS.Property.BorderRadius;
  rounded: CSS.Property.BorderRadius;
  borderTop: CSS.Property.BorderTop;
  borderRight: CSS.Property.BorderRight;
  borderBottom: CSS.Property.BorderBottom;
  borderLeft: CSS.Property.BorderLeft;
  borderX: CSS.Property.Border;
  borderY: CSS.Property.Border;
  borderTopRightRadius: CSS.Property.BorderTopRightRadius;
  borderBottomRightRadius: CSS.Property.BorderBottomRightRadius;
  borderBottomLeftRadius: CSS.Property.BorderBottomLeftRadius;
  borderTopLeftRadius: CSS.Property.BorderTopLeftRadius;
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
    border != null && `border: ${border};`,
    borderWidth != null && `border-width: ${borderWidth};`,
    borderStyle != null && `border-style: ${borderStyle};`,
    borderColor != null && `border-color: ${borderColor};`,
    borderRadius != null && `border-radius: ${borderRadius};`,
    rounded != null && `rounded: ${rounded};`,
    borderTop != null && `border-top: ${borderTop};`,
    borderRight != null && `border-right: ${borderRight};`,
    borderBottom != null && `border-bottom: ${borderBottom};`,
    borderLeft != null && `border-left: ${borderLeft};`,
    borderX != null && `border-top: ${borderX}; border-bottom: ${borderX};`,
    borderY != null && `border-left: ${borderY}; border-right: ${borderY};`,
    borderTopRightRadius != null &&
      `border-top-right-radius: ${borderTopRightRadius};`,
    borderBottomRightRadius != null &&
      `border-bottom-right-radius: ${borderBottomRightRadius};`,
    borderBottomLeftRadius != null &&
      `border-bottom-left-radius: ${borderBottomLeftRadius};`,
    borderTopLeftRadius != null &&
      `border-top-left-radius: ${borderTopLeftRadius};`
  );
};

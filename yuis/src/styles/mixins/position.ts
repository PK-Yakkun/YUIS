import * as CSS from "csstype";
import { css } from "@emotion/react";

export type PositionProps = {
  position: CSS.Property.Position;
  top: string;
  right: string;
  bottom: string;
  left: string;
};

export const positionMixin = ({
  position,
  top,
  right,
  bottom,
  left,
}: Partial<PositionProps>) => {
  return css(
    position != null && `position: ${position};`,
    top != null && `top: ${top};`,
    right != null && `right: ${right};`,
    bottom != null && `bottom: ${bottom};`,
    left != null && `left: ${left};`
  );
};

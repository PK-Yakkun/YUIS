import { ColorType } from "@/types/color";
import styled from "@emotion/styled";

export type SvgWrapperProps = {
  width?: string;
  fill?: ColorType;
  viewBox?: string;
};

export const SvgWrapper = styled.svg<SvgWrapperProps>(
  ({ theme, fill, width }) => {
    width != null && { width: width };
    switch (fill) {
      case "body":
        return { fill: theme.color.body };
      case "primary":
        return { fill: theme.color.primary };
      case "secondary":
        return { fill: theme.color.secondary };
      case "typography":
        return { fill: theme.color.typography };
      default:
        return null;
    }
  }
);

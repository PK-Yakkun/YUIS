import { SizeType } from "@/types/size";
import { css } from "@emotion/react";

type Spacings = {
  [key in SizeType]: string;
};

export const spacings: Spacings = {
  "xx-small": "2px",
  "x-small": "6px",
  small: "12px",
  medium: "18px",
  large: "24px",
  "x-large": "30px",
  "xx-large": "36px",
  "xxx-large": "42px",
};

export type Space = SizeType | number | string;

export type SpaceProps = {
  m: Space;
  mx: Space;
  my: Space;
  mt: Space;
  mr: Space;
  mb: Space;
  ml: Space;
  p: Space;
  px: Space;
  py: Space;
  pt: Space;
  pr: Space;
  pb: Space;
  pl: Space;
};

export const sizeValueToPixel = (size: number) => size * 6;

export const sp = (spacing?: Space) =>
  typeof spacing === "string"
    ? spacings[spacing as SizeType] ?? spacing
    : typeof spacing === "number"
    ? `${sizeValueToPixel(spacing as number)}px`
    : 0;

export const spaceMixin = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: Partial<SpaceProps>) => {
  return css(
    m != null && `margin: ${sp(m)});`,
    mx != null && `margin-right: ${sp(mx)};margin-left:${sp(mx)};`,
    my != null && `margin-top: ${sp(my)};margin-bottom: ${sp(my)};`,
    mt != null && `margin-top: ${sp(mt)};`,
    mr != null && `margin-right: ${sp(mr)};`,
    mb != null && `margin-bottom: ${sp(mb)};`,
    ml != null && `margin-left: ${sp(ml)};`,
    p != null && `padding: ${sp(p)};`,
    px != null && `padding-right: ${sp(px)};padding-left: ${sp(px)};`,
    py != null && `padding-top: ${sp(py)};padding-bottom: ${sp(py)};`,
    pt != null && `padding-top: ${sp(pt)};`,
    pr != null && `padding-right: ${sp(pr)};`,
    pb != null && `padding-bottom: ${sp(pb)};`,
    pl != null && `padding-left: ${sp(pl)};`
  );
};

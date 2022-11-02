import { createResponsiveStyle } from "@/lib/responsive";
import { BreakPointProps } from "@/types/responsive";
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
  m: Space | BreakPointProps;
  mx: Space | BreakPointProps;
  my: Space | BreakPointProps;
  mt: Space | BreakPointProps;
  mr: Space | BreakPointProps;
  mb: Space | BreakPointProps;
  ml: Space | BreakPointProps;
  p: Space | BreakPointProps;
  px: Space | BreakPointProps;
  py: Space | BreakPointProps;
  pt: Space | BreakPointProps;
  pr: Space | BreakPointProps;
  pb: Space | BreakPointProps;
  pl: Space | BreakPointProps;
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
    (m != null && typeof m === "string") || typeof m === "number"
      ? { margin: `${sp(m)}` }
      : typeof m === "object" &&
          createResponsiveStyle("margin", sp(m.sm), sp(m.md)),
    (mx != null && typeof mx === "string") || typeof mx === "number"
      ? { marginRight: `${sp(mx)}`, marginLeft: `${sp(mx)}` }
      : typeof mx === "object" &&
          createResponsiveStyle(
            ["marginRight", "marginLeft"],
            sp(mx.sm),
            sp(mx.md)
          ),
    (my != null && typeof my === "string") || typeof my === "number"
      ? { marginTop: `${sp(my)}`, marginBottom: `${sp(my)}` }
      : typeof my === "object" &&
          createResponsiveStyle(
            ["marginTop, marginBottom"],
            sp(my.sm),
            sp(my.md)
          ),
    (mt != null && typeof mt === "string") || typeof mt === "number"
      ? { marginTop: `${sp(mt)}` }
      : typeof mt === "object" &&
          createResponsiveStyle("marginTop", sp(mt.sm), sp(mt.md)),
    (mr != null && typeof mr === "string") || typeof mr === "number"
      ? { marginRight: `${sp(mr)}` }
      : typeof mr === "object" &&
          createResponsiveStyle("marginRight", sp(mr.sm), sp(mr.md)),
    (mb != null && typeof mb === "string") || typeof mb === "number"
      ? { marginBottom: `${sp(mb)}` }
      : typeof mb === "object" &&
          createResponsiveStyle("marginBottom", sp(mb.sm), sp(mb.md)),
    (ml != null && typeof ml === "string") || typeof ml === "number"
      ? { marginLeft: `${sp(ml)}` }
      : typeof ml === "object" &&
          createResponsiveStyle("marginLeft", sp(ml.sm), sp(ml.md)),
    (p != null && typeof p === "string") || typeof p === "number"
      ? { padding: `${sp(p)}` }
      : typeof p === "object" &&
          createResponsiveStyle("padding", sp(p.sm), sp(p.md)),
    (px != null && typeof px === "string") || typeof px === "number"
      ? { paddingRight: `${sp(px)}`, paddingLeft: `${sp(px)}` }
      : typeof px === "object" &&
          createResponsiveStyle(
            ["paddingRight", "paddingLeft"],
            sp(px.sm),
            sp(px.md)
          ),
    (py != null && typeof py === "string") || typeof py === "number"
      ? { paddingTop: `${sp(py)}`, paddingBottom: `${sp(py)}` }
      : typeof py === "object" &&
          createResponsiveStyle(
            ["paddingTop", "paddingBottom"],
            sp(py.sm),
            sp(py.md)
          ),
    (pt != null && typeof pt === "string") || typeof pt === "number"
      ? { paddingTop: `${sp(pt)}` }
      : typeof pt === "object" &&
          createResponsiveStyle("paddingTop", sp(pt.sm), sp(pt.md)),
    (pr != null && typeof pr === "string") || typeof pr === "number"
      ? { paddingRight: `${sp(pr)}` }
      : typeof pr === "object" &&
          createResponsiveStyle("paddingRight", sp(pr.sm), sp(pr.md)),
    (pb != null && typeof pb === "string") || typeof pb === "number"
      ? { paddingBottom: `${sp(pb)}` }
      : typeof pb === "object" &&
          createResponsiveStyle("paddingBottom", sp(pb.sm), sp(pb.md)),
    (pl != null && typeof pl === "string") || typeof pl === "number"
      ? { paddingLeft: `${sp(pl)}` }
      : typeof pl === "object" &&
          createResponsiveStyle("paddingLeft", sp(pl.sm), sp(pl.md))
  );
};

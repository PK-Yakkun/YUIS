import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import { VariantType } from "@/types/typography";
import styled from "@emotion/styled";
import { useState, useEffect, ElementType } from "react";

type VariantMapping = { [key in VariantType]: string };

export const variantMapings: VariantMapping = {
  body: "p",
  button: "p",
  caption: "span",
  title: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export type StyleTypographyProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps>;

export const TypographyStyled = styled("span")<TypographyProps>(
  // Default Theme color
  ({ theme }) => `color: ${theme.color.typography};`,

  // Priority is given to those specified in props.color, if any.
  ({ color }) => color != null && `&& color: ${color};`,

  // Branching styles according to the value specified in props.variant
  ({ variant, theme }) => {
    switch (variant) {
      // varitnt="title"
      case "title":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.title.sm.size,
            fontWeight: theme.font.title.sm.weight,
            lineHeight: theme.font.title.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.title.md.size,
            fontWeight: theme.font.title.md.weight,
            lineHeight: theme.font.title.sm.lineH,
          }),
        ];
      // varitnt="h1"
      case "h1":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h1.sm.size,
            fontWeight: theme.font.h1.sm.weight,
            lineHeight: theme.font.h1.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h1.md.size,
            fontWeight: theme.font.h1.md.weight,
            lineHeight: theme.font.h1.sm.lineH,
          }),
        ];
      // varitnt="h2"
      case "h2":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h2.sm.size,
            fontWeight: theme.font.h2.sm.weight,
            lineHeight: theme.font.h2.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h2.md.size,
            fontWeight: theme.font.h2.md.weight,
            lineHeight: theme.font.h2.sm.lineH,
          }),
        ];
      // varitnt="h3"
      case "h3":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.h3.sm.size,
            fontWeight: theme.font.h3.sm.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.h3.md.size,
            fontWeight: theme.font.h3.md.weight,
            lineHeight: theme.font.h3.sm.lineH,
          }),
        ];
      // varitnt="body"
      case "body":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.body.sm.size,
            fontWeight: theme.font.body.sm.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.body.md.size,
            fontWeight: theme.font.body.md.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
        ];
      // varitnt="caption"
      case "caption":
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.caption.sm.size,
            fontWeight: theme.font.caption.sm.weight,
            lineHeight: theme.font.caption.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.caption.md.size,
            fontWeight: theme.font.caption.md.weight,
            lineHeight: theme.font.caption.sm.lineH,
          }),
        ];
      // If there is no props.variant
      default:
        return [
          theme.breakpoint.sm({
            fontSize: theme.font.body.sm.size,
            fontWeight: theme.font.body.sm.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
          theme.breakpoint.md({
            fontSize: theme.font.body.md.size,
            fontWeight: theme.font.body.md.weight,
            lineHeight: theme.font.body.sm.lineH,
          }),
        ];
    }
  },
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin
);

export type TypographyProps = StyleTypographyProps & {
  variant?: VariantType;
  color?: string;
  children?: string | React.ReactNode;
  as?: ElementType<any> | undefined;
};

export const Typography = (props: TypographyProps) => {
  const [htmlTag, setHtmlTag] = useState<ElementType<any> | undefined>();
  useEffect(() => {
    // Change HTML tags with mapped values based on variant
    const as = variantMapings[props.variant!] as ElementType<any> | undefined;
    setHtmlTag(as);
  }, [props.variant]);

  return <TypographyStyled as={htmlTag} {...props} />;
};

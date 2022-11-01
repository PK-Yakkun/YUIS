import * as CSS from "csstype";
import styled from "@emotion/styled";
import { backgroundMixin, BackgroundProps } from "@/styles/mixins/background";
import { borderMixin, BorderProps } from "@/styles/mixins/border";
import { layoutMixin, LayoutProps } from "@/styles/mixins/layout";
import { opacityMixin, OpacityProps } from "@/styles/mixins/opacity";
import { spaceMixin, SpaceProps } from "@/styles/mixins/space";

export type StackStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<OpacityProps> & {
    direction?: CSS.Property.FlexDirection;
    alignItems?: CSS.Property.AlignItems;
    justifyContent?: CSS.Property.AlignContent;
    gap?: string;
  };

export const StackStyled = styled.div<StackStyleProps>(
  { display: "flex" },
  ({ direction }) => direction != null && { flexDirection: `${direction}` },
  ({ alignItems }) => alignItems != null && { alignItems: `${alignItems}` },
  ({ justifyContent }) =>
    justifyContent != null && { justifyContent: `${justifyContent}` },
  ({ gap }) => gap != null && { gap: `${gap}` },
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  opacityMixin
);

export type StackProps = StackStyleProps & {
  children?: React.ReactNode;
};

export const Stack = (props: StackProps) => {
  return <StackStyled {...props} />;
};

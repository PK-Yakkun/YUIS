import styled from "@emotion/styled";
import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import { AllEventType } from "@/types/events";
import { ColorType } from "@/types/color";

export type ButtonStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType> & {
    bgColor?: ColorType;
    isDisable?: boolean;
  };

export const ButtonStyled = styled.button<ButtonStyleProps>(
  // bgColorに渡された値によってbackgroundを出しわける
  ({ bgColor, theme }) => {
    switch (bgColor) {
      case "body":
        return { background: theme.color.body };
      case "primary":
        return { background: theme.color.primary };
      case "secondary":
        return { background: theme.color.secondary };
      default:
        return { background: bgColor };
    }
  },
  // isDisable = trueのとき、クリック無効と不透明度を下げるスタイルを付与
  ({ isDisable }) => isDisable && { pointerEvents: "none", opacity: ".7" },
  { "&:hover": { cursor: "pointer" } },
  layoutMixin,
  spaceMixin,
  borderMixin,
  positionMixin,
  opacityMixin
);

export type ButtonProps = ButtonStyleProps & {
  children?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};

import * as CSS from "csstype";
import { css } from "@emotion/react";

export type BackgroundProps = {
  bg: CSS.Property.Color;
  bgColor: CSS.Property.BackgroundColor;
  bgClip: CSS.Property.BackgroundClip;
  bgGradient: CSS.Property.BackgroundImage;
  bgImage: CSS.Property.BackgroundImage;
  bgRepeat: CSS.Property.BackgroundRepeat;
  bgSize: CSS.Property.BackgroundSize | number;
  bgAttachment: CSS.Property.BackgroundAttachment;
  bgPosition: CSS.Property.BackgroundPosition | number;
};

export const backgroundMixin = ({
  bg,
  bgColor,
  bgClip,
  bgGradient,
  bgImage,
  bgRepeat,
  bgSize,
  bgAttachment,
  bgPosition,
}: Partial<BackgroundProps>) => {
  return css(
    bg != null && `background: ${bg};`,
    bgColor != null && `background-color: ${bgColor};`,
    bgClip != null && `background-clip: ${bgClip};`,
    bgGradient != null && `background-gradient: ${bgGradient};`,
    bgImage != null && `background-image: ${bgImage};`,
    bgRepeat != null && `background-repeat: ${bgRepeat};`,
    bgSize != null && `background-size: ${bgSize};`,
    bgAttachment != null && `background-attachment: ${bgAttachment};`,
    bgPosition != null && `background-position: ${bgPosition};`
  );
};

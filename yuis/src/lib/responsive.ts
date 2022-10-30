import * as CSS from "csstype";
import { theme } from "@/theme/theme";
import { css } from "@emotion/react";

/**
 * レスポンシブ用スタイルを生成する関数
 * Mixin内でのみ使用する
 * @param propaty CSSプロパティ名（キャメルケースで渡す）
 * @param sm breakpoint.sm用のスタイル
 * @param md breakpoint.md用のスタイル
 * @returns ブレイクポイントごとのオブジェクトCSS
 */
export const createResponsiveStyle = (
  propaty: string,
  sm?: CSS.Properties,
  md?: CSS.Properties
) => {
  return css(
    sm != null && theme.breakpoint.sm({ [propaty]: sm }),
    md != null && theme.breakpoint.md({ [propaty]: md })
  );
};

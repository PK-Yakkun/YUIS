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
  propaty?: string | string[],
  sm?: CSS.Properties | string | number,
  md?: CSS.Properties | string | number
) => {
  if (typeof propaty === "string") {
    // propatyがstringの場合
    return css(
      sm != null && theme.breakpoint.sm({ [propaty]: sm }),
      md != null && theme.breakpoint.md({ [propaty]: md })
    );
  } else if (Array.isArray(propaty)) {
    // propatyが配列の場合
    return css(
      sm != null && theme.breakpoint.sm({ [propaty![0]]: sm }),
      theme.breakpoint.sm({ [propaty![1]]: sm }),
      md != null && theme.breakpoint.md({ [propaty![0]]: md }),
      theme.breakpoint.md({ [propaty![1]]: md })
    );
  } else {
    // あり得ない条件、処理の終了
    return;
  }
};

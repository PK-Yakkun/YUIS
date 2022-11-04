
<div align="center">
  <br>
  <img src="https://user-images.githubusercontent.com/77062779/199872993-53d9cbb7-87f7-4d84-8dd6-368de42e5883.svg" width="300px">
  <br>
</div>

# 🦄 YUISとは

React, Next.js環境下で『UIコンポーネントライブラリを構築するための』自作フレームワークです。

MUIライクにスタイリングを行うことを目的としており、下記のような記述でUIを構築する仕組みを提供しています。

※下記のようなコンポーネント群そのものを提供しているわけではないことにご注意ください

```tsx
<Box w={{ sm: "100px", md: "200px"}} py={ 4 } mb={ 6 }>
```

デザイン設計はAtomic Designを前提としており、デモとしてコンポーネント設計の参考になるよう、いくつかサンプルのUIを作成しています。

npmパッケージとしてUIライブラリを提供しているわけではなく、単なる設計思想です。

そのため、みなさまがYUISをもとにオリジナルのUIライブラリを構築することを前提としています。

サンプルページは下記リンクからご覧いただけます。

サンプルページ： https://yuis.vercel.app/

## 📚 導入手順

### 1-A. Next.jsまたはReactの環境がすでにある場合（TypeScript必須）

本リポジトリのsrc配下を丸ごとコピーしてソース群と置換していただければOKです。

### 1-B. Next.jsやReactのプロジェクトがまだない場合

下記コマンドを実行してプロジェクトを立ち上げます。

`{app-name}`部分は自由に入力してください。

```
npx create-next-app {app-name} --use-npm --ts
```

その後、pages, stylesを削除し本リポジトリのsrcを移植します。

### 2. 必要なパッケージをインストール

下記コマンドを実行し、ふたつのパッケージをインストールします。

```bash
npm i @emotion/react @emotion/styled
```

### 3. tsconfigでエイリアスの設定

import文で絶対パスを利用するため、`tsconfig.json`に下記を追記します。

```json
{
  "compilerOptions": {
    // 省略
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"]
    }
  },
 　　// 省略
}
```

以上です。

## 🗒 YUISの使い方

基本的にはあらかじめ定義されたMixinや型を利用し、独自にコンポーネントを定義していきます。

### 汎用的なdivをミニマムに構築する

冒頭にあったような、`w`というpropsをもって`width`を指定できる機能を持った`<Box>`コンポーネントを作成したい場合。

```tsx
import styled from "@emotion/styled";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";

export type BoxStyleProps = Partial<LayoutProps>

export const BoxStyled = styled.div<BoxStyleProps>(
  layoutMixin
);

export type BoxProps = BoxStyleProps & {
  children?: React.ReactNode;
};
export const Box = (props: BoxProps) => {
  return <BoxStyled {...props} />;
};
```

`layoutMixin`には`w`や`h`などのレイアウトに関するCSS Mixinが定義されており、それに必要な型が`LayoutProps`です。

それらを使いstyled-componentsを生成することで、簡単にpropsによりスタイリングが可能なコンポーネントになります。

あとはこれを応用していくだけで、たとえばborderも与えられるようにしたい場合は`borderMixin`とそれに対応する`BorderProps`をimportし、追加で与えればよいだけです。

### 実際に使用する

上記で作成した`<Box>`はこのように扱うことができます。

```tsx
<Box w="100px" maxW="800px" h="180px" >
  {contents}
</Box>
```

### padding, marginを与えたい

これらに必要なものは`spaceMixin`にまとめられています。`SpaceProps`を合わせてstyled-componentsに渡します。

```tsx
import styled from "@emotion/styled";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";

export type BoxStyleProps = Partial<SpaceProps>;

export const BoxStyled = styled.div<BoxStyleProps>(spaceMixin);

export type BoxProps = BoxStyleProps & {
  children?: React.ReactNode;
};
export const Box = (props: BoxProps) => {
  return <BoxStyled {...props} />;
};
```

#### 実際に使用する

使用時、spaceに関しては特殊な指定ができます。

```tsx
<Box py="20px" mb={4} >
```

`py`では`padding-top`,`padding-bottom`に20pxを指定しています。

`mb`では`margin-bottom`に24pxを指定しています。

24という値はnumber型で渡された`4`を6倍した処理結果であり、6倍という数値は`space.ts`内に定義してあります。

渡された値がstring型かnumber型かで判別し、number型であれば6倍した数値をpxとし、CSSに変換されます。

基本設計として6の倍数で余白を取るようにしているため、それを改修したい場合は`space.ts`内の値を変更することでカスタマイズすることができます。

### レスポンシブに対応する

オブジェクトで値を渡すことでスマホ用とPC用のスタイルを一度に指定することができます。
デフォルトではブレイクポイントは900pxに指定されています。

```tsx
<Box w={{ sm: "100px", md: "200px"}} >
  {contents}
</Box>
```

```tsx
<Box p={{ sm: 4, md: 8}} >
  {contents}
</Box>
```

```tsx
<Box m={{ sm: "15px", md: "30px"}} >
  {contents}
</Box>
```

#### ブレイクポイントをカスタマイズしたい

項目を増やすには`types/responsive.d.ts`に追加します。
たとえば、`lg`などを加えてさらに大きなディスプレイに対応したい場合などです。

```ts
// w, h, などのCSS用propsが受け付けるレスポンシブ用のオブジェクトの型
export type BreakPointProps = {
  sm?: CSS.Properties;
  md?: CSS.Properties;
};
```

ブレイクポイントの数値を変更したい場合は`theme/settings/breakpoints.ts`を変更します。

```ts
import { css } from "@emotion/react";

export const breakpoints = {
  sm: (sm: any) =>
    sm != null && css({ "@media (max-width: 899px)": sm }),
  md: (md: any) => md != null && css({ "@media (min-width: 899px)": md }),
};
```

`@media (max-width: 899px)`の数値を変更すればブレイクポイントが変わります。

### Themeで定義した色を適応したい

styled-components内では引数としてthemeを取ることができます。

最大の注意点は、`theme.ts`をimportしてはいけないという点です。

`styled()`の中でthemeを受け取ると自動的にグローバルに定義されているthemeから値を参照できるように、すでに型定義と`_app.tsx`での読み込みを行なっています。

Typographyを例に見ます。

```tsx
export const TypographyStyled = styled.span<TypographyProps>(
  ({ theme }) => `color: ${theme.color.typography};`,
)
```

こうすることでTypographyはデフォルトで`theme.color.typography`に定義されたカラーコードが代入され、テーマ切り替えを行なった際も切り替え先のカラーコードに動的に変更されます。

前述したように、このとき`theme.ts`をimportする必要はありません。

if文やswitch文と組み合わせることで、propsによるテーマカラーの出し分けも実装できます。

### Themeをカスタマイズする

`theme/theme.ts`にまとめられています。

各設定ファイルは`theme/settings`配下にあるのでそこで値を追加・変更することができます。

```
import { palette, nightPalette } from "./settings/palettes";
import { fonts } from "./settings/fonts";
import { breakpoints } from "./settings/breakpoints";
import { spacings } from "./settings/spacings";

export const theme = {
  color: palette,
  font: fonts,
  breakpoint: breakpoints,
  spacing: spacings,
};

export const nightTheme = {
  color: nightPalette,
  font: fonts,
  breakpoint: breakpoints,
  spacing: spacings,
};
```

### Themeを切り替える

サンプルで用意している`ThemeToggle.tsx`を参考にしてください。

useContextを利用し、グローバルステートを切り替えることで`<ThemeProvider>`に渡すthemeを切り替えています。

```tsx
import { Box } from "@/components/atoms/Box/Box";
import { Toggle } from "@/components/molecules/Toggle/Toggle";
import { ThemeContext } from "@/lib/store/theme";
import { useContext } from "react";

export const ThemeToggle = () => {
  const { isNightMode, setIsNightMode } = useContext(ThemeContext);
  return (
    <Box onClick={() => setIsNightMode(!isNightMode)}>
      <Toggle />
    </Box>
  );
};
```

`<ThemeProvider>`の定義元は`_app.tsx`になります。

## 🎨 Atomic Designについて

下記で語っているのでコンポーネント設計の参考になれば幸いです。

Zenn: https://zenn.dev/pk_yakkun/articles/54a8fcbcc0195e#%F0%9F%8E%A8-atomic-design%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6

import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Counter } from "@/components/organisms/Counter";
import { ThemeToggle } from "@/components/organisms/ThemeToggle";
import { NormalTemp } from "@/components/templetes/NormalTemp";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <NormalTemp>
      <Typography variant="title" textAlign="center" mb={2}>
        YUIS
      </Typography>
      <Typography variant="h2" textAlign="center" mb={12}>
        - Yakkun UI System -
      </Typography>
      <Typography variant="h3" mb={3}>
        YUISとは
      </Typography>
      <Typography variant="body" mb={8}>
        React,
        Next.js環境下でUIコンポーネントライブラリを構築するための自作フレームワークです。
        <br />
        このページもYUISを用いて作成されており、おもな機能のサンプルを載せています。
        <br />
        詳細は下記リポジトリのREADME.mdをご覧ください。
      </Typography>
      <Stack justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h3">テーマの切り替え</Typography>
        <ThemeToggle />
      </Stack>
      <Typography variant="body" mb={8}>
        右上のトグルスイッチでテーマを切り替えることができます。
      </Typography>
      <Typography variant="h3" mb={3}>
        レスポンシブ
      </Typography>
      <Typography variant="body" mb={8}>
        画面幅を変更することでPC/SP用のレイアウトが動的に変更されます。
      </Typography>
      <Typography variant="h3" mb={3}>
        複合的なコンポーネント
      </Typography>
      <Typography variant="body" mb={3}>
        サンプルで作成したカウンターです。
        <br />
        正と負の上限は10で、それぞれMAXに達するとボタンが非活性になります。
      </Typography>
      <Counter />
    </NormalTemp>
  );
};

export default Home;

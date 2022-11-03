import { ExternalLinkIcon } from "@/components/atoms/Icons/ExternalLinkIcon";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Counter } from "@/components/organisms/Counter/Counter";
import { ThemeToggle } from "@/components/organisms/ThemeToggle/ThemeToggle";
import { NormalTemp } from "@/components/templetes/NormalTemp/NormalTemp";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <NormalTemp>
      <Stack justifyContent="center" mb={2} pr={1}>
        <Image src="/images/logo_yuis.svg" width={220} height={80} alt="YUIS" />
      </Stack>
      <Typography variant="h2" textAlign="center" mb={12}>
        - Yakkun UI System -
      </Typography>
      <Typography variant="h3" mb={3}>
        YUISとは
      </Typography>
      <Typography variant="body">
        React,
        Next.js環境下でUIコンポーネントライブラリを構築するための自作フレームワークです。
        <br />
        このページもYUISを用いて作成されており、おもな機能のサンプルを載せています。
        <br />
        詳細は下記リポジトリのREADMEをご覧ください。
      </Typography>
      <Stack mb={8}>
        <Typography mr={1}>Github:</Typography>
        <Typography color="primary">
          <Stack alignItems="center" gap="4px">
            <a href="https://github.com/PK-Yakkun/YUIS" target="blank">
              YUIS
            </a>
            <ExternalLinkIcon fill="primary" viewBox="0 0 24 24" width="18px" />
          </Stack>
        </Typography>
      </Stack>

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
        正と負の上限はそれぞれ10で、MAXに達すると該当するボタンが非活性になります。
        <br />
        機能をもつ複合的なコンポーネントは、Atomic Designの理解に最適です。
      </Typography>
      <Counter />
    </NormalTemp>
  );
};

export default Home;

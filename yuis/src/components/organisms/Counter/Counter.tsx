import { useState } from "react";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { CountButton } from "@/components/molecules/CountButton/CountButton";
import styled from "@emotion/styled";

export const CounterStyled = styled.div(
  ({ theme }) => `border: 1px solid${theme.color.primary};`,
  { maxWidth: "520px", borderRadius: "12px", margin: "0 auto" }
);

export const Counter = () => {
  // カウンターに表示する数字 初期値は0
  const [count, setCount] = useState<number>(0);

  return (
    <CounterStyled>
      <Stack
        justifyContent="flex-end"
        alignItems="center"
        py={{ sm: 4, md: 6 }}
        px={{ sm: 7, md: 10 }}
      >
        <Typography
          textAlign="center"
          fontSize={{ sm: "58px", md: "100px" }}
          lineHeight="1"
          mr={{ sm: 3, md: 6 }}
        >
          {count}
        </Typography>
        <Stack justifyContent="center" alignItems="center" gap="12px">
          <CountButton type="minus" count={count} setCount={setCount} />
          <CountButton type="plus" count={count} setCount={setCount} />
        </Stack>
      </Stack>
    </CounterStyled>
  );
};

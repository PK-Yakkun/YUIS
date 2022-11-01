import { useState } from "react";
import { Stack } from "../atoms/Stack/Stack";
import { Typography } from "../atoms/Typography/Typography";
import { CountButton } from "../molecules/CountButton";

export const Counter = () => {
  // カウンターに表示する数字 初期値は0
  const [count, setCount] = useState<number>(0);

  return (
    <Stack
      maxW="600px"
      justifyContent="center"
      alignItems="center"
      border="1px solid #8e8e8e"
      borderRadius="12px"
      p={6}
      mx="auto"
    >
      <Typography textAlign="center" fontSize="140px" lineHeight="1" mr={6}>
        {count}
      </Typography>
      <Stack justifyContent="center" alignItems="center" gap="12px">
        <CountButton type="minus" count={count} setCount={setCount} />
        <CountButton type="plus" count={count} setCount={setCount} />
      </Stack>
    </Stack>
  );
};

import { Typography } from "@/components/atoms/Typography/Typography";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Box } from "@/components/atoms/Box/Box";

export const Footer = () => {
  return (
    <Box bgColor="secondary">
      <Stack justifyContent="center" py={1}>
        <Typography variant="caption">©︎ development by Yakkun.</Typography>
      </Stack>
    </Box>
  );
};

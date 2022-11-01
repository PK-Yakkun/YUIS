import { Box } from "@/components/atoms/Box/Box";
import styled from "@emotion/styled";

export const WrapperStyled = styled.div(
  ({ theme }) => `background: ${theme.color.body};`
);

export type NormalTempProps = {
  children: React.ReactNode;
};

export const NormalTemp = ({ children }: NormalTempProps) => {
  return (
    <WrapperStyled>
      <Box
        maxW="1000px"
        mx="auto"
        py={{ sm: 10, md: 14 }}
        px={{ sm: 4, md: 8 }}
      >
        {children}
      </Box>
    </WrapperStyled>
  );
};

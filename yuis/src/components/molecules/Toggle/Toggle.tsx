import { Button } from "@/components/atoms/Button/Button";
import { Box } from "@/components/atoms/Box/Box";
import { Stack } from "@/components/atoms/Stack/Stack";
import { useState } from "react";

export const Toggle = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <Button
      w="56px"
      h="30px"
      p={1}
      bgColor={isActive ? "primary" : "typography"}
      borderRadius="50px"
      onClick={() => setIsActive(!isActive)}
    >
      <Stack justifyContent={isActive ? "flex-start" : "flex-end"}>
        <Box w="18px" h="18px" bg="#fff" borderRadius="50px" />
      </Stack>
    </Button>
  );
};

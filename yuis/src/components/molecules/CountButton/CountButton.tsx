import { Button } from "@/components/atoms/Button/Button";
import { Dispatch, SetStateAction, useEffect } from "react";
import { PlusIcon } from "@/components/atoms/Icons/PlusIcon";
import { MinusIcon } from "@/components/atoms/Icons/MinusIcon";

export type CountButtonProps = {
  type: "plus" | "minus";
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CountButton = ({ type, count, setCount }: CountButtonProps) => {
  // typeが"plus"のときtrue
  const isPuls = type === "plus";

  // countの値が20になるとtrue
  const isCountUpStop = count >= 10;

  // countの値が-20になるとtrue
  const isCountDownStop = count <= -10;

  // ボタン押下時、countをset関数で更新する
  const handleClick = () => {
    isPuls ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <Button
      bgColor="primary"
      borderRadius={isPuls ? "6px 26px 26px 6px" : "26px 6px 6px 26px"}
      w={{ sm: "60px", md: "80px" }}
      h={{ sm: "60px", md: "80px" }}
      p={3}
      onClick={() => handleClick()}
      isDisable={isPuls ? isCountUpStop : isCountDownStop}
    >
      {isPuls ? (
        <PlusIcon fill="#fff" viewBox="0 0 24 24" />
      ) : (
        <MinusIcon fill="#fff" viewBox="0 0 24 24" />
      )}
    </Button>
  );
};

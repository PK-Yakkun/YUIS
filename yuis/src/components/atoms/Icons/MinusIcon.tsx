import { SvgWrapper, SvgWrapperProps } from "./SvgWrapper";

export const MinusIcon = (props: SvgWrapperProps) => {
  return (
    <SvgWrapper {...props} viewBox={props.viewBox}>
      <path d="M18 11h-12c-1.104 0-2 0.896-2 2s0.896 2 2 2h12c1.104 0 2-0.896 2-2s-0.896-2-2-2z" />{" "}
    </SvgWrapper>
  );
};

import { SvgWrapper, SvgWrapperProps } from "./SvgWrapper";

export const PlusIcon = (props: SvgWrapperProps) => {
  return (
    <SvgWrapper {...props} viewBox={props.viewBox}>
      <path d="M18 10h-4v-4c0-1.104-0.896-2-2-2s-2 0.896-2 2l0.071 4h-4.071c-1.104 0-2 0.896-2 2s0.896 2 2 2l4.071-0.071-0.071 4.071c0 1.104 0.896 2 2 2s2-0.896 2-2v-4.071l4 0.071c1.104 0 2-0.896 2-2s-0.896-2-2-2z" />
    </SvgWrapper>
  );
};

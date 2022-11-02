import * as CSS from "csstype";

export type AllEventType = Partial<EventClickType> &
  Partial<EventChangeType> &
  Partial<EventKeypressType> &
  Partial<EventBlurType> &
  Partial<EventFocusType> &
  Partial<EventClickDivType> &
  Partial<EventSubmitType>;

export type EventClickType = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export type EventChangeType = {
  onChange: (event: React.ChangeEvent<HTMLElement, MouseEvent>) => void;
};
export type EventKeypressType = {
  onkeypress: (event: React.KeyboardEvent<HTMLElement>) => void;
};
export type EventBlurType = {
  onBlur: (event: React.FocusEvent<HTMLElement>) => void;
};

export type EventFocusType = {
  onFocus: (event: React.FocusEvent<HTMLElement>) => void;
};

export type EventClickDivType = {
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type EventSubmitType = {
  onSubmit: (event: React.FormEvent<HTMLFormElement, MouseEvent>) => void;
};

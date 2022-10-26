import * as CSS from "csstype";

/**
 * All except EventSubmitType
 */
export type AllEventType = Partial<EventClickType> &
  Partial<EventChangeType> &
  Partial<EventKeypressType> &
  Partial<EventBlurType> &
  Partial<EventFocusType> &
  Partial<EventClickDivType>;

export type EventClickType = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export type EventChangeType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type EventKeypressType = {
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
export type EventBlurType = {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export type EventFocusType = {
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export type EventClickDivType = {
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type EventSubmitType = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

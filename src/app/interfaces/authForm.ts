import { MouseEvent } from 'react';

export interface IAnchorProps {
  text: string;
  clickHandler: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export interface IAuthFormContainerProps {
  setModal: () => void;
}

export interface IAuthFormValues {
  tel: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  email: string;
}

export type TAnchorText = 'Регистрация' | 'Отмена';

export type TMode = 'login' | 'registration' | 'password';

export interface IAuthFormProps {
  formFields: string[][];
  mode: TMode;
  anchorText: TAnchorText;
  toggleAnchorText: (event: MouseEvent<HTMLAnchorElement>) => void;
  submitClickHandler: (values: IAuthFormValues) => void;
}

export interface IFormItem {
  name: string;
  labelText: string;
  type: string;
  placeholder?: string;
}

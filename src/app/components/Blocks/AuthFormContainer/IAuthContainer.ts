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

import { IAuthFormValues } from '../components/Blocks/AuthFormContainer/IAuthContainer';

export let formFields: string[][] = [
  ['tel', 'Телефон', 'tel', '+7 777 777 77 77'],
  ['password', 'Пароль', 'password'],
  ['passwordConfirmation', 'Подтвердите пароль', 'password'],
  ['name', 'Имя', 'text'],
  ['email', 'Email', 'email'],
];

export const initialValues: IAuthFormValues = {
  tel: '',
  password: '',
  passwordConfirmation: '',
  name: '',
  email: '',
};

export const items = ['Меню', 'Контакты'];

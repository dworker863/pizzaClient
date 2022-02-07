import { IAuthFormValues } from '../components/Blocks/AuthFormContainer/IAuthContainer';
import { IAddressFormValues } from '../components/Sections/AddressModal/IAddressModal';

export let authFormFields: string[][] = [
  ['tel', 'Телефон', 'tel', '+7 777 777 77 77'],
  ['password', 'Пароль', 'password'],
  ['passwordConfirmation', 'Подтвердите пароль', 'password'],
  ['name', 'Имя', 'text'],
  ['email', 'Email', 'email'],
];

export let addressFormFields: string[][] = [
  ['street', 'Улица', 'text', 'Улица'],
  ['room', 'Квартира', 'text', 'Квартира'],
];

export const authInitialValues: IAuthFormValues = {
  tel: '',
  password: '',
  passwordConfirmation: '',
  name: '',
  email: '',
};

export const addressInitialValues: IAddressFormValues = {
  street: '',
  room: null,
};

export const items = ['Меню', 'Контакты'];

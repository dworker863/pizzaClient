import { ICategory } from './../interfaces/category';

export const categories: ICategory[] = [
  { title: 'Пицца', name: 'pizzas' },
  { title: 'Закуски', name: 'snacks' },
  { title: 'Салаты', name: 'salads' },
  { title: 'Десерты', name: 'desserts' },
  { title: 'Напитки', name: 'drinks' },
  { title: 'Горячее', name: 'hots' },
];

export let formFields: string[][] = [
  ['tel', 'Телефон', 'tel', '+7 777 777 77 77'],
  ['password', 'Пароль', 'password'],
  ['passwordConfirmation', 'Подтвердите пароль', 'password'],
  ['name', 'Имя', 'text'],
  ['email', 'Email', 'email'],
];

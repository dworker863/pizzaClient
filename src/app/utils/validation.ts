import * as Yup from 'yup';

const phoneRegExp = /^\+[1-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;

export const authValidation = Yup.object({
  tel: Yup.string()
    .matches(phoneRegExp, 'Некорректный номер телефона')
    .required('Укажите номер телефона'),
  password: Yup.string()
    .min(4, 'Пароль должен быть не меньше 4 символов')
    .required('Введите пароль'),
});

export const registrationValidation = Yup.object({
  tel: Yup.string()
    .matches(phoneRegExp, 'Некорректный номер телефона')
    .required('Укажите номер телефона'),
  name: Yup.string().required('Укажите имя'),
  email: Yup.string().email('Некорректный email').required('Введите email'),
});

export const passwordValidation = Yup.object({
  password: Yup.string()
    .min(4, 'Пароль должен быть не меньше 4 символов')
    .required('Введите пароль'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Подтвердите пароль'),
});

export const addressValidation = Yup.object({
  address: Yup.string().required('Укажите адрес'),
  room: Yup.number().required('Укажите номер дома или квартиры'),
});

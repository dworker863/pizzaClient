import { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLogin,
  getRegistration,
} from '../../redux/reducers/authReducer/auth';
import AuthForm from './AuthForm';

interface IAuthFormContainerProps {
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

const AuthFormContainer: FC<IAuthFormContainerProps> = ({ setModal }) => {
  const [registrationValues, setRegistrationValues] = useState({
    tel: '',
    password: '',
    name: '',
    email: '',
    role: 'User',
  });

  const [mode, setMode] = useState<TMode>('login');
  const [anchorText, setAnchorText] = useState<TAnchorText>('Регистрация');

  const dispatch = useDispatch();

  const toggleAnchorText = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setAnchorText(anchorText === 'Регистрация' ? 'Отмена' : 'Регистрация');
    setMode(anchorText === 'Регистрация' ? 'registration' : 'login');
  };

  const loginClickHandler = (tel: string, password: string): void => {
    dispatch(getLogin(tel, password));
    setModal();
  };

  const registrationClickHandler = (
    name: string,
    tel: string,
    email: string,
    password: string,
    role: string,
  ): void => {
    dispatch(getRegistration(name, tel, email, password, role));
    setModal();
  };

  const submitClickHandler = (values: IAuthFormValues) => {
    if (mode === 'login') {
      loginClickHandler(values.tel, values.password);
    } else if (mode === 'registration') {
      setRegistrationValues({
        ...registrationValues,
        name: values.name,
        tel: values.tel,
        email: values.email,
      });
      setMode('password');
    } else {
      setRegistrationValues({
        ...registrationValues,
        password: values.password,
      });
      registrationClickHandler(
        registrationValues.name,
        registrationValues.tel,
        registrationValues.email,
        registrationValues.password,
        registrationValues.role,
      );
    }
  };

  let formFields: string[][] = [
    ['tel', 'Телефон', 'tel', '+7 777 777 77 77'],
    ['password', 'Пароль', 'password'],
    ['passwordConfirmation', 'Подтвердите пароль', 'password'],
    ['name', 'Имя', 'text'],
    ['email', 'Email', 'email'],
  ];

  formFields = formFields.filter(([name, labelText, type]) =>
    mode === 'login'
      ? name !== 'email' &&
        name !== 'name' &&
        labelText !== 'Подтвердите пароль'
      : mode === 'registration'
      ? type !== 'password'
      : type === 'password',
  );

  return (
    <AuthForm
      formFields={formFields}
      mode={mode}
      anchorText={anchorText}
      toggleAnchorText={toggleAnchorText}
      submitClickHandler={submitClickHandler}
    />
  );
};

export default AuthFormContainer;

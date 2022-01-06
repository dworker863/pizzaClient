import { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLogin,
  getRegistration,
} from '../../redux/reducers/authReducer/auth';
import AuthForm from './AuthForm';

interface IAuthFormContainer {
  formFields: string[][];
}

export interface IAuthFormValues {
  tel: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  email: string;
}

export type TMode = 'login' | 'registration' | 'password';

const AuthFormContainer: FC<IAuthFormContainer> = ({ formFields }) => {
  const [registrationValues, setRegistrationValues] = useState({
    tel: '',
    password: '',
    name: '',
    email: '',
    role: 'User',
  });

  const [mode, setMode] = useState<TMode>('login');

  const dispatch = useDispatch();

  const changeModeHandler = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    if (mode === 'login') {
      setMode('registration');
    } else if (mode === 'registration') {
      setMode('password');
    } else {
      setMode('login');
    }
    console.log(mode);
  };

  const loginClickHandler = (tel: string, password: string): void => {
    dispatch(getLogin(tel, password));
  };

  const registrationClickHandler = (
    name: string,
    tel: string,
    email: string,
    password: string,
    role: string,
  ): void => {
    dispatch(getRegistration(name, tel, email, password, role));
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
      changeModeHandler={changeModeHandler}
      submitClickHandler={submitClickHandler}
    />
  );
};

export default AuthFormContainer;

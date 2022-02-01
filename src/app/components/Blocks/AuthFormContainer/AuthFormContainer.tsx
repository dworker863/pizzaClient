import { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLogin,
  getRegistration,
} from '../../../redux/reducers/authReducer/authReducer';
import { formFields } from '../../../utils/staticData';
import AuthForm from '../AuthForm/AuthForm';
import {
  IAuthFormContainerProps,
  IAuthFormValues,
  TAnchorText,
  TMode,
} from './IAuthContainer';

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

  const toggleAnchorText = (event: MouseEvent<HTMLAnchorElement>): void => {
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

  const submitClickHandler = (values: IAuthFormValues): void => {
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

  let fields = formFields.filter(([name, labelText, type]) =>
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
      formFields={fields}
      mode={mode}
      anchorText={anchorText}
      toggleAnchorText={toggleAnchorText}
      submitClickHandler={submitClickHandler}
    />
  );
};

export default AuthFormContainer;

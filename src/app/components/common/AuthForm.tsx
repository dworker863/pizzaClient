import { Form, Formik } from 'formik';
import { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLogin,
  getRegistration,
} from '../../redux/reducers/authReducer/auth';
import {
  authValidation,
  passwordValidation,
  registrationValidation,
} from '../../utils/validation';
import Button from '../Buttons/Button';
import { StyledAuthButtonsWrapper } from '../Modals/StyledAuth';
import Anchor from './Anchor';
import FormItem from './FormItem';

interface IAuthFormValues {
  tel: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  email: string;
}

interface IAuthFormProps {
  formFields: string[][];
}

const AuthForm: FC<IAuthFormProps> = ({ formFields }) => {
  const [registrationValues, setRegistrationValues] = useState({
    tel: '',
    password: '',
    name: '',
    email: '',
    role: 'User',
  });

  const [mode, setMode] = useState<'login' | 'registration' | 'password'>(
    'login',
  );

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
  console.log(mode);

  const registrationClickHandler = (
    name: string,
    tel: string,
    email: string,
    password: string,
    role: string,
  ): void => {
    dispatch(getRegistration(name, tel, email, password, role));
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

  const initialValues: IAuthFormValues = {
    tel: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        mode === 'login'
          ? authValidation
          : mode === 'registration'
          ? registrationValidation
          : passwordValidation
      }
      onSubmit={(values, { setSubmitting }) => {
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
        console.log(registrationValues);

        setSubmitting(false);
      }}
    >
      <Form>
        {formFields.map(([name, labelText, type, placeholder]) => (
          <FormItem
            name={name}
            labelText={labelText}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <Anchor
          text="Восстановить пароль"
          clickHandler={(event: MouseEvent<HTMLAnchorElement>): void =>
            console.log('Restore')
          }
        />
        <StyledAuthButtonsWrapper>
          <Anchor
            text={mode === 'login' ? 'Регистрация' : 'Отмена'}
            clickHandler={changeModeHandler}
          />
          <Button
            text={mode === 'login' ? 'Войти' : 'Продолжить'}
            type="submit"
          />
        </StyledAuthButtonsWrapper>
      </Form>
    </Formik>
  );
};

export default AuthForm;

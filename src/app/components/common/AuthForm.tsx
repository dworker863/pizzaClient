import { Form, Formik } from 'formik';
import { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLogin,
  getRegistration,
} from '../../redux/reducers/authReducer/auth';
import { authValidation } from '../../utils/validation';
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
  const [mode, setMode] = useState<
    'login' | 'registration' | 'registration continue' | null
  >('login');

  const dispatch = useDispatch();

  const changeModeHandler = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    if (mode === 'login') {
      setMode('registration');
    } else if (mode === 'registration') {
      setMode('registration continue');
    } else {
      setMode(null);
    }
  };

  const loginClickHandler = (tel: string, password: string): void => {
    dispatch(getLogin(tel, password));
  };

  const registrationClickHandler = (
    name: string,
    tel: string,
    email: string,
    password: string,
  ): void => {
    dispatch(getRegistration(name, tel, email, password));
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
      validationSchema={authValidation}
      onSubmit={(values, { setSubmitting }) => {
        if (mode === 'login') {
          loginClickHandler(values.tel, values.password);
        } else {
          registrationClickHandler(
            values.name,
            values.tel,
            values.email,
            values.password,
          );
        }
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
        {/* <button type="submit">Login</button> */}
        <StyledAuthButtonsWrapper>
          <Anchor
            text={mode === 'login' ? 'Регистрация' : 'Отмена'}
            clickHandler={changeModeHandler}
          />
          <Button
            text={mode === 'login' ? 'Войти' : 'Продолжить'}
            type={mode === 'registration' ? 'button' : 'submit'}
          />
        </StyledAuthButtonsWrapper>
      </Form>
    </Formik>
  );
};

export default AuthForm;

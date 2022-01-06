import { Form, Formik } from 'formik';
import { FC, MouseEvent } from 'react';
import {} from '../../redux/reducers/authReducer/auth';
import {
  authValidation,
  passwordValidation,
  registrationValidation,
} from '../../utils/validation';
import Button from '../Buttons/Button';
import { StyledAuthButtonsWrapper } from '../Modals/StyledAuth';
import Anchor from './Anchor';
import { IAuthFormValues, TMode } from './AuthFormContainer';
import FormItem from './FormItem';

interface IAuthFormProps {
  formFields: string[][];
  mode: TMode;
  changeModeHandler: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  submitClickHandler: (values: IAuthFormValues) => void;
}

const AuthForm: FC<IAuthFormProps> = ({
  formFields,
  mode,
  changeModeHandler,
  submitClickHandler,
}) => {
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
        submitClickHandler(values);
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

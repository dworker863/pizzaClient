import { Form, Formik } from 'formik';
import { FC } from 'react';
import {
  authValidation,
  passwordValidation,
  registrationValidation,
} from '../../../utils/validation';
import Button from '../../Elements/Button/Button';
import Anchor from '../../Elements/Anchor/Anchor';
import { IAuthFormProps } from './IAuthForm';
import { StyledAuthButtonsWrapper } from './StyledAuthForm';
import FormItem from '../../Elements/FormItem/FormItem';
import { initialValues } from '../../../utils/staticData';

const AuthForm: FC<IAuthFormProps> = ({
  formFields,
  mode,
  anchorText,
  toggleAnchorText,
  submitClickHandler,
}) => {
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
        <StyledAuthButtonsWrapper>
          <Anchor text={anchorText} clickHandler={toggleAnchorText} />
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

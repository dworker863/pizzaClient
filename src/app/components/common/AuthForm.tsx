import { Form, Formik } from 'formik';
import { FC } from 'react';
import { authValidation } from '../../utils/validation';
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
        console.log(values);
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
      </Form>
    </Formik>
  );
};

export default AuthForm;

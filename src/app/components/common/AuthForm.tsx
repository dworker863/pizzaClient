import { Form, Formik } from 'formik';
import { FC } from 'react';
import FormItem from './FormItem';

interface IAuthFormValues {
  tel: string;
  password: string;
  repeatPassword: string;
  name: string;
  email: string;
}

interface IAuthFormProps {
  formFields: string[][];
}

const AuthForm: FC<IAuthFormProps> = ({ formFields }) => {
  const initialValues: IAuthFormValues = {
    tel: '+7',
    password: '',
    repeatPassword: '',
    name: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      <Form>
        {formFields.map(([name, labelText, type]) => (
          <FormItem name={name} labelText={labelText} type={type} />
        ))}
      </Form>
    </Formik>
  );
};

export default AuthForm;

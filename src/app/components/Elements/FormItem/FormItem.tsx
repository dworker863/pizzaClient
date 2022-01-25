import { ErrorMessage } from 'formik';
import { FC } from 'react';
import { IFormItem } from './IFormItem';
import {
  StyledErrorMessage,
  StyledField,
  StyledFormItem,
  StyledLabel,
} from './StyledFormItem';

const FormItem: FC<IFormItem> = ({ name, labelText, type, placeholder }) => {
  return (
    <StyledFormItem>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledField type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name}>
        {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      </ErrorMessage>
    </StyledFormItem>
  );
};

export default FormItem;

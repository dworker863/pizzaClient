import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledField = styled(Field)`
  ${tw`
    rounded-lg    
    mt-1
    `}

  width: 100%;
  height: 49px;
  padding: 15px;
  color: #70544f;
  background-color: #f8f8f8;
`;

const StyledErrorMessage = styled.div`
  ${tw`
    text-red-600
  `}
`;

const StyledFormItem = styled.div`
  ${tw`
    mb-5
  `}
`;

const StyledLabel = styled.label`
  color: #a69895;
`;

interface IFormItem {
  name: string;
  labelText: string;
  type: string;
  placeholder?: string;
}

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

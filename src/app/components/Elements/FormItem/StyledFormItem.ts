import { Field } from 'formik';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledField = styled(Field)`
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

export const StyledErrorMessage = styled.div`
  ${tw`
    text-red-600
  `}
`;

export const StyledFormItem = styled.div`
  ${tw`
    mb-5
  `}
`;

export const StyledLabel = styled.label`
  color: #a69895;
`;

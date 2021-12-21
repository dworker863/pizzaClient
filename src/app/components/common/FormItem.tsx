import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFormItem = styled.div`
  ${tw`
    mb-5
  `}
`;

const StyledLabel = styled.label`
  color: #a69895;
`;

const StyledInput = styled.input`
  ${tw`
    rounded-lg    
    mt-1
    `}

  width: 100%;
  height: 49px;
  color: #70544f;
  background-color: #f8f8f8;
`;

interface IFormItem {
  id: string;
  labelText: string;
  type: string;
}

const FormItem: FC<IFormItem> = ({ id, labelText, type }) => {
  return (
    <StyledFormItem>
      <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
      <StyledInput type={type} id={id} />
    </StyledFormItem>
  );
};

export default FormItem;

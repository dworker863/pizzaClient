import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledButton = styled.button`
  &:hover {
    &:before {
      transform: scale(1.083333333333333);
    }
  }

  &.inverse {
    background-color: #e0f7f5;
    color: #059689;
  }

  ${tw`
    relative
    ml-10
    py-3
    px-6
    rounded-3xl
    text-sm
    font-bold
    text-white
    bg-green-600
  `}

  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: 0.08rem;
`;

interface ButtonProps {
  text: string;
  inverse: boolean;
}

const Button: FC<ButtonProps> = ({ text, inverse }) => {
  return (
    <StyledButton className={inverse ? 'inverse' : ''}>{text}</StyledButton>
  );
};

export default Button;

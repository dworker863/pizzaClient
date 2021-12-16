import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledButton = styled.button`
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

  &:before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 95px;
    height: 44px;
    border-radius: 24px;
    background-color: rgba(5, 150, 105);
    transition: all 0.2s;
  }

  &:hover {
    &:before {
      transform: scale(1.083333333333333);
    }
  }

  &.inverse {
    background-color: #e0f7f5;
    color: #059689;

    &:before {
      background-color: #e0f7f5;
    }
  }
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

import { FC, MouseEvent } from 'react';
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
    `}

  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: 0.08rem;
  background-color: #50a684;

  &:before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-color: inherit;
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
  inverse?: boolean;
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ text, clickHandler, inverse = false }) => {
  return (
    <StyledButton className={inverse ? 'inverse' : ''} onClick={clickHandler}>
      {text}
    </StyledButton>
  );
};

export default Button;

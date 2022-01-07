import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface IStyledButtonProps {
  inverse?: boolean;
  login?: boolean;
  address?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  ${tw`
    z-10
    relative
    py-3
    px-6
    rounded-3xl
    text-sm
    text-white
    font-bold
    `}

  background-color: ${(props) => props.theme.colors.primary};

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

  ${({ login }) =>
    login &&
    css`
      font-family: Montserrat, sans-serif;
      letter-spacing: 0.08rem;
      color: ${(props) => props.theme.colors.grey};
    `}

  ${({ address }) =>
    address &&
    css`
      padding-left: 5rem;
      padding-right: 5rem;
      font-size: 16px;
      line-height: 24px;
    `}

  ${({ inverse }) =>
    inverse &&
    css`
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secondary};
    `}
`;

export default StyledButton;

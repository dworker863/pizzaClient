import { IStyledMenu } from './IMenu';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const StyledItem = styled.li`
  ${tw`
    mt-auto
    font-semibold
    mr-4
    
  `}

  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  letter-spacing: 0.08rem;
  color: ${(props) => props.theme.colors.brown};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &:last-child {
    margin-right: 0;
  }

  & img {
    margin: 0 auto;
  }
`;

export const StyledMenu = styled.ul<IStyledMenu>`
  ${tw`
    flex
    w-full
  `}

  ${({ around }) =>
    around &&
    css`
      ${tw`
        justify-around
        mt-10
        p-3
        rounded-xl
      `}

      background-color: #fff;

      & > li {
        font-size: 18px;
      }
    `}
`;

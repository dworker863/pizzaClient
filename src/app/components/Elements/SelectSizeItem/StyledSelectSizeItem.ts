import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledSelectSizeItemProps } from './ISelectSizeItem';

export const StyledSelectSizeItem = styled.div<IStyledSelectSizeItemProps>`
  ${tw`
    inline-block
    rounded-full
    p-3
    text-sm
  `}

  cursor: pointer;
  color: ${(props) => props.theme.colors.brown};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    `}
`;

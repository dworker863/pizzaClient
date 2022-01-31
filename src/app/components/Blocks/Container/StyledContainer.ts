import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledContainerProps } from './IContainer';

export const StyledContainer = styled.div<IStyledContainerProps>`
  ${tw`
    relative
    flex
    flex-wrap
    flex-row
    container
    mx-auto
    px-5
    justify-between
    lg:px-14
    xl:flex-nowrap
    xl:flex-row-reverse
  `}

  ${({ reverse }) =>
    reverse &&
    css`
      ${tw`
        flex-row-reverse
      `}
    `}
`;

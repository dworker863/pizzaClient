import { IToggleButton } from './IToggleButton';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const StyledToggleButton = styled.div<IToggleButton>`
  ${tw`
    w-0
    h-0
    mt-auto
    mb-auto
  `}

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${(props) => props.theme.colors.brown};

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `};
`;

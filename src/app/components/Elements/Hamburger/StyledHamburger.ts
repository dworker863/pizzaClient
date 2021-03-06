import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const HamburgerWrapper = styled.div`
  ${tw`
    cursor-pointer
    `}

  padding-top: 26px;

  &:hover {
    div {
      &:before,
      &:after {
        background-color: ${(props) => props.theme.colors.primary};
      }
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const StyledHamburger = styled.div<IStyledActiveComponent>`
  ${tw`
    z-30 
    relative
    w-6
    h-1
    bg-gray-400
    transition-all
  `}

  &:before, &:after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.grey};
    transition: all 0.15s;
  }

  &:before {
    top: -7px;
  }

  &:after {
    top: 7px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & {
        transform: rotate(45deg);

        &:before {
          display: none;
        }

        &:after {
          top: 0;
          transform: rotate(-90deg);
        }
      }
    `}
`;

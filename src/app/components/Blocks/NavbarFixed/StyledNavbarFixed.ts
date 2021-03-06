import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const StyledNavbarFixed = styled.nav<IStyledActiveComponent>`
  ${tw`
    fixed
    flex
    w-full
  `}

  z-index: 100;
  /* display: none; */
  top: -120px;
  opacity: 0;
  background-color: #fff;
  transition: all 0.3s;

  ${({ isActive }) =>
    isActive &&
    css`
      top: 0px;
      opacity: 1;

      & ul {
        width: 80%;

        @media (max-width: 768px) {
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        overflow: scroll;
      }
    `}
`;

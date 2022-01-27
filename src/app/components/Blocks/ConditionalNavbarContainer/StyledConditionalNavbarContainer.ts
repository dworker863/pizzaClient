import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const StyledNavbar = styled.nav`
  ${tw`
    z-20
    cursor-pointer
    ml-auto
    mr-5
    mt-2
  `}
`;

export const StyledNavbarMobileWrapper = styled.nav<IStyledActiveComponent>`
  ${tw`
    z-20
    absolute
    top-0
    w-screen
    h-screen
    p-8
    pt-24
    rounded-lg
    bg-white
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  transition: all 1s ease-in-out;
  ${({ isActive }) =>
    isActive
      ? css`
          transform: translate(0);
        `
      : css`
          transform: translate(90vh);
        `}
`;

export const StyledNavbarTabletWrapper = styled.nav`
  ${tw`
    z-20
    absolute
    right-0
    w-96
    p-8
    pt-24
    rounded-lg
    bg-white
    lg:right-10
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
`;

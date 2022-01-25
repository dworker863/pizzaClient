import styled from 'styled-components';
import tw from 'twin.macro';
import { IStyledNavbarMobileWrapper } from './IConditionalNavbarContainer';

export const StyledNavbar = styled.nav`
  ${tw`
    cursor-pointer
    ml-auto
    mr-5
    mt-2
  `}
`;

export const StyledNavbarMobileWrapper = styled.nav<IStyledNavbarMobileWrapper>`
  ${tw`
    z-10
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
  right: ${({ isActive }) => (isActive ? 0 : '-100vh')};
`;

export const StyledNavbarTabletWrapper = styled.nav`
  ${tw`
    z-10
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

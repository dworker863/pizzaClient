import styled from 'styled-components';
import tw from 'twin.macro';
import { IStyledNavbarMobileWrapper } from '../../interfaces/navbar';

export const StyledNavbar = styled.nav`
  ${tw`
    cursor-pointer
    ml-auto
    mr-5
    mt-2
  `}
`;

export const StyledMenu = styled.ul`
  ${tw`
    inline-block
    list-none
  `}
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

export const StyledNavbarTabletMobile = styled.ul`
  ${tw`
    grid
    grid-rows-3
    grid-cols-1
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

export const StyledText = styled.p`
  ${tw`
    font-sans
    text-sm
    font-normal
  `}

  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledTel = styled.p`
  ${tw`
    text-lg
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.brown};
`;

export const StyledTelIcon = styled.span`
  ${tw`
    flex
    w-12
    h-12
    rounded-full
  `}

  font-family: Montserrat, sans-serif;
  border: 1px solid ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.brown};
`;

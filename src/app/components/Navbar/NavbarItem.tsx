import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledNavbarItem = styled.li`
  ${tw`
    flex
    items-center
    justify-between
    py-4
    px-2
    border-t
    border-gray-200
  `}

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

interface NavbarItemProps {
  children?: ReactNode;
}

const NavbarItem: FC<NavbarItemProps> = ({ children }) => {
  return <StyledNavbarItem>{children}</StyledNavbarItem>;
};

export default NavbarItem;

import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavbarItemProps } from '../../interfaces/navbar';

const StyledNavbarItem = styled.li`
  ${tw`
    flex
    items-center
    justify-between
    py-4
    px-2
    border-t
  `}

  border-color: rgba(${(props) => props.theme.colors.lightGrey}, .5);

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

const NavbarItem: FC<NavbarItemProps> = ({ children }) => {
  return <StyledNavbarItem>{children}</StyledNavbarItem>;
};

export default NavbarItem;

import { FC } from 'react';
import { INavbarItemProps } from './INavbarItem';
import { StyledNavbarItem } from './StyledNavbarItem';

const NavbarItem: FC<INavbarItemProps> = ({ children }) => {
  return <StyledNavbarItem>{children}</StyledNavbarItem>;
};

export default NavbarItem;

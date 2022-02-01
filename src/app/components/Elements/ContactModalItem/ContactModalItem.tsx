import { FC } from 'react';
import { IContactModalItemProps } from './IContactModal';
import { StyledContactModalItem } from './StyledContactModalItem';

const NavbarItem: FC<IContactModalItemProps> = ({ children }) => {
  return <StyledContactModalItem>{children}</StyledContactModalItem>;
};

export default NavbarItem;

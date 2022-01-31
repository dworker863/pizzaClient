import { FC } from 'react';
import { IMenu } from './IMenu';
import { StyledItem, StyledMenu } from './StyledMenu';

const Menu: FC<IMenu> = ({ items, around }) => {
  return (
    <StyledMenu around={around}>
      {items.map((item) => (
        <StyledItem>{typeof item === 'string' ? item : item.title}</StyledItem>
      ))}
    </StyledMenu>
  );
};

export default Menu;

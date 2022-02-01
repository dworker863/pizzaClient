import { FC } from 'react';
import { IMenu } from './IMenu';
import { StyledItem, StyledMenu } from './StyledMenu';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const Menu: FC<IMenu> = ({ items, around }) => {
  return (
    <StyledMenu around={around}>
      {items.map((item) => (
        <StyledItem>
          {item.image && <img src={item.image} alt={item.title} />}
          <Link to={item.title} spy={true} smooth={true} duration={500}>
            {typeof item === 'string' ? item : item.title}
          </Link>
        </StyledItem>
      ))}
    </StyledMenu>
  );
};

export default Menu;

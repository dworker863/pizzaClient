import { FC } from 'react';
import { IMenu } from './INavbar';
import { StyledNavbarItem, StyledMenu, StyledNavbar } from './StyledNavbar';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const Navbar: FC<IMenu> = ({ items }) => {
  return (
    <StyledNavbar>
      <StyledMenu>
        {items.map((item) => (
          <StyledNavbarItem>
            {item.image && <img src={item.image} alt={item.title} />}
            <Link to={item.title} spy={true} smooth={true} duration={500}>
              {typeof item === 'string' ? item : item.title}
            </Link>
          </StyledNavbarItem>
        ))}
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;

import { FC } from 'react';
import { INavbar } from './INavbar';
import { StyledNavbarItem, StyledMenu, StyledNavbar } from './StyledNavbar';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const Navbar: FC<INavbar> = ({ items }) => {
  return (
    <StyledNavbar>
      <StyledMenu>
        {items.map((item) => (
          <StyledNavbarItem>
            <Link
              activeClass="active"
              to={item.title}
              spy={true}
              smooth={true}
              duration={500}
            >
              {item.image && <img src={item.image} alt={item.title} />}
              {typeof item === 'string' ? item : item.title}
            </Link>
          </StyledNavbarItem>
        ))}
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;

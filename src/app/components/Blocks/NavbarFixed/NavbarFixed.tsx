import { FC } from 'react';
import LogoWrapper from '../../Elements/Logo/Logo';
import { StyledMenu, StyledNavbarItem } from '../Navbar/StyledNavbar';
import { INavbarFixed } from './INavbarFixed';
import { StyledNavbarFixed } from './StyledNavbarFixed';
import Scroll from 'react-scroll';
import Container from '../Container/Container';

const Link = Scroll.Link;

const NavbarFixed: FC<INavbarFixed> = ({ items, position }) => {
  return (
    <StyledNavbarFixed isActive={position > 220 ? true : false}>
      <Container>
        <LogoWrapper />
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
      </Container>
    </StyledNavbarFixed>
  );
};

export default NavbarFixed;

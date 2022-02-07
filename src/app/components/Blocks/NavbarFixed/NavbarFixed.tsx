import { FC } from 'react';
import LogoWrapper from '../../Elements/Logo/Logo';
import { StyledMenu, StyledNavbarItem } from '../Navbar/StyledNavbar';
import { INavbarFixed } from './INavbarFixed';
import { StyledNavbarFixed } from './StyledNavbarFixed';
import Scroll from 'react-scroll';
import Container from '../Container/Container';
import { useMediaQuery } from 'react-responsive';

const Link = Scroll.Link;

const NavbarFixed: FC<INavbarFixed> = ({ items, isActive }) => {
  const isTabletOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <StyledNavbarFixed isActive={isActive ? true : false}>
      <Container reverse>
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
        {isTabletOrLaptop && (
          <LogoWrapper clickHandler={Scroll.animateScroll.scrollToTop} />
        )}
      </Container>
    </StyledNavbarFixed>
  );
};

export default NavbarFixed;

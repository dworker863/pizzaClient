import { FC, useState, MouseEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import AddressButton from '../Buttons/AddressButton';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger';
import NavbarMobile from '../Navbar/NavbarMobile';
import Navbar from '../Navbar/Navbar';
import NavbarTablet from '../Navbar/NavbarTablet';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    sethamburgerActive(!hamburgerActive);
  };

  return (
    <StyledTopLine>
      {isMobile && <NavbarMobile isActive={hamburgerActive ? true : false} />}
      <Container>
        <LogoWrapper />
        {isDesktopOrLaptop && hamburgerActive ? <Navbar /> : <AddressButton />}
        {isTablet && hamburgerActive && <NavbarTablet />}
        <Hamburger
          clickHandler={clickHandler}
          hamburgerActive={hamburgerActive}
        />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;

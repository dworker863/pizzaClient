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

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    sethamburgerActive(!hamburgerActive);
  };

  return (
    <StyledTopLine>
      <Container>
        <LogoWrapper />
        {isDesktopOrLaptop && hamburgerActive ? <Navbar /> : <AddressButton />}
        {isTabletOrMobile && hamburgerActive && <NavbarMobile />}
        <Hamburger
          clickHandler={clickHandler}
          hamburgerActive={hamburgerActive}
        />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;

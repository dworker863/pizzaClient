import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AddressButton from '../Buttons/AddressButton';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger';
import NavbarMobile from '../Navbar/NavbarMobile';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    sethamburgerActive(!hamburgerActive);
  };

  return (
    <StyledTopLine>
      <Container>
        <LogoWrapper />
        {hamburgerActive ? <NavbarMobile /> : <AddressButton />}
        <Hamburger
          clickHandler={clickHandler}
          hamburgerActive={hamburgerActive}
        />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;

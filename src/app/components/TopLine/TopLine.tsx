import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AddressButton from '../Buttons/AddressButton';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger';
import Navbar from '../Navbar/Navbar';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);
  // const categories = [
  //   'ПИЦЦА',
  //   'CЕТЫ',
  //   'ЗАКУСКИ',
  //   'САЛАТЫ',
  //   'ДЕСЕРТЫ',
  //   'НАПИТКИ',
  //   'ГОРЯЧЕЕ',
  //   'СОУСЫ',
  // ];

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    sethamburgerActive(!hamburgerActive);
  };

  return (
    <StyledTopLine>
      <Container>
        <LogoWrapper />
        {hamburgerActive ? <Navbar /> : <AddressButton />}
        <Hamburger
          clickHandler={clickHandler}
          hamburgerActive={hamburgerActive}
        />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;

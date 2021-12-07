import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Button/Button';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
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

  return (
    <StyledTopLine>
      <Container>
        <LogoWrapper />
        <Button text="Укажите свой адрес" location={true} />
        <Hamburger />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;

import { FC } from 'react';
import { categories } from '../../../utils/staticData';
import Container from '../../Blocks/Container/Container';
import TopLine from '../../Blocks/TopLine/TopLine';
import Menu from '../../Elements/Menu/Menu';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <TopLine />
      <Container>
        <Menu items={categories} around />
      </Container>
    </StyledHeader>
  );
};

export default Header;

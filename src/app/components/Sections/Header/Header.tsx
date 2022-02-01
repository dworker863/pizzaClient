import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import TopLine from '../../Blocks/TopLine/TopLine';
import Menu from '../../Blocks/Navbar/Navbar';
import { IHeader } from './IHeader';
import { StyledHeader } from './StyledHeader';

const Header: FC<IHeader> = ({ categories }) => {
  return (
    <StyledHeader>
      <TopLine />
      <Container>
        <Menu items={categories} />
      </Container>
    </StyledHeader>
  );
};

export default Header;

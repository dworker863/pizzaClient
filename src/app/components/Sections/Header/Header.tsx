import { FC } from 'react';
import CategoryMenu from '../../Blocks/CateroryMenu/CategoryMenu';
import Container from '../../Blocks/Container/Container';
import TopLine from '../../Blocks/TopLine/TopLine';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <TopLine />
      <Container>
        <CategoryMenu />
      </Container>
    </StyledHeader>
  );
};

export default Header;

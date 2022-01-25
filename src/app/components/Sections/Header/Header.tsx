import { FC } from 'react';
import TopLine from '../../Blocks/TopLine/TopLine';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <TopLine />
    </StyledHeader>
  );
};

export default Header;

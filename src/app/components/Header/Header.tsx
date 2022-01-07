import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TopLine from '../TopLine/TopLine';

const StyledHeader = styled.header`
  ${tw`
    pb-20
  `}
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <TopLine />
    </StyledHeader>
  );
};

export default Header;

import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';
import MenuItem from './MenuItem';

const StyledNavbar = styled.nav`
  ${tw`
    cursor-pointer
    ml-auto
    mr-5
    mt-2
  `}
`;

const StyledMenu = styled.ul`
  ${tw`
    inline-block
    list-none
  `}
`;

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <StyledMenu>
        <MenuItem />
      </StyledMenu>
      <Button text="ВХОД" inverse={true} />
    </StyledNavbar>
  );
};

export default Navbar;

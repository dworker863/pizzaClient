import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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
    list-none
  `}
`;

const StyledItem = styled.li`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  letter-spacing: 0.08rem;
  color: #70544f;

  ${tw`
    inline-block
    font-semibold
    ml-4
    hover:text-green-600
  `}
`;

const Navbar: FC = () => {
  const items = ['Меню', 'Контакты'];

  return (
    <StyledNavbar>
      <StyledMenu>
        {items.map((item) => (
          <StyledItem>{item}</StyledItem>
        ))}
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;

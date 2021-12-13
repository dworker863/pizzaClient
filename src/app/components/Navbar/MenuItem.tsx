import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledMenu = styled.ul`
  ${tw`
    inline-block
  `}
`;

const StyledItem = styled.li`
  ${tw`
    inline-block
    font-semibold
    ml-4
    hover:text-green-600
    `}

  font-family: Montserrat, sans-serif;
  font-size: 14px;
  letter-spacing: 0.08rem;
  color: #70544f;
`;

const MenuItem: FC = () => {
  const items = ['Меню', 'Контакты'];

  return (
    <StyledMenu>
      {items.map((item) => (
        <StyledItem>{item}</StyledItem>
      ))}
    </StyledMenu>
  );
};

export default MenuItem;

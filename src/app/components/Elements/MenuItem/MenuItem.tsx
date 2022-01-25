import { FC } from 'react';
import { StyledItem, StyledMenu } from './StyledMenuItem';

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

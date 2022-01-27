import { FC, MouseEvent, useState } from 'react';
import { StyledToggleButton } from '../../Elements/ToggleButton/StyledToggleButton';
import {
  StyledCart,
  StyledCartCircle,
  StyledCartLine,
  StyledCartTitle,
  StyledCartToggler,
  StyledCartTopLine,
} from './StyledCart';

const Cart: FC = () => {
  const [isActive, setIsActive] = useState(true);

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsActive(!isActive);
  };

  return (
    <StyledCart>
      <StyledCartLine></StyledCartLine>
      <StyledCartCircle></StyledCartCircle>
      <StyledCartTopLine>
        <StyledCartToggler onClick={clickHandler}>
          <StyledCartTitle>Cart</StyledCartTitle>
          <StyledToggleButton isActive={isActive} />
        </StyledCartToggler>
      </StyledCartTopLine>
    </StyledCart>
  );
};

export default Cart;

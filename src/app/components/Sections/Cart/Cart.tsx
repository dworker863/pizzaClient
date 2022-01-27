import { FC, MouseEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StyledToggleButton } from '../../Elements/ToggleButton/StyledToggleButton';
import {
  StyledCart,
  StyledCartCircle,
  StyledCartIcon,
  StyledCartLine,
  StyledCartTContent,
  StyledCartTitle,
  StyledCartToggler,
  StyledCartTopLine,
} from './StyledCart';

const Cart: FC = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleCartclickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsActive(!isActive);
  };

  return (
    <StyledCart>
      <StyledCartLine></StyledCartLine>
      <StyledCartCircle>
        <StyledCartIcon>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="absolute top-6 left-9"
          />
        </StyledCartIcon>
      </StyledCartCircle>
      <StyledCartTopLine>
        <StyledCartToggler onClick={toggleCartclickHandler}>
          <StyledCartTitle>Cart</StyledCartTitle>
          <StyledToggleButton isActive={isActive} />
        </StyledCartToggler>
      </StyledCartTopLine>
      <StyledCartTContent isActive={isActive}>
        Корзина пуста. Выберите пиццу из меню
      </StyledCartTContent>
    </StyledCart>
  );
};

export default Cart;

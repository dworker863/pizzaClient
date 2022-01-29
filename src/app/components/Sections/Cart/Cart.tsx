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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CartItem from '../../Elements/CartItem/CartItem';
import { setCart } from '../../../redux/reducers/cartReducer/cartReducer';

const Cart: FC = () => {
  const [isActive, setIsActive] = useState(true);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const toggleCartclickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsActive(!isActive);
  };

  const setActiveElementclickHandler = (name: string): void => {
    dispatch(
      setCart({
        ...cart,
        goods: cart.goods.filter((good) => good.name !== name),
      }),
    );
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
        {cart.goods.length ? (
          cart.goods.map((good) => (
            <CartItem
              name={good.name}
              price={good.price}
              image={good.image}
              clickHandler={() => setActiveElementclickHandler(good.name)}
            />
          ))
        ) : (
          <p>Корзина пуста. Выберите пиццу из меню</p>
        )}
      </StyledCartTContent>
    </StyledCart>
  );
};

export default Cart;

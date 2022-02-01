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
import {
  setCartGoods,
  setCartTotalPrice,
} from '../../../redux/reducers/cartReducer/cartReducer';

const Cart: FC = () => {
  const [isActive, setIsActive] = useState(true);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const toggleCartclickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    setIsActive(!isActive);
  };

  const closeButtonClickHandler = (name: string, price: number): void => {
    const good = cart.goods.filter((good) => good.name === name)[0];

    dispatch(
      setCartGoods([...cart.goods.filter((good) => good.name !== name)]),
    );
    dispatch(setCartTotalPrice(cart.totalPrice - good.goodsCount * price));
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
          cart.goods.map((good, index) => (
            <CartItem
              key={good && index + good.name}
              good={good}
              totalPrice={cart.totalPrice}
              closeButtonClickHandler={closeButtonClickHandler}
            />
          ))
        ) : (
          <p>Корзина пуста. Выберите пиццу из меню</p>
        )}
        {cart.goods.length ? `Сумма заказа: ${cart.totalPrice}` : null}
      </StyledCartTContent>
    </StyledCart>
  );
};

export default Cart;

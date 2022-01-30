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

  const toggleCartclickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsActive(!isActive);
  };

  const setActiveElementclickHandler = (name: string): void => {
    if (cart.goods) {
      dispatch(
        setCartGoods([...cart.goods.filter((good) => good.name !== name)]),
      );
    }
  };

  const setTotalPriceClickHandler = (price: number) => {
    if (cart && cart.totalPrice !== undefined) {
      console.log(cart.totalPrice);
      dispatch(setCartTotalPrice(cart.totalPrice + price));
    }
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
        {cart.goods && cart.goods.length ? (
          cart.goods.map((good, index) => (
            <CartItem
              key={good && index + good.name}
              name={good.name}
              price={good.price}
              image={good.image}
              closeButtonClickHandler={() =>
                setActiveElementclickHandler(good.name)
              }
              countButtonClickHandler={setTotalPriceClickHandler}
            />
          ))
        ) : (
          <p>Корзина пуста. Выберите пиццу из меню</p>
        )}
        {cart.goods && cart.goods.length
          ? `Сумма заказа: ${cart.totalPrice}`
          : null}
      </StyledCartTContent>
    </StyledCart>
  );
};

export default Cart;

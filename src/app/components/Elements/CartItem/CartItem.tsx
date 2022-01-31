import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCartGoodsCount,
  setCartTotalPrice,
} from '../../../redux/reducers/cartReducer/cartReducer';
import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import { ICartItemProps } from './ICartItem';
import {
  StyledCartCloseButtonWrapper,
  StyledCartItem,
  StyledCartItemWrapper,
  StyledItemsCount,
  StyledItemsPrice,
  StyledItemTitle,
  StyledPriceWrapper,
} from './StyledCartItem';

const CartItem: FC<ICartItemProps> = ({
  good,
  totalPrice,
  closeButtonClickHandler,
}) => {
  const dispatch = useDispatch();
  const goodPrice = +(good.price[0] + good.price.slice(2, -1));

  const incrementButtonClickHandler = () => {
    dispatch(setCartGoodsCount(good, good.goodsCount + 1));
    dispatch(setCartTotalPrice(totalPrice + goodPrice));
  };

  const decrementButtonClickHandler = () => {
    dispatch(setCartGoodsCount(good, good.goodsCount - 1));
    dispatch(setCartTotalPrice(totalPrice - goodPrice));
  };

  return (
    <StyledCartItemWrapper>
      <StyledCartItem>
        <img
          src={good.image}
          alt={good.name}
          width={50}
          style={{ display: 'inline-block' }}
        />
        <StyledItemTitle>{good.name}</StyledItemTitle>
        <StyledCartCloseButtonWrapper>
          <CloseButton
            clickHandler={() => closeButtonClickHandler(good.name, goodPrice)}
          />
        </StyledCartCloseButtonWrapper>
      </StyledCartItem>
      <StyledPriceWrapper>
        <Button text="-" clickHandler={decrementButtonClickHandler} circle />
        <StyledItemsCount>{good.goodsCount}</StyledItemsCount>
        <Button text="+" clickHandler={incrementButtonClickHandler} circle />
        <StyledItemsPrice>
          {goodPrice * good.goodsCount +
            ' ' +
            good.price[good.price.length - 1]}
        </StyledItemsPrice>
      </StyledPriceWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;

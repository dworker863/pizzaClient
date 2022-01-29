import { FC, useState } from 'react';
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

const CartItem: FC<ICartItemProps> = ({ name, price, image, clickHandler }) => {
  const [itemsCount, setItemsCount] = useState(1);

  const priceAmount = +(price[0] + price.slice(2, -1));

  const decrementCountClickHandler = (): void => {
    setItemsCount(itemsCount - 1);
  };

  const incrementCountClickHandler = (): void => {
    setItemsCount(itemsCount + 1);
  };

  return (
    <StyledCartItemWrapper>
      <StyledCartItem>
        <img
          src={image}
          alt={name}
          width={50}
          style={{ display: 'inline-block' }}
        />
        <StyledItemTitle>{name}</StyledItemTitle>
        <StyledCartCloseButtonWrapper>
          <CloseButton clickHandler={clickHandler} />
        </StyledCartCloseButtonWrapper>
      </StyledCartItem>
      <StyledPriceWrapper>
        <Button text="-" clickHandler={decrementCountClickHandler} circle />
        <StyledItemsCount>{itemsCount}</StyledItemsCount>
        <Button text="+" clickHandler={incrementCountClickHandler} circle />
        <StyledItemsPrice>{itemsCount * priceAmount}</StyledItemsPrice>
      </StyledPriceWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;

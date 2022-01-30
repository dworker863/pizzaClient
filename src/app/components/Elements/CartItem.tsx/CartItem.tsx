import { FC } from 'react';
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
  name,
  price,
  image,
  itemsCount,
  closeButtonClickHandler,
  countButtonClickHandler,
}) => {
  const priceAmount = +(price[0] + price.slice(2, -1));

  const decrementCountClickHandler = (): void => {
    countButtonClickHandler(-priceAmount);
  };

  const incrementCountClickHandler = (): void => {
    countButtonClickHandler(priceAmount);
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
          <CloseButton
            clickHandler={() =>
              closeButtonClickHandler(name, priceAmount * itemsCount)
            }
          />
        </StyledCartCloseButtonWrapper>
      </StyledCartItem>
      <StyledPriceWrapper>
        <Button text="-" clickHandler={decrementCountClickHandler} circle />
        <StyledItemsCount>{itemsCount}</StyledItemsCount>
        <Button text="+" clickHandler={incrementCountClickHandler} circle />
        <StyledItemsPrice>
          {priceAmount * itemsCount + ' ' + price[price.length - 1]}
        </StyledItemsPrice>
      </StyledPriceWrapper>
    </StyledCartItemWrapper>
  );
};

export default CartItem;

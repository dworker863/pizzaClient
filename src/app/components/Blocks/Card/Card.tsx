import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../../redux/reducers/cartReducer/cartReducer';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import SelectSizeButton from '../../Elements/SelectSizeButton/SelectSizeButton';
import { ICardProps } from './ICard';
import {
  StyledCard,
  StyledOrderWrapper,
  StyledDescription,
  StyledOrder,
  StyledPrice,
  StyledTitle,
} from './StyledCard';

const Card: FC<ICardProps> = ({
  anchorAlt,
  title,
  description,
  sizes,
  prices,
  image,
}) => {
  const [activeElement, setActiveElement] = useState(0);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const setActiveElementclickHandler = (index: number): void => {
    setActiveElement(index);
  };

  const addGoodToCartClickHandler = () => {
    dispatch(
      setCart({
        ...cart,
        goods: [
          ...cart.goods,
          { name: title, price: prices[activeElement], image },
        ],
      }),
    );
  };

  return (
    <StyledCard>
      <img src={image} alt={anchorAlt} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledOrderWrapper>
        {sizes && (
          <SelectSizeButton
            id={activeElement}
            sizes={sizes}
            clickHandler={setActiveElementclickHandler}
          />
        )}
        <StyledOrder>
          <Button text="В Корзину" clickHandler={addGoodToCartClickHandler} />
          <StyledPrice>{prices[activeElement]}</StyledPrice>
        </StyledOrder>
      </StyledOrderWrapper>
    </StyledCard>
  );
};

export default Card;

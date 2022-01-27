import { FC, useState } from 'react';
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

  const clickHandler = (index: number): void => {
    setActiveElement(index);
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
            clickHandler={clickHandler}
          />
        )}
        <StyledOrder>
          <Button text="В Корзину" />
          <StyledPrice>{prices[activeElement]}</StyledPrice>
        </StyledOrder>
      </StyledOrderWrapper>
    </StyledCard>
  );
};

export default Card;

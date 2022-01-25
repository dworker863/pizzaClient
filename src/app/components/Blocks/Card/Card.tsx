import { FC, useState } from 'react';
import Button from '../../Elements/Button/Button';
import SelectSizeButton from '../../Elements/SelectSizeButton/SelectSizeButton';
import { ICardProps } from './ICard';
import {
  StyledCard,
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
}) => {
  const [activeElement, setActiveElement] = useState(0);

  const clickHandler = (index: number): void => {
    setActiveElement(index);
  };

  return (
    <StyledCard>
      <img src="" alt={anchorAlt} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {sizes && (
        <SelectSizeButton id={activeElement} clickHandler={clickHandler} />
      )}
      <StyledOrder>
        <Button text="В Корзину" />
        <StyledPrice>{prices[activeElement]}</StyledPrice>
      </StyledOrder>
    </StyledCard>
  );
};

export default Card;

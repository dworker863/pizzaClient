import { FC } from 'react';
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
  type,
  size,
  price,
}) => {
  return (
    <StyledCard>
      <img src="" alt={anchorAlt} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {type && <SelectSizeButton />}
      {size && <SelectSizeButton />}
      <StyledOrder>
        <Button text="В Корзину" />
        <StyledPrice>{price}</StyledPrice>
      </StyledOrder>
    </StyledCard>
  );
};

export default Card;

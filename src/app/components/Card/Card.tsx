import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICardProps } from '../../interfaces/card';
import Button from '../Buttons/Button/Button';
import SelectType from '../Buttons/SelectTypeButton/SelectTypeButton';

const StyledCard = styled.div`
  ${tw`
    bg-white
    ml-5
    rounded-xl
    p-4
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.lightBrown};
`;

const StyledTitle = styled.h3`
  ${tw`
    font-bold
    text-lg
    mb-2
  `}

  color: ${(props) => props.theme.colors.brown};
  letter-spacing: 0.04px;
`;

const StyledDescription = styled.p`
  ${tw`
    text-sm
    mb-10
  `}
`;

const StyledOrder = styled.div`
  ${tw`
    flex
    justify-between
  `}
`;

const StyledPrice = styled.span`
  ${tw`
  `}

  line-height: 40px;
`;

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
      {type && <SelectType />}
      {size && <SelectType />}
      <StyledOrder>
        <Button text="В Корзину" />
        <StyledPrice>{price}</StyledPrice>
      </StyledOrder>
    </StyledCard>
  );
};

export default Card;

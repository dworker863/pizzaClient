import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';

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
    mb-20
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

interface ICardProps {
  anchorAlt: string;
  title: string;
  description: string;
  type?: string;
  size?: string[];
  price: string;
}

const Card: FC<ICardProps> = ({ anchorAlt, title, description, price }) => {
  return (
    <StyledCard>
      <img src="" alt={anchorAlt} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledOrder>
        <Button text="В Корзину" />
        <StyledPrice>{price}</StyledPrice>
      </StyledOrder>
    </StyledCard>
  );
};

export default Card;

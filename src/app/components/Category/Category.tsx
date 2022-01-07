import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import { RootState } from '../../store';
import Card from '../common/Card';
import Container from '../Container/Container';

const StyledCategory = styled.h2`
  ${tw`
    min-w-full
    pb-10
    text-2xl
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.brown};
`;

const StyledPizzasWrapper = styled.div`
  ${tw`
    flex
  `}
`;

interface ICategoryProps {
  title: string;
}

const Category: FC<ICategoryProps> = ({ title }) => {
  const pizzas = useSelector((state: RootState) => state.pizzas);

  return (
    <div>
      <Container>
        <StyledCategory>{title}</StyledCategory>
        <StyledPizzasWrapper>
          {pizzas.pizzas.map((pizza) => (
            <Card
              anchorAlt={`Пицца ${pizza.name}`}
              title={pizza.name}
              description={pizza.description}
              type={pizza.type}
              size={pizza.size}
              price={pizza.price}
            />
          ))}
        </StyledPizzasWrapper>
      </Container>
    </div>
  );
};

export default Category;

import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICategoryProps } from '../../interfaces/category';
import { RootState } from '../../redux/store';
import Card from '../common/Card';
import Container from '../Container/Container';

const StyledCategoryWrapper = styled.div`
  ${tw`
    mb-24
  `}
`;

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

const Category: FC<ICategoryProps> = ({ title }) => {
  const pizzas = useSelector((state: RootState) => state.pizzas);

  return (
    <StyledCategoryWrapper>
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
    </StyledCategoryWrapper>
  );
};

export default Category;

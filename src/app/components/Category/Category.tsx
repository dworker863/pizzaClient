import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
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

interface IPizza {
  name: string;
  description: string;
  type: 'Традиционное' | 'Тонкое';
  size: string[];
  price: string;
}

const Category: FC<ICategoryProps> = ({ title }) => {
  const Pizzas: IPizza[] = [
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
  ];

  return (
    <div>
      <Container>
        <StyledCategory>{title}</StyledCategory>
        <StyledPizzasWrapper>
          {Pizzas.map((pizza) => (
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

import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICategoryProps } from '../../interfaces/categoryComponent';
import { getGoods } from '../../redux/reducers/goodsReducer/goods';
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

const StyledGoodsWrapper = styled.div`
  ${tw`
    flex
  `}
`;

const Category: FC<ICategoryProps> = ({ title, name }) => {
  const goods = useSelector((state: RootState) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <StyledCategoryWrapper>
      <Container>
        <StyledCategory>{title}</StyledCategory>
        <StyledGoodsWrapper>
          {goods[name as keyof typeof goods] &&
            goods[name as keyof typeof goods].map((good) => (
              <Card
                anchorAlt={`${title} ${good.name}`}
                title={good.name}
                description={good.description}
                price={good.price}
              />
            ))}
        </StyledGoodsWrapper>
      </Container>
    </StyledCategoryWrapper>
  );
};

export default Category;

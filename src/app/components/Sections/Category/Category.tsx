import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../../redux/reducers/goodsReducer/goodsReducer';
import { RootState } from '../../../redux/store';
import Card from '../../Blocks/Card/Card';
import Container from '../../Blocks/Container/Container';
import { ICategory } from './ICategory';
import {
  StyledCategory,
  StyledCategoryWrapper,
  StyledGoodsWrapper,
} from './StyledCategory';

const Category: FC<ICategory> = ({ title, name }) => {
  const goods = useSelector((state: RootState) => state.goods);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGoods());
  // }, [dispatch]);

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
                sizes={good.sizes ? good.sizes : undefined}
                description={good.description ? good.description : undefined}
                prices={good.prices}
              />
            ))}
        </StyledGoodsWrapper>
      </Container>
    </StyledCategoryWrapper>
  );
};

export default Category;

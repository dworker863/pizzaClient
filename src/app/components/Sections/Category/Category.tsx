import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../../redux/reducers/goodsReducer/goodsReducer';
import { RootState } from '../../../redux/store';
import Card from '../../Blocks/Card/Card';
import { ICategory } from './ICategory';
import {
  StyledCategory,
  StyledCategoryWrapper,
  StyledGoodsWrapper,
} from './StyledCategory';

const Category: FC<ICategory> = ({ title, name }) => {
  const goods = useSelector((state: RootState) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <StyledCategoryWrapper>
      <StyledCategory>{title}</StyledCategory>
      <StyledGoodsWrapper>
        {goods[name as keyof typeof goods].map((good, index) => (
          <Card
            key={index + good.name}
            anchorAlt={`${title} ${good.name}`}
            title={good.name}
            sizes={good.sizes ? good.sizes : undefined}
            description={good.description ? good.description : undefined}
            prices={good.prices}
            image={good.image}
          />
        ))}
      </StyledGoodsWrapper>
    </StyledCategoryWrapper>
  );
};

export default Category;
